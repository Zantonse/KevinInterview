# Dynamic Interview Prep Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace all hardcoded AutoZone data with a dynamic system — user pastes any job description + resume, Gemini AI generates the full prep content and analyzes interview transcripts on demand.

**Architecture:** A `useJobStore` hook manages all state in localStorage. Two Gemini API calls drive everything: one for generating prep content from JD + resume, one for analyzing each interview transcript. The step indicator is built dynamically from the number of interviews in the store.

**Tech Stack:** React 19, Vite, Tailwind v4, `@google/generative-ai` (Gemini 2.0 Flash), localStorage for persistence.

---

## State Shape

All app state lives under `localStorage` key `interview-prep`:

```js
{
  apiKey: "AIza...",        // Gemini API key
  status: "setup" | "ready",
  job: {
    company: "...",
    roleTitle: "...",
    jobDescriptionRaw: "...",   // raw paste
    resumeRaw: "...",           // raw paste
    // AI-generated on setup:
    requirements: [{ skill: "", priority: "High|Medium|Required|Nice-to-have" }],
    responsibilities: ["..."],
    gapAnalysis: { strongMatch: [], partialMatch: [], gap: [] },
    prepFocus: ["..."],           // top 5 things to prep for next interview
    commonQuestions: [{ question: "", why: "", starPrompt: { situation, task, action, result } }],
    cultureValues: [{ name: "", description: "" }],
  },
  interviews: [
    {
      id: 1,
      interviewerName: "",
      interviewerRole: "",
      transcriptRaw: "",
      status: "pending" | "analyzing" | "analyzed",
      analysis: {
        overallTone: "",
        summary: "",
        questionsAsked: [{ question, myResponse, assessment, notes }],
        strengths: [],
        areasForImprovement: [],
        interviewerSignals: [],
        postReflection: "",       // candidate's own words from transcript if present
      }
    }
  ]
}
```

---

## Task 1: Install Gemini package

**Files:**
- Modify: `package.json` (via npm install)

**Step 1: Install**

```bash
npm install @google/generative-ai
```

**Step 2: Verify in package.json**

`@google/generative-ai` should appear in `dependencies`.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add @google/generative-ai dependency"
```

---

## Task 2: Create Gemini API client

**Files:**
- Create: `src/lib/gemini.js`

**Step 1: Create the file**

```js
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai"

function getClient(apiKey) {
  return new GoogleGenerativeAI(apiKey)
}

export async function generatePrepContent(apiKey, jobDescriptionRaw, resumeRaw) {
  const client = getClient(apiKey)
  const model = client.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  })

  const prompt = `You are an expert interview coach. Analyze this job description and candidate resume to generate structured interview preparation content.

JOB DESCRIPTION:
${jobDescriptionRaw}

CANDIDATE RESUME:
${resumeRaw}

Return a JSON object with exactly this structure:
{
  "company": "company name extracted from JD",
  "roleTitle": "job title extracted from JD",
  "requirements": [
    { "skill": "skill name", "priority": "High" | "Medium" | "Required" | "Nice-to-have" }
  ],
  "responsibilities": ["responsibility 1", "responsibility 2"],
  "gapAnalysis": {
    "strongMatch": ["candidate strength that directly matches a requirement"],
    "partialMatch": ["candidate has related but not exact experience"],
    "gap": ["requirement candidate clearly lacks"]
  },
  "prepFocus": [
    "specific thing to study or practice before next interview (5 items)"
  ],
  "commonQuestions": [
    {
      "question": "likely interview question for this role",
      "why": "why interviewers ask this and what they're evaluating",
      "starPrompt": {
        "situation": "prompt to help candidate describe the context",
        "task": "prompt for their specific responsibility",
        "action": "prompt for what they personally did",
        "result": "prompt for measurable outcome"
      }
    }
  ],
  "cultureValues": [
    {
      "name": "company value name",
      "description": "how to weave this into interview answers based on the JD"
    }
  ]
}

Generate 6-8 requirements, 5-7 responsibilities, 5 items each for gap analysis sections, 5 prep focus items, 6-8 common questions, and 4-5 culture values.`

  const result = await model.generateContent(prompt)
  return JSON.parse(result.response.text())
}

