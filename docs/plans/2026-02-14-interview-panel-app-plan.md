# Interview Panel Prep App — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a local React + Tailwind single-page app that helps Kevin Verzosa prepare for his remaining AutoZone Merch Analyst interviews (rounds 3-5).

**Architecture:** Single-page React app with a 3-step horizontal stepper (Preparation, Interview Guide, Feedback). All JD and candidate data is hardcoded as JS constants. Feedback persists to localStorage. No backend, no router.

**Tech Stack:** Vite, React 19, Tailwind CSS v4

**Design Doc:** `docs/plans/2026-02-14-interview-panel-app-design.md`

---

### Task 1: Scaffold Vite + React + Tailwind project

**Files:**
- Create: `package.json`, `vite.config.js`, `tailwind.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `index.html`

**Step 1: Initialize Vite React project**

Run:
```bash
cd /Users/craigverzosa/Documents/Personal/Vibes/Claude/KevinAutozone
npm create vite@latest . -- --template react
```

If prompted about existing files, overwrite. This creates the scaffold.

**Step 2: Install Tailwind CSS v4**

Run:
```bash
npm install
npm install tailwindcss @tailwindcss/vite
```

**Step 3: Configure Vite for Tailwind v4**

Replace `vite.config.js` with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Step 4: Set up Tailwind CSS entry point**

Replace `src/index.css` with:

```css
@import "tailwindcss";
```

**Step 5: Clean up scaffold**

- Delete `src/App.css` (we use Tailwind only)
- Replace `src/App.jsx` with a minimal placeholder:

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center pt-10 text-red-700">
        Interview Panel Prep
      </h1>
    </div>
  )
}
```

**Step 6: Verify it runs**

Run: `npm run dev`

Expected: Browser shows "Interview Panel Prep" in red bold text on a light gray background at `http://localhost:5173`.

**Step 7: Commit**

```bash
git init
echo "node_modules\ndist\n.DS_Store" > .gitignore
git add .
git commit -m "feat: scaffold Vite + React + Tailwind v4 project"
```

---

### Task 2: Create hardcoded data constants

**Files:**
- Create: `src/data/jobRequirements.js`
- Create: `src/data/candidateProfile.js`
- Create: `src/data/interviewQuestions.js`

**Step 1: Create `src/data/jobRequirements.js`**

```js
export const roleTitle = "Merch Analyst"
export const company = "AutoZone"
export const location = "Memphis, TN"

export const jobDescription =
  "Merchandising analysts are internal consultants for the merchandising department. They provide the data for the line review process. They track promotions, contest, and team objectives. They monitor all of the team categories making sure objectives are met. They provide a statistical and financial foundation for merchandising decisions. They are responsible for programming in SAS to automate team reporting."

export const responsibilities = [
  "Participating in all team activities and decisions",
  "Solving problems through data analysis and reporting",
  "Consulting with product managers on business decisions to provide a statistical and financial foundation",
  "Analyzing proposed promotions and tests to determine feasibility and profitability",
  "Programming in the SAS language to retrieve information and automate reporting",
  "Performing analysis of SMS tables, flexogram tables, warranty databases, store/item/retail tables, shipment tables, and warehouse/item/store tables",
  "Measuring progress versus the operating plan to ensure the team meets company expectations",
]

export const requirements = [
  { skill: "SAS programming for automated reporting", priority: "High" },
  { skill: "SQL for data retrieval & analysis", priority: "High" },
  { skill: "Excel dashboards & pivot tables", priority: "High" },
  { skill: "Data analysis for line reviews, promotions, tests", priority: "High" },
  { skill: "Consulting with product managers on business decisions", priority: "High" },
  { skill: "Python / R / statistical tools", priority: "Medium" },
  { skill: "Tableau / data visualization", priority: "Medium" },
  { skill: "Bachelor's in relevant field", priority: "Required" },
  { skill: "Master's preferred", priority: "Nice-to-have" },
]

export const teamStructure = {
  manager: "Christopher Walker (Merchandising Analytics Manager)",
  seniorAnalysts: 3,
  analysts: 3,
  openRole: "4th Merch Analyst",
  reportsTo: "Christopher Walker",
  supports: "Up to 5 category managers",
  salaryRange: "$90,000 - $95,000 + 10% bonus",
}
```

**Step 2: Create `src/data/candidateProfile.js`**

