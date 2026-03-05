function Badge({ color, children }) {
  const colors = {
    green: "bg-success-subtle text-success-text",
    yellow: "bg-warning-subtle text-warning-text",
    red: "bg-danger-subtle text-danger-text",
    gray: "bg-surface-inset text-text-secondary",
  }
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  )
}

function ScoreRing({ label, value, total, color }) {
  const colors = {
    green: "text-success-text",
    yellow: "text-warning-text",
    red: "text-danger-text",
  }
  return (
    <div className="flex flex-col items-center">
      <div className={`text-3xl font-bold font-mono ${colors[color]}`}>{value}</div>
      <div className="text-xs text-text-muted mt-0.5 font-mono">{total > 0 ? Math.round((value / total) * 100) : 0}% of {total}</div>
      <div className="text-sm font-medium text-text-primary mt-1">{label}</div>
    </div>
  )
}

export default function ScorecardPanel({ job, interviews }) {
  const analyzed = interviews.filter((iv) => iv.status === "analyzed" && iv.analysis)

  if (analyzed.length === 0) {
    return (
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-10 text-center">
        <p className="text-text-muted text-sm">Complete at least one interview analysis to see your scorecard.</p>
      </div>
    )
  }

  const allQuestions = analyzed.flatMap((iv) =>
    (iv.analysis.questionsAsked || []).map((q) => ({ ...q, interviewer: iv.interviewerName }))
  )
  const strong = allQuestions.filter((q) => q.assessment === "strong")
  const adequate = allQuestions.filter((q) => q.assessment === "adequate")
  const needsImprovement = allQuestions.filter((q) => q.assessment === "needs-improvement")
  const allStrengths = analyzed.flatMap((iv) => iv.analysis.strengths || [])
  const allImprovements = analyzed.flatMap((iv) => iv.analysis.areasForImprovement || [])
  const allSignals = analyzed.flatMap((iv) =>
    (iv.analysis.interviewerSignals || []).map((s) => ({ text: s, interviewer: iv.interviewerName }))
  )

  return (
    <div className="space-y-6">
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-5">
        <h2 className="text-lg font-bold font-display text-accent mb-1">Interview Scorecard</h2>
        <p className="text-sm text-text-muted">
          Aggregated assessment across{" "}
          <span className="font-mono">{analyzed.length}</span> completed interview{analyzed.length > 1 ? "s" : ""} and{" "}
          <span className="font-mono">{allQuestions.length}</span> questions.
        </p>
      </div>

      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h3 className="text-md font-bold font-display text-text-primary mb-4">Overall Performance</h3>
        <div className="flex justify-around">
          <ScoreRing label="Strong" value={strong.length} total={allQuestions.length} color="green" />
          <ScoreRing label="Adequate" value={adequate.length} total={allQuestions.length} color="yellow" />
          <ScoreRing label="Needs Work" value={needsImprovement.length} total={allQuestions.length} color="red" />
        </div>
      </div>

      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h3 className="text-md font-bold font-display text-text-primary mb-3">Question Breakdown</h3>
        <div className="space-y-2">
          {allQuestions.map((q, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-b-0">
              <div className="shrink-0 mt-0.5">
                {q.assessment === "strong" && <Badge color="green">Strong</Badge>}
                {q.assessment === "adequate" && <Badge color="yellow">Adequate</Badge>}
                {q.assessment === "needs-improvement" && <Badge color="red">Needs Work</Badge>}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-primary">{q.question}</p>
                <p className="text-xs text-text-muted mt-0.5">{q.interviewer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-card rounded-xl shadow-card border border-success/20 p-6">
        <h3 className="text-md font-bold font-display text-success-text mb-3">What Went Well</h3>
        <ul className="space-y-2">
          {allStrengths.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
              <span className="text-success shrink-0 mt-0.5">+</span>{s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-surface-card rounded-xl shadow-card border border-danger/20 p-6">
        <h3 className="text-md font-bold font-display text-danger-text mb-3">What Needs Work</h3>
        <ul className="space-y-2">
          {allImprovements.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
              <span className="text-danger shrink-0 mt-0.5">-</span>{s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-surface-card rounded-xl shadow-card border border-accent/20 p-6">
        <h3 className="text-md font-bold font-display text-accent mb-3">Interviewer Signals</h3>
        <ul className="space-y-2">
          {allSignals.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
              <span className="text-accent shrink-0 mt-0.5">&bull;</span>
              <div>{s.text}<span className="text-xs text-text-muted ml-1">({s.interviewer})</span></div>
            </li>
          ))}
        </ul>
      </div>

      {job?.gapAnalysis && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-md font-bold font-display text-text-primary mb-3">Skills Gap Status</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-success-subtle border border-success/20 rounded-lg p-3">
              <h4 className="text-xs font-bold text-success-text mb-2">Strong Match</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.strongMatch?.map((item, i) => (
                  <li key={i} className="text-xs text-success-text">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-warning-subtle border border-warning-text/20 rounded-lg p-3">
              <h4 className="text-xs font-bold text-warning-text mb-2">Partial Match</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.partialMatch?.map((item, i) => (
                  <li key={i} className="text-xs text-warning-text">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-danger-subtle border border-danger/20 rounded-lg p-3">
              <h4 className="text-xs font-bold text-danger-text mb-2">Gap</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.gap?.map((item, i) => (
                  <li key={i} className="text-xs text-danger-text">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
