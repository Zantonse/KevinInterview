// Writes seed data directly to localStorage in the format useJobStore expects.
// Import a job data object and call loadSeed(jobData) to populate the app.

const STORAGE_KEY = "interview-prep"

export function loadSeed(jobData) {
  const id = Date.now()

  // Build interviews from seedInterviews if present
  const interviews = (jobData.seedInterviews || []).map((iv, i) => ({
    id: id + i + 1,
    interviewerName: iv.interviewerName,
    interviewerRole: iv.interviewerRole,
    scheduledAt: iv.scheduledAt || null,
    transcriptRaw: "",
    status: "pending",
    analysis: null,
  }))

  const state = {
    apiKey: "",
    activeJobId: id,
    jobs: {
      [id]: {
        id,
        job: jobData,
        interviews,
        createdAt: id,
        appStatus: "active",
        notes: "",
        prepChecklist: {},
        interviewerNotes: {},
        starDrafts: {},
      },
    },
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // quota exceeded — still works in-memory on next load
  }
  return state
}
