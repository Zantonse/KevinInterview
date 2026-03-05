import { useState } from "react"

const STAR_KEYS = ["situation", "task", "action", "result"]

function QuestionCard({ question, index, isExpanded, onToggle, drafts, onDraftChange }) {
  return (
    <div className="bg-surface-card rounded-xl shadow-card border border-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-4 cursor-pointer hover:bg-surface-inset transition-colors"
      >
        <span className="w-8 h-8 rounded-full bg-accent text-text-inverse flex items-center justify-center text-sm font-bold shrink-0">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-text-primary">{question.question}</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-text-muted">Click to {isExpanded ? "collapse" : "expand"} prep guidance</p>
            {STAR_KEYS.some((k) => drafts[k]) && (
              <span className="text-xs bg-success-subtle text-success-text px-1.5 py-0.5 rounded">Draft saved</span>
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
          <div className="bg-warning-subtle border border-warning-text/20 rounded p-3">
            <p className="text-xs font-bold text-warning-text mb-1">Why This Will Come Up</p>
            <p className="text-sm text-warning-text">{question.why}</p>
          </div>

          <div>
            <p className="text-xs font-bold text-text-primary mb-2">Structure Your Answer (STAR)</p>
            <div className="space-y-3">
              {STAR_KEYS.map((key) => (
                <div key={key} className="bg-surface-inset rounded-lg p-3">
                  <p className="text-xs font-bold text-accent uppercase mb-1">{key}</p>
                  <p className="text-xs text-text-muted mb-2">{question.starPrompt?.[key]}</p>
                  <textarea
                    value={drafts[key] || ""}
                    onChange={(e) => onDraftChange(index, key, e.target.value)}
                    placeholder={`My ${key.charAt(0).toUpperCase() + key.slice(1)}...`}
                    rows={2}
                    className="w-full bg-surface-card border border-border rounded-md p-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewGuidePanel({ job, interviews, starDrafts, onDraftChange }) {
  const [expandedId, setExpandedId] = useState(null)

  const completedCount = interviews.filter((iv) => iv.status === "analyzed").length
  const questions = job?.commonQuestions || []

  return (
    <div className="space-y-4">
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-5 mb-2">
        <h2 className="text-lg font-bold font-display text-accent mb-1">Interview Question Guide</h2>
        <p className="text-sm text-text-muted">
          AI-generated likely questions for this role based on the job description.
          {completedCount > 0 && ` Updated using patterns from your ${completedCount} completed interview${completedCount > 1 ? "s" : ""}.`}
          {" "}Use the STAR framework to draft your answers.
        </p>
      </div>

      {questions.map((q, index) => (
        <QuestionCard
          key={index}
          question={q}
          index={index}
          isExpanded={expandedId === index}
          onToggle={() => setExpandedId(expandedId === index ? null : index)}
          drafts={(starDrafts || {})[index] || {}}
          onDraftChange={onDraftChange}
        />
      ))}
    </div>
  )
}
