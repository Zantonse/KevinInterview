import { useState } from "react"

const PHASES = [
  { key: "prep", label: "Preparation" },
  { key: "interviews", label: "Interviews" },
  { key: "review", label: "Review" },
]

function StepDot({ state }) {
  if (state === "active") {
    return (
      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
    )
  }
  if (state === "complete") {
    return (
      <svg className="w-3 h-3 text-accent-muted shrink-0" fill="none" viewBox="0 0 12 12">
        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return <span className="w-1.5 h-1.5 rounded-full bg-text-sidebar/30 shrink-0" />
}

export default function SidebarNav({
  steps,
  currentStep,
  onStepClick,
  interviews,
  apiKey,
  onApiKeyClick,
  onExitRole,
  onShowProfile,
  onShowStoryBank,
  jobTitle,
  company,
  hasProfile,
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Group steps into phases
  const interviewCount = interviews?.length || 0
  const phaseSteps = {
    prep: steps.slice(0, 2),                                     // Prep, Company
    interviews: steps.slice(2, 2 + interviewCount),              // Interview 1..N
    review: steps.slice(2 + interviewCount),                      // Guide, Scorecard, Notes
  }
  const phaseOffsets = {
    prep: 0,
    interviews: 2,
    review: 2 + interviewCount,
  }

  function getStepState(globalIndex) {
    if (globalIndex === currentStep) return "active"
    // Check if interview step has analysis
    if (globalIndex >= 2 && globalIndex < 2 + interviewCount) {
      const iv = interviews[globalIndex - 2]
      if (iv?.status === "analyzed") return "complete"
    }
    if (globalIndex < currentStep) return "visited"
    return "pending"
  }

  const completedInterviews = interviews?.filter((iv) => iv.status === "analyzed").length || 0
  const totalSteps = steps.length
  const progressPct = totalSteps > 0 ? Math.round((currentStep / (totalSteps - 1)) * 100) : 0

  const sidebar = (
    <aside className="w-[260px] bg-surface-dark flex flex-col h-screen sticky top-0 shrink-0">
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <h1 className="font-display text-[22px] text-text-inverse italic leading-tight">
          Interview Prep
        </h1>
        {company && (
          <p className="text-[11px] text-text-sidebar mt-1.5 tracking-wide uppercase font-medium">
            {company}
          </p>
        )}
      </div>

      {/* Progress bar */}
      <div className="px-5 pb-4">
        <div className="h-[3px] bg-surface-dark-raised rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out-expo"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Phase navigation */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll px-3 pb-4">
        {/* Global: Candidate Profile */}
        {hasProfile && (
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-[0.1em] text-text-sidebar/50 font-semibold px-2 mb-1.5">
              Candidate
            </p>
            <ul className="space-y-0.5">
              <li>
                <button
                  onClick={() => {
                    onShowProfile()
                    setMobileOpen(false)
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-[13px] cursor-pointer transition-colors duration-100 text-text-sidebar hover:bg-surface-dark-raised hover:text-text-inverse/80"
                >
                  <svg className="w-3.5 h-3.5 shrink-0 text-text-sidebar/50" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="5" r="3" />
                    <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" strokeLinecap="round" />
                  </svg>
                  <span className="truncate">Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onShowStoryBank()
                    setMobileOpen(false)
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-[13px] cursor-pointer transition-colors duration-100 text-text-sidebar hover:bg-surface-dark-raised hover:text-text-inverse/80"
                >
                  <svg className="w-3.5 h-3.5 shrink-0 text-text-sidebar/50" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 2h7l3 3v9H3V2z" strokeLinejoin="round" />
                    <path d="M5 8h6M5 11h4" strokeLinecap="round" />
                  </svg>
                  <span className="truncate">Story Bank</span>
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Role-specific phases */}
        {PHASES.map((phase) => {
          const items = phaseSteps[phase.key] || []
          const offset = phaseOffsets[phase.key]
          if (items.length === 0) return null

          return (
            <div key={phase.key} className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.1em] text-text-sidebar/50 font-semibold px-2 mb-1.5">
                {phase.label}
                {phase.key === "interviews" && interviewCount > 0 && (
                  <span className="ml-1.5 text-text-sidebar/30">
                    {completedInterviews}/{interviewCount}
                  </span>
                )}
              </p>
              <ul className="space-y-0.5">
                {items.map((step, i) => {
                  const globalIndex = offset + i
                  const state = getStepState(globalIndex)
                  const isActive = state === "active"

                  return (
                    <li key={step.label}>
                      <button
                        onClick={() => {
                          onStepClick(globalIndex)
                          setMobileOpen(false)
                        }}
                        className={`
                          w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-[13px] cursor-pointer
                          transition-colors duration-100
                          ${isActive
                            ? "bg-surface-dark-active text-text-sidebar-active font-medium"
                            : "text-text-sidebar hover:bg-surface-dark-raised hover:text-text-inverse/80"
                          }
                        `}
                      >
                        <StepDot state={state} />
                        <span className="truncate">{step.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-4 space-y-2 border-t border-surface-dark-raised pt-3 mt-auto">
        {/* API Key */}
        <button
          onClick={onApiKeyClick}
          className={`
            w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] cursor-pointer
            transition-colors duration-100
            ${apiKey
              ? "text-accent-muted hover:bg-surface-dark-raised"
              : "text-warning hover:bg-surface-dark-raised"
            }
          `}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${apiKey ? "bg-accent-muted" : "bg-warning"}`} />
          {apiKey ? "API key configured" : "Set API key"}
        </button>

        {/* Back to preps */}
        <button
          onClick={() => {
            onExitRole()
            setMobileOpen(false)
          }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] text-text-sidebar/60 hover:text-text-sidebar hover:bg-surface-dark-raised cursor-pointer transition-colors duration-100"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All preps
        </button>
      </div>
    </aside>
  )

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-lg bg-surface-dark text-text-inverse flex items-center justify-center shadow-raised cursor-pointer"
        aria-label="Toggle navigation"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
          {mobileOpen ? (
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar - desktop always visible, mobile as drawer */}
      <div className={`
        fixed lg:relative z-40
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        transition-transform duration-200 ease-out-expo
      `}>
        {sidebar}
      </div>
    </>
  )
}
