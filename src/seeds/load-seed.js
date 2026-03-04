// Writes seed data directly to localStorage in the format useJobStore expects.
// Import a job data object and call loadSeed(jobData) to populate the app.

const STORAGE_KEY = "interview-prep"

export function loadSeed(jobData) {
  const id = Date.now()
  const state = {
    apiKey: "",
    activeJobId: id,
    jobs: {
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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // quota exceeded — still works in-memory on next load
  }
  return state
}
