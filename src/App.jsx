import { useState, useEffect, useRef } from "react"
import { useJobStore } from "./hooks/useJobStore"
import StepIndicator from "./components/StepIndicator"
import SetupPanel from "./components/SetupPanel"
import PreparationPanel from "./components/PreparationPanel"
import CompanyPanel from "./components/CompanyPanel"
import InterviewReviewPanel from "./components/InterviewReviewPanel"
import InterviewGuidePanel from "./components/InterviewGuidePanel"
import ScorecardPanel from "./components/ScorecardPanel"
import NotesPanel from "./components/NotesPanel"
import AddInterviewModal from "./components/AddInterviewModal"
import JobsDashboard from "./components/JobsDashboard"
import CheatSheetModal from "./components/CheatSheetModal"

export default function App() {
  const {
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
  } = useJobStore()

  const [currentStep, setCurrentStep] = useState(0)
  const [showAddInterview, setShowAddInterview] = useState(false)
  const [showSetup, setShowSetup] = useState(false)
  const [showCheatSheet, setShowCheatSheet] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKeyDraft, setApiKeyDraft] = useState(store.apiKey || "")
  const apiKeyRef = useRef(null)

  // Derive active job data
  const activeJob = store.activeJobId ? store.jobs[store.activeJobId] : null
  const isInJob = !!activeJob
  const job = activeJob?.job || null
  const interviews = activeJob?.interviews || []
  const { apiKey } = store

  // Reset step to 0 whenever the active job changes
  useEffect(() => {
    setCurrentStep(0)
  }, [store.activeJobId])

  const view = isInJob ? "job" : showSetup ? "setup" : "dashboard"

  const steps = isInJob
    ? [
        { label: "Preparation", short: "Prep" },
        { label: "Company", short: "Co." },
        ...interviews.map((iv, i) => ({
          label: `Interview ${i + 1}`,
          short: `Int ${i + 1}`,
        })),
        { label: "Interview Guide", short: "Guide" },
        { label: "Scorecard", short: "Score" },
        { label: "Notes", short: "Notes" },
      ]
    : []

  const LAST_STEP = steps.length - 1

  const handleAddInterview = (name, role, scheduledAt) => {
    addInterview(name, role, scheduledAt)
    setCurrentStep(2 + interviews.length)
  }

  const handleReset = () => {
    if (window.confirm("Delete this prep? This will remove the job and all interview data.")) {
      reset()
      setCurrentStep(0)
    }
  }

  const handleExitJob = () => {
    exitJob()
    setShowSetup(false)
    setCurrentStep(0)
  }

  const handleExport = () => {
    const data = JSON.stringify({ apiKey: store.apiKey, jobs: store.jobs }, null, 2)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `interview-prep-${new Date().toISOString().split("T")[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (file) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        if (!data.jobs) throw new Error("Invalid file")
        importData(data)
      } catch {
        alert("Invalid file. Please select a valid interview prep backup.")
      }
    }
    reader.readAsText(file)
  }

  const renderStep = () => {
    const interviewStepCount = interviews.length
    const guideStepIndex = 2 + interviewStepCount
    const scorecardStepIndex = guideStepIndex + 1
    const notesStepIndex = scorecardStepIndex + 1

    if (currentStep === 0) {
      return (
        <PreparationPanel
          job={job}
          interviews={interviews}
          prepChecklist={activeJob.prepChecklist || {}}
          onTogglePrepItem={togglePrepItem}
          interviewerNotes={activeJob.interviewerNotes || {}}
          onSetInterviewerNote={setInterviewerNote}
        />
      )
    }

    if (currentStep === 1) {
      return <CompanyPanel job={job} />
    }

    if (currentStep >= 2 && currentStep <= interviewStepCount + 1) {
      const interview = interviews[currentStep - 2]
      const previousInterviews = interviews.slice(0, currentStep - 2)
      return (
        <InterviewReviewPanel
          interview={interview}
          job={job}
          previousInterviews={previousInterviews}
          apiKey={apiKey}
          onSetTranscript={setTranscript}
          onSetAnalysis={setInterviewAnalysis}
          onSetStatus={setInterviewStatus}
          onClearAnalysis={clearInterviewAnalysis}
          onDeleteInterview={(id) => {
            deleteInterview(id)
            setCurrentStep(0)
          }}
        />
      )
    }

    if (currentStep === guideStepIndex) {
      return (
        <InterviewGuidePanel
          job={job}
          interviews={interviews}
          starDrafts={activeJob.starDrafts || {}}
          onDraftChange={setStarDraft}
        />
      )
    }

    if (currentStep === scorecardStepIndex) {
      return <ScorecardPanel job={job} interviews={interviews} />
    }

    if (currentStep === notesStepIndex) {
      return (
        <NotesPanel
          notes={activeJob.notes || ""}
          onSetNotes={setJobNotes}
        />
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            {isInJob && (
              <button
                onClick={handleExitJob}
                className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer flex items-center gap-1"
              >
                ← All Jobs
              </button>
            )}
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-700">Interview Prep</h1>
            {isInJob && job && (
              <p className="text-center text-gray-500 text-sm mt-1">
                {job.company} — {job.roleTitle}
              </p>
            )}
          </div>
          <div className="flex-1 flex justify-end gap-2">
            {isInJob && (
              <>
                <button
                  onClick={() => {
                    setShowApiKey((v) => !v)
                    setTimeout(() => apiKeyRef.current?.focus(), 50)
                  }}
                  className={`text-xs px-3 py-1.5 rounded cursor-pointer transition-colors ${
                    apiKey
                      ? "bg-gray-100 text-green-700 border border-green-200 hover:bg-green-50"
                      : "bg-yellow-50 text-yellow-700 border border-yellow-300 hover:bg-yellow-100"
                  }`}
                >
                  {apiKey ? "API Key Set" : "Set API Key"}
                </button>
                <button
                  onClick={() => setShowCheatSheet(true)}
                  className="text-xs bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 cursor-pointer"
                >
                  Cheat Sheet
                </button>
                <button
                  onClick={() => setShowAddInterview(true)}
                  className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 cursor-pointer"
                >
                  + New Round
                </button>
                <button
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded cursor-pointer"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>

        {/* API Key input bar */}
        {showApiKey && (
          <div className="border-t border-gray-100 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
              <label className="text-xs font-medium text-gray-600 shrink-0">Gemini API Key</label>
              <input
                ref={apiKeyRef}
                type="password"
                value={apiKeyDraft}
                onChange={(e) => setApiKeyDraft(e.target.value)}
                placeholder="AIzaSy..."
                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => {
                  setApiKey(apiKeyDraft.trim())
                  setShowApiKey(false)
                }}
                disabled={!apiKeyDraft.trim()}
                className="text-xs bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 disabled:opacity-40 cursor-pointer disabled:cursor-default"
              >
                Save
              </button>
              {apiKey && (
                <button
                  onClick={() => {
                    setApiKeyDraft("")
                    setApiKey("")
                    setShowApiKey(false)
                  }}
                  className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setShowApiKey(false)}
                className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                Cancel
              </button>
            </div>
            <div className="max-w-5xl mx-auto px-4 pb-2">
              <p className="text-xs text-gray-400">
                Required for transcript analysis. Get a free key at aistudio.google.com. Stored locally only.
              </p>
            </div>
          </div>
        )}
      </header>

      {view === "dashboard" && (
        <JobsDashboard
          jobs={store.jobs}
          onSelect={(id) => selectJob(id)}
          onNew={() => setShowSetup(true)}
          onDelete={deleteJob}
          onSetJobStatus={setJobAppStatus}
          onExport={handleExport}
          onImport={handleImport}
        />
      )}

      {view === "setup" && (
        <SetupPanel
          store={store}
          onSetApiKey={setApiKey}
          onCreateJob={createJob}
          onBack={Object.keys(store.jobs).length > 0 ? () => setShowSetup(false) : undefined}
        />
      )}

      {view === "job" && (
        <div className="max-w-5xl mx-auto px-4">
          <StepIndicator steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />

          <main className="pb-12">
            {renderStep()}
          </main>

          <div className="flex justify-between pb-8">
            <button
              onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-40 cursor-pointer disabled:cursor-default"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep((s) => Math.min(LAST_STEP, s + 1))}
              disabled={currentStep === LAST_STEP}
              className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-40 cursor-pointer disabled:cursor-default"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {showAddInterview && (
        <AddInterviewModal
          onAdd={handleAddInterview}
          onClose={() => setShowAddInterview(false)}
        />
      )}

      {showCheatSheet && isInJob && (
        <CheatSheetModal
          job={job}
          starDrafts={activeJob.starDrafts || {}}
          interviews={interviews}
          onClose={() => setShowCheatSheet(false)}
        />
      )}
    </div>
  )
}