```js
export const candidate = {
  name: "Kevin Verzosa",
  headline: "Data & AI Enablement Leader | Enterprise Data Strategy | AI & Agent Governance",
  location: "San Francisco, California",
  connections: "500+",
}

export const education = [
  {
    degree: "Management of Artificial Intelligence Certificate",
    school: "Stevens Institute of Technology",
  },
  {
    degree: "Master of Science - MS, Management Information Systems",
    school: "University of Memphis",
  },
  {
    degree: "BBA, Information Technology Management",
    school: "(Undergraduate)",
  },
]

export const certifications = [
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", date: "Apr 2023" },
  { name: "Team Leadership", issuer: "McKinsey & Company", date: "Sep 2024" },
]

export const careerArc = [
  {
    title: "Financial Planning Analyst",
    company: "Pfizer",
    duration: "Sep 2015 - Feb 2018 (2.5 yrs)",
    highlights: [
      "Created Excel dashboards and KPI reports for financial planning analysts",
      "Owned KPI dashboard tracking on-time and accuracy performance",
      "Built VBA-driven automated reporting",
    ],
  },
  {
    title: "RPA Developer",
    company: "Pfizer",
    duration: "Feb 2018 - Jan 2020 (2 yrs)",
    highlights: [
      "Part of pilot program for robotic process automation of Excel reporting",
      "Developed automation scripts to save time on manual dashboard creation",
    ],
  },
  {
    title: "Sr. Associate RPA Governance, Security & Compliance",
    company: "Pfizer",
    duration: "Jan 2020 - Aug 2021 (1.7 yrs)",
    highlights: [
      "Liaised between technical and business teams as business analyst",
      "Ensured business requirements were understood by development teams",
      "Managed security and compliance for RPA implementations",
    ],
  },
  {
    title: "Data Enablement & Governance Manager",
    company: "Pfizer",
    duration: "Aug 2021 - Aug 2025 (4 yrs)",
    highlights: [
      "Reduced non-compliant events by 25% through governance of HIPAA/GDPR policies",
      "Managed metadata governance using Collibra Data Intelligence platform",
      "SQL troubleshooting for data ingestion and ETL pipeline validation",
      "Managed team of developers and coordinated with project managers",
    ],
  },
]

export const technicalSkills = [
  { skill: "Excel / VBA", level: "Strong" },
  { skill: "SQL", level: "Moderate" },
  { skill: "Collibra (Data Intelligence)", level: "Strong" },
  { skill: "Tableau", level: "Basic" },
  { skill: "RPA Tools", level: "Strong" },
  { skill: "Java", level: "Basic" },
  { skill: "Data Governance / Compliance", level: "Strong" },
]

export const gapAnalysis = {
  strongMatch: [
    "Excel/VBA dashboarding and KPI reporting",
    "Data storytelling and stakeholder consulting",
    "Cross-team collaboration and business analysis",
    "Master's degree (MS in MIS — satisfies preferred qualification)",
    "Leadership certifications (CSPO, McKinsey Team Leadership)",
    "10 years of progressive experience at Pfizer",
  ],
  partialMatch: [
    "SQL — weekly troubleshooting, not daily creation (comfortable with joins/data models)",
    "Tableau — consumer of pre-built dashboards, not a builder",
    "Data analysis — governance-focused, not merchandising-domain",
  ],
  gap: [
    "SAS programming — no experience mentioned",
    "Python / R — not referenced in interviews or LinkedIn",
    "Merchandising domain knowledge — no retail/CPG experience",
    "Promotion and test analysis — no direct experience with A/B testing in retail",
  ],
}

export const interviewHistory = [
  {
    round: 1,
    interviewer: "Christopher Walker",
    role: "Merchandising Analytics Manager (Hiring Manager)",
    status: "Completed",
    keyTopics: [
      "Career background and Pfizer journey",
      "Data analysis examples and tools used",
      "Tableau experience (limited)",
      "Correlation analysis exercise (car wash + Coca-Cola)",
      "Explain correlation in layman's terms",
      "Self-assessment on data spectrum (governance + analytics hybrid)",
    ],
  },
  {
    round: 2,
    interviewer: "Adam Sander",
    role: "Commercial Pricing Manager",
    status: "Completed",
    keyTopics: [
      "Career background overview",
      "Programming languages and tools deep-dive",
      "Battery product line introduction scenario",
      "Test design for new product introduction",
      "KPI insight example (timeliness dip investigation)",
      "Communication and storytelling emphasis",
    ],
  },
  {
    round: 3,
    interviewer: "Senior Analyst (TBD)",
    role: "Senior Merchandising Analyst",
    status: "Upcoming",
    keyTopics: [],
  },
  {
    round: 4,
    interviewer: "Another Analytics Manager (TBD)",
    role: "Merchandising Analyst Manager",
    status: "Upcoming",
    keyTopics: [],
  },
  {
    round: 5,
    interviewer: "David Strickland",
    role: "Christopher's boss (Director-level)",
    status: "Upcoming",
    keyTopics: [],
  },
]
```

