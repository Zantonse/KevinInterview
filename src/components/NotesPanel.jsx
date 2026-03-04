export default function NotesPanel({ notes, onSetNotes }) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-blue-700 mb-1">Notes</h2>
        <p className="text-sm text-gray-500 mb-4">
          Free-form scratchpad for this role. Contacts, impressions, follow-up items, anything. Saves automatically.
        </p>
        <textarea
          value={notes}
          onChange={(e) => onSetNotes(e.target.value)}
          placeholder="Start typing..."
          rows={22}
          className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
      </div>
    </div>
  )
}
