export default function ProfilePanel({ profile }) {
  if (!profile) {
    return (
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-10 text-center">
        <p className="text-text-muted text-sm">No profile data yet.</p>
      </div>
    )
  }

  const storyCount = profile.storyBank?.length || 0

  return (
    <div className="space-y-6">
      {/* Professional Identity */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-accent text-text-inverse flex items-center justify-center text-lg font-bold shrink-0">
            {(profile.name || "?").split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <h2 className="font-display text-2xl text-accent">{profile.name || "Candidate Profile"}</h2>
            {profile.headline && (
              <p className="text-sm text-text-secondary leading-relaxed mt-1">{profile.headline}</p>
            )}
            {profile.location && (
              <p className="text-xs text-text-muted mt-1">{profile.location}</p>
            )}
          </div>
        </div>
      </div>

      {/* Career Summary */}
      {profile.careerSummary && (
        <div className="bg-accent-subtle border border-accent/20 rounded-xl p-6">
          <h3 className="text-xs font-bold text-accent-text uppercase tracking-wide mb-2">Career Summary</h3>
          <p className="text-sm text-text-primary leading-relaxed">{profile.careerSummary}</p>
        </div>
      )}

      {/* Key Metrics */}
      {profile.keyMetrics?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {profile.keyMetrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold font-mono text-accent">{metric.value}</div>
                <div className="text-xs font-semibold text-text-primary mt-1">{metric.label}</div>
                <div className="text-[10px] text-text-muted mt-0.5">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Career Arc */}
      {profile.careerArc?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-4">Career Arc</h3>
          <div className="space-y-5">
            {profile.careerArc.map((role, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-accent/30">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="flex items-baseline gap-2 mb-1">
                  <h4 className="text-sm font-bold text-text-primary">{role.title}</h4>
                  <span className="text-xs text-text-muted">— {role.company}</span>
                </div>
                <p className="text-xs text-text-muted mb-2">{role.dates}</p>
                {role.bullets?.length > 0 && (
                  <ul className="space-y-1.5">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent shrink-0 mt-0.5">-</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Strengths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {profile.skills?.length > 0 && (
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-3">Skills & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-subtle text-accent-text border border-accent/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {profile.strengths?.length > 0 && (
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-3">Differentiators</h3>
            <ul className="space-y-2.5">
              {profile.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-success-text shrink-0 mt-0.5 font-bold">+</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Education */}
      {profile.education?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-3">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profile.education.map((ed, i) => (
              <div key={i} className="bg-surface-inset rounded-lg p-4">
                <p className="text-sm font-semibold text-text-primary">{ed.degree}</p>
                <p className="text-xs text-text-muted mt-1">{ed.institution}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Growth Areas + Story Bank Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {profile.growthAreas?.length > 0 && (
          <div className="bg-warning-subtle border border-warning/20 rounded-xl p-6">
            <h3 className="font-display text-xl text-warning-text mb-1">Growth Areas</h3>
            <p className="text-xs text-warning-text/70 mb-3">Areas to address proactively in interviews.</p>
            <ul className="space-y-2">
              {profile.growthAreas.map((area, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                  <span className="text-warning-text shrink-0 mt-0.5 font-bold">!</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {storyCount > 0 && (
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="font-display text-xl text-text-primary mb-1">Story Bank</h3>
            <p className="text-xs text-text-muted mb-3">{storyCount} STAR {storyCount === 1 ? "story" : "stories"} prepared. Use the Story Bank tab to edit.</p>
            <div className="space-y-2">
              {profile.storyBank.map((story) => (
                <div key={story.id} className="bg-surface-inset rounded-lg px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{story.title}</p>
                    <div className="flex gap-1.5 mt-1">
                      {(story.themes || []).map((t) => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-accent-subtle text-accent-text">{t}</span>
                      ))}
                    </div>
                  </div>
                  {["situation", "task", "action", "result"].some(k => story[k]?.trim()) && (
                    <span className="text-xs bg-success-subtle text-success-text px-2 py-0.5 rounded shrink-0">Drafted</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Raw Resume */}
      {profile.resumeRaw && (
        <details className="bg-surface-card rounded-xl shadow-card border border-border group">
          <summary className="p-5 cursor-pointer select-none flex items-center gap-2 text-sm font-medium text-text-muted list-none [&::-webkit-details-marker]:hidden">
            <svg className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            View raw resume text
          </summary>
          <div className="px-5 pb-5">
            <pre className="text-xs text-text-secondary whitespace-pre-wrap font-mono bg-surface-inset rounded-lg p-4">
              {profile.resumeRaw}
            </pre>
          </div>
        </details>
      )}
    </div>
  )
}
