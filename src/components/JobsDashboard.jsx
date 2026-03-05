const STATUS_CONFIG = {
  active:    { label: "Active",        className: "text-success-text bg-success-subtle border-success/20" },
  offer:     { label: "Offer",         className: "text-warning-text bg-warning-subtle border-warning/20" },
  rejected:  { label: "Rejected",      className: "text-danger-text bg-danger-subtle border-danger/20" },
  "on-hold": { label: "On Hold",       className: "text-text-muted bg-surface-inset border-border" },
}

function getNextInterviewDate(interviews) {
  const now = new Date()
  const upcoming = interviews
    .filter((iv) => iv.scheduledAt && new Date(iv.scheduledAt) >= now)
    .map((iv) => new Date(iv.scheduledAt))
    .sort((a, b) => a - b)
  return upcoming[0] || null
}

function formatDate(date) {
  const now = new Date()
  const diffMs = date - now
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Tomorrow"
  if (diffDays <= 7) return `In ${diffDays} days`
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

export default function JobsDashboard({ jobs, onSelect, onNew, onDelete, onSetJobStatus, onExport, onImport }) {
  const jobList = Object.values(jobs).sort((a, b) => b.createdAt - a.createdAt)

  // Aggregate insights across all analyzed interviews
  const allStrengths = []
  const allAreas = []
  for (const savedJob of jobList) {
    for (const iv of savedJob.interviews) {
      if (iv.status === "analyzed" && iv.analysis) {
        const company = savedJob.job.company
        ;(iv.analysis.strengths || []).forEach((s) => allStrengths.push({ text: s, company }))
        ;(iv.analysis.areasForImprovement || []).forEach((a) => allAreas.push({ text: a, company }))
      }
    }
  }

  const hasInsights = allStrengths.length > 0 || allAreas.length > 0

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold font-display text-text-primary">Your Interview Preps</h2>
        <div className="flex items-center gap-2">
          <label className="text-xs text-text-muted hover:text-text-primary cursor-pointer px-3 py-2 rounded border border-border bg-surface-card hover:bg-surface-inset transition-colors">
            Import
            <input
              type="file"
              accept=".json"
              className="hidden"
              onChange={(e) => { onImport(e.target.files[0]); e.target.value = "" }}
            />
          </label>
          <button
            onClick={onExport}
            className="text-xs text-text-muted hover:text-text-primary cursor-pointer px-3 py-2 rounded border border-border bg-surface-card hover:bg-surface-inset transition-colors"
          >
            Export
          </button>
          <button
            onClick={onNew}
            className="bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-accent-hover cursor-pointer"
          >
            + New Prep
          </button>
        </div>
      </div>

      {/* Job cards */}
      {jobList.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted mb-6 text-sm">
            No saved preps yet. Start with a job description and your resume.
          </p>
          <button
            onClick={onNew}
            className="bg-accent text-white px-6 py-3 rounded font-medium hover:bg-accent-hover cursor-pointer"
          >
            Start Your First Prep
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobList.map((savedJob) => {
            const analyzed = savedJob.interviews.filter((iv) => iv.status === "analyzed").length
            const total = savedJob.interviews.length
            const nextDate = getNextInterviewDate(savedJob.interviews)
            const appStatus = savedJob.appStatus || "active"
            const statusCfg = STATUS_CONFIG[appStatus]

            return (
              <div
                key={savedJob.id}
                className="bg-surface-card rounded-xl shadow-card border border-border p-5 card-hover flex flex-col"
              >
                {/* Title row */}
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold font-display text-accent-text text-base leading-tight">
                    {savedJob.job.company}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (window.confirm(`Delete prep for ${savedJob.job.company}?`)) {
                        onDelete(savedJob.id)
                      }
                    }}
                    className="text-text-muted/50 hover:text-danger text-sm ml-2 shrink-0 cursor-pointer"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-sm text-text-muted mb-3">{savedJob.job.roleTitle}</p>

                {/* Status select */}
                <select
                  value={appStatus}
                  onChange={(e) => { e.stopPropagation(); onSetJobStatus(savedJob.id, e.target.value) }}
                  onClick={(e) => e.stopPropagation()}
                  className={`text-xs font-medium px-2 py-1 rounded border cursor-pointer mb-3 w-fit ${statusCfg.className}`}
                >
                  <option value="active">Active</option>
                  <option value="offer">Offer Received</option>
                  <option value="rejected">Rejected</option>
                  <option value="on-hold">On Hold</option>
                </select>

                {/* Interview count + next date */}
                <div className="text-xs text-text-muted mb-1">
                  {total === 0
                    ? "No interviews yet"
                    : `${analyzed} of ${total} interview${total !== 1 ? "s" : ""} analyzed`}
                </div>
                {nextDate && (
                  <div className="text-xs font-medium text-accent-text mb-3">
                    Next: {formatDate(nextDate)}
                  </div>
                )}

                <div className="mt-auto pt-3">
                  <button
                    onClick={() => onSelect(savedJob.id)}
                    className="w-full bg-accent-subtle text-accent-text border border-accent/20 rounded py-2 text-sm font-medium hover:bg-accent/10 transition-colors cursor-pointer"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Overall insights */}
      {hasInsights && (
        <div>
          <h2 className="text-lg font-bold font-display text-text-primary mb-4">Overall Interview Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allStrengths.length > 0 && (
              <div className="bg-surface-card rounded-xl shadow-card border border-border p-5">
                <h3 className="text-sm font-bold font-display text-success-text mb-3">What You're Doing Well</h3>
                <ul className="space-y-3">
                  {allStrengths.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-success-text font-bold shrink-0 mt-0.5">+</span>
                      <div>
                        <p className="text-sm text-text-primary">{item.text}</p>
                        <p className="text-xs text-text-muted mt-0.5">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {allAreas.length > 0 && (
              <div className="bg-surface-card rounded-xl shadow-card border border-border p-5">
                <h3 className="text-sm font-bold font-display text-danger mb-3">What Needs Work</h3>
                <ul className="space-y-3">
                  {allAreas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-danger font-bold shrink-0 mt-0.5">–</span>
                      <div>
                        <p className="text-sm text-text-primary">{item.text}</p>
                        <p className="text-xs text-text-muted mt-0.5">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