export async function analyzeTranscript(apiKey, jobDescriptionRaw, resumeRaw, previousAnalyses, transcript, interviewerName, interviewerRole) {
  const client = getClient(apiKey)
  const model = client.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  })

  const prevContext = previousAnalyses.length > 0
    ? `\nPREVIOUS INTERVIEW CONTEXT:\n${previousAnalyses.map((a, i) =>
        `Interview ${i + 1} with ${a.interviewerName}: ${JSON.stringify(a.analysis?.areasForImprovement || [])}`
      ).join("\n")}`
    : ""

  const prompt = `You are an expert interview coach providing detailed post-interview analysis.

JOB DESCRIPTION:
${jobDescriptionRaw}

CANDIDATE RESUME:
${resumeRaw}
${prevContext}

INTERVIEWER: ${interviewerName} (${interviewerRole})

INTERVIEW TRANSCRIPT:
${transcript}

Analyze this interview and return a JSON object with exactly this structure:
{
  "overallTone": "2-3 sentence description of the interview atmosphere and dynamic",
  "summary": "2-3 sentence summary of what was tested and how it went overall",
  "questionsAsked": [
    {
      "question": "the question that was asked",
      "myResponse": "1-2 sentence summary of how the candidate answered",
      "assessment": "strong" | "adequate" | "needs-improvement",
      "notes": "specific, actionable coaching note — what was good, what to improve, what to say next time"
    }
  ],
  "strengths": ["specific strength demonstrated in this interview (5-6 items)"],
  "areasForImprovement": ["specific area to improve with context from this interview (4-5 items)"],
  "interviewerSignals": ["thing the interviewer said or did that reveals what they value (4-5 items)"],
  "postReflection": "candidate's own reflection if they expressed one in the transcript, otherwise empty string"
}

Be specific and brutally honest. Reference actual moments from the transcript. Coaching notes should tell the candidate exactly what to say differently next time.`

  const result = await model.generateContent(prompt)
  return JSON.parse(result.response.text())
}
```

**Step 2: Commit**

```bash
git add src/lib/gemini.js
git commit -m "feat: add Gemini API client with prep generation and transcript analysis"
```

---

## Task 3: Create useJobStore hook

**Files:**
- Create: `src/hooks/useJobStore.js`

**Step 1: Create the file**

```js
import { useState, useCallback } from "react"

const STORAGE_KEY = "interview-prep"

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

const initialState = {
  apiKey: "",
  status: "setup",
  job: null,
  interviews: [],
}

export function useJobStore() {
  const [store, setStore] = useState(() => loadState() || initialState)

  const update = useCallback((updater) => {
    setStore((prev) => {
      const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater }
      saveState(next)
      return next
    })
  }, [])

  const setApiKey = useCallback((apiKey) => update({ apiKey }), [update])

  const setJobData = useCallback((jobData) => {
    update((prev) => ({
      ...prev,
      status: "ready",
      job: jobData,
    }))
  }, [update])

  const addInterview = useCallback((interviewerName, interviewerRole) => {
    update((prev) => ({
      ...prev,
      interviews: [
        ...prev.interviews,
        {
          id: prev.interviews.length + 1,
          interviewerName,
          interviewerRole,
          transcriptRaw: "",
          status: "pending",
          analysis: null,
        },
      ],
    }))
  }, [update])

  const setTranscript = useCallback((interviewId, transcriptRaw) => {
    update((prev) => ({
      ...prev,
      interviews: prev.interviews.map((iv) =>
        iv.id === interviewId ? { ...iv, transcriptRaw } : iv
      ),
    }))
  }, [update])

  const setInterviewStatus = useCallback((interviewId, status) => {
    update((prev) => ({
      ...prev,
      interviews: prev.interviews.map((iv) =>
        iv.id === interviewId ? { ...iv, status } : iv
      ),
    }))
  }, [update])

  const setInterviewAnalysis = useCallback((interviewId, analysis) => {
    update((prev) => ({
      ...prev,
      interviews: prev.interviews.map((iv) =>
        iv.id === interviewId ? { ...iv, status: "analyzed", analysis } : iv
      ),
    }))
  }, [update])

  const reset = useCallback(() => {
    saveState(initialState)
    setStore(initialState)
  }, [])

  return {
    store,
    setApiKey,
    setJobData,
    addInterview,
    setTranscript,
    setInterviewStatus,
    setInterviewAnalysis,
    reset,
  }
}
```

**Step 2: Commit**

```bash
git add src/hooks/useJobStore.js
git commit -m "feat: add useJobStore hook for localStorage state management"
```

---

## Task 4: Create SetupPanel

**Files:**
- Create: `src/components/SetupPanel.jsx`

**Step 1: Create the file**

```jsx
import { useState } from "react"
import { generatePrepContent } from "../lib/gemini"

