import { useState, useCallback, useMemo } from "react"

const STORAGE_KEY = "interview-prep"

// ─── Migration helpers ───────────────────────────────────────────

function migrateV1toV2(data) {
  // v1: { apiKey, status, job, interviews } → v2: { apiKey, activeJobId, jobs: {} }
  if (data.jobs !== undefined) return data
  // Already v3 — skip v1→v2 migration
  if (data.roles !== undefined) return data
  const migrated = {
    apiKey: data.apiKey || "",
    activeJobId: null,
    jobs: {},
  }
  if (data.job) {
    const id = Date.now()
    migrated.jobs[id] = {
      id,
      job: data.job,
      interviews: data.interviews || [],
      createdAt: id,
      appStatus: "active",
      notes: "",
      prepChecklist: {},
      interviewerNotes: {},
      starDrafts: {},
    }
  }
  return migrated
}

function migrateV2toV3(data) {
  // v2: { apiKey, activeJobId, jobs: { [id]: JobEntry } }
  // v3: { apiKey, activeRoleId, profile, companies: {}, roles: {}, interviews: {} }
  if (data.roles !== undefined) return data

  const migrated = {
    apiKey: data.apiKey || "",
    activeRoleId: null,
    profile: null,
    companies: {},
    roles: {},
    interviews: {},
  }

  for (const [jobId, entry] of Object.entries(data.jobs || {})) {
    const j = entry.job || {}
    const companyName = j.company || "Unknown"

    // Find or create company
    let companyId = Object.keys(migrated.companies).find(
      (cid) => migrated.companies[cid].name === companyName
    )
    if (!companyId) {
      companyId = `c_${jobId}`
      migrated.companies[companyId] = {
        id: companyId,
        name: companyName,
        companyProfile: j.companyProfile || null,
      }
    }

    // Create role
    const roleId = `r_${jobId}`
    migrated.roles[roleId] = {
      id: roleId,
      companyId,
      roleTitle: j.roleTitle || "",
      jobDescriptionRaw: j.jobDescriptionRaw || "",
      resumeRaw: j.resumeRaw || "",
      requirements: j.requirements || [],
      responsibilities: j.responsibilities || [],
      gapAnalysis: j.gapAnalysis || { strongMatch: [], partialMatch: [], gap: [] },
      prepFocus: j.prepFocus || [],
      commonQuestions: j.commonQuestions || [],
      cultureValues: j.cultureValues || [],
      learningGuide: j.learningGuide || [],
      createdAt: entry.createdAt || parseInt(jobId),
      appStatus: entry.appStatus || "active",
      notes: entry.notes || "",
      prepChecklist: entry.prepChecklist || {},
      starDrafts: entry.starDrafts || {},
    }

    // Migrate interviews
    for (const iv of entry.interviews || []) {
      const ivId = `iv_${iv.id}`
      migrated.interviews[ivId] = {
        id: ivId,
        roleId,
        interviewerName: iv.interviewerName || "",
        interviewerRole: iv.interviewerRole || "",
        scheduledAt: iv.scheduledAt || null,
        transcriptRaw: iv.transcriptRaw || "",
        status: iv.status || "pending",
        analysis: iv.analysis || null,
        interviewerNotes: (entry.interviewerNotes || {})[iv.id] || "",
      }
    }

    // If this was the active job, make it the active role
    if (String(data.activeJobId) === String(jobId)) {
      migrated.activeRoleId = roleId
    }
  }

  return migrated
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return null
    let parsed = JSON.parse(saved)
    parsed = migrateV1toV2(parsed)
    parsed = migrateV2toV3(parsed)
    return parsed
  } catch {
    return null
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage unavailable or quota exceeded; in-memory state still works
  }
}

const initialState = {
  apiKey: "",
  activeRoleId: null,
  profile: null,
  companies: {},
  roles: {},
  interviews: {},
}

// ─── Helper: get interviews for a role, sorted by creation order ─

export function getInterviewsForRole(store, roleId) {
  if (!roleId) return []
  return Object.values(store.interviews)
    .filter((iv) => iv.roleId === roleId)
    .sort((a, b) => {
      // Sort by id string to preserve creation order
      const numA = parseInt(a.id.replace(/\D/g, "")) || 0
      const numB = parseInt(b.id.replace(/\D/g, "")) || 0
      return numA - numB
    })
}

// ─── Hook ────────────────────────────────────────────────────────

