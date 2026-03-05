function PriorityBadge({ priority }) {
  const colors = {
    High: "bg-danger-subtle text-danger-text",
    Medium: "bg-warning-subtle text-warning-text",
    Required: "bg-info-subtle text-info-text",
    "Nice-to-have": "bg-surface-inset text-text-muted",
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[priority] || "bg-surface-inset text-text-muted"}`}>
      {priority}
    </span>
  )
}

function GapBadge({ type }) {
  const config = {
    strong: { label: "Strong Match", className: "bg-success-subtle text-success-text border-success-text/20" },
    partial: { label: "Partial Match", className: "bg-warning-subtle text-warning-text border-warning-text/20" },
    gap: { label: "Gap", className: "bg-danger-subtle text-danger-text border-danger-text/20" },
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
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h2 className="font-display text-xl text-accent mb-2">
          {job.roleTitle} — {job.company}
        </h2>
        <p className="text-sm text-text-secondary mt-3 leading-relaxed font-body">
          {job.jobDescriptionRaw?.slice(0, 400)}{job.jobDescriptionRaw?.length > 400 ? "..." : ""}
        </p>
      </div>

      {/* Requirements + Gap Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-4">Role Requirements</h3>
          <ul className="space-y-3">
            {job.requirements?.map((req) => (
              <li key={req.skill} className="flex items-center justify-between text-sm">
                <span className="text-text-secondary font-body">{req.skill}</span>
                <PriorityBadge priority={req.priority} />
              </li>
            ))}
          </ul>
          <h4 className="text-sm font-semibold text-text-primary mt-6 mb-2 font-body">Key Responsibilities</h4>
          <ul className="space-y-1">
            {job.responsibilities?.map((r) => (
              <li key={r} className="text-sm text-text-secondary flex font-body">
                <span className="text-accent mr-2 shrink-0">-</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-4">Gap Analysis</h3>
          <div className="space-y-4">
            <div className="bg-accent-subtle border-l-3 border-accent rounded-lg p-4">
              <GapBadge type="strong" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.strongMatch?.map((item) => (
                  <li key={item} className="text-sm text-text-secondary font-body">- {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-warning-subtle border-l-3 border-warning-text rounded-lg p-4">
              <GapBadge type="partial" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.partialMatch?.map((item) => (
                  <li key={item} className="text-sm text-text-secondary font-body">- {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-danger-subtle border-l-3 border-danger-text rounded-lg p-4">
              <GapBadge type="gap" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.gap?.map((item) => (
                  <li key={item} className="text-sm text-text-secondary font-body">- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prep Focus Checklist */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h3 className="font-display text-xl text-text-primary mb-1">Top Prep Focus Areas</h3>
        <p className="text-xs text-text-muted mb-4 font-body">Check off as you prepare.</p>
        <div className="bg-surface-inset rounded-lg p-4">
          <ul className="space-y-2">
            {job.prepFocus?.map((item, i) => {
              const checked = !!(prepChecklist || {})[i]
              return (
                <li
                  key={i}
                  onClick={() => onTogglePrepItem(i)}
                  className="flex items-start gap-3 text-sm cursor-pointer group"
                >
                  <span className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors
                    ${checked
                      ? "bg-accent border-accent text-accent-text border"
                      : "border border-border-strong group-hover:border-accent"}`}
                  >
                    {checked && (
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 10">
                        <path d="M1.5 5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className={`font-body ${checked ? "line-through text-text-muted" : "text-text-secondary"}`}>
                    {item}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Learning Guide */}
      {job.learningGuide?.length > 0 && (
        <div className="space-y-4">
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-1">What You Need to Learn</h3>
            <p className="text-xs text-text-muted font-body">
              Targeted study areas based on your profile gaps. Prioritized by urgency.
            </p>
          </div>
          {job.learningGuide.map((section, i) => {
            const borderColor = section.urgency === "critical"
              ? "border-l-danger"
              : section.urgency === "high"
                ? "border-l-warning"
                : "border-l-accent"
            const badgeConfig = {
              critical: { label: "Critical", className: "bg-danger-subtle text-danger-text" },
              high: { label: "High", className: "bg-warning-subtle text-warning-text" },
              medium: { label: "Medium", className: "bg-accent-subtle text-accent" },
            }
            const badge = badgeConfig[section.urgency] || badgeConfig.medium
            return (
              <details key={i} className={`bg-surface-card rounded-xl shadow-card border border-border border-l-4 ${borderColor} group card-hover`}>
                <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                  <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display text-base text-text-primary">{section.category}</h4>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted font-body">{section.why}</p>
                  </div>
                </summary>
                <div className="px-5 pb-5 pt-2 ml-7">
                  <div className="bg-surface-inset rounded-lg p-4">
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-sm text-text-secondary flex items-start gap-2 font-body">
                          <span className="text-accent font-bold shrink-0 mt-0.5">{j + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            )
          })}
        </div>
      )}

      {/* Interview Progress */}
      {interviews.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-4">Interview Progress</h3>
          <div className="space-y-3">
            {interviews.map((iv, i) => (
              <div key={iv.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 font-mono
                  ${iv.status === "analyzed" ? "bg-success-subtle text-success-text" : "bg-surface-inset text-text-muted"}`}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary font-body">
                    {iv.interviewerName} — <span className="text-text-muted font-normal">{iv.interviewerRole}</span>
                  </p>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-body ${iv.status === "analyzed" ? "text-success-text" : "text-warning-text"}`}>
                      {iv.status === "analyzed" ? "Analyzed" : iv.status === "analyzing" ? "Analyzing..." : "Pending"}
                    </span>
                    {iv.scheduledAt && (
                      <span className="text-xs text-text-muted font-body">{formatScheduledDate(iv.scheduledAt)}</span>
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
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-1">Interviewer Notes</h3>
          <p className="text-xs text-text-muted mb-4 font-body">Research each interviewer. Notes save automatically.</p>
          <div className="space-y-4">
            {interviews.map((iv) => (
              <div key={iv.id} className="bg-surface-inset rounded-lg p-4">
                <p className="text-sm font-semibold text-text-primary font-body">{iv.interviewerName}</p>
                <p className="text-xs text-text-muted mb-2 font-body">{iv.interviewerRole}</p>
                <textarea
                  value={(interviewerNotes || {})[iv.id] || ""}
                  onChange={(e) => onSetInterviewerNote(iv.id, e.target.value)}
                  placeholder={`Notes on ${iv.interviewerName}...`}
                  rows={2}
                  className="w-full border border-border rounded-lg p-2 text-sm text-text-secondary bg-surface-card font-body focus:outline-none focus:ring-2 focus:ring-accent resize-y placeholder:text-text-muted"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
