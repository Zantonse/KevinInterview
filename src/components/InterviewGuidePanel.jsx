import { useState } from "react"

const STAR_KEYS = ["situation", "task", "action", "result"]

function QuestionCard({ question, index, isExpanded, onToggle, drafts, onDraftChange }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{question.question}</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-gray-400">Click to {isExpanded ? "collapse" : "expand"} prep guidance</p>
            {STAR_KEYS.some((k) => drafts[k]) && (
              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Draft saved</span>
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-xs font-bold text-yellow-800 mb-1">Why This Will Come Up</p>
            <p className="text-sm text-yellow-700">{question.why}</p>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-700 mb-2">Structure Your Answer (STAR)</p>
            <div className="space-y-3">
              {STAR_KEYS.map((key) => (
                <div key={key} className="bg-gray-50 rounded p-3">
                  <p className="text-xs font-bold text-blue-700 uppercase mb-1">{key}</p>
                  <p className="text-xs text-gray-500 mb-2">{question.starPrompt?.[key]}</p>
                  <textarea
                    value={drafts[key] || ""}
                    onChange={(e) => onDraftChange(index, key, e.target.value)}
                    placeholder={`My ${key.charAt(0).toUpperCase() + key.slice(1)}...`}
                    rows={2}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-2">
        <h2 className="text-lg font-bold text-blue-700 mb-1">Interview Question Guide</h2>
        <p className="text-sm text-gray-500">
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