export function useJobStore() {
  const [store, setStore] = useState(() => loadState() || initialState)

  const update = useCallback((updater) => {
    setStore((prev) => {
      const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater }
      saveState(next)
      return next
    })
  }, [])

  // ─── API Key ─────────────────────────────────

  const setApiKey = useCallback((apiKey) => update({ apiKey }), [update])

  // ─── Profile ─────────────────────────────────

  const updateProfile = useCallback((profileData) => {
    update((prev) => ({
      ...prev,
      profile: { ...(prev.profile || {}), ...profileData },
    }))
  }, [update])

  const addStory = useCallback((story) => {
    update((prev) => {
      const id = `story_${Date.now()}`
      const stories = [...((prev.profile?.storyBank) || []), { id, ...story }]
      return {
        ...prev,
        profile: { ...(prev.profile || {}), storyBank: stories },
      }
    })
  }, [update])

  const updateStory = useCallback((storyId, updates) => {
    update((prev) => {
      const stories = ((prev.profile?.storyBank) || []).map((s) =>
        s.id === storyId ? { ...s, ...updates } : s
      )
      return {
        ...prev,
        profile: { ...(prev.profile || {}), storyBank: stories },
      }
    })
  }, [update])

  const deleteStory = useCallback((storyId) => {
    update((prev) => {
      const stories = ((prev.profile?.storyBank) || []).filter((s) => s.id !== storyId)
      return {
        ...prev,
        profile: { ...(prev.profile || {}), storyBank: stories },
      }
    })
  }, [update])

  // ─── Roles (formerly Jobs) ───────────────────

  const createRole = useCallback((roleData, companyData) => {
    update((prev) => {
      const roleId = `r_${Date.now()}`
      const companyName = companyData?.name || roleData.company || "Unknown"

      // Find existing company or create new one
      let companyId = Object.keys(prev.companies).find(
        (cid) => prev.companies[cid].name === companyName
      )
      let newCompanies = { ...prev.companies }
      if (!companyId) {
        companyId = `c_${Date.now()}`
        newCompanies[companyId] = {
          id: companyId,
          name: companyName,
          companyProfile: companyData?.companyProfile || roleData.companyProfile || null,
        }
      }

      return {
        ...prev,
        activeRoleId: roleId,
        companies: newCompanies,
        roles: {
          ...prev.roles,
          [roleId]: {
            id: roleId,
            companyId,
            roleTitle: roleData.roleTitle || "",
            jobDescriptionRaw: roleData.jobDescriptionRaw || "",
            resumeRaw: roleData.resumeRaw || "",
            requirements: roleData.requirements || [],
            responsibilities: roleData.responsibilities || [],
            gapAnalysis: roleData.gapAnalysis || { strongMatch: [], partialMatch: [], gap: [] },
            prepFocus: roleData.prepFocus || [],
            commonQuestions: roleData.commonQuestions || [],
            cultureValues: roleData.cultureValues || [],
            learningGuide: roleData.learningGuide || [],
            createdAt: Date.now(),
            appStatus: "active",
            notes: "",
            prepChecklist: {},
            starDrafts: {},
          },
        },
      }
    })
  }, [update])

  const importData = useCallback((data) => {
    update(() => {
      // Accept either v3 format or v2 format (will migrate)
      if (data.roles !== undefined) {
        return {
          apiKey: data.apiKey || "",
          activeRoleId: null,
          profile: data.profile || null,
          companies: data.companies || {},
          roles: data.roles || {},
          interviews: data.interviews || {},
        }
      }
      // v2 format — migrate
      const migrated = migrateV2toV3({
        apiKey: data.apiKey || "",
        activeJobId: null,
        jobs: data.jobs || {},
      })
      return { ...migrated, activeRoleId: null }
    })
  }, [update])

  const selectRole = useCallback((roleId) => {
    update((prev) => ({ ...prev, activeRoleId: roleId }))
  }, [update])

  const exitRole = useCallback(() => {
    update((prev) => ({ ...prev, activeRoleId: null }))
  }, [update])

  const deleteRole = useCallback((roleId) => {
    update((prev) => {
      const { [roleId]: _, ...remainingRoles } = prev.roles
      // Remove associated interviews
      const remainingInterviews = {}
      for (const [ivId, iv] of Object.entries(prev.interviews)) {
        if (iv.roleId !== roleId) remainingInterviews[ivId] = iv
      }
      // Remove orphaned companies (no roles pointing to them)
      const usedCompanyIds = new Set(Object.values(remainingRoles).map((r) => r.companyId))
      const remainingCompanies = {}
      for (const [cid, c] of Object.entries(prev.companies)) {
        if (usedCompanyIds.has(cid)) remainingCompanies[cid] = c
      }
      return {
        ...prev,
        roles: remainingRoles,
        interviews: remainingInterviews,
        companies: remainingCompanies,
        activeRoleId: prev.activeRoleId === roleId ? null : prev.activeRoleId,
      }
    })
  }, [update])

  const setRoleAppStatus = useCallback((roleId, appStatus) => {
    update((prev) => ({
      ...prev,
      roles: {
        ...prev.roles,
        [roleId]: { ...prev.roles[roleId], appStatus },
      },
    }))
  }, [update])

  const setRoleNotes = useCallback((notes) => {
    update((prev) => {
      const id = prev.activeRoleId
      return {
        ...prev,
        roles: { ...prev.roles, [id]: { ...prev.roles[id], notes } },
      }
    })
  }, [update])

  // ─── Prep items ──────────────────────────────

  const togglePrepItem = useCallback((index) => {
    update((prev) => {
      const id = prev.activeRoleId
      const role = prev.roles[id]
      return {
        ...prev,
        roles: {
          ...prev.roles,
          [id]: {
            ...role,
            prepChecklist: {
              ...(role.prepChecklist || {}),
              [index]: !(role.prepChecklist || {})[index],
            },
          },
        },
      }
    })
  }, [update])

  // ─── STAR drafts ─────────────────────────────

  const setStarDraft = useCallback((questionIndex, field, value) => {
    update((prev) => {
      const id = prev.activeRoleId
      const role = prev.roles[id]
      return {
        ...prev,
        roles: {
          ...prev.roles,
          [id]: {
            ...role,
            starDrafts: {
              ...(role.starDrafts || {}),
              [questionIndex]: { ...(role.starDrafts?.[questionIndex] || {}), [field]: value },
            },
          },
        },
      }
    })
  }, [update])

  // ─── Demo drafts ────────────────────────────

  const setDemoDraft = useCallback((sectionKey, value) => {
    update((prev) => {
      const id = prev.activeRoleId
      const role = prev.roles[id]
      return {
        ...prev,
        roles: {
          ...prev.roles,
          [id]: {
            ...role,
            demoDrafts: { ...(role.demoDrafts || {}), [sectionKey]: value },
          },
        },
      }
    })
  }, [update])

  // ─── Interviews ──────────────────────────────

  const addInterview = useCallback((interviewerName, interviewerRole, scheduledAt = null) => {
    update((prev) => {
      const roleId = prev.activeRoleId
      const ivId = `iv_${Date.now()}`
      return {
        ...prev,
        interviews: {
          ...prev.interviews,
          [ivId]: {
            id: ivId,
            roleId,
            interviewerName,
            interviewerRole,
            scheduledAt,
            transcriptRaw: "",
            status: "pending",
            analysis: null,
            interviewerNotes: "",
          },
        },
      }
    })
  }, [update])

  const setTranscript = useCallback((interviewId, transcriptRaw) => {
    update((prev) => ({
      ...prev,
      interviews: {
        ...prev.interviews,
        [interviewId]: { ...prev.interviews[interviewId], transcriptRaw },
      },
    }))
  }, [update])

  const setInterviewStatus = useCallback((interviewId, status) => {
    update((prev) => ({
      ...prev,
      interviews: {
        ...prev.interviews,
        [interviewId]: { ...prev.interviews[interviewId], status },
      },
    }))
  }, [update])

  const setInterviewAnalysis = useCallback((interviewId, analysis) => {
    update((prev) => ({
      ...prev,
      interviews: {
        ...prev.interviews,
        [interviewId]: { ...prev.interviews[interviewId], status: "analyzed", analysis },
      },
    }))
  }, [update])

  const deleteInterview = useCallback((interviewId) => {
    update((prev) => {
      const { [interviewId]: _, ...remaining } = prev.interviews
      return { ...prev, interviews: remaining }
    })
  }, [update])

  const clearInterviewAnalysis = useCallback((interviewId) => {
    update((prev) => ({
      ...prev,
      interviews: {
        ...prev.interviews,
        [interviewId]: { ...prev.interviews[interviewId], status: "pending", analysis: null },
      },
    }))
  }, [update])

  const setInterviewerNote = useCallback((interviewId, note) => {
    update((prev) => ({
      ...prev,
      interviews: {
        ...prev.interviews,
        [interviewId]: { ...prev.interviews[interviewId], interviewerNotes: note },
      },
    }))
  }, [update])

  // ─── Reset (delete active role) ──────────────

  const reset = useCallback(() => {
    update((prev) => {
      const roleId = prev.activeRoleId
      if (!roleId) return { ...prev, activeRoleId: null }
      const { [roleId]: _, ...remainingRoles } = prev.roles
      const remainingInterviews = {}
      for (const [ivId, iv] of Object.entries(prev.interviews)) {
        if (iv.roleId !== roleId) remainingInterviews[ivId] = iv
      }
      const usedCompanyIds = new Set(Object.values(remainingRoles).map((r) => r.companyId))
      const remainingCompanies = {}
      for (const [cid, c] of Object.entries(prev.companies)) {
        if (usedCompanyIds.has(cid)) remainingCompanies[cid] = c
      }
      return {
        ...prev,
        activeRoleId: null,
        roles: remainingRoles,
        interviews: remainingInterviews,
        companies: remainingCompanies,
      }
    })
  }, [update])

  return {
    store,
    setApiKey,
    // Profile
    updateProfile,
    addStory,
    updateStory,
    deleteStory,
    // Roles
    createRole,
    importData,
    selectRole,
    exitRole,
    deleteRole,
    setRoleAppStatus,
    setRoleNotes,
    togglePrepItem,
    setStarDraft,
    setDemoDraft,
    // Interviews
    addInterview,
    setTranscript,
    setInterviewStatus,
    setInterviewAnalysis,
    deleteInterview,
    clearInterviewAnalysis,
    setInterviewerNote,
    // Reset
    reset,
  }
}
