import { useState } from "react"
import { generateStudyPlan } from "../lib/gemini"

function calcDaysAvailable(nextInterview) {
  if (!nextInterview?.scheduledAt) return 7
  const target = new Date(nextInterview.scheduledAt.includes("T")
    ? nextInterview.scheduledAt
    : nextInterview.scheduledAt + "T12:00:00")
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  const diff = Math.round((target - today) / (1000 * 60 * 60 * 24))
  return Math.max(1, diff)
}

function DayCard({ day, index, defaultOpen }) {
  const [expanded, setExpanded] = useState(defaultOpen)

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full text-left p-4 flex items-center gap-3 cursor-pointer hover:bg-surface-inset transition-colors"
      >
        <span className="w-8 h-8 rounded-full bg-accent text-text-inverse flex items-center justify-center text-sm font-bold shrink-0 font-mono">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text-primary">{day.dayLabel}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-text-muted">{day.theme}</span>
            <span className="text-xs text-text-muted">·</span>
            <span className="text-xs text-text-muted">{day.hours}h</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-border pt-3 ml-11 space-y-4">
          {(day.tasks || []).map((task, ti) => (
            <div key={ti}>
              <p className="text-xs font-bold text-accent uppercase tracking-wide mb-1">{task.label}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{task.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function StudyGuidePanel({
  interview,
  nextInterview,
  job,
  apiKey,
  onSetStudyPlan,
  onClearStudyPlan,
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { studyPlan } = interview
  const isAnalyzed = interview.status === "analyzed"
  const daysAvailable = calcDaysAvailable(nextInterview)
  const canGenerate = !!apiKey && isAnalyzed

  const handleGenerate = async () => {
    setError("")
    setLoading(true)
    try {
      const plan = await generateStudyPlan(apiKey, job, interview, nextInterview, daysAvailable)
      onSetStudyPlan(interview.id, plan)
    } catch (err) {
      setError("Generation failed. Check your API key. " + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    if (window.confirm("Clear this study plan? This cannot be undone.")) {
      onClearStudyPlan(interview.id)
    }
  }

  const nextName = nextInterview?.interviewerName || "Next Interview"

  // ── No plan yet ────────────────────────────────
  if (!studyPlan) {
    return (
      <div className="space-y-6">
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h2 className="text-lg font-bold font-display text-accent mb-1">
            Study Guide — Before {nextName}
          </h2>
          <p className="text-sm text-text-muted">
            {nextInterview
              ? `${daysAvailable} day${daysAvailable !== 1 ? "s" : ""} until ${nextName} (${nextInterview.interviewerRole})`
              : "Prepare for the next round"}
          </p>
        </div>

        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          {!isAnalyzed && (
            <div className="bg-warning-subtle border border-warning-text/20 rounded-lg p-4 mb-4">
              <p className="text-sm text-warning-text font-medium">
                Analyze the previous interview transcript first to get an AI-generated plan tailored to your specific gaps and signals.
              </p>
            </div>
          )}

          {isAnalyzed && !apiKey && (
            <div className="bg-warning-subtle border border-warning-text/20 rounded-lg p-4 mb-4">
              <p className="text-sm text-warning-text font-medium">
                Set a Gemini API key (sidebar → API key) to generate an AI-powered study plan.
              </p>
            </div>
          )}

          {canGenerate && (
            <>
              <p className="text-sm text-text-secondary mb-4">
                Generate a {daysAvailable}-day, time-boxed study plan based on your previous interview analysis, your identified gaps, and {nextInterview?.interviewerName ? `${nextInterview.interviewerName}'s` : "the next interviewer's"} background.
              </p>
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-accent text-text-inverse py-3 rounded-md text-sm font-semibold hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Generating..." : `Generate ${daysAvailable}-Day Study Plan with AI`}
              </button>
            </>
          )}

          {error && (
            <p className="text-sm text-danger-text bg-danger-subtle border border-danger/20 rounded p-3 mt-3">{error}</p>
          )}
        </div>
      </div>
    )
  }

  // ── Plan exists ────────────────────────────────
  return (
    <div className="space-y-6">
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold font-display text-accent mb-1">
              {studyPlan.daysAvailable}-Day Study Plan
            </h2>
            <p className="text-sm text-text-muted">
              Target: {studyPlan.target} · {studyPlan.totalHours}h total
            </p>
          </div>
          <div className="flex gap-2">
            {canGenerate && (
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="text-xs text-text-muted hover:text-text-secondary border border-border px-3 py-1.5 rounded cursor-pointer disabled:opacity-50 transition-colors"
              >
                {loading ? "Regenerating..." : "Regenerate"}
              </button>
            )}
            <button
              onClick={handleClear}
              className="text-xs text-danger hover:text-danger-text border border-danger/20 px-3 py-1.5 rounded cursor-pointer transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
        <p className="text-sm text-text-secondary mt-3 leading-relaxed">{studyPlan.overview}</p>
        {error && (
          <p className="text-sm text-danger-text bg-danger-subtle border border-danger/20 rounded p-3 mt-3">{error}</p>
        )}
      </div>

      <div className="space-y-2">
        {(studyPlan.days || []).map((day, i) => (
          <DayCard key={i} day={day} index={i} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  )
}
