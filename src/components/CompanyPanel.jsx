export default function CompanyPanel({ job }) {
  const { companyProfile } = job

  if (!companyProfile) {
    return (
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-10 text-center">
        <p className="text-text-muted text-sm">Company profile not available. Reset and re-generate your prep to include this section.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h2 className="text-xl font-bold font-display text-accent-text mb-3">{job.company}</h2>
        <p className="text-sm text-text-primary leading-relaxed">{companyProfile.summary}</p>
      </div>

      {/* Mission */}
      {companyProfile.mission && (
        <div className="bg-accent-subtle border border-accent/20 rounded-xl p-6">
          <h3 className="text-xs font-bold text-accent-text uppercase tracking-wide mb-2">Mission</h3>
          <p className="text-sm text-text-primary">{companyProfile.mission}</p>
        </div>
      )}

      {/* Products & Services + Culture side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {companyProfile.productsServices && (
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="text-xl font-bold font-display text-text-primary mb-3">Products & Services</h3>
            <p className="text-sm text-text-primary leading-relaxed">{companyProfile.productsServices}</p>
          </div>
        )}
        {companyProfile.culture && (
          <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
            <h3 className="text-xl font-bold font-display text-text-primary mb-3">Culture & Environment</h3>
            <p className="text-sm text-text-primary leading-relaxed">{companyProfile.culture}</p>
          </div>
        )}
      </div>

      {/* Core Values */}
      {job.cultureValues?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-xl font-bold font-display text-text-primary mb-4">Core Values</h3>
          <div className="space-y-4">
            {job.cultureValues.map((v, i) => (
              <div key={i} className="border-l-2 border-accent pl-4">
                <p className="text-sm font-bold text-text-primary">{v.name}</p>
                <p className="text-sm text-text-secondary mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Facts */}
      {companyProfile.keyFacts?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-xl font-bold font-display text-text-primary mb-3">Key Facts to Know</h3>
          <ul className="space-y-2">
            {companyProfile.keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                <span className="text-accent-text font-bold shrink-0">{i + 1}.</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* What to mention in interview */}
      {companyProfile.interviewTips?.length > 0 && (
        <div className="bg-warning-subtle border border-warning/20 rounded-xl p-6">
          <h3 className="text-xl font-bold font-display text-warning-text mb-1">What to Mention in Your Interview</h3>
          <p className="text-xs text-warning-text/70 mb-3">Show them you did your homework.</p>
          <ul className="space-y-2">
            {companyProfile.interviewTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                <span className="text-warning-text shrink-0">*</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