**Step 3: Create `src/data/interviewQuestions.js`**

```js
export const interviewQuestions = [
  {
    id: 1,
    question:
      "Tell me about a time you had to learn a new technical tool or programming language quickly to meet a project deadline.",
    why: "Both interviewers probed your SAS/SQL depth. The role requires SAS programming, which you haven't used. A senior analyst will likely dig deeper into how fast you can ramp on unfamiliar tools.",
    starPrompt: {
      situation: "Describe the project context and the unfamiliar tool you needed to learn.",
      task: "What was the deadline or business need driving urgency?",
      action: "How did you approach learning it — documentation, pair programming, trial-and-error?",
      result: "What was the outcome? Quantify if possible (time saved, accuracy gained).",
    },
    suggestedTalkingPoints: [
      "Your RPA pilot at Pfizer — learning automation tooling from scratch in a live pilot program",
      "Transitioning from finance Excel work to Collibra's metadata platform",
      "Frame SAS as similar to SQL — 'once you understand data models and the business logic, syntax is secondary' (you used this line with Adam — refine it)",
    ],
  },
  {
    id: 2,
    question:
      "Describe a situation where you identified an insight in data that changed a business decision.",
    why: "Adam explicitly asked for this and noted the team values analysts who proactively pull insights, not just pull data. Your KPI timeliness example was decent but could be stronger with a clearer business impact.",
    starPrompt: {
      situation: "What data were you analyzing and for whom?",
      task: "What was the business question or decision at stake?",
      action: "How did you discover the insight — what did you look at that others hadn't?",
      result: "What decision changed? What was the impact (cost savings, process change, risk avoided)?",
    },
    suggestedTalkingPoints: [
      "Strengthen your KPI timeliness dip story — the system outage root cause was good, but emphasize what action leadership took because of your investigation",
      "The 25% reduction in non-compliant events — what insight drove that governance improvement?",
      "Frame yourself as someone who doesn't just report numbers but asks 'why' and 'so what'",
    ],
  },
  {
    id: 3,
    question:
      "Walk me through how you would approach analyzing whether a new product line is worth introducing to stores.",
    why: "Adam's battery scenario tested your analytical framework for merchandising decisions. A director-level interviewer (round 5, David Strickland) will likely test strategic thinking at an even higher level. Prepare a structured approach.",
    starPrompt: {
      situation: "Frame: 'If a category manager came to me asking whether to add a premium line...'",
      task: "Identify the key business question: incremental revenue vs. cannibalization risk.",
      action: "Describe your analytical framework step by step.",
      result: "What deliverable would you present to the category manager?",
    },
    suggestedTalkingPoints: [
      "Step 1: Baseline current performance of existing lines (sales, margin, market share)",
      "Step 2: Analyze competitor landscape — do competitors offer a premium tier? What's their market share?",
      "Step 3: Assess cannibalization risk — will the new line steal from existing lines or grow the category?",
      "Step 4: Design a controlled test — select representative stores, control for seasonality and demographics",
      "Step 5: Define success metrics upfront — incremental units, margin improvement, market share gain",
      "Step 6: Present recommendation with data-backed projections and a clear go/no-go framework",
    ],
  },
  {
    id: 4,
    question:
      "How do you tailor your communication when presenting data findings to a non-technical executive vs. a peer analyst?",
    why: "Christopher tested this with 'explain correlation to a 12-year-old.' Your car wash / Coca-Cola answer was good but meandering. Polish a cleaner version. The director interview will expect executive-level communication skills.",
    starPrompt: {
      situation: "Give a specific example of presenting the same data to two different audiences.",
      task: "What was the finding and why did the audience matter?",
      action: "How did you adjust — visuals, language, level of detail, recommendations?",
      result: "How was it received? Did the executive act on it?",
    },
    suggestedTalkingPoints: [
      "For executives: lead with the 'so what' — the recommendation and impact — then support with 1-2 data points",
      "For peers: share methodology, show your work, invite challenge",
      "Use your Pfizer KPI dashboard as an example — you presented the same timeliness data up to leadership (story) and across to peers (root cause analysis)",
      "Practice the correlation explanation cleanly: 'Two things tend to happen together. When one goes up, the other does too. That doesn't mean one causes the other — but it tells us where to look for opportunities.'",
    ],
  },
  {
    id: 5,
    question:
      "Tell me about a time you had to manage competing priorities from multiple stakeholders with different needs.",
    why: "This role supports up to 5 category managers simultaneously. Adam emphasized the consulting nature of the role. Your experience managing across Pfizer business units and technical teams is your strongest culture-fit asset — lean into it.",
    starPrompt: {
      situation: "Describe the stakeholders and their competing requests.",
      task: "What was the constraint — time, resources, conflicting priorities?",
      action: "How did you prioritize? How did you communicate trade-offs?",
      result: "Did all stakeholders feel heard? What was the outcome?",
    },
    suggestedTalkingPoints: [
      "Your Collibra role — liaising between technical developers, business partners, and project managers with different timelines",
      "Managing bandwidth: 'I would assess urgency vs. impact, communicate timelines transparently, and set expectations early'",
      "Your Scrum Product Owner certification — backlog prioritization is exactly this skill",
      "Frame for AutoZone: 'Supporting 5 category managers means I need to understand each person's priority cycle and plan my work around their cadence — weekly reports, ad hoc requests, and line review timelines'",
    ],
  },
]
```

