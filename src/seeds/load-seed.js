// Writes seed data directly to localStorage in the v3 format useJobStore expects.
// Accepts normalized entities and builds foreign key linkages.

const STORAGE_KEY = "interview-prep"

export function loadSeed(profile, company, role, preAnalyzedInterviews = []) {
  const ts = Date.now()
  const companyId = `c_${ts}`
  const roleId = `r_${ts}`

  // Build company entity
  const companies = {
    [companyId]: {
      id: companyId,
      name: company.name,
      companyProfile: company.companyProfile || null,
    },
  }

  // Build role entity from seed data
  const roleEntity = {
    id: roleId,
    companyId,
    roleTitle: role.roleTitle || "",
    jobDescriptionRaw: role.jobDescriptionRaw || "",
    resumeRaw: role.resumeRaw || "",
    requirements: role.requirements || [],
    responsibilities: role.responsibilities || [],
    gapAnalysis: role.gapAnalysis || { strongMatch: [], partialMatch: [], gap: [] },
    prepFocus: role.prepFocus || [],
    commonQuestions: role.commonQuestions || [],
    cultureValues: role.cultureValues || [],
    learningGuide: role.learningGuide || [],
    demoPrep: role.demoPrep || null,
    createdAt: ts,
    appStatus: "active",
    notes: "",
    prepChecklist: {},
    starDrafts: {},
  }

  // Build interviews from seedInterviews + pre-analyzed interviews
  const interviews = {}

  // First: add seed interviews that don't have a matching pre-analyzed version
  const preAnalyzedNames = new Set(preAnalyzedInterviews.map((iv) => iv.interviewerName))
  const seedInterviews = role.seedInterviews || []

  seedInterviews.forEach((iv, i) => {
    // Check if there's a pre-analyzed interview for this interviewer
    const preAnalyzed = preAnalyzedInterviews.find(
      (pa) => pa.interviewerName === iv.interviewerName
    )

    const ivId = `iv_${ts + i + 1}`
    if (preAnalyzed) {
      // Use the pre-analyzed version
      interviews[ivId] = {
        id: ivId,
        roleId,
        interviewerName: preAnalyzed.interviewerName,
        interviewerRole: preAnalyzed.interviewerRole || iv.interviewerRole,
        scheduledAt: preAnalyzed.scheduledAt || iv.scheduledAt || null,
        transcriptRaw: preAnalyzed.transcriptRaw || "",
        status: preAnalyzed.status || "pending",
        analysis: preAnalyzed.analysis || null,
        interviewerNotes: preAnalyzed.interviewerNotes || "",
      }
    } else {
      // Use the seed interview (pending, no transcript)
      interviews[ivId] = {
        id: ivId,
        roleId,
        interviewerName: iv.interviewerName,
        interviewerRole: iv.interviewerRole,
        scheduledAt: iv.scheduledAt || null,
        transcriptRaw: "",
        status: "pending",
        analysis: null,
        interviewerNotes: iv.interviewerNotes || "",
        predictedQuestions: iv.predictedQuestions || [],
      }
    }
  })

  // Add any pre-analyzed interviews that weren't in the seed list
  preAnalyzedInterviews.forEach((pa, i) => {
    if (!seedInterviews.some((s) => s.interviewerName === pa.interviewerName)) {
      const ivId = `iv_${ts + seedInterviews.length + i + 1}`
      interviews[ivId] = {
        id: ivId,
        roleId,
        interviewerName: pa.interviewerName,
        interviewerRole: pa.interviewerRole || "",
        scheduledAt: pa.scheduledAt || null,
        transcriptRaw: pa.transcriptRaw || "",
        status: pa.status || "pending",
        analysis: pa.analysis || null,
        interviewerNotes: pa.interviewerNotes || "",
      }
    }
  })

  const state = {
    apiKey: "",
    activeRoleId: roleId,
    profile: profile || null,
    companies,
    roles: { [roleId]: roleEntity },
    interviews,
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // quota exceeded — still works in-memory on next load
  }
  return state
}
