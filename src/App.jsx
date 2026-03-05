import { useState, useEffect, useRef, useMemo } from "react"
import { useJobStore, getInterviewsForRole } from "./hooks/useJobStore"
import SidebarNav from "./components/SidebarNav"
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
import ProfilePanel from "./components/ProfilePanel"
import StoryBankPanel from "./components/StoryBankPanel"

export default function App() {
  const {
    store,
    setApiKey,
    updateProfile,
    addStory,
    updateStory,
    deleteStory,
    createRole,
    importData,
    selectRole,
    exitRole,
    deleteRole,
    setRoleAppStatus,
    setRoleNotes,
    togglePrepItem,
    setStarDraft,
    addInterview,
    setTranscript,
    setInterviewStatus,
    setInterviewAnalysis,
    deleteInterview,
    clearInterviewAnalysis,
    setInterviewerNote,
    reset,
  } = useJobStore()

  const [currentStep, setCurrentStep] = useState(0)
  const [showAddInterview, setShowAddInterview] = useState(false)
  const [showSetup, setShowSetup] = useState(false)
  const [showCheatSheet, setShowCheatSheet] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKeyDraft, setApiKeyDraft] = useState(store.apiKey || "")
  const apiKeyRef = useRef(null)
  const [stepKey, setStepKey] = useState(0)
  const [globalView, setGlobalView] = useState(null) // "profile" | "storybank" | null

  // Derive active entities from normalized store
  const activeRole = store.activeRoleId ? store.roles[store.activeRoleId] : null
  const activeCompany = activeRole ? store.companies[activeRole.companyId] : null
  const isInRole = !!activeRole
  const { apiKey } = store

  const interviews = useMemo(
    () => getInterviewsForRole(store, store.activeRoleId),
    [store, store.activeRoleId]
  )

  // Build a backwards-compatible "job" shim so existing panels work unchanged
  const job = useMemo(() => {
    if (!activeRole) return null
    return {
      company: activeCompany?.name || "",
      roleTitle: activeRole.roleTitle,
      jobDescriptionRaw: activeRole.jobDescriptionRaw,
      resumeRaw: activeRole.resumeRaw,
      requirements: activeRole.requirements,
      responsibilities: activeRole.responsibilities,
      gapAnalysis: activeRole.gapAnalysis,
      prepFocus: activeRole.prepFocus,
      commonQuestions: activeRole.commonQuestions,
      cultureValues: activeRole.cultureValues,
      learningGuide: activeRole.learningGuide,
      companyProfile: activeCompany?.companyProfile || null,
    }
  }, [activeRole, activeCompany])

  useEffect(() => {
    setCurrentStep(0)
  }, [store.activeRoleId])

  // Trigger entrance animation on step change
  useEffect(() => {
    setStepKey((k) => k + 1)
  }, [currentStep])

  const view = globalView ? globalView : isInRole ? "role" : showSetup ? "setup" : "dashboard"

  const steps = isInRole
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
    if (window.confirm("Delete this prep? This will remove the role and all interview data.")) {
      reset()
      setCurrentStep(0)
    }
  }

  const handleExitRole = () => {
    exitRole()
    setShowSetup(false)
    setCurrentStep(0)
    setGlobalView(null)
  }

  const handleExport = () => {
    const data = JSON.stringify({
      apiKey: store.apiKey,
      profile: store.profile,
      companies: store.companies,
      roles: store.roles,
      interviews: store.interviews,
    }, null, 2)
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
        if (!data.roles && !data.jobs) throw new Error("Invalid file")
        importData(data)
      } catch {
        alert("Invalid file. Please select a valid interview prep backup.")
      }
    }
    reader.readAsText(file)
  }

  const handleSaveApiKey = () => {
    setApiKey(apiKeyDraft.trim())
    setShowApiKey(false)
  }

  const handleCreateRole = (roleData) => {
    const companyData = roleData.companyProfile
      ? { name: roleData.company, companyProfile: roleData.companyProfile }
      : { name: roleData.company }
    createRole(roleData, companyData)
  }

  // Step name for the content header
  const currentStepLabel = steps[currentStep]?.label || ""

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
          prepChecklist={activeRole.prepChecklist || {}}
          onTogglePrepItem={togglePrepItem}
          interviewerNotes={interviews}
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
          starDrafts={activeRole.starDrafts || {}}
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
          notes={activeRole.notes || ""}
          onSetNotes={setRoleNotes}
        />
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-surface-base text-text-primary font-body">
      {/* ─── Dashboard View ─── */}
      {view === "dashboard" && (
        <JobsDashboard
          roles={store.roles}
          companies={store.companies}
          allInterviews={store.interviews}
          profile={store.profile}
          onSelect={(id) => selectRole(id)}
          onNew={() => setShowSetup(true)}
          onDelete={deleteRole}
          onSetRoleStatus={setRoleAppStatus}
          onExport={handleExport}
          onImport={handleImport}
          onShowProfile={() => setGlobalView("profile")}
          onShowStoryBank={() => setGlobalView("storybank")}
        />
      )}

      {/* ─── Setup View ─── */}
      {view === "setup" && (
        <SetupPanel
          store={store}
          onSetApiKey={setApiKey}
          onCreateRole={handleCreateRole}
          onBack={Object.keys(store.roles).length > 0 ? () => setShowSetup(false) : undefined}
        />
      )}

      {/* ─── Profile View ─── */}
      {view === "profile" && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => setGlobalView(null)}
            className="text-sm text-text-muted hover:text-text-primary cursor-pointer flex items-center gap-1 mb-6"
          >
            ← Back to dashboard
          </button>
          <ProfilePanel profile={store.profile} />
        </div>
      )}

      {/* ─── Story Bank View ─── */}
      {view === "storybank" && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => setGlobalView(null)}
            className="text-sm text-text-muted hover:text-text-primary cursor-pointer flex items-center gap-1 mb-6"
          >
            ← Back to dashboard
          </button>
          <StoryBankPanel
            stories={store.profile?.storyBank || []}
            onAdd={addStory}
            onUpdate={updateStory}
            onDelete={deleteStory}
          />
        </div>
      )}

      {/* ─── Role View — Sidebar + Content ─── */}
      {view === "role" && (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <SidebarNav
            steps={steps}
            currentStep={currentStep}
            onStepClick={setCurrentStep}
            interviews={interviews}
            apiKey={apiKey}
            onApiKeyClick={() => {
              setShowApiKey(true)
              setTimeout(() => apiKeyRef.current?.focus(), 50)
            }}
            onExitRole={handleExitRole}
            onShowProfile={() => setGlobalView("profile")}
            onShowStoryBank={() => setGlobalView("storybank")}
            jobTitle={activeRole?.roleTitle}
            company={activeCompany?.name}
            hasProfile={!!store.profile}
          />

          {/* Main content area */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Content header */}
            <header className="sticky top-0 z-20 bg-surface-base/80 backdrop-blur-md border-b border-border">
              <div className="max-w-4xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl text-text-primary leading-tight">
                    {currentStepLabel}
                  </h2>
                  {job && (
                    <p className="text-[13px] text-text-muted mt-0.5">
                      {job.company} — {job.roleTitle}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowCheatSheet(true)}
                    className="text-[12px] font-medium text-accent-text bg-accent-subtle px-3.5 py-1.5 rounded-lg hover:bg-accent/10 cursor-pointer transition-colors"
                  >
                    Cheat Sheet
                  </button>
                  <button
                    onClick={() => setShowAddInterview(true)}
                    className="text-[12px] font-medium text-text-inverse bg-accent px-3.5 py-1.5 rounded-lg hover:bg-accent-hover cursor-pointer transition-colors"
                  >
                    + New Round
                  </button>
                  <button
                    onClick={handleReset}
                    className="text-[12px] text-text-muted hover:text-danger px-2 py-1.5 cursor-pointer transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* API Key bar */}
              {showApiKey && (
                <div className="border-t border-border bg-surface-card">
                  <div className="max-w-4xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-3">
                    <label className="text-[12px] font-medium text-text-secondary shrink-0">Gemini API Key</label>
                    <input
                      ref={apiKeyRef}
                      type="password"
                      value={apiKeyDraft}
                      onChange={(e) => setApiKeyDraft(e.target.value)}
                      placeholder="AIzaSy..."
                      className="flex-1 bg-surface-inset border border-border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                    <button
                      onClick={handleSaveApiKey}
                      disabled={!apiKeyDraft.trim()}
                      className="text-[12px] font-medium bg-accent text-text-inverse px-4 py-1.5 rounded-lg hover:bg-accent-hover disabled:opacity-40 cursor-pointer disabled:cursor-default transition-colors"
                    >
                      Save
                    </button>
                    {apiKey && (
                      <button
                        onClick={() => { setApiKeyDraft(""); setApiKey(""); setShowApiKey(false) }}
                        className="text-[12px] text-danger cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                    <button
                      onClick={() => setShowApiKey(false)}
                      className="text-[12px] text-text-muted cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="max-w-4xl mx-auto px-6 lg:px-10 pb-2 text-[11px] text-text-muted">
                    Required for transcript analysis. Get a free key at aistudio.google.com
                  </p>
                </div>
              )}
            </header>

            {/* Step content */}
            <main className="flex-1 max-w-4xl mx-auto w-full px-6 lg:px-10 py-8">
              <div key={stepKey} className="step-enter">
                {renderStep()}
              </div>
            </main>

            {/* Step navigation */}
            <footer className="border-t border-border bg-surface-base/80 backdrop-blur-sm">
              <div className="max-w-4xl mx-auto px-6 lg:px-10 py-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium text-text-secondary bg-surface-card border border-border hover:border-border-strong disabled:opacity-30 cursor-pointer disabled:cursor-default transition-colors shadow-card"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Previous
                </button>
                <button
                  onClick={() => setCurrentStep((s) => Math.min(LAST_STEP, s + 1))}
                  disabled={currentStep === LAST_STEP}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium text-text-inverse bg-accent hover:bg-accent-hover disabled:opacity-30 cursor-pointer disabled:cursor-default transition-colors shadow-card"
                >
                  Next
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}

      {/* ─── Modals ─── */}
      {showAddInterview && (
        <AddInterviewModal
          onAdd={handleAddInterview}
          onClose={() => setShowAddInterview(false)}
        />
      )}

      {showCheatSheet && isInRole && (
        <CheatSheetModal
          job={job}
          starDrafts={activeRole.starDrafts || {}}
          interviews={interviews}
          onClose={() => setShowCheatSheet(false)}
        />
      )}
    </div>
  )
}
