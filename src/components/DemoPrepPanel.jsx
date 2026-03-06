import { useState } from "react"

function NarrativeSection({ section, index, draft, onDraftChange }) {
  return (
    <div className="bg-surface-card rounded-xl shadow-card border border-border p-5">
      <div className="flex items-start gap-3 mb-3">
        <span className="w-7 h-7 rounded-full bg-accent text-text-inverse flex items-center justify-center text-sm font-bold shrink-0">
          {index + 1}
        </span>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-text-primary">{section.section}</h4>
          <p className="text-xs text-text-muted mt-0.5">{section.description}</p>
        </div>
      </div>
      <div className="ml-10">
        <p className="text-xs text-accent font-medium mb-2">{section.prompt}</p>
        <textarea
          value={draft || ""}
          onChange={(e) => onDraftChange(section.section, e.target.value)}
          placeholder={`Draft your ${section.section.toLowerCase()}...`}
          rows={4}
          className="w-full bg-surface-inset border border-border rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
        />
      </div>
    </div>
  )
}

function PersonaCard({ persona }) {
  return (
    <div className="bg-surface-card rounded-xl shadow-card border border-border p-5">
      <h4 className="text-sm font-bold text-accent mb-3">{persona.persona}</h4>
      <div className="space-y-3">
        <div>
          <p className="text-xs font-bold text-text-muted uppercase mb-1">What They Care About</p>
          <p className="text-sm text-text-secondary">{persona.cares}</p>
        </div>
        <div className="bg-accent-subtle border border-accent/20 rounded p-3">
          <p className="text-xs font-bold text-accent mb-1">Emphasize</p>
          <p className="text-sm text-accent-text">{persona.emphasize}</p>
        </div>
        <div className="bg-danger-subtle border border-danger/20 rounded p-3">
          <p className="text-xs font-bold text-danger-text mb-1">Avoid</p>
          <p className="text-sm text-danger-text">{persona.avoid}</p>
        </div>
      </div>
    </div>
  )
}

function ObjectionCard({ item, isExpanded, onToggle }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-3 cursor-pointer hover:bg-surface-inset transition-colors"
      >
        <span className="w-6 h-6 rounded-full bg-warning-subtle text-warning-text flex items-center justify-center shrink-0 mt-0.5">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
            <path d="M6 3v3M6 8.5v.5" strokeLinecap="round" />
          </svg>
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary">"{item.objection}"</p>
          <span className="text-xs text-text-muted mt-1 inline-block">
            {isExpanded ? "Collapse" : "See recommended response"}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-text-muted shrink-0 mt-1 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-border pt-3 ml-9">
          <div className="bg-accent-subtle border border-accent/20 rounded p-3">
            <p className="text-xs font-bold text-accent mb-1">Recommended Response</p>
            <p className="text-sm text-accent-text">{item.response}</p>
          </div>
          {item.source && (
            <p className="text-xs text-text-muted italic">Source: {item.source}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default function DemoPrepPanel({ demoPrep, demoDrafts, onDemoDraftChange }) {
  const [expandedObjection, setExpandedObjection] = useState(null)

  if (!demoPrep) {
    return (
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-8 text-center">
        <p className="text-text-muted">No demo prep data available for this role.</p>
      </div>
    )
  }

  const { overview, narrative, audiencePersonas, objections, referenceMaterials } = demoPrep
  const drafts = demoDrafts || {}

  return (
    <div className="space-y-8">
      {/* Overview */}
      {overview && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-md font-bold font-display text-accent mb-1">{overview.title}</h3>
          <div className="flex flex-wrap gap-3 mt-3 mb-4">
            <span className="text-xs font-medium bg-accent-subtle text-accent-text px-3 py-1 rounded-full">
              {overview.format}
            </span>
            <span className="text-xs font-medium bg-danger-subtle text-danger-text px-3 py-1 rounded-full">
              {overview.weight}
            </span>
          </div>
          {overview.whatIsEvaluated?.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-bold text-text-muted uppercase mb-2">What's Being Evaluated</p>
              <ul className="space-y-1.5">
                {overview.whatIsEvaluated.map((item, i) => (
                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-accent shrink-0 mt-0.5">&#x2022;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {overview.keyIntel && (
            <div className="bg-warning-subtle border border-warning-text/20 rounded p-3">
              <p className="text-xs font-bold text-warning-text mb-1">Key Intel</p>
              <p className="text-sm text-warning-text">{overview.keyIntel}</p>
            </div>
          )}
        </div>
      )}

      {/* Narrative Builder */}
      {narrative?.length > 0 && (
        <div>
          <h3 className="text-md font-bold font-display text-text-primary mb-1">Narrative Builder</h3>
          <p className="text-xs text-text-muted mb-4">Build your demo story section by section. A great demo is a narrative, not a feature tour.</p>
          <div className="space-y-4">
            {narrative.map((section, i) => (
              <NarrativeSection
                key={section.section}
                section={section}
                index={i}
                draft={drafts[section.section]}
                onDraftChange={onDemoDraftChange}
              />
            ))}
          </div>
        </div>
      )}

      {/* Audience Personas */}
      {audiencePersonas?.length > 0 && (
        <div>
          <h3 className="text-md font-bold font-display text-text-primary mb-1">Audience Personas</h3>
          <p className="text-xs text-text-muted mb-4">Tailor your demo narrative depending on who's in the room.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audiencePersonas.map((persona) => (
              <PersonaCard key={persona.persona} persona={persona} />
            ))}
          </div>
        </div>
      )}

      {/* Objection Handling */}
      {objections?.length > 0 && (
        <div>
          <h3 className="text-md font-bold font-display text-text-primary mb-1">Objection Handling</h3>
          <p className="text-xs text-text-muted mb-4">Expect these during Q&A. Expand each for a recommended response.</p>
          <div className="space-y-2">
            {objections.map((item, i) => (
              <ObjectionCard
                key={i}
                item={item}
                isExpanded={expandedObjection === i}
                onToggle={() => setExpandedObjection(expandedObjection === i ? null : i)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Reference Materials */}
      {referenceMaterials?.length > 0 && (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
          <h3 className="text-md font-bold font-display text-text-primary mb-4">Reference Materials</h3>
          <div className="space-y-3">
            {referenceMaterials.map((ref, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 last:pb-0 border-b border-border last:border-0">
                <span className="w-5 h-5 rounded bg-surface-inset text-text-muted flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 2h5l3 3v5H2V2z" strokeLinejoin="round" />
                    <path d="M4 7h4M4 9h2" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary">{ref.title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{ref.description}</p>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline mt-1 inline-block"
                    >
                      Open resource →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
