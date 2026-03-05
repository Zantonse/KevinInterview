export default function ProfilePanel({ profile }) {
  if (!profile) {
    return (
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-10 text-center">
        <p className="text-text-muted text-sm">No profile data yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Professional Identity */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h2 className="font-display text-xl text-accent mb-2">{profile.name || "Candidate Profile"}</h2>
        {profile.headline && (
          <p className="text-sm text-text-secondary leading-relaxed">{profile.headline}</p>
        )}
        {profile.location && (
          <p className="text-xs text-text-muted mt-1">{profile.location}</p>
        )}
      </div>

      {/* Career Arc */}
      {profile.careerArc?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-4">Career Arc</h3>
          <div className="space-y-4">
            {profile.careerArc.map((role, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-accent/30">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent" />
                <div className="flex items-baseline gap-2 mb-1">
                  <h4 className="text-sm font-bold text-text-primary">{role.title}</h4>
                  <span className="text-xs text-text-muted">— {role.company}</span>
                </div>
                <p className="text-xs text-text-muted mb-2">{role.dates}</p>
                {role.bullets?.length > 0 && (
                  <ul className="space-y-1">
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
            <h3 className="font-display text-xl text-text-primary mb-3">Skills</h3>
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
            <h3 className="font-display text-xl text-text-primary mb-3">Strengths</h3>
            <ul className="space-y-2">
              {profile.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-success-text shrink-0 mt-0.5">+</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Education & Certifications */}
      {profile.education?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="font-display text-xl text-text-primary mb-3">Education & Certifications</h3>
          <div className="space-y-3">
            {profile.education.map((ed, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent-text flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{ed.degree}</p>
                  <p className="text-xs text-text-muted">{ed.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Growth Areas */}
      {profile.growthAreas?.length > 0 && (
        <div className="bg-warning-subtle border border-warning/20 rounded-xl p-6">
          <h3 className="font-display text-xl text-warning-text mb-3">Growth Areas</h3>
          <ul className="space-y-2">
            {profile.growthAreas.map((area, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                <span className="text-warning-text shrink-0 mt-0.5">*</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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
