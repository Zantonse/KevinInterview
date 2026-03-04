import { useState } from "react"
import { generatePrepContent } from "../lib/gemini"

export default function SetupPanel({ store, onSetApiKey, onCreateJob, onBack }) {
  const [apiKey, setApiKey] = useState(store.apiKey || "")
  const [jobDescription, setJobDescription] = useState("")
  const [resume, setResume] = useState("")
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
      onCreateJob({
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
          className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer flex items-center gap-1"
        >
          ← Back to saved preps
        </button>
      )}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-1">Set Up Your Interview Prep</h2>
        <p className="text-sm text-gray-500 mb-6">
          Paste the job description and your resume. AI will generate your full prep dashboard — gap analysis, likely questions, and coaching guidance.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gemini API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1">
              Get a free key at aistudio.google.com. Stored locally, never sent anywhere but Google.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the full job description here..."
              rows={8}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Resume
            </label>
            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume as plain text here..."
              rows={8}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">{error}</p>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading || !apiKey.trim() || !jobDescription.trim() || !resume.trim()}
            className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            {loading ? "Generating prep content..." : "Generate My Interview Prep"}
          </button>
        </div>
      </div>
    </div>
  )
}