export default function SetupPanel({ store, onSetApiKey, onSetJobData }) {
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
      onSetApiKey(apiKey.trim())
      const data = await generatePrepContent(apiKey.trim(), jobDescription.trim(), resume.trim())
      onSetJobData({
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
              Get a free key at <span className="text-blue-500">aistudio.google.com</span>. Stored locally, never sent anywhere but Google.
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
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            {loading ? "Generating prep content..." : "Generate My Interview Prep"}
          </button>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/SetupPanel.jsx
git commit -m "feat: add SetupPanel with JD/resume input and Gemini API key"
```

---

## Task 5: Create AddInterviewModal

**Files:**
- Create: `src/components/AddInterviewModal.jsx`

**Step 1: Create the file**

```jsx
import { useState } from "react"

export default function AddInterviewModal({ onAdd, onClose }) {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = () => {
    if (!name.trim()) return
    onAdd(name.trim(), role.trim())
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Add Interview</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interviewer Name</label>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Chen"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Their Role / Title</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Hiring Manager, Senior Engineer"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Add Interview
          </button>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/AddInterviewModal.jsx
git commit -m "feat: add AddInterviewModal component"
```

---

## Task 6: Rewrite StepIndicator for dynamic steps

**Files:**
- Modify: `src/components/StepIndicator.jsx`

**Step 1: Replace the file content**

```jsx
export default function StepIndicator({ steps, currentStep, onStepClick }) {
  return (
    <div className="flex items-center justify-center py-6 flex-wrap gap-y-2">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center">
          <button
            onClick={() => onStepClick(index)}
            className={`flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold transition-colors cursor-pointer
              ${index === currentStep
                ? "bg-blue-600 text-white"
                : index < currentStep
                  ? "bg-blue-200 text-blue-800"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            {index + 1}
          </button>
          <span
            className={`ml-1.5 text-xs font-medium hidden sm:inline
              ${index === currentStep ? "text-blue-600" : "text-gray-500"}`}
          >
            {step.short}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`w-8 h-0.5 mx-2
                ${index < currentStep ? "bg-blue-300" : "bg-gray-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
```

Note: Changed hardcoded step list to accept a `steps` prop. Changed colors from red to blue (no longer AutoZone-branded).

**Step 2: Commit**

```bash
git add src/components/StepIndicator.jsx
git commit -m "feat: make StepIndicator accept dynamic steps prop"
```

---

## Task 7: Rewrite PreparationPanel to use store data

**Files:**
- Modify: `src/components/PreparationPanel.jsx`

**Step 1: Replace the file content**

```jsx
import { useState } from "react"

function PriorityBadge({ priority }) {
  const colors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Required: "bg-blue-100 text-blue-700",
    "Nice-to-have": "bg-gray-100 text-gray-600",
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[priority] || "bg-gray-100"}`}>
      {priority}
    </span>
  )
}

function GapBadge({ type }) {
  const config = {
    strong: { label: "Strong Match", className: "bg-green-100 text-green-800 border-green-200" },
    partial: { label: "Partial Match", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    gap: { label: "Gap", className: "bg-red-100 text-red-800 border-red-200" },
  }
  const { label, className } = config[type]
  return <span className={`text-xs font-bold px-2 py-1 rounded border ${className}`}>{label}</span>
}

export default function PreparationPanel({ job, interviews }) {
  const NOTES_KEY = "interviewer-notes"
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(NOTES_KEY)
    return saved ? JSON.parse(saved) : {}
  })

  const updateNote = (id, value) => {
    setNotes((prev) => {
      const updated = { ...prev, [id]: value }
      localStorage.setItem(NOTES_KEY, JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className="space-y-6">
      {/* Role Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-blue-700 mb-2">
          {job.roleTitle} — {job.company}
        </h2>
        <p className="text-sm text-gray-700 mt-3 leading-relaxed">{job.jobDescriptionRaw?.slice(0, 400)}{job.jobDescriptionRaw?.length > 400 ? "..." : ""}</p>
      </div>

      {/* Requirements + Gap Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Role Requirements</h3>
          <ul className="space-y-3">
            {job.requirements?.map((req) => (
              <li key={req.skill} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{req.skill}</span>
                <PriorityBadge priority={req.priority} />
              </li>
            ))}
          </ul>
          <h4 className="text-sm font-semibold text-gray-700 mt-6 mb-2">Key Responsibilities</h4>
          <ul className="space-y-1">
            {job.responsibilities?.map((r) => (
              <li key={r} className="text-sm text-gray-600 flex">
                <span className="text-blue-400 mr-2 shrink-0">-</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Gap Analysis</h3>
          <div className="space-y-4">
            <div>
              <GapBadge type="strong" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.strongMatch?.map((item) => (
                  <li key={item} className="text-sm text-gray-600">- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <GapBadge type="partial" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.partialMatch?.map((item) => (
                  <li key={item} className="text-sm text-gray-600">- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <GapBadge type="gap" />
              <ul className="mt-2 space-y-1">
                {job.gapAnalysis?.gap?.map((item) => (
                  <li key={item} className="text-sm text-gray-600">- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prep Focus */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-3">Top Prep Focus Areas</h3>
        <ul className="space-y-2">
          {job.prepFocus?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Interview Progress */}
      {interviews.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Interview Progress</h3>
          <div className="space-y-3">
            {interviews.map((iv) => (
              <div key={iv.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                  ${iv.status === "analyzed" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                  {iv.id}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {iv.interviewerName} — <span className="text-gray-500 font-normal">{iv.interviewerRole}</span>
                  </p>
                  <span className={`text-xs ${iv.status === "analyzed" ? "text-green-600" : "text-yellow-600"}`}>
                    {iv.status === "analyzed" ? "Analyzed" : iv.status === "analyzing" ? "Analyzing..." : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interviewer Notes */}
      {interviews.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-1">Interviewer Notes</h3>
          <p className="text-xs text-gray-500 mb-4">Research each interviewer. Notes save automatically.</p>
          <div className="space-y-4">
            {interviews.map((iv) => (
              <div key={iv.id} className="border border-gray-100 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-800">{iv.interviewerName}</p>
                <p className="text-xs text-gray-500 mb-2">{iv.interviewerRole}</p>
                <textarea
                  value={notes[iv.id] || ""}
                  onChange={(e) => updateNote(iv.id, e.target.value)}
                  placeholder={`Notes on ${iv.interviewerName}...`}
                  rows={2}
                  className="w-full border border-gray-200 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/PreparationPanel.jsx
git commit -m "feat: rewrite PreparationPanel to use dynamic store data"
```

---

## Task 8: Rewrite InterviewReviewPanel with transcript input + Analyze

**Files:**
- Modify: `src/components/InterviewReviewPanel.jsx`

**Step 1: Replace the file content**

```jsx
import { useState } from "react"
import { analyzeTranscript } from "../lib/gemini"

function AssessmentBadge({ assessment }) {
  const config = {
    strong: { label: "Strong", className: "bg-green-100 text-green-700" },
    adequate: { label: "Adequate", className: "bg-yellow-100 text-yellow-700" },
    "needs-improvement": { label: "Needs Work", className: "bg-red-100 text-red-700" },
  }
  const { label, className } = config[assessment] || config.adequate
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${className}`}>
      {label}
    </span>
  )
}

function QuestionReview({ item, index, isExpanded, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800">{item.question}</p>
          <div className="flex items-center gap-2 mt-1">
            <AssessmentBadge assessment={item.assessment} />
            <span className="text-xs text-gray-400">{isExpanded ? "Collapse" : "Expand"} analysis</span>
          </div>
        </div>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3 ml-9">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Your Response</p>
            <p className="text-sm text-gray-700">{item.myResponse}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="text-xs font-bold text-blue-800 mb-1">Coach Notes</p>
            <p className="text-sm text-blue-700">{item.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewReviewPanel({ interview, job, previousInterviews, onSetTranscript, onSetAnalysis, onSetStatus, apiKey }) {
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleAnalyze = async () => {
    if (!interview.transcriptRaw?.trim()) return setError("Paste the interview transcript first.")
    setError("")
    setLoading(true)
    onSetStatus(interview.id, "analyzing")
    try {
      const analysis = await analyzeTranscript(
        apiKey,
        job.jobDescriptionRaw,
        job.resumeRaw,
        previousInterviews,
        interview.transcriptRaw,
        interview.interviewerName,
        interview.interviewerRole
      )
      onSetAnalysis(interview.id, analysis)
    } catch (err) {
      setError("Analysis failed. Check your API key. Details: " + err.message)
      onSetStatus(interview.id, "pending")
    } finally {
      setLoading(false)
    }
  }

  const { analysis } = interview

  const assessmentCounts = analysis?.questionsAsked?.reduce((acc, q) => {
    acc[q.assessment] = (acc[q.assessment] || 0) + 1
    return acc
  }, {}) || {}

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-700 mb-1">
              Interview {interview.id}: {interview.interviewerName}
            </h2>
            <p className="text-sm text-gray-500">{interview.interviewerRole}</p>
          </div>
          {analysis && (
            <div className="flex gap-2">
              {assessmentCounts.strong > 0 && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  {assessmentCounts.strong} Strong
                </span>
              )}
              {assessmentCounts.adequate > 0 && (
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
                  {assessmentCounts.adequate} Adequate
                </span>
              )}
              {assessmentCounts["needs-improvement"] > 0 && (
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                  {assessmentCounts["needs-improvement"]} Needs Work
                </span>
              )}
            </div>
          )}
        </div>
        {analysis && (
          <>
            <p className="text-sm text-gray-600 mt-3">{analysis.overallTone}</p>
            <p className="text-sm text-gray-700 mt-2">{analysis.summary}</p>
          </>
        )}
      </div>

      {/* Transcript Input (always visible until analyzed) */}
      {interview.status !== "analyzed" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-2">Paste Interview Transcript</h3>
          <p className="text-xs text-gray-500 mb-3">
            Paste the full transcript or your notes from this interview. The more detail, the better the analysis.
          </p>
          <textarea
            value={interview.transcriptRaw || ""}
            onChange={(e) => onSetTranscript(interview.id, e.target.value)}
            placeholder="Paste transcript here..."
            rows={10}
            className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3 mt-3">{error}</p>
          )}
          <button
            onClick={handleAnalyze}
            disabled={loading || !interview.transcriptRaw?.trim()}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Analyzing..." : "Analyze This Interview"}
          </button>
        </div>
      )}

      {/* Analysis results (only when analyzed) */}
      {analysis && (
        <>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-md font-bold text-gray-800 mb-4">Question-by-Question Breakdown</h3>
            <div className="space-y-2">
              {analysis.questionsAsked.map((item, index) => (
                <QuestionReview
                  key={index}
                  item={item}
                  index={index}
                  isExpanded={expandedQuestion === index}
                  onToggle={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-md font-bold text-green-700 mb-3">What Went Well</h3>
              <ul className="space-y-2">
                {analysis.strengths.map((s, i) => (
                  <li key={i} className="text-sm text-gray-600 flex">
                    <span className="text-green-500 mr-2 shrink-0">+</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-md font-bold text-red-700 mb-3">Areas to Improve</h3>
              <ul className="space-y-2">
                {analysis.areasForImprovement.map((a, i) => (
                  <li key={i} className="text-sm text-gray-600 flex">
                    <span className="text-red-500 mr-2 shrink-0">-</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-md font-bold text-gray-800 mb-3">Interviewer Signals</h3>
            <ul className="space-y-2">
              {analysis.interviewerSignals.map((signal, i) => (
                <li key={i} className="text-sm text-gray-600 flex">
                  <span className="text-yellow-500 mr-2 shrink-0">*</span>{signal}
                </li>
              ))}
            </ul>
          </div>

          {analysis.postReflection && (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-bold text-gray-700 mb-2">Post-Interview Reflection</h3>
              <p className="text-sm text-gray-600 italic">"{analysis.postReflection}"</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/InterviewReviewPanel.jsx
git commit -m "feat: rewrite InterviewReviewPanel with transcript input and Gemini analysis"
```

---

## Task 9: Rewrite InterviewGuidePanel to use store data

**Files:**
- Modify: `src/components/InterviewGuidePanel.jsx`

**Step 1: Replace the file content**

```jsx
import { useState } from "react"

const STAR_KEY = "interview-star-drafts"

function loadDrafts() {
  const saved = localStorage.getItem(STAR_KEY)
  return saved ? JSON.parse(saved) : {}
}

function QuestionCard({ question, index, isExpanded, onToggle, drafts, onDraftChange }) {
  const starKeys = ["situation", "task", "action", "result"]
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{question.question}</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-gray-400">Click to {isExpanded ? "collapse" : "expand"} prep guidance</p>
            {(drafts.situation || drafts.task || drafts.action || drafts.result) && (
              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Draft saved</span>
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-xs font-bold text-yellow-800 mb-1">Why This Will Come Up</p>
            <p className="text-sm text-yellow-700">{question.why}</p>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-700 mb-2">Structure Your Answer (STAR)</p>
            <div className="space-y-3">
              {starKeys.map((key) => (
                <div key={key} className="bg-gray-50 rounded p-3">
                  <p className="text-xs font-bold text-blue-700 uppercase mb-1">{key}</p>
                  <p className="text-xs text-gray-500 mb-2">{question.starPrompt?.[key]}</p>
                  <textarea
                    value={drafts[key] || ""}
                    onChange={(e) => onDraftChange(index, key, e.target.value)}
                    placeholder={`My ${key.charAt(0).toUpperCase() + key.slice(1)}...`}
                    rows={2}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewGuidePanel({ job, interviews }) {
  const [expandedId, setExpandedId] = useState(null)
  const [starDrafts, setStarDrafts] = useState(loadDrafts)

  const completedCount = interviews.filter((iv) => iv.status === "analyzed").length
  const questions = job?.commonQuestions || []

  const handleDraftChange = (questionIndex, field, value) => {
    setStarDrafts((prev) => {
      const updated = {
        ...prev,
        [questionIndex]: { ...prev[questionIndex], [field]: value },
      }
      localStorage.setItem(STAR_KEY, JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-2">
        <h2 className="text-lg font-bold text-blue-700 mb-1">Interview Question Guide</h2>
        <p className="text-sm text-gray-500">
          AI-generated likely questions for this role based on the job description.
          {completedCount > 0 && ` Updated using patterns from your ${completedCount} completed interview${completedCount > 1 ? "s" : ""}.`}
          {" "}Use the STAR framework to draft your answers.
        </p>
      </div>

      {questions.map((q, index) => (
        <QuestionCard
          key={index}
          question={q}
          index={index}
          isExpanded={expandedId === index}
          onToggle={() => setExpandedId(expandedId === index ? null : index)}
          drafts={starDrafts[index] || {}}
          onDraftChange={handleDraftChange}
        />
      ))}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/InterviewGuidePanel.jsx
git commit -m "feat: rewrite InterviewGuidePanel to use AI-generated questions from store"
```

---

## Task 10: Rewrite ScorecardPanel to use store data

**Files:**
- Modify: `src/components/ScorecardPanel.jsx`

**Step 1: Replace the file content**

```jsx
function Badge({ color, children }) {
  const colors = {
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-700",
  }
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  )
}

function ScoreRing({ label, value, total, color }) {
  const colors = { green: "text-green-600", yellow: "text-yellow-600", red: "text-red-600" }
  return (
    <div className="flex flex-col items-center">
      <div className={`text-3xl font-bold ${colors[color]}`}>{value}</div>
      <div className="text-xs text-gray-400 mt-0.5">{total > 0 ? Math.round((value / total) * 100) : 0}% of {total}</div>
      <div className="text-sm font-medium text-gray-700 mt-1">{label}</div>
    </div>
  )
}

export default function ScorecardPanel({ job, interviews }) {
  const analyzed = interviews.filter((iv) => iv.status === "analyzed" && iv.analysis)

  if (analyzed.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
        <p className="text-gray-500 text-sm">Complete at least one interview analysis to see your scorecard.</p>
      </div>
    )
  }

  const allQuestions = analyzed.flatMap((iv) =>
    (iv.analysis.questionsAsked || []).map((q) => ({ ...q, interviewer: iv.interviewerName }))
  )
  const strong = allQuestions.filter((q) => q.assessment === "strong")
  const adequate = allQuestions.filter((q) => q.assessment === "adequate")
  const needsImprovement = allQuestions.filter((q) => q.assessment === "needs-improvement")
  const allStrengths = analyzed.flatMap((iv) => iv.analysis.strengths || [])
  const allImprovements = analyzed.flatMap((iv) => iv.analysis.areasForImprovement || [])
  const allSignals = analyzed.flatMap((iv) =>
    (iv.analysis.interviewerSignals || []).map((s) => ({ text: s, interviewer: iv.interviewerName }))
  )

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-bold text-blue-700 mb-1">Interview Scorecard</h2>
        <p className="text-sm text-gray-500">
          Aggregated assessment across {analyzed.length} completed interview{analyzed.length > 1 ? "s" : ""} and {allQuestions.length} questions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-4">Overall Performance</h3>
        <div className="flex justify-around">
          <ScoreRing label="Strong" value={strong.length} total={allQuestions.length} color="green" />
          <ScoreRing label="Adequate" value={adequate.length} total={allQuestions.length} color="yellow" />
          <ScoreRing label="Needs Work" value={needsImprovement.length} total={allQuestions.length} color="red" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-3">Question Breakdown</h3>
        <div className="space-y-2">
          {allQuestions.map((q, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
              <div className="shrink-0 mt-0.5">
                {q.assessment === "strong" && <Badge color="green">Strong</Badge>}
                {q.assessment === "adequate" && <Badge color="yellow">Adequate</Badge>}
                {q.assessment === "needs-improvement" && <Badge color="red">Needs Work</Badge>}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800">{q.question}</p>
                <p className="text-xs text-gray-400 mt-0.5">{q.interviewer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-green-200 p-6">
        <h3 className="text-md font-bold text-green-800 mb-3">What Went Well</h3>
        <ul className="space-y-2">
          {allStrengths.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 shrink-0 mt-0.5">+</span>{s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
        <h3 className="text-md font-bold text-red-800 mb-3">What Needs Work</h3>
        <ul className="space-y-2">
          {allImprovements.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-red-400 shrink-0 mt-0.5">-</span>{s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6">
        <h3 className="text-md font-bold text-blue-800 mb-3">Interviewer Signals</h3>
        <ul className="space-y-2">
          {allSignals.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-blue-400 shrink-0 mt-0.5">&bull;</span>
              <div>{s.text}<span className="text-xs text-gray-400 ml-1">({s.interviewer})</span></div>
            </li>
          ))}
        </ul>
      </div>

      {job?.gapAnalysis && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-3">Skills Gap Status</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <h4 className="text-xs font-bold text-green-800 mb-2">Strong Match</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.strongMatch?.map((item, i) => (
                  <li key={i} className="text-xs text-green-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <h4 className="text-xs font-bold text-yellow-800 mb-2">Partial Match</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.partialMatch?.map((item, i) => (
                  <li key={i} className="text-xs text-yellow-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <h4 className="text-xs font-bold text-red-800 mb-2">Gap</h4>
              <ul className="space-y-1">
                {job.gapAnalysis.gap?.map((item, i) => (
                  <li key={i} className="text-xs text-red-700">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/ScorecardPanel.jsx
git commit -m "feat: rewrite ScorecardPanel to aggregate from dynamic interview store"
```

---

## Task 11: Rewrite CultureSidebar to use AI-generated company values

**Files:**
- Modify: `src/components/CultureSidebar.jsx`

**Step 1: Replace the file content**

```jsx
import { useState } from "react"

export default function CultureSidebar({ values = [], company = "" }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!values.length) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 cursor-pointer transition-colors z-40 text-sm font-medium"
      >
        Culture Guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-200 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-blue-700">{company ? `${company} Culture` : "Culture Guide"}</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer text-xl leading-none">x</button>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Weave these values into your answers naturally.
          </p>
          <div className="space-y-4">
            {values.map((v, i) => (
              <div key={i} className="border-l-2 border-blue-200 pl-3">
                <p className="text-sm font-bold text-gray-800">{v.name}</p>
                <p className="text-xs text-gray-600 mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/CultureSidebar.jsx
git commit -m "feat: rewrite CultureSidebar to use AI-extracted company values"
```

---

## Task 12: Rewrite App.jsx — dynamic routing and stepper

**Files:**
- Modify: `src/App.jsx`

**Step 1: Replace the file content**

```jsx
import { useState } from "react"
import { useJobStore } from "./hooks/useJobStore"
import StepIndicator from "./components/StepIndicator"
import SetupPanel from "./components/SetupPanel"
import PreparationPanel from "./components/PreparationPanel"
import InterviewReviewPanel from "./components/InterviewReviewPanel"
import InterviewGuidePanel from "./components/InterviewGuidePanel"
import ScorecardPanel from "./components/ScorecardPanel"
import CultureSidebar from "./components/CultureSidebar"
import AddInterviewModal from "./components/AddInterviewModal"

export default function App() {
  const {
    store,
    setApiKey,
    setJobData,
    addInterview,
    setTranscript,
    setInterviewStatus,
    setInterviewAnalysis,
    reset,
  } = useJobStore()

  const [currentStep, setCurrentStep] = useState(0)
  const [showAddInterview, setShowAddInterview] = useState(false)

  const { status, job, interviews, apiKey } = store

  // Steps: Setup (if not ready) | Prep | Interview 1..N | Guide | Scorecard
  const steps = status === "ready"
    ? [
        { label: "Preparation", short: "Prep" },
        ...interviews.map((iv, i) => ({
          label: `Interview ${i + 1}`,
          short: `Int ${i + 1}`,
        })),
        { label: "Interview Guide", short: "Guide" },
        { label: "Scorecard", short: "Score" },
      ]
    : [{ label: "Setup", short: "Setup" }]

  const LAST_STEP = steps.length - 1

  const handleAddInterview = (name, role) => {
    addInterview(name, role)
    // Navigate to the new interview step: 1 (prep) + existing interviews count = new interview index
    setCurrentStep(1 + interviews.length)
  }

  const handleReset = () => {
    if (window.confirm("Reset all data? This will clear your job, resume, and all interview analyses.")) {
      reset()
      setCurrentStep(0)
    }
  }

  // Map step index to content when ready
  const renderStep = () => {
    if (status !== "ready") {
      return <SetupPanel store={store} onSetApiKey={setApiKey} onSetJobData={setJobData} />
    }

    if (currentStep === 0) {
      return <PreparationPanel job={job} interviews={interviews} />
    }

    const interviewStepCount = interviews.length
    const guideStepIndex = 1 + interviewStepCount
    const scorecardStepIndex = guideStepIndex + 1

    if (currentStep >= 1 && currentStep <= interviewStepCount) {
      const interview = interviews[currentStep - 1]
      const previousInterviews = interviews.slice(0, currentStep - 1)
      return (
        <InterviewReviewPanel
          interview={interview}
          job={job}
          previousInterviews={previousInterviews}
          apiKey={apiKey}
          onSetTranscript={setTranscript}
          onSetAnalysis={setInterviewAnalysis}
          onSetStatus={setInterviewStatus}
        />
      )
    }

    if (currentStep === guideStepIndex) {
      return <InterviewGuidePanel job={job} interviews={interviews} />
    }

    if (currentStep === scorecardStepIndex) {
      return <ScorecardPanel job={job} interviews={interviews} />
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1" />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-700">Interview Prep</h1>
            {job && (
              <p className="text-center text-gray-500 text-sm mt-1">
                {job.company} — {job.roleTitle}
              </p>
            )}
          </div>
          <div className="flex-1 flex justify-end gap-2">
            {status === "ready" && (
              <>
                <button
                  onClick={() => setShowAddInterview(true)}
                  className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 cursor-pointer"
                >
                  + Add Interview
                </button>
                <button
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded cursor-pointer"
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4">
        {status === "ready" && (
          <StepIndicator steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />
        )}

        <main className="pb-12">
          {renderStep()}
        </main>

        {status === "ready" && (
          <div className="flex justify-between pb-8">
            <button
              onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-40 cursor-pointer disabled:cursor-default"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep((s) => Math.min(LAST_STEP, s + 1))}
              disabled={currentStep === LAST_STEP}
              className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-40 cursor-pointer disabled:cursor-default"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {status === "ready" && job && (
        <CultureSidebar values={job.cultureValues || []} company={job.company} />
      )}

      {showAddInterview && (
        <AddInterviewModal
          onAdd={handleAddInterview}
          onClose={() => setShowAddInterview(false)}
        />
      )}
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add src/App.jsx
git commit -m "feat: rewrite App.jsx with dynamic routing, add interview flow, and Gemini integration"
```

---

## Task 13: Delete hardcoded data files

**Files:**
- Delete: `src/data/jobRequirements.js`
- Delete: `src/data/candidateProfile.js`
- Delete: `src/data/interviewQuestions.js`
- Delete: `src/data/interviewAnalysis.js`

**Step 1: Delete the files**

```bash
git rm src/data/jobRequirements.js src/data/candidateProfile.js src/data/interviewQuestions.js src/data/interviewAnalysis.js
```

**Step 2: Commit**

```bash
git commit -m "chore: remove hardcoded AutoZone data files"
```

---

## Task 14: Smoke test the app

**Step 1: Start dev server**

```bash
npm run dev
```

**Step 2: Test setup flow**
- Open http://localhost:5173
- Should show the Setup screen (no stepper)
- Enter a Gemini API key (get free key at aistudio.google.com)
- Paste any job description and resume text
- Click "Generate My Interview Prep"
- Should show a loading state, then redirect to Prep panel with stepper

**Step 3: Test prep panel**
- Should show AI-generated company, role title, requirements, gap analysis, prep focus areas
- Culture Guide button (bottom right) should show AI-extracted values

**Step 4: Test add interview**
- Click "+ Add Interview" in header
- Enter interviewer name + role
- Should add a new step to the stepper and navigate to it
- Should show transcript input + Analyze button

**Step 5: Test interview analysis**
- Paste a sample transcript (can be fake)
- Click "Analyze This Interview"
- Should show loading, then display full analysis

**Step 6: Test scorecard**
- Navigate to Scorecard step
- Should aggregate all analyzed interviews

**Step 7: Test reset**
- Click Reset in header
- Should clear all data and return to setup screen

**Step 8: Final commit if any fixes needed**

```bash
git add -p
git commit -m "fix: address smoke test issues"
```

---

## Summary

| Task | Action |
|------|--------|
| 1 | Install `@google/generative-ai` |
| 2 | Create `src/lib/gemini.js` — API client |
| 3 | Create `src/hooks/useJobStore.js` — localStorage state |
| 4 | Create `src/components/SetupPanel.jsx` |
| 5 | Create `src/components/AddInterviewModal.jsx` |
| 6 | Rewrite `StepIndicator` — dynamic steps prop |
| 7 | Rewrite `PreparationPanel` — use store data |
| 8 | Rewrite `InterviewReviewPanel` — transcript + Analyze |
| 9 | Rewrite `InterviewGuidePanel` — AI questions |
| 10 | Rewrite `ScorecardPanel` — aggregate from store |
| 11 | Rewrite `CultureSidebar` — AI values |
| 12 | Rewrite `App.jsx` — dynamic routing |
| 13 | Delete hardcoded data files |
| 14 | Smoke test |
