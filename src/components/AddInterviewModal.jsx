import { useState } from "react"

export default function AddInterviewModal({ onAdd, onClose }) {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = () => {
    if (!name.trim()) return
    onAdd(name.trim(), role.trim(), date || null)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface-card rounded-2xl shadow-float w-full max-w-md p-6">
        <h3 className="text-xl font-bold font-display text-text-primary mb-4">Add Interview</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Interviewer Name</label>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="e.g. Sarah Chen"
              className="w-full bg-surface-inset border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Their Role / Title</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && name.trim() && handleSubmit()}
              placeholder="e.g. Hiring Manager, Senior Engineer"
              className="w-full bg-surface-inset border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Interview Date <span className="text-text-muted font-normal">(optional)</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-surface-inset border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="px-4 py-2 bg-accent text-white text-sm rounded-md hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Add Interview
          </button>
        </div>
      </div>
    </div>
  )
}
