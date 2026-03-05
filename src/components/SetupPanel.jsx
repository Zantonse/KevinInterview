import { useState } from "react"
import { generatePrepContent } from "../lib/gemini"

export default function SetupPanel({ store, onSetApiKey, onCreateRole, onBack }) {
  const [apiKey, setApiKey] = useState(store.apiKey || "")
  const [jobDescription, setJobDescription] = useState("")
  const [resume, setResume] = useState(store.profile?.resumeRaw || "")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGenerate = async () => {
    if (!apiKey.trim()) return setError("Enter your Gemini API key.")
    if (!jobDescription.trim()) return setError("Paste a job description.")
    if (!resume.trim()) return setError("Paste your resume.")
    setError("")
    setLoading(true)
    try {
      const data = await generatePrepContent(apiKey.trim(), jobDescription.trim(), resume.trim())
      onSetApiKey(apiKey.trim())
      onCreateRole({
        ...data,
        jobDescriptionRaw: jobDescription.trim(),
        resumeRaw: resume.trim(),
      })
    } catch (err) {
      setError("Failed to generate prep content. Check your API key and try again. Details: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-6">
      {onBack && (
        <button
          onClick={onBack}
          className="text-sm text-text-muted hover:text-text-primary cursor-pointer flex items-center gap-1"
        >
          ← Back to saved preps
        </button>
      )}
      <div className="bg-surface-card rounded-xl shadow-card border border-border p-6">
        <h2 className="text-2xl font-bold font-display text-text-primary mb-1">Set Up Your Interview Prep</h2>
        <p className="text-sm text-text-muted mb-6">
          Paste the job description and your resume. AI will generate your full prep dashboard — gap analysis, likely questions, and coaching guidance.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Gemini API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
            <p className="text-xs text-text-muted mt-1">
              Get a free key at{" "}
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-text underline"
              >
                aistudio.google.com
              </a>
              . Stored locally, never sent anywhere but Google.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the full job description here..."
              rows={8}
              className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-text-primary">
                Your Resume
              </label>
              {store.profile?.resumeRaw && (
                <span className="text-xs text-accent-text">Pre-filled from profile</span>
              )}
            </div>
            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume as plain text here..."
              rows={8}
              className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
            />
          </div>

          {error && (
            <p className="text-sm text-danger bg-danger-subtle border border-danger/20 rounded p-3">{error}</p>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading || !apiKey.trim() || !jobDescription.trim() || !resume.trim()}
            className="w-full bg-accent text-white py-3 rounded-md text-sm font-semibold hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            {loading ? "Generating prep content..." : "Generate My Interview Prep"}
          </button>
        </div>
      </div>
    </div>
  )
}
