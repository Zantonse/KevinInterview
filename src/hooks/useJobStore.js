import { useState, useCallback } from "react"

const STORAGE_KEY = "interview-prep"

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return null
    const parsed = JSON.parse(saved)
    // Migrate old single-job format: { apiKey, status, job, interviews }
    if (parsed.jobs === undefined) {
      const migrated = {
        apiKey: parsed.apiKey || "",
        activeJobId: null,
        jobs: {},
      }
      if (parsed.job) {
        const id = Date.now()
        migrated.jobs[id] = {
          id,
          job: parsed.job,
          interviews: parsed.interviews || [],
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
  activeJobId: null,
  jobs: {},
}

export function useJobStore() {
  const [store, setStore] = useState(() => loadState() || initialState)

  const update = useCallback((updater) => {
    setStore((prev) => {
      const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater }
      saveState(next)
      return next
    })
  }, [])

  // Helper: update a field on the active job
  const updateActiveJob = useCallback((updater) => {
    update((prev) => {
      const id = prev.activeJobId
      return {
        ...prev,
        jobs: {
          ...prev.jobs,
          [id]: updater(prev.jobs[id]),
        },
      }
    })
  }, [update])

  const setApiKey = useCallback((apiKey) => update({ apiKey }), [update])

  const createJob = useCallback((jobData) => {
    update((prev) => {
      const id = Date.now()
      return {
        ...prev,
        activeJobId: id,
        jobs: {
          ...prev.jobs,
          [id]: {
            id,
            job: jobData,
            interviews: [],
            createdAt: id,
            appStatus: "active",
            notes: "",
            prepChecklist: {},
            interviewerNotes: {},
            starDrafts: {},
          },
        },
      }
    })
  }, [update])

  const importData = useCallback((data) => {
    update(() => ({
      apiKey: data.apiKey || "",
      activeJobId: null,
      jobs: data.jobs || {},
    }))
  }, [update])

  const selectJob = useCallback((jobId) => {
    update((prev) => ({ ...prev, activeJobId: jobId }))
  }, [update])

  const exitJob = useCallback(() => {
    update((prev) => ({ ...prev, activeJobId: null }))
  }, [update])

  const deleteJob = useCallback((jobId) => {
    update((prev) => {
      const { [jobId]: _, ...remainingJobs } = prev.jobs
      return {
        ...prev,
        jobs: remainingJobs,
        activeJobId: prev.activeJobId === jobId ? null : prev.activeJobId,
      }
    })
  }, [update])

  // Per-job application status (active | offer | rejected | on-hold)
  const setJobAppStatus = useCallback((jobId, appStatus) => {
    update((prev) => ({
      ...prev,
      jobs: {
        ...prev.jobs,
        [jobId]: { ...prev.jobs[jobId], appStatus },
      },
    }))
  }, [update])

  // Free-form notes for the active job
  const setJobNotes = useCallback((notes) => {
    updateActiveJob((job) => ({ ...job, notes }))
  }, [updateActiveJob])

  // Prep focus checklist for the active job
  const togglePrepItem = useCallback((index) => {
    updateActiveJob((job) => ({
      ...job,
      prepChecklist: {
        ...(job.prepChecklist || {}),
        [index]: !(job.prepChecklist || {})[index],
      },
    }))
  }, [updateActiveJob])

  // Interviewer research notes for the active job
  const setInterviewerNote = useCallback((interviewId, note) => {
    updateActiveJob((job) => ({
      ...job,
      interviewerNotes: { ...(job.interviewerNotes || {}), [interviewId]: note },
    }))
  }, [updateActiveJob])

  // STAR answer drafts for the active job
  const setStarDraft = useCallback((questionIndex, field, value) => {
    updateActiveJob((job) => ({
      ...job,
      starDrafts: {
        ...(job.starDrafts || {}),
        [questionIndex]: { ...(job.starDrafts?.[questionIndex] || {}), [field]: value },
      },
    }))
  }, [updateActiveJob])

  const addInterview = useCallback((interviewerName, interviewerRole, scheduledAt = null) => {
    update((prev) => {
      const id = prev.activeJobId
      const activeJob = prev.jobs[id]
      return {
        ...prev,
        jobs: {
          ...prev.jobs,
          [id]: {
            ...activeJob,
            interviews: [
              ...activeJob.interviews,
              {
                id: Date.now(),
                interviewerName,
                interviewerRole,
                scheduledAt,
                transcriptRaw: "",
                status: "pending",
                analysis: null,
              },
            ],
          },
        },
      }
    })
  }, [update])

  const setTranscript = useCallback((interviewId, transcriptRaw) => {
    update((prev) => {
      const id = prev.activeJobId
      const activeJob = prev.jobs[id]
      return {
        ...prev,
        jobs: {
          ...prev.jobs,
          [id]: {
            ...activeJob,
            interviews: activeJob.interviews.map((iv) =>
              iv.id === interviewId ? { ...iv, transcriptRaw } : iv
            ),
          },
        },
      }
    })
  }, [update])

  const setInterviewStatus = useCallback((interviewId, status) => {
    update((prev) => {
      const id = prev.activeJobId
      const activeJob = prev.jobs[id]
      return {
        ...prev,
        jobs: {
          ...prev.jobs,
          [id]: {
            ...activeJob,
            interviews: activeJob.interviews.map((iv) =>
              iv.id === interviewId ? { ...iv, status } : iv
            ),
          },
        },
      }
    })
  }, [update])

  const setInterviewAnalysis = useCallback((interviewId, analysis) => {
    update((prev) => {
      const id = prev.activeJobId
      const activeJob = prev.jobs[id]
      return {
        ...prev,
        jobs: {
          ...prev.jobs,
          [id]: {
            ...activeJob,
            interviews: activeJob.interviews.map((iv) =>
              iv.id === interviewId ? { ...iv, status: "analyzed", analysis } : iv
            ),
          },
        },
      }
    })
  }, [update])

  const deleteInterview = useCallback((interviewId) => {
    updateActiveJob((job) => ({
      ...job,
      interviews: job.interviews.filter((iv) => iv.id !== interviewId),
    }))
  }, [updateActiveJob])

  const clearInterviewAnalysis = useCallback((interviewId) => {
    updateActiveJob((job) => ({
      ...job,
      interviews: job.interviews.map((iv) =>
        iv.id === interviewId ? { ...iv, status: "pending", analysis: null } : iv
      ),
    }))
  }, [updateActiveJob])

  const reset = useCallback(() => {
    update((prev) => {
      const { [prev.activeJobId]: _, ...remainingJobs } = prev.jobs
      return {
        ...prev,
        activeJobId: null,
        jobs: remainingJobs,
      }
    })
  }, [update])

  return {
    store,
    setApiKey,
    createJob,
    importData,
    selectJob,
    exitJob,
    deleteJob,
    setJobAppStatus,
    setJobNotes,
    togglePrepItem,
    setInterviewerNote,
    setStarDraft,
    addInterview,
    setTranscript,
    setInterviewStatus,
    setInterviewAnalysis,
    deleteInterview,
    clearInterviewAnalysis,
    reset,
  }
}
