import { useState } from "react"
import { analyzeTranscript } from "../lib/gemini"

function PredictedQuestionCard({ item, index, isExpanded, onToggle }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-3 cursor-pointer hover:bg-surface-inset transition-colors"
      >
        <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary">{item.question}</p>
          <span className="text-xs text-text-muted mt-1 inline-block">
            {isExpanded ? "Collapse" : "Tap to see prep guidance"}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-text-muted shrink-0 mt-1 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-border pt-3 ml-9">
          <div>
            <p className="text-xs font-bold text-text-muted uppercase mb-1">Why They'll Ask This</p>
            <p className="text-sm text-text-secondary">{item.why}</p>
          </div>
          <div className="bg-accent-subtle border border-accent/20 rounded p-3">
            <p className="text-xs font-bold text-accent mb-1">Prep Tip</p>
            <p className="text-sm text-accent-text">{item.prepTip}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function AssessmentBadge({ assessment }) {
  const config = {
    strong: { label: "Strong", className: "bg-success-subtle text-success-text" },
    adequate: { label: "Adequate", className: "bg-warning-subtle text-warning-text" },
    "needs-improvement": { label: "Needs Work", className: "bg-danger-subtle text-danger-text" },
  }
  const { label, className } = config[assessment] || config.adequate
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${className}`}>
      {label}
    </span>
  )
}

function QuestionReview({ item, index, isExpanded, onToggle }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-3 cursor-pointer hover:bg-surface-inset transition-colors"
      >
        <span className="w-6 h-6 rounded-full bg-surface-inset text-text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary">{item.question}</p>
          <div className="flex items-center gap-2 mt-1">
            <AssessmentBadge assessment={item.assessment} />
            <span className="text-xs text-text-muted">{isExpanded ? "Collapse" : "Expand"} analysis</span>
          </div>
        </div>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-border pt-3 ml-9">
          <div>
            <p className="text-xs font-bold text-text-muted uppercase mb-1">Your Response</p>
            <p className="text-sm text-text-primary">{item.myResponse}</p>
          </div>
          <div className="bg-accent-subtle border border-accent/20 rounded p-3">
            <p className="text-xs font-bold text-accent mb-1">Coach Notes</p>
            <p className="text-sm text-accent-text">{item.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewReviewPanel({ interview, job, previousInterviews, onSetTranscript, onSetAnalysis, onSetStatus, onClearAnalysis, onDeleteInterview, apiKey }) {
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [expandedPrediction, setExpandedPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleAnalyze = async () => {
    if (!interview.transcriptRaw?.trim()) return setError("Paste the interview transcript first.")
    setError("")
    setLoading(true)
    onSetStatus(interview.id, "analyzing")
    try {
      const analysis = await analyzeTranscript(
        apiKey,
        job.jobDescriptionRaw,
        job.resumeRaw,
        previousInterviews,
        interview.transcriptRaw,
        interview.interviewerName,
        interview.interviewerRole
      )
      onSetAnalysis(interview.id, analysis)
    } catch (err) {
      setError("Analysis failed. Check your API key. Details: " + err.message)
      onSetStatus(interview.id, "pending")
    } finally {
      setLoading(false)
    }
  }

  const { analysis } = interview

  const assessmentCounts = analysis?.questionsAsked?.reduce((acc, q) => {
    acc[q.assessment] = (acc[q.assessment] || 0) + 1
    return acc
  }, {}) || {}

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold font-display text-accent mb-1">
              {interview.interviewerName}
            </h2>
            <p className="text-sm text-text-muted">{interview.interviewerRole}</p>
          </div>
          <div className="flex items-start gap-3">
            {analysis && (
              <div className="flex gap-2 flex-wrap">
                {assessmentCounts.strong > 0 && (
                  <span className="text-xs font-mono bg-success-subtle text-success-text px-2 py-1 rounded-full font-medium">
                    {assessmentCounts.strong} Strong
                  </span>
                )}
                {assessmentCounts.adequate > 0 && (
                  <span className="text-xs font-mono bg-warning-subtle text-warning-text px-2 py-1 rounded-full font-medium">
                    {assessmentCounts.adequate} Adequate
                  </span>
                )}
                {assessmentCounts["needs-improvement"] > 0 && (
                  <span className="text-xs font-mono bg-danger-subtle text-danger-text px-2 py-1 rounded-full font-medium">
                    {assessmentCounts["needs-improvement"]} Needs Work
                  </span>
                )}
              </div>
            )}
            <button
              onClick={() => {
                if (window.confirm(`Delete interview with ${interview.interviewerName}? This cannot be undone.`)) {
                  onDeleteInterview(interview.id)
                }
              }}
              className="text-text-muted hover:text-danger-text cursor-pointer text-sm shrink-0"
              title="Delete interview"
            >
              ✕
            </button>
          </div>
        </div>
        {analysis && (
          <>
            <p className="text-sm text-text-secondary mt-3">{analysis.overallTone}</p>
            <p className="text-sm text-text-primary mt-2">{analysis.summary}</p>
          </>
        )}
      </div>

      {/* Re-analyze button — shown after analysis exists */}
      {interview.status === "analyzed" && (
        <div className="flex justify-end">
          <button
            onClick={() => {
              if (window.confirm("Clear this analysis and re-run it with the current transcript?")) {
                onClearAnalysis(interview.id)
              }
            }}
            className="text-xs text-text-muted hover:text-text-secondary border border-border px-3 py-1.5 rounded cursor-pointer"
          >
            Re-analyze
          </button>
        </div>
      )}

      {/* Predicted Questions — shown for pending interviews with predictions */}
      {interview.status !== "analyzed" && interview.predictedQuestions?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-md font-bold font-display text-text-primary mb-1">
            Predicted Questions for This Round
          </h3>
          <p className="text-xs text-text-muted mb-4">
            Based on the interviewer's background and role. Expand each for prep guidance.
          </p>
          <div className="space-y-2">
            {interview.predictedQuestions.map((item, index) => (
              <PredictedQuestionCard
                key={index}
                item={item}
                index={index}
                isExpanded={expandedPrediction === index}
                onToggle={() => setExpandedPrediction(expandedPrediction === index ? null : index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Transcript Input — shown until analyzed */}
      {interview.status !== "analyzed" && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-md font-bold font-display text-text-primary mb-2">Paste Interview Transcript</h3>
          <p className="text-xs text-text-muted mb-3">
            Paste the full transcript or your notes from this interview. The more detail, the better the analysis.
          </p>
          <textarea
            value={interview.transcriptRaw || ""}
            onChange={(e) => onSetTranscript(interview.id, e.target.value)}
            placeholder="Paste transcript here..."
            rows={10}
            className="w-full bg-surface-inset border border-border rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
          />
          {error && (
            <p className="text-sm text-danger-text bg-danger-subtle border border-danger/20 rounded p-3 mt-3">{error}</p>
          )}
          <button
            onClick={handleAnalyze}
            disabled={loading || !interview.transcriptRaw?.trim()}
            className="mt-4 w-full bg-accent text-text-inverse py-3 rounded-md text-sm font-semibold hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Analyzing..." : "Analyze This Interview"}
          </button>
        </div>
      )}

      {/* Analysis results */}
      {analysis && (
        <>
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="text-md font-bold font-display text-text-primary mb-4">Question-by-Question Breakdown</h3>
            <div className="space-y-2">
              {analysis.questionsAsked.map((item, index) => (
                <QuestionReview
                  key={index}
                  item={item}
                  index={index}
                  isExpanded={expandedQuestion === index}
                  onToggle={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
              <h3 className="text-md font-bold font-display text-success-text mb-3">What Went Well</h3>
              <ul className="space-y-2">
                {analysis.strengths.map((s, i) => (
                  <li key={i} className="text-sm text-text-secondary flex">
                    <span className="text-success mr-2 shrink-0">+</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
              <h3 className="text-md font-bold font-display text-danger-text mb-3">Areas to Improve</h3>
              <ul className="space-y-2">
                {analysis.areasForImprovement.map((a, i) => (
                  <li key={i} className="text-sm text-text-secondary flex">
                    <span className="text-danger mr-2 shrink-0">-</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="text-md font-bold font-display text-text-primary mb-3">Interviewer Signals</h3>
            <ul className="space-y-2">
              {analysis.interviewerSignals.map((signal, i) => (
                <li key={i} className="text-sm text-text-secondary flex">
                  <span className="text-warning-text mr-2 shrink-0">*</span>{signal}
                </li>
              ))}
            </ul>
          </div>

          {analysis.postReflection && (
            <div className="bg-surface-inset rounded-xl border border-border p-5">
              <h3 className="text-sm font-bold font-display text-text-primary mb-2">Post-Interview Reflection</h3>
              <p className="text-sm text-text-secondary italic">"{analysis.postReflection}"</p>
            </div>
          )}

          {analysis.nextSteps?.length > 0 && (
            <div className="bg-success-subtle border border-success/20 rounded-xl p-6">
              <h3 className="text-md font-bold font-display text-success-text mb-1">Next Steps</h3>
              <p className="text-xs text-success mb-3">Do these before your next interview.</p>
              <ul className="space-y-2">
                {analysis.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-success-text">
                    <span className="font-mono text-success font-bold shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}
