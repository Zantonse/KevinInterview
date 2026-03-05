import { useState } from "react"

const STAR_KEYS = ["situation", "task", "action", "result"]

const THEME_OPTIONS = [
  "Leadership", "Technical", "Collaboration", "Problem Solving",
  "Communication", "Adoption", "Change Management", "Data Governance",
  "Customer Success", "Innovation",
]

function StoryCard({ story, isExpanded, onToggle, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(story)

  const handleSave = () => {
    onUpdate(story.id, {
      title: draft.title,
      themes: draft.themes,
      situation: draft.situation,
      task: draft.task,
      action: draft.action,
      result: draft.result,
    })
    setEditing(false)
  }

  const handleCancel = () => {
    setDraft(story)
    setEditing(false)
  }

  const hasContent = STAR_KEYS.some((k) => story[k]?.trim())

  return (
    <div className="bg-surface-card rounded-xl shadow-card border border-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-3 cursor-pointer hover:bg-surface-inset transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-accent text-text-inverse flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text-primary">{story.title || "Untitled Story"}</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {(story.themes || []).map((theme) => (
              <span key={theme} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-accent-subtle text-accent-text">
                {theme}
              </span>
            ))}
            {hasContent && (
              <span className="text-xs bg-success-subtle text-success-text px-1.5 py-0.5 rounded">STAR drafted</span>
            )}
          </div>
        </div>
        <svg className={`w-4 h-4 text-text-muted shrink-0 transition-transform ${isExpanded ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="border-t border-border px-5 pb-5 pt-4 space-y-4">
          {editing ? (
            <>
              <div>
                <label className="block text-xs font-bold text-text-primary mb-1">Story Title</label>
                <input
                  value={draft.title || ""}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-primary mb-2">Themes</label>
                <div className="flex flex-wrap gap-2">
                  {THEME_OPTIONS.map((theme) => {
                    const selected = (draft.themes || []).includes(theme)
                    return (
                      <button
                        key={theme}
                        onClick={() => {
                          const themes = selected
                            ? (draft.themes || []).filter((t) => t !== theme)
                            : [...(draft.themes || []), theme]
                          setDraft({ ...draft, themes })
                        }}
                        className={`text-xs px-2.5 py-1 rounded-full border cursor-pointer transition-colors ${
                          selected
                            ? "bg-accent text-text-inverse border-accent"
                            : "bg-surface-inset text-text-muted border-border hover:border-accent"
                        }`}
                      >
                        {theme}
                      </button>
                    )
                  })}
                </div>
              </div>
              {STAR_KEYS.map((key) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-accent uppercase mb-1">{key}</label>
                  <textarea
                    value={draft[key] || ""}
                    onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                    placeholder={`Describe the ${key}...`}
                    rows={2}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
                  />
                </div>
              ))}
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="bg-accent text-text-inverse px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-hover cursor-pointer"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="text-text-muted hover:text-text-primary px-4 py-2 rounded-lg text-sm border border-border cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {STAR_KEYS.map((key) =>
                story[key]?.trim() ? (
                  <div key={key} className="bg-surface-inset rounded-lg p-3">
                    <p className="text-xs font-bold text-accent uppercase mb-1">{key}</p>
                    <p className="text-sm text-text-secondary">{story[key]}</p>
                  </div>
                ) : null
              )}
              {!hasContent && (
                <p className="text-xs text-text-muted italic">No STAR content drafted yet. Click Edit to add details.</p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => { setDraft(story); setEditing(true) }}
                  className="text-xs font-medium text-accent-text bg-accent-subtle px-3 py-1.5 rounded-lg hover:bg-accent/10 cursor-pointer transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (window.confirm("Delete this story?")) onDelete(story.id)
                  }}
                  className="text-xs text-text-muted hover:text-danger px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function StoryBankPanel({ stories, onAdd, onUpdate, onDelete }) {
  const [expandedId, setExpandedId] = useState(null)
  const [filterTheme, setFilterTheme] = useState(null)
  const [adding, setAdding] = useState(false)
  const [newTitle, setNewTitle] = useState("")

  const allThemes = [...new Set((stories || []).flatMap((s) => s.themes || []))]

  const filtered = filterTheme
    ? (stories || []).filter((s) => (s.themes || []).includes(filterTheme))
    : (stories || [])

  const handleAdd = () => {
    if (!newTitle.trim()) return
    onAdd({
      title: newTitle.trim(),
      themes: [],
      situation: "",
      task: "",
      action: "",
      result: "",
    })
    setNewTitle("")
    setAdding(false)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-5">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg font-bold font-display text-accent">Story Bank</h2>
          <button
            onClick={() => setAdding(true)}
            className="text-[12px] font-medium text-text-inverse bg-accent px-3.5 py-1.5 rounded-lg hover:bg-accent-hover cursor-pointer transition-colors"
          >
            + New Story
          </button>
        </div>
        <p className="text-sm text-text-muted">
          Your reusable STAR stories. Tag them by theme to quickly find the right story for any interview question.
        </p>
      </div>

      {/* Add story form */}
      {adding && (
        <div className="bg-surface-card rounded-xl shadow-card border border-accent/30 p-5">
          <label className="block text-xs font-bold text-text-primary mb-1">Story Title</label>
          <div className="flex gap-2">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="e.g., Collibra adoption at Pfizer"
              autoFocus
              className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
            <button
              onClick={handleAdd}
              disabled={!newTitle.trim()}
              className="bg-accent text-text-inverse px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-hover cursor-pointer disabled:opacity-40 disabled:cursor-default"
            >
              Add
            </button>
            <button
              onClick={() => { setAdding(false); setNewTitle("") }}
              className="text-text-muted hover:text-text-primary px-3 py-2 text-sm cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Theme filters */}
      {allThemes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterTheme(null)}
            className={`text-xs px-2.5 py-1 rounded-full border cursor-pointer transition-colors ${
              !filterTheme
                ? "bg-accent text-text-inverse border-accent"
                : "bg-surface-card text-text-muted border-border hover:border-accent"
            }`}
          >
            All
          </button>
          {allThemes.map((theme) => (
            <button
              key={theme}
              onClick={() => setFilterTheme(filterTheme === theme ? null : theme)}
              className={`text-xs px-2.5 py-1 rounded-full border cursor-pointer transition-colors ${
                filterTheme === theme
                  ? "bg-accent text-text-inverse border-accent"
                  : "bg-surface-card text-text-muted border-border hover:border-accent"
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      )}

      {/* Stories */}
      {filtered.length === 0 ? (
        <div className="bg-surface-card rounded-xl shadow-card border border-border p-10 text-center">
          <p className="text-text-muted text-sm">
            {filterTheme
              ? `No stories tagged "${filterTheme}".`
              : "No stories yet. Add your first STAR story to get started."}
          </p>
        </div>
      ) : (
        filtered.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            isExpanded={expandedId === story.id}
            onToggle={() => setExpandedId(expandedId === story.id ? null : story.id)}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}
