import { useState } from "react"
import { analyzeTranscript } from "../lib/gemini"

function AssessmentBadge({ assessment }) {
  const config = {
    strong: { label: "Strong", className: "bg-green-100 text-green-700" },
    adequate: { label: "Adequate", className: "bg-yellow-100 text-yellow-700" },
    "needs-improvement": { label: "Needs Work", className: "bg-red-100 text-red-700" },
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
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800">{item.question}</p>
          <div className="flex items-center gap-2 mt-1">
            <AssessmentBadge assessment={item.assessment} />
            <span className="text-xs text-gray-400">{isExpanded ? "Collapse" : "Expand"} analysis</span>
          </div>
        </div>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3 ml-9">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Your Response</p>
            <p className="text-sm text-gray-700">{item.myResponse}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="text-xs font-bold text-blue-800 mb-1">Coach Notes</p>
            <p className="text-sm text-blue-700">{item.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewReviewPanel({ interview, job, previousInterviews, onSetTranscript, onSetAnalysis, onSetStatus, onClearAnalysis, onDeleteInterview, apiKey }) {
  const [expandedQuestion, setExpandedQuestion] = useState(null)
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-700 mb-1">
              {interview.interviewerName}
            </h2>
            <p className="text-sm text-gray-500">{interview.interviewerRole}</p>
          </div>
          <div className="flex items-start gap-3">
            {analysis && (
              <div className="flex gap-2 flex-wrap">
                {assessmentCounts.strong > 0 && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    {assessmentCounts.strong} Strong
                  </span>
                )}
                {assessmentCounts.adequate > 0 && (
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
                    {assessmentCounts.adequate} Adequate
                  </span>
                )}
                {assessmentCounts["needs-improvement"] > 0 && (
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
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
              className="text-gray-300 hover:text-red-400 cursor-pointer text-sm shrink-0"
              title="Delete interview"
            >
              ✕
            </button>
          </div>
        </div>
        {analysis && (
          <>
            <p className="text-sm text-gray-600 mt-3">{analysis.overallTone}</p>
            <p className="text-sm text-gray-700 mt-2">{analysis.summary}</p>
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
            className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 px-3 py-1.5 rounded cursor-pointer"
          >
            Re-analyze
          </button>
        </div>
      )}

      {/* Transcript Input — shown until analyzed */}
      {interview.status !== "analyzed" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-2">Paste Interview Transcript</h3>
          <p className="text-xs text-gray-500 mb-3">
            Paste the full transcript or your notes from this interview. The more detail, the better the analysis.
          </p>
          <textarea
            value={interview.transcriptRaw || ""}
            onChange={(e) => onSetTranscript(interview.id, e.target.value)}
            placeholder="Paste transcript here..."
            rows={10}
            className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3 mt-3">{error}</p>
          )}
          <button
            onClick={handleAnalyze}
            disabled={loading || !interview.transcriptRaw?.trim()}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Analyzing..." : "Analyze This Interview"}
          </button>
        </div>
      )}

      {/* Analysis results */}
      {analysis && (
        <>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-md font-bold text-gray-800 mb-4">Question-by-Question Breakdown</h3>
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-md font-bold text-green-700 mb-3">What Went Well</h3>
              <ul className="space-y-2">
                {analysis.strengths.map((s, i) => (
                  <li key={i} className="text-sm text-gray-600 flex">
                    <span className="text-green-500 mr-2 shrink-0">+</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-md font-bold text-red-700 mb-3">Areas to Improve</h3>
              <ul className="space-y-2">
                {analysis.areasForImprovement.map((a, i) => (
                  <li key={i} className="text-sm text-gray-600 flex">
                    <span className="text-red-500 mr-2 shrink-0">-</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-md font-bold text-gray-800 mb-3">Interviewer Signals</h3>
            <ul className="space-y-2">
              {analysis.interviewerSignals.map((signal, i) => (
                <li key={i} className="text-sm text-gray-600 flex">
                  <span className="text-yellow-500 mr-2 shrink-0">*</span>{signal}
                </li>
              ))}
            </ul>
          </div>

          {analysis.postReflection && (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-bold text-gray-700 mb-2">Post-Interview Reflection</h3>
              <p className="text-sm text-gray-600 italic">"{analysis.postReflection}"</p>
            </div>
          )}

          {analysis.nextSteps?.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-md font-bold text-green-800 mb-1">Next Steps</h3>
              <p className="text-xs text-green-600 mb-3">Do these before your next interview.</p>
              <ul className="space-y-2">
                {analysis.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                    <span className="text-green-500 font-bold shrink-0">{i + 1}.</span>
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
