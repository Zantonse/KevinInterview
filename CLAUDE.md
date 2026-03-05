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
- Shape: `{ apiKey, activeRoleId, profile, companies: {}, roles: {}, interviews: {} }`
- **4-layer hierarchy:** Profile (candidate) → Companies → Roles → Interviews, linked by foreign keys (`companyId` on roles, `roleId` on interviews)
- `profile` holds: name, headline, careerArc[], education[], skills[], strengths[], growthAreas[], storyBank[], resumeRaw
- Each `companies[id]` holds: name, companyProfile
- Each `roles[id]` holds: companyId, roleTitle, requirements[], gapAnalysis, prepFocus[], commonQuestions[], cultureValues[], learningGuide[], prepChecklist, starDrafts, notes, appStatus
- Each `interviews[id]` holds: roleId, interviewerName, interviewerRole, transcriptRaw, status, analysis, interviewerNotes (string, not a map)
- Helper: `getInterviewsForRole(store, roleId)` returns filtered+sorted interviews for a role
- The hook returns the store plus ~20 memoized updater functions (e.g., `createRole`, `addStory`, `addInterview`, `setInterviewAnalysis`)
- `update()` is the internal pattern: accepts either an updater function or a partial state object, saves to localStorage on every call
- Three-tier migration chain: v1 (single-job) → v2 (flat jobs map) → v3 (hierarchical)

### Seed Data

`src/seeds/collibra-customer-engineer.js` exports 4 entities:
- `kevinProfile` — Full candidate profile with career arc, skills, education, strengths, growth areas, and 4 pre-written STAR stories in the story bank
- `collibraCompany` — Company research (profile, mission, products, culture, key facts, interview tips)
- `collibraRole` — Role data (requirements, gap analysis, questions, learning guide, interview process)
- `christinaInterview` — Pre-analyzed recruiter screen with full transcript, analysis, and interviewer notes

`src/seeds/load-seed.js` accepts `(profile, company, role, preAnalyzedInterviews)`, builds foreign key linkages, and writes to localStorage in v3 format.

### Gemini API Integration

`src/lib/gemini.js` exports two functions:

- `generatePrepContent(apiKey, jd, resume)` — generates the full role prep structure (requirements, gap analysis, questions, company profile, culture values). Called once during setup.
- `analyzeTranscript(apiKey, jd, resume, previousAnalyses, transcript, name, role)` — analyzes a single interview transcript. Previous analyses are passed for context continuity across interviews.

Both functions use `gemini-2.5-flash` with `responseMimeType: "application/json"` to force structured JSON output. The API key is user-provided (stored in localStorage) or falls back to `VITE_GEMINI_API_KEY` env var.

### View Routing

`App.jsx` uses a multi-state view model without a router:

- **Dashboard** (`JobsDashboard`) — shown when no role is active and setup is hidden. Shows candidate profile bar, company-grouped role cards, aggregated insights, import/export.
- **Profile** (`ProfilePanel`) — global view showing candidate career arc, skills, education, growth areas.
- **Story Bank** (`StoryBankPanel`) — global view for managing reusable STAR stories with theme tags.
- **Setup** (`SetupPanel`) — shown when creating a new role. Collects API key, JD, and resume (pre-populated from profile). Calls Gemini.
- **Role view** — shown when `activeRoleId` is set. Uses sidebar + step-based navigation:

The step list is dynamically built: `[Prep, Company, ...Interview 1..N, Guide, Scorecard, Notes]`. Step indices are computed at render time based on the interviews array length. `renderStep()` in App.jsx maps `currentStep` to the correct panel component.

App.jsx constructs a backwards-compatible `job` shim object from the normalized `activeRole` + `activeCompany` data so existing panels work without changes.

### Key Components

| Component | Purpose |
|---|---|
| `ProfilePanel` | Candidate career arc, skills, education, growth areas, raw resume |
| `StoryBankPanel` | STAR story library with add/edit/delete, theme tags, tag filtering |
| `SetupPanel` | JD + resume input (pre-filled from profile), triggers Gemini prep generation |
| `JobsDashboard` | Company-grouped role dashboard with profile bar, status, insights, import/export |
| `PreparationPanel` | Requirements, gap analysis, prep checklist, learning guide, interviewer notes |
| `CompanyPanel` | Company profile (mission, culture, key facts, tips) |
| `InterviewReviewPanel` | Transcript input + Gemini analysis display (per interview) |
| `InterviewGuidePanel` | AI-generated questions with STAR framework and draft textareas |
| `ScorecardPanel` | Aggregated performance across all analyzed interviews |
| `NotesPanel` | Free-form notes for the active role |
| `CheatSheetModal` | Printable cheat sheet (opens in new window, print-optimized HTML) |
| `AddInterviewModal` | Modal to add interviewer name, role, and optional scheduled date |
| `SidebarNav` | Sidebar with global Candidate phase (Profile, Story Bank) + role-specific phases |

### Data Flow

1. App seeds with Kevin's profile, Collibra company/role data, and pre-analyzed Christina interview on first load
2. User creates a role via `SetupPanel` → Gemini generates structured prep content → stored as a `role` + `company` entry
3. User adds interviews via `AddInterviewModal` → each gets a dynamic step in the stepper
4. User pastes transcript in `InterviewReviewPanel` → Gemini analyzes → analysis stored on the interview object
5. `ScorecardPanel` aggregates all analyzed interviews' assessments
6. `CheatSheetModal` compiles gap analysis, culture values, STAR drafts, and next steps into a printable HTML document
7. Profile and Story Bank are global — accessible from dashboard or sidebar, shared across all role applications

## Conventions

- Tailwind-only styling (no CSS modules, no component CSS files). The only CSS file is `src/index.css` containing `@import "tailwindcss"`.
- All components are function components using hooks. No class components.
- Forest green accent color scheme (OKLCH-based design tokens in index.css).
- Components receive data as props from App.jsx; no prop drilling beyond one level — App.jsx handles all store interactions.
- `job` shim in App.jsx provides backwards-compatible flat object for panels that haven't been updated to use normalized props directly.