**Step 4: Commit**

```bash
git add src/data/
git commit -m "feat: add hardcoded data constants from JD, transcripts, and LinkedIn"
```

---

### Task 3: Build StepIndicator component

**Files:**
- Create: `src/components/StepIndicator.jsx`
- Modify: `src/App.jsx`

**Step 1: Create `src/components/StepIndicator.jsx`**

```jsx
const steps = ["Preparation", "Interview Guide", "Feedback"]

export default function StepIndicator({ currentStep, onStepClick }) {
  return (
    <div className="flex items-center justify-center py-8">
      {steps.map((label, index) => (
        <div key={label} className="flex items-center">
          <button
            onClick={() => onStepClick(index)}
            className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-colors cursor-pointer
              ${index === currentStep
                ? "bg-red-700 text-white"
                : index < currentStep
                  ? "bg-red-200 text-red-800"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            {index + 1}
          </button>
          <span
            className={`ml-2 text-sm font-medium hidden sm:inline
              ${index === currentStep ? "text-red-700" : "text-gray-500"}`}
          >
            {label}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 mx-4
                ${index < currentStep ? "bg-red-300" : "bg-gray-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
```

**Step 2: Wire StepIndicator into App.jsx**

Replace `src/App.jsx` with:

```jsx
import { useState } from "react"
import StepIndicator from "./components/StepIndicator"

export default function App() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-red-700 text-center">
            Interview Panel Prep
          </h1>
          <p className="text-center text-gray-500 text-sm mt-1">
            AutoZone — Merch Analyst
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4">
        <StepIndicator currentStep={currentStep} onStepClick={setCurrentStep} />

        <main className="pb-12">
          {currentStep === 0 && <p className="text-center text-gray-400">Preparation Panel</p>}
          {currentStep === 1 && <p className="text-center text-gray-400">Interview Guide Panel</p>}
          {currentStep === 2 && <p className="text-center text-gray-400">Feedback Panel</p>}
        </main>

        <div className="flex justify-between pb-8">
          <button
            onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep((s) => Math.min(2, s + 1))}
            disabled={currentStep === 2}
            className="px-4 py-2 rounded bg-red-700 text-white disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
```

**Step 3: Verify**

Run: `npm run dev`

Expected: Header with title, 3-step indicator, Previous/Next buttons navigate between placeholder text.

**Step 4: Commit**

```bash
git add src/components/StepIndicator.jsx src/App.jsx
git commit -m "feat: add StepIndicator component and stepper navigation"
```

---

### Task 4: Build PreparationPanel

**Files:**
- Create: `src/components/PreparationPanel.jsx`
- Modify: `src/App.jsx` (replace placeholder)

