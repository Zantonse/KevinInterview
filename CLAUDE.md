# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No test framework is configured. No linter is configured.

## Architecture

This is a **single-page React app** for interview preparation. Users paste a job description and resume, and the app uses the **Gemini AI API** (`@google/generative-ai`) to generate a full prep dashboard — gap analysis, likely questions, coaching guidance, and post-interview transcript analysis.

**Tech stack:** React 19, Vite, Tailwind CSS v4 (plugin-based via `@tailwindcss/vite`, not PostCSS). No router, no external state library.

### State Management

All app state flows through a single custom hook: `src/hooks/useJobStore.js`.

- State is a flat object persisted to `localStorage` under key `"interview-prep"`
- Shape: `{ apiKey, activeJobId, jobs: { [id]: JobEntry } }`
- Each `JobEntry` holds: `job` (AI-generated prep data), `interviews[]`, `prepChecklist`, `interviewerNotes`, `starDrafts`, `notes`, `appStatus`
- The hook returns the store plus ~18 memoized updater functions (e.g., `createJob`, `addInterview`, `setTranscript`, `setInterviewAnalysis`)
- `update()` is the internal pattern: accepts either an updater function or a partial state object, saves to localStorage on every call
- The hook includes migration logic for an older single-job format

### Gemini API Integration

`src/lib/gemini.js` exports two functions:

- `generatePrepContent(apiKey, jd, resume)` — generates the full job prep structure (requirements, gap analysis, questions, company profile, culture values). Called once during setup.
- `analyzeTranscript(apiKey, jd, resume, previousAnalyses, transcript, name, role)` — analyzes a single interview transcript. Previous analyses are passed for context continuity across interviews.

Both functions use `gemini-2.5-flash` with `responseMimeType: "application/json"` to force structured JSON output. The API key is user-provided (stored in localStorage) or falls back to `VITE_GEMINI_API_KEY` env var.

### View Routing

`App.jsx` uses a simple three-state view model without a router:

- **Dashboard** (`JobsDashboard`) — shown when no job is active and setup is hidden. Lists all saved preps with status, insights, import/export.
- **Setup** (`SetupPanel`) — shown when creating a new job. Collects API key, JD, and resume, calls Gemini.
- **Job view** — shown when `activeJobId` is set. Uses a step-based navigation system:

The step indicator is dynamically built: `[Prep, Company, ...Interview 1..N, Guide, Scorecard, Notes]`. Step indices are computed at render time based on the interviews array length. The `renderStep()` function in App.jsx maps `currentStep` to the correct panel component.

### Key Components

| Component | Purpose |
|---|---|
| `SetupPanel` | JD + resume input, triggers Gemini prep generation |
| `JobsDashboard` | Multi-job dashboard with status, aggregated insights, import/export |
| `PreparationPanel` | Requirements, gap analysis, prep checklist, interviewer notes |
| `CompanyPanel` | AI-generated company profile (mission, culture, key facts, tips) |
| `InterviewReviewPanel` | Transcript input + Gemini analysis display (per interview) |
| `InterviewGuidePanel` | AI-generated questions with STAR framework and draft textareas |
| `ScorecardPanel` | Aggregated performance across all analyzed interviews |
| `NotesPanel` | Free-form notes for the active job |
| `CheatSheetModal` | Printable cheat sheet (opens in new window, print-optimized HTML) |
| `AddInterviewModal` | Modal to add interviewer name, role, and optional scheduled date |
| `StepIndicator` | Dynamic horizontal stepper, accepts `steps` prop |

### Data Flow

1. User creates a job via `SetupPanel` → Gemini generates structured prep content → stored as `job` in the active job entry
2. User adds interviews via `AddInterviewModal` → each gets a dynamic step in the stepper
3. User pastes transcript in `InterviewReviewPanel` → Gemini analyzes → analysis stored on the interview object
4. `ScorecardPanel` aggregates all analyzed interviews' assessments
5. `CheatSheetModal` compiles gap analysis, culture values, STAR drafts, and next steps into a printable HTML document

## Conventions

- Tailwind-only styling (no CSS modules, no component CSS files). The only CSS file is `src/index.css` containing `@import "tailwindcss"`.
- All components are function components using hooks. No class components.
- Blue accent color scheme (`blue-600`/`blue-700` for primary actions).
- Components receive data as props from App.jsx; no prop drilling beyond one level — App.jsx handles all store interactions.
