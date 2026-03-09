import { useState } from "react"

function SectionCard({ section, isExpanded, onToggle }) {
  return (
    <div className="bg-surface-card rounded-xl shadow-card border border-border overflow-hidden">
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-4 cursor-pointer hover:bg-surface-inset/50 transition-colors"
      >
        <span className="text-2xl shrink-0 mt-0.5">{section.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-bold text-text-primary">{section.title}</h3>
          <p className="text-xs text-text-muted mt-1 line-clamp-2">{section.overview}</p>
        </div>
        <svg
          className={`w-4 h-4 text-text-muted shrink-0 mt-1.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t border-border">
          {/* Full overview */}
          <div className="px-5 pt-4 pb-3">
            <p className="text-sm text-text-secondary leading-relaxed">{section.overview}</p>
          </div>

          {/* Kevin Bridge callout */}
          {section.kevinBridge && (
            <div className="mx-5 mb-4 bg-accent-subtle border border-accent/20 rounded-lg p-4">
              <p className="text-xs font-bold text-accent uppercase tracking-wide mb-1.5">
                Your Pfizer Experience → SE Skill
              </p>
              <p className="text-sm text-accent-text leading-relaxed">{section.kevinBridge}</p>
            </div>
          )}

          {/* Key Concepts */}
          {section.concepts?.length > 0 && (
            <div className="px-5 pb-4">
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Key Concepts</h4>
              <div className="space-y-3">
                {section.concepts.map((concept, i) => (
                  <div key={i} className="bg-surface-inset rounded-lg p-4">
                    <p className="text-sm font-bold text-text-primary mb-1">{concept.term}</p>
                    <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">{concept.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exercises */}
          {section.exercises?.length > 0 && (
            <div className="px-5 pb-5">
              <h4 className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Practice Exercises</h4>
              <ol className="space-y-2">
                {section.exercises.map((exercise, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">{exercise}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function SESkillsPanel({ seSkillsGuide }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  if (!seSkillsGuide || seSkillsGuide.length === 0) {
    return (
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-8 text-center">
        <p className="text-text-muted">No SE skills guide available for this role.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h3 className="text-md font-bold font-display text-accent mb-2">Sales Engineering Skills</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          Your biggest gap for the CE role is zero formal sales or presales experience. This guide covers the core SE skills
          you'll need — discovery, MEDDPICC, demo craft, POC execution, and more — with practical guidance on how your Pfizer
          experience maps to each one. Each section includes key concepts and exercises to build fluency before your interviews.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {seSkillsGuide.map((section, i) => (
            <button
              key={i}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
                expandedIndex === i
                  ? "bg-accent text-text-inverse"
                  : "bg-surface-inset text-text-secondary hover:bg-accent-subtle hover:text-accent-text"
              }`}
            >
              {section.icon} {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Section cards */}
      <div className="space-y-3">
        {seSkillsGuide.map((section, i) => (
          <SectionCard
            key={i}
            section={section}
            isExpanded={expandedIndex === i}
            onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  )
}
