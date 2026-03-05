export default function NotesPanel({ notes, onSetNotes }) {
  return (
    <div className="space-y-4">
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h2 className="text-lg font-bold font-display text-accent mb-1">Notes</h2>
        <p className="text-sm text-text-muted mb-4">
          Free-form scratchpad for this role. Contacts, impressions, follow-up items, anything. Saves automatically.
        </p>
        <textarea
          value={notes}
          onChange={(e) => onSetNotes(e.target.value)}
          placeholder="Start typing..."
          rows={22}
          className="auto-resize w-full bg-surface-inset border border-border rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
        />
      </div>
    </div>
  )
}
