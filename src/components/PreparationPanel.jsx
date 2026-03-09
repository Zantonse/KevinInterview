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
  // Append T12:00 to avoid UTC midnight → previous day in US timezones
  const d = new Date(dateStr.includes("T") ? dateStr : dateStr + "T12:00:00")
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

      {/* Interview Narratives & Ready Answers */}
      {job.interviewNarratives && (
        <div className="space-y-4">
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-1">Interview Narratives & Ready Answers</h3>
            <p className="text-xs text-text-muted font-body">
              Polished narratives and pre-built answers. Practice these out loud.
            </p>
          </div>

          {/* About Me */}
          {job.interviewNarratives.aboutMe && (
            <details className="bg-surface-card rounded-xl shadow-card border border-border border-l-4 border-l-accent group card-hover">
              <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-base text-text-primary">"Tell me about yourself"</h4>
                  <p className="text-xs text-text-muted font-body">{job.interviewNarratives.aboutMe.version}</p>
                </div>
              </summary>
              <div className="px-5 pb-5 pt-2 ml-7 space-y-3">
                <div className="bg-surface-inset rounded-lg p-4">
                  <p className="text-sm text-text-primary font-body whitespace-pre-line">{job.interviewNarratives.aboutMe.text}</p>
                </div>
                <div className="bg-accent-subtle border border-accent/20 rounded p-3">
                  <p className="text-xs font-bold text-accent mb-1">Coaching Notes</p>
                  <p className="text-xs text-accent-text font-body">{job.interviewNarratives.aboutMe.notes}</p>
                </div>
              </div>
            </details>
          )}

          {/* Full Story */}
          {job.interviewNarratives.fullStory && (
            <details className="bg-surface-card rounded-xl shadow-card border border-border border-l-4 border-l-accent group card-hover">
              <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-base text-text-primary">"Walk me through your Collibra experience"</h4>
                  <p className="text-xs text-text-muted font-body">{job.interviewNarratives.fullStory.version}</p>
                </div>
              </summary>
              <div className="px-5 pb-5 pt-2 ml-7 space-y-3">
                <div className="bg-surface-inset rounded-lg p-4">
                  <p className="text-sm text-text-primary font-body whitespace-pre-line">{job.interviewNarratives.fullStory.text}</p>
                </div>
                <div className="bg-accent-subtle border border-accent/20 rounded p-3">
                  <p className="text-xs font-bold text-accent mb-1">Coaching Notes</p>
                  <p className="text-xs text-accent-text font-body">{job.interviewNarratives.fullStory.notes}</p>
                </div>
              </div>
            </details>
          )}

          {/* Ready Answers */}
          {job.interviewNarratives.interviewReadyAnswers?.length > 0 && (
            <details className="bg-surface-card rounded-xl shadow-card border border-border border-l-4 border-l-info group card-hover">
              <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-base text-text-primary">Ready Answers</h4>
                  <p className="text-xs text-text-muted font-body">{job.interviewNarratives.interviewReadyAnswers.length} pre-built answers to common questions</p>
                </div>
              </summary>
              <div className="px-5 pb-5 pt-2 ml-7 space-y-3">
                {job.interviewNarratives.interviewReadyAnswers.map((qa, i) => (
                  <div key={i} className="bg-surface-inset rounded-lg p-4">
                    <p className="text-xs font-bold text-accent uppercase mb-2 font-body">"{qa.question}"</p>
                    <p className="text-sm text-text-primary font-body">{qa.answer}</p>
                  </div>
                ))}
              </div>
            </details>
          )}

          {/* Emphasis Strategy */}
          {job.interviewNarratives.emphasisStrategy?.length > 0 && (
            <details className="bg-surface-card rounded-xl shadow-card border border-border border-l-4 border-l-warning group card-hover">
              <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-base text-text-primary">What to Emphasize vs. Deflect</h4>
                  <p className="text-xs text-text-muted font-body">Know what to lead with, what to be honest about, and what to bridge away from</p>
                </div>
              </summary>
              <div className="px-5 pb-5 pt-2 ml-7 space-y-2">
                {job.interviewNarratives.emphasisStrategy.map((item, i) => {
                  const approachConfig = {
                    lead: { label: "Lead", className: "bg-success-subtle text-success-text" },
                    honest: { label: "Be Honest", className: "bg-info-subtle text-info-text" },
                    bridge: { label: "Bridge", className: "bg-warning-subtle text-warning-text" },
                    deflect: { label: "Deflect", className: "bg-danger-subtle text-danger-text" },
                  }
                  const approach = approachConfig[item.approach] || approachConfig.honest
                  return (
                    <div key={i} className="bg-surface-inset rounded-lg p-3 flex items-start gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5 ${approach.className}`}>
                        {approach.label}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary font-body">{item.topic}</p>
                        <p className="text-xs text-text-muted font-body mt-0.5">{item.notes}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </details>
          )}
        </div>
      )}

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

      {/* Technical Study Guide */}
      {job.technicalStudyGuide?.length > 0 && (
        <div className="space-y-4">
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-1">Technical Study Guide</h3>
            <p className="text-xs text-text-muted font-body">
              Domain-by-domain breakdown of what the CE interview tests. Your current level and what to study.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-success-subtle text-success-text">Strong = you know this</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-warning-subtle text-warning-text">Partial = some gaps</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-danger-subtle text-danger-text">Gap = need to learn</span>
            </div>
          </div>
          {job.technicalStudyGuide.map((section, i) => {
            const levelConfig = {
              strong: { label: "Strong", className: "bg-success-subtle text-success-text" },
              partial: { label: "Partial", className: "bg-warning-subtle text-warning-text" },
              gap: { label: "Gap", className: "bg-danger-subtle text-danger-text" },
            }
            const depthConfig = {
              deep: { label: "Deep", className: "bg-info-subtle text-info-text" },
              conceptual: { label: "Conceptual", className: "bg-accent-subtle text-accent" },
              broad: { label: "Broad", className: "bg-surface-inset text-text-muted" },
              applied: { label: "Applied", className: "bg-warning-subtle text-warning-text" },
            }
            const level = levelConfig[section.kevinLevel] || levelConfig.partial
            const depth = depthConfig[section.depth] || depthConfig.conceptual
            const borderColor = section.kevinLevel === "strong"
              ? "border-l-success"
              : section.kevinLevel === "gap"
                ? "border-l-danger"
                : "border-l-warning"

            return (
              <details key={i} className={`bg-surface-card rounded-xl shadow-card border border-border border-l-4 ${borderColor} group card-hover`}>
                <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                  <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="font-display text-base text-text-primary">{section.domain}</h4>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${level.className}`}>
                        {level.label}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${depth.className}`}>
                        {depth.label} depth needed
                      </span>
                    </div>
                    <p className="text-xs text-text-muted font-body">{section.topics.length} topics</p>
                  </div>
                </summary>
                <div className="px-5 pb-5 pt-2 ml-7">
                  <div className="space-y-3">
                    {section.topics.map((t, j) => {
                      const statusIcon = t.status === "know"
                        ? { symbol: "+", color: "text-success" }
                        : { symbol: "~", color: "text-warning-text" }
                      return (
                        <div key={j} className="bg-surface-inset rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <span className={`font-mono font-bold shrink-0 mt-0.5 ${statusIcon.color}`}>
                              {statusIcon.symbol}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-text-primary font-body">{t.topic}</p>
                              {t.notes && (
                                <p className="text-xs text-text-muted font-body mt-1">{t.notes}</p>
                              )}
                            </div>
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded shrink-0 ${t.status === "know" ? "bg-success-subtle text-success-text" : "bg-warning-subtle text-warning-text"}`}>
                              {t.status === "know" ? "Know" : "Study"}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </details>
            )
          })}
        </div>
      )}

      {/* Questions to Ask Interviewers */}
      {job.questionsToAsk?.length > 0 && (
        <div className="space-y-4">
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-1">Questions to Ask the Interviewer</h3>
            <p className="text-xs text-text-muted font-body">
              Organized by interview round. Asking strong questions signals preparation and genuine interest.
            </p>
          </div>
          {job.questionsToAsk.map((section, i) => (
            <details key={i} className="bg-surface-card rounded-xl shadow-card border border-border border-l-4 border-l-accent group card-hover">
              <summary className="p-5 cursor-pointer select-none flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-display text-base text-text-primary">{section.round}</h4>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-subtle text-accent">
                      {section.questions.length} questions
                    </span>
                  </div>
                  <p className="text-xs text-text-muted font-body">{section.why}</p>
                </div>
              </summary>
              <div className="px-5 pb-5 pt-2 ml-7">
                <div className="space-y-3">
                  {section.questions.map((q, j) => (
                    <div key={j} className="bg-surface-inset rounded-lg p-4">
                      <p className="text-sm font-medium text-text-primary font-body mb-1">"{q.question}"</p>
                      {q.tip && (
                        <p className="text-xs text-accent font-body">
                          <span className="font-bold">Why this works:</span> {q.tip}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
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
                  value={iv.interviewerNotes || ""}
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
