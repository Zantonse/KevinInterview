function Badge({ color, children }) {
  const colors = {
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-700",
  }
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  )
}

function ScoreRing({ label, value, total, color }) {
  const colors = { green: "text-green-600", yellow: "text-yellow-600", red: "text-red-600" }
  return (
    <div className="flex flex-col items-center">
      <div className={`text-3xl font-bold ${colors[color]}`}>{value}</div>
      <div className="text-xs text-gray-400 mt-0.5">{total > 0 ? Math.round((value / total) * 100) : 0}% of {total}</div>
      <div className="text-sm font-medium text-gray-700 mt-1">{label}</div>
    </div>
  )
}

export default function ScorecardPanel({ job, interviews }) {
  const analyzed = interviews.filter((iv) => iv.status === "analyzed" && iv.analysis)

  if (analyzed.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
        <p className="text-gray-500 text-sm">Complete at least one interview analysis to see your scorecard.</p>
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-bold text-blue-700 mb-1">Interview Scorecard</h2>
        <p className="text-sm text-gray-500">
          Aggregated assessment across {analyzed.length} completed interview{analyzed.length > 1 ? "s" : ""} and {allQuestions.length} questions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-4">Overall Performance</h3>
        <div className="flex justify-around">
          <ScoreRing label="Strong" value={strong.length} total={allQuestions.length} color="green" />
          <ScoreRing label="Adequate" value={adequate.length} total={allQuestions.length} color="yellow" />
          <ScoreRing label="Needs Work" value={needsImprovement.length} total={allQuestions.length} color="red" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-3">Question Breakdown</h3>
        <div className="space-y-2">
          {allQuestions.map((q, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
              <div className="shrink-0 mt-0.5">
                {q.assessment === "strong" && <Badge color="green">Strong</Badge>}
                {q.assessment === "adequate" && <Badge color="yellow">Adequate</Badge>}
                {q.assessment === "needs-improvement" && <Badge color="red">Needs Work</Badge>}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800">{q.question}</p>
                <p className="text-xs text-gray-400 mt-0.5">{q.interviewer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-green-200 p-6">
        <h3 className="text-md font-bold text-green-800 mb-3">What Went Well</h3>
        <ul className="space-y-2">
          {allStrengths.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 shrink-0 mt-0.5">+</span>{s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
        <h3 className="text-md font-bold text-red-800 mb-3">What Needs Work</h3>
        <ul className="space-y-2">
          {allImprovements.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-red-400 shrink-0 mt-0.5">-</span>{s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6">
        <h3 className="text-md font-bold text-blue-800 mb-3">Interviewer Signals</h3>
        <ul className="space-y-2">
          {allSignals.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-blue-400 shrink-0 mt-0.5">&bull;</span>
              <div>{s.text}<span className="text-xs text-gray-400 ml-1">({s.interviewer})</span></div>
            </li>
          ))}
        </ul>
      </div>

      {job?.gapAnalysis && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-3">Skills Gap Status</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <h4 className="text-xs font-bold text-green-800 mb-2">Strong Match</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.strongMatch?.map((item, i) => (
                  <li key={i} className="text-xs text-green-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <h4 className="text-xs font-bold text-yellow-800 mb-2">Partial Match</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.partialMatch?.map((item, i) => (
                  <li key={i} className="text-xs text-yellow-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <h4 className="text-xs font-bold text-red-800 mb-2">Gap</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.gap?.map((item, i) => (
                  <li key={i} className="text-xs text-red-700">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
