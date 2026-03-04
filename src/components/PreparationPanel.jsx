function PriorityBadge({ priority }) {
  const colors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Required: "bg-blue-100 text-blue-700",
    "Nice-to-have": "bg-gray-100 text-gray-600",
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[priority] || "bg-gray-100"}`}>
      {priority}
    </span>
  )
}

function GapBadge({ type }) {
  const config = {
    strong: { label: "Strong Match", className: "bg-green-100 text-green-800 border-green-200" },
    partial: { label: "Partial Match", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    gap: { label: "Gap", className: "bg-red-100 text-red-800 border-red-200" },
  }
  const { label, className } = config[type]
  return <span className={`text-xs font-bold px-2 py-1 rounded border ${className}`}>{label}</span>
}

function formatScheduledDate(dateStr) {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export default function PreparationPanel({
  job,
  interviews,
  prepChecklist,
  onTogglePrepItem,
  interviewerNotes,
  onSetInterviewerNote,
}) {
  return (
    <div className="space-y-6">
      {/* Role Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-blue-700 mb-2">
          {job.roleTitle} — {job.company}
        </h2>
        <p className="text-sm text-gray-700 mt-3 leading-relaxed">
          {job.jobDescriptionRaw?.slice(0, 400)}{job.jobDescriptionRaw?.length > 400 ? "..." : ""}
        </p>
      </div>

      {/* Requirements + Gap Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Role Requirements</h3>
          <ul className="space-y-3">
            {job.requirements?.map((req) => (
              <li key={req.skill} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{req.skill}</span>
                <PriorityBadge priority={req.priority} />
              </li>
            ))}
          </ul>
          <h4 className="text-sm font-semibold text-gray-700 mt-6 mb-2">Key Responsibilities</h4>
          <ul className="space-y-1">
            {job.responsibilities?.map((r) => (
              <li key={r} className="text-sm text-gray-600 flex">
                <span className="text-blue-400 mr-2 shrink-0">-</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Gap Analysis</h3>
          <div className="space-y-4">
            <div>
              <GapBadge type="strong" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.strongMatch?.map((item) => (
                  <li key={item} className="text-sm text-gray-600">- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <GapBadge type="partial" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.partialMatch?.map((item) => (
                  <li key={item} className="text-sm text-gray-600">- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <GapBadge type="gap" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.gap?.map((item) => (
                  <li key={item} className="text-sm text-gray-600">- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prep Focus Checklist */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-1">Top Prep Focus Areas</h3>
        <p className="text-xs text-gray-500 mb-3">Check off as you prepare.</p>
        <ul className="space-y-2">
          {job.prepFocus?.map((item, i) => {
            const checked = !!(prepChecklist || {})[i]
            return (
              <li
                key={i}
                onClick={() => onTogglePrepItem(i)}
                className="flex items-start gap-3 text-sm cursor-pointer group"
              >
                <span className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors
                  ${checked ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 group-hover:border-blue-400"}`}
                >
                  {checked && (
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 10">
                      <path d="M1.5 5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className={checked ? "line-through text-gray-400" : "text-gray-700"}>
                  {item}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Interview Progress */}
      {interviews.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Interview Progress</h3>
          <div className="space-y-3">
            {interviews.map((iv, i) => (
              <div key={iv.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                  ${iv.status === "analyzed" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {iv.interviewerName} — <span className="text-gray-500 font-normal">{iv.interviewerRole}</span>
                  </p>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs ${iv.status === "analyzed" ? "text-green-600" : "text-yellow-600"}`}>
                      {iv.status === "analyzed" ? "Analyzed" : iv.status === "analyzing" ? "Analyzing..." : "Pending"}
                    </span>
                    {iv.scheduledAt && (
                      <span className="text-xs text-gray-400">{formatScheduledDate(iv.scheduledAt)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interviewer Notes */}
      {interviews.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-1">Interviewer Notes</h3>
          <p className="text-xs text-gray-500 mb-4">Research each interviewer. Notes save automatically.</p>
          <div className="space-y-4">
            {interviews.map((iv) => (
              <div key={iv.id} className="border border-gray-100 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-800">{iv.interviewerName}</p>
                <p className="text-xs text-gray-500 mb-2">{iv.interviewerRole}</p>
                <textarea
                  value={(interviewerNotes || {})[iv.id] || ""}
                  onChange={(e) => onSetInterviewerNote(iv.id, e.target.value)}
                  placeholder={`Notes on ${iv.interviewerName}...`}
                  rows={2}
                  className="w-full border border-gray-200 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