**Step 1: Create `src/components/PreparationPanel.jsx`**

```jsx
import {
  roleTitle, company, location, jobDescription,
  responsibilities, requirements, teamStructure,
} from "../data/jobRequirements"
import {
  candidate, education, certifications, careerArc,
  technicalSkills, gapAnalysis, interviewHistory,
} from "../data/candidateProfile"

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

function SkillLevelBadge({ level }) {
  const colors = {
    Strong: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-700",
    Basic: "bg-red-100 text-red-700",
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[level] || "bg-gray-100"}`}>
      {level}
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

export default function PreparationPanel() {
  return (
    <div className="space-y-6">
      {/* Role Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-red-700 mb-2">
          {roleTitle} — {company}
        </h2>
        <p className="text-sm text-gray-500 mb-3">{location} | {teamStructure.salaryRange}</p>
        <p className="text-sm text-gray-700 mb-4">{jobDescription}</p>
        <div className="bg-gray-50 rounded p-4 text-sm">
          <p className="font-semibold text-gray-700 mb-1">Team Structure</p>
          <p className="text-gray-600">
            Manager: {teamStructure.manager} | {teamStructure.seniorAnalysts} Senior Analysts + {teamStructure.analysts} Analysts | Open role: {teamStructure.openRole}
          </p>
          <p className="text-gray-600 mt-1">
            You would support: {teamStructure.supports}
          </p>
        </div>
      </div>

      {/* Two-column: Requirements vs Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Role Requirements */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Role Requirements</h3>
          <ul className="space-y-3">
            {requirements.map((req) => (
              <li key={req.skill} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{req.skill}</span>
                <PriorityBadge priority={req.priority} />
              </li>
            ))}
          </ul>
          <h4 className="text-sm font-semibold text-gray-700 mt-6 mb-2">Key Responsibilities</h4>
          <ul className="space-y-1">
            {responsibilities.map((r) => (
              <li key={r} className="text-sm text-gray-600 flex">
                <span className="text-red-400 mr-2 shrink-0">-</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Kevin's Profile */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-1">{candidate.name}</h3>
          <p className="text-xs text-gray-500 mb-4">{candidate.headline}</p>

          <h4 className="text-sm font-semibold text-gray-700 mb-2">Education</h4>
          <ul className="space-y-1 mb-4">
            {education.map((e) => (
              <li key={e.degree} className="text-sm text-gray-600">
                {e.degree} — <span className="text-gray-400">{e.school}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold text-gray-700 mb-2">Certifications</h4>
          <ul className="space-y-1 mb-4">
            {certifications.map((c) => (
              <li key={c.name} className="text-sm text-gray-600">
                {c.name} — <span className="text-gray-400">{c.issuer} ({c.date})</span>
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technical Skills</h4>
          <ul className="space-y-2 mb-4">
            {technicalSkills.map((t) => (
              <li key={t.skill} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{t.skill}</span>
                <SkillLevelBadge level={t.level} />
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold text-gray-700 mb-2">Career Arc (Pfizer, 10 yrs)</h4>
          <div className="space-y-3">
            {careerArc.map((role) => (
              <div key={role.title} className="border-l-2 border-red-200 pl-3">
                <p className="text-sm font-medium text-gray-800">{role.title}</p>
                <p className="text-xs text-gray-400">{role.duration}</p>
                <ul className="mt-1 space-y-0.5">
                  {role.highlights.map((h) => (
                    <li key={h} className="text-xs text-gray-500">- {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gap Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-4">Gap Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <GapBadge type="strong" />
            <ul className="mt-2 space-y-1">
              {gapAnalysis.strongMatch.map((item) => (
                <li key={item} className="text-sm text-gray-600">- {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <GapBadge type="partial" />
            <ul className="mt-2 space-y-1">
              {gapAnalysis.partialMatch.map((item) => (
                <li key={item} className="text-sm text-gray-600">- {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <GapBadge type="gap" />
            <ul className="mt-2 space-y-1">
              {gapAnalysis.gap.map((item) => (
                <li key={item} className="text-sm text-gray-600">- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Interview History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-bold text-gray-800 mb-4">Interview Progress</h3>
        <div className="space-y-3">
          {interviewHistory.map((interview) => (
            <div key={interview.round} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                ${interview.status === "Completed" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                {interview.round}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {interview.interviewer} — <span className="text-gray-500 font-normal">{interview.role}</span>
                </p>
                <span className={`text-xs ${interview.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
                  {interview.status}
                </span>
                {interview.keyTopics.length > 0 && (
                  <ul className="mt-1 space-y-0.5">
                    {interview.keyTopics.map((t) => (
                      <li key={t} className="text-xs text-gray-400">- {t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Wire into App.jsx**

In `src/App.jsx`, add import and replace placeholder:

```jsx
import PreparationPanel from "./components/PreparationPanel"
```

Replace `{currentStep === 0 && <p ...>Preparation Panel</p>}` with:

```jsx
{currentStep === 0 && <PreparationPanel />}
```

**Step 3: Verify**

Run: `npm run dev`

Expected: Step 1 shows role overview, two-column layout with requirements + candidate profile, gap analysis with colored badges, and interview progress tracker.

**Step 4: Commit**

```bash
git add src/components/PreparationPanel.jsx src/App.jsx
git commit -m "feat: build PreparationPanel with role requirements, candidate profile, and gap analysis"
```

---

### Task 5: Build InterviewGuidePanel

**Files:**
- Create: `src/components/InterviewGuidePanel.jsx`
- Modify: `src/App.jsx` (replace placeholder)

**Step 1: Create `src/components/InterviewGuidePanel.jsx`**

```jsx
import { useState } from "react"
import { interviewQuestions } from "../data/interviewQuestions"

function QuestionCard({ question, isExpanded, onToggle }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
          {question.id}
        </span>
        <div>
          <p className="text-sm font-semibold text-gray-800">{question.question}</p>
          <p className="text-xs text-gray-400 mt-1">Click to {isExpanded ? "collapse" : "expand"} prep guidance</p>
        </div>
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
          {/* Why this question */}
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-xs font-bold text-yellow-800 mb-1">Why This Will Come Up</p>
            <p className="text-sm text-yellow-700">{question.why}</p>
          </div>

          {/* STAR Framework */}
          <div>
            <p className="text-xs font-bold text-gray-700 mb-2">Structure Your Answer (STAR)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(question.starPrompt).map(([key, prompt]) => (
                <div key={key} className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-bold text-red-700 uppercase">{key}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{prompt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested talking points */}
          <div>
            <p className="text-xs font-bold text-gray-700 mb-2">Suggested Talking Points</p>
            <ul className="space-y-1">
              {question.suggestedTalkingPoints.map((point) => (
                <li key={point} className="text-sm text-gray-600 flex">
                  <span className="text-red-400 mr-2 shrink-0">-</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewGuidePanel() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-2">
        <h2 className="text-lg font-bold text-red-700 mb-1">Targeted Behavioral Questions</h2>
        <p className="text-sm text-gray-500">
          Based on patterns from Interviews 1 and 2, these are the questions most likely to come up in your remaining rounds.
          Each includes context on why it matters and a STAR framework to structure your answer.
        </p>
      </div>

      {interviewQuestions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          isExpanded={expandedId === q.id}
          onToggle={() => setExpandedId(expandedId === q.id ? null : q.id)}
        />
      ))}
    </div>
  )
}
```

**Step 2: Wire into App.jsx**

Add import:
```jsx
import InterviewGuidePanel from "./components/InterviewGuidePanel"
```

Replace `{currentStep === 1 && <p ...>Interview Guide Panel</p>}` with:

```jsx
{currentStep === 1 && <InterviewGuidePanel />}
```

**Step 3: Verify**

Run: `npm run dev`

Expected: Step 2 shows 5 collapsible question cards. Clicking one expands to show "Why This Will Come Up", STAR prompts, and suggested talking points.

**Step 4: Commit**

```bash
git add src/components/InterviewGuidePanel.jsx src/App.jsx
git commit -m "feat: build InterviewGuidePanel with 5 expandable question cards and STAR framework"
```

---

### Task 6: Build FeedbackPanel with localStorage persistence

**Files:**
- Create: `src/components/FeedbackPanel.jsx`
- Modify: `src/App.jsx` (replace placeholder)

**Step 1: Create `src/components/FeedbackPanel.jsx`**

```jsx
import { useState, useEffect } from "react"

const STORAGE_KEY = "interview-panel-feedback"

const defaultFeedback = {
  cultureFitScore: 0,
  cultureFitNotes: "",
  technicalScore: 0,
  technicalNotes: "",
}

function StarRating({ value, onChange, label }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-2">{label}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className={`w-10 h-10 rounded text-lg cursor-pointer transition-colors
              ${star <= value
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
          >
            {star}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function FeedbackPanel() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : defaultFeedback
  })
  const [saved, setSaved] = useState(false)

  const update = (field, value) => {
    setFeedback((prev) => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback))
    setSaved(true)
  }

  const handleReset = () => {
    setFeedback(defaultFeedback)
    localStorage.removeItem(STORAGE_KEY)
    setSaved(false)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-bold text-red-700 mb-1">Self-Assessment</h2>
        <p className="text-sm text-gray-500">
          After practicing your interview responses, rate yourself honestly.
          Use the notes to capture specific areas for improvement before your next round.
        </p>
      </div>

      {/* Culture Fit */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
        <h3 className="text-md font-bold text-gray-800">Culture Fit</h3>
        <p className="text-xs text-gray-500">
          Teamwork, communication style, adaptability, community orientation, curiosity, willingness to consult and collaborate.
        </p>
        <StarRating
          label="Score (1 = Needs Work, 5 = Strong)"
          value={feedback.cultureFitScore}
          onChange={(v) => update("cultureFitScore", v)}
        />
        <div>
          <label className="text-sm font-medium text-gray-700">Notes</label>
          <textarea
            value={feedback.cultureFitNotes}
            onChange={(e) => update("cultureFitNotes", e.target.value)}
            placeholder="What went well? What needs improvement? Specific examples to refine..."
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y"
          />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
        <h3 className="text-md font-bold text-gray-800">Technical Skills</h3>
        <p className="text-xs text-gray-500">
          Data analysis depth, tool proficiency (SQL, Excel, SAS), problem-solving framework, ability to structure analytical approaches.
        </p>
        <StarRating
          label="Score (1 = Needs Work, 5 = Strong)"
          value={feedback.technicalScore}
          onChange={(v) => update("technicalScore", v)}
        />
        <div>
          <label className="text-sm font-medium text-gray-700">Notes</label>
          <textarea
            value={feedback.technicalNotes}
            onChange={(e) => update("technicalNotes", e.target.value)}
            placeholder="How confident were you with tool-specific questions? What technical areas need more prep?"
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 cursor-pointer"
        >
          Reset All
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded bg-red-700 text-white text-sm hover:bg-red-800 cursor-pointer"
        >
          Save Feedback
        </button>
      </div>

      {saved && (
        <p className="text-sm text-green-600 text-right">Feedback saved to local storage.</p>
      )}
    </div>
  )
}
```

**Step 2: Wire into App.jsx**

Add import:
```jsx
import FeedbackPanel from "./components/FeedbackPanel"
```

Replace `{currentStep === 2 && <p ...>Feedback Panel</p>}` with:

```jsx
{currentStep === 2 && <FeedbackPanel />}
```

**Step 3: Verify**

Run: `npm run dev`

Expected: Step 3 shows two scoring sections with clickable number ratings (1-5), text areas for notes, Save and Reset buttons. Clicking Save shows confirmation. Refreshing the page retains the data.

**Step 4: Commit**

```bash
git add src/components/FeedbackPanel.jsx src/App.jsx
git commit -m "feat: build FeedbackPanel with star ratings, notes, and localStorage persistence"
```

---

### Task 7: Final polish and verify complete app

**Files:**
- Modify: `src/App.jsx` (minor)
- Modify: `index.html` (title)

**Step 1: Update `index.html` title**

Change `<title>Vite + React</title>` to `<title>Interview Panel Prep — AutoZone Merch Analyst</title>`

**Step 2: Full walkthrough verification**

Run: `npm run dev`

Verify:
- [ ] Header shows "Interview Panel Prep" with "AutoZone — Merch Analyst" subtitle
- [ ] Step indicator highlights current step in red, completed steps in light red
- [ ] Step 1: Role overview, two-column requirements vs. profile, gap analysis (green/yellow/red), interview progress
- [ ] Step 2: 5 expandable question cards with STAR framework and talking points
- [ ] Step 3: Two star-rating sections, text areas, Save persists on refresh, Reset clears
- [ ] Previous/Next buttons navigate correctly, disabled at boundaries

**Step 3: Commit**

```bash
git add .
git commit -m "feat: complete Interview Panel Prep App - all 3 steps functional"
```
