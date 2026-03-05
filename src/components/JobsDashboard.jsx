import { useMemo } from "react"

const STATUS_CONFIG = {
  active:    { label: "Active",        className: "text-success-text bg-success-subtle border-success/20" },
  offer:     { label: "Offer",         className: "text-warning-text bg-warning-subtle border-warning/20" },
  rejected:  { label: "Rejected",      className: "text-danger-text bg-danger-subtle border-danger/20" },
  "on-hold": { label: "On Hold",       className: "text-text-muted bg-surface-inset border-border" },
}

function getNextInterviewDate(interviews) {
  const now = new Date()
  const upcoming = interviews
    .filter((iv) => iv.scheduledAt && new Date(iv.scheduledAt + "T12:00:00") >= now)
    .map((iv) => new Date(iv.scheduledAt + "T12:00:00"))
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

export default function JobsDashboard({ roles, companies, allInterviews, profile, onSelect, onNew, onDelete, onSetRoleStatus, onExport, onImport, onShowProfile, onShowStoryBank }) {
  // Build role list with company info and interviews attached
  const roleList = useMemo(() => {
    return Object.values(roles)
      .map((role) => {
        const company = companies[role.companyId]
        const interviews = Object.values(allInterviews).filter((iv) => iv.roleId === role.id)
        return { ...role, companyName: company?.name || "Unknown", interviews }
      })
      .sort((a, b) => b.createdAt - a.createdAt)
  }, [roles, companies, allInterviews])

  // Group by company
  const companyGroups = useMemo(() => {
    const groups = {}
    for (const role of roleList) {
      const key = role.companyId
      if (!groups[key]) {
        groups[key] = { companyName: role.companyName, roles: [] }
      }
      groups[key].roles.push(role)
    }
    return Object.values(groups)
  }, [roleList])

  // Aggregate insights across all analyzed interviews
  const { allStrengths, allAreas } = useMemo(() => {
    const strengths = []
    const areas = []
    for (const role of roleList) {
      for (const iv of role.interviews) {
        if (iv.status === "analyzed" && iv.analysis) {
          const company = role.companyName
          ;(iv.analysis.strengths || []).forEach((s) => strengths.push({ text: s, company }))
          ;(iv.analysis.areasForImprovement || []).forEach((a) => areas.push({ text: a, company }))
        }
      }
    }
    return { allStrengths: strengths, allAreas: areas }
  }, [roleList])

  const hasInsights = allStrengths.length > 0 || allAreas.length > 0

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Profile Bar */}
      {profile && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent text-text-inverse flex items-center justify-center text-sm font-bold shrink-0">
              {(profile.name || "?").split(" ").map(n => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">{profile.name}</p>
              <p className="text-xs text-text-muted">{profile.headline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onShowProfile}
              className="text-xs font-medium text-accent-text bg-accent-subtle px-3 py-1.5 rounded-lg hover:bg-accent/10 cursor-pointer transition-colors"
            >
              Profile
            </button>
            <button
              onClick={onShowStoryBank}
              className="text-xs font-medium text-accent-text bg-accent-subtle px-3 py-1.5 rounded-lg hover:bg-accent/10 cursor-pointer transition-colors"
            >
              Story Bank
              {profile.storyBank?.length > 0 && (
                <span className="ml-1 text-text-muted">({profile.storyBank.length})</span>
              )}
            </button>
          </div>
        </div>
      )}

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

      {/* Role cards grouped by company */}
      {roleList.length === 0 ? (
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
        <div className="space-y-6">
          {companyGroups.map((group) => (
            <div key={group.companyName}>
              <h3 className="text-sm font-bold font-display text-text-muted uppercase tracking-wide mb-3">
                {group.companyName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.roles.map((role) => {
                  const analyzed = role.interviews.filter((iv) => iv.status === "analyzed").length
                  const total = role.interviews.length
                  const nextDate = getNextInterviewDate(role.interviews)
                  const appStatus = role.appStatus || "active"
                  const statusCfg = STATUS_CONFIG[appStatus]

                  return (
                    <div
                      key={role.id}
                      className="bg-surface-card rounded-xl shadow-card border border-border p-5 card-hover flex flex-col"
                    >
                      {/* Title row */}
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold font-display text-accent-text text-base leading-tight">
                          {role.roleTitle}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (window.confirm(`Delete prep for ${role.companyName} — ${role.roleTitle}?`)) {
                              onDelete(role.id)
                            }
                          }}
                          className="text-text-muted/50 hover:text-danger text-sm ml-2 shrink-0 cursor-pointer"
                          title="Delete"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="text-sm text-text-muted mb-3">{role.companyName}</p>

                      {/* Status select */}
                      <select
                        value={appStatus}
                        onChange={(e) => { e.stopPropagation(); onSetRoleStatus(role.id, e.target.value) }}
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
                          onClick={() => onSelect(role.id)}
                          className="w-full bg-accent-subtle text-accent-text border border-accent/20 rounded py-2 text-sm font-medium hover:bg-accent/10 transition-colors cursor-pointer"
                        >
                          Continue →
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
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
