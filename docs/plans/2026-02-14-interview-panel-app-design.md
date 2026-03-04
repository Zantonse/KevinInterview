# Interview Panel Prep App — Design Document

**Date:** 2026-02-14
**Purpose:** A local React + Tailwind app to help Kevin Verzosa prepare for his remaining AutoZone Merch Analyst interviews (rounds 3-5).

## Architecture

Single-page React app with a **horizontal 3-step stepper**. No backend — all content is hardcoded from the JD PDF, interview transcripts, and LinkedIn profile. Feedback persists to `localStorage`.

**Stack:** Vite + React 19, Tailwind CSS v4, no router, no external state library.

## Step 1: Preparation Panel

Two-column layout: Role Requirements (left) vs Kevin's Profile (right), with Gap Analysis below.

### Role Requirements (from JD)

| Requirement | Priority |
|---|---|
| SAS programming for automated reporting | High |
| SQL for data retrieval & analysis | High |
| Excel dashboards & pivot tables | High |
| Data analysis for line reviews, promotions, tests | High |
| Consulting with product managers on business decisions | High |
| Python / R / statistical tools | Medium |
| Tableau / data visualization | Medium |
| Bachelor's in relevant field | Required |
| Master's preferred | Nice-to-have |

### Kevin's Profile (from LinkedIn + Transcripts)

**Education:**
- BBA, IT Management
- MS, Management Information Systems (University of Memphis) — satisfies "Master's preferred"
- AI Certificate, Stevens Institute of Technology

**Certifications:** CSPO (Scrum Alliance), Team Leadership (McKinsey)

**Career Arc (10 years at Pfizer):**
1. Financial Planning Analyst (2.5 yrs) — Excel dashboards, KPI reporting, VBA
2. RPA Developer (2 yrs) — automation scripting, pilot program
3. Sr. Associate RPA Governance (1.7 yrs) — business analysis, security & compliance
4. Data Enablement & Governance Manager (4 yrs) — metadata governance, Collibra, SQL troubleshooting, HIPAA/GDPR compliance, reduced non-compliant events 25%

**Technical Skills:** Excel/VBA (strong), SQL (weekly troubleshooting, joins, data models), Java, Collibra, Tableau (consumer), RPA tools

### Gap Analysis

- **Strong Match:** Excel/VBA dashboarding, data storytelling, stakeholder consulting, KPI tracking, cross-team collaboration, Master's degree, leadership certifications
- **Partial Match:** SQL (troubleshooting not daily creation), Tableau (consumer not builder), data analysis (governance-focused, not merchandising)
- **Gap:** SAS programming, Python/R, merchandising domain knowledge, promotion/test analysis

## Step 2: Interview Guide

Five behavioral questions with context and STAR prompts:

1. **Learning a new technical tool quickly** — addresses SAS/SQL gap
2. **Identifying an insight that changed a business decision** — addresses merchandising consulting
3. **Analyzing whether to introduce a new product line** — addresses Adam's battery scenario pattern
4. **Tailoring communication for different audiences** — addresses Christopher's "explain to a 12-year-old" pattern
5. **Working across teams with competing priorities** — addresses 5-manager consulting model

Each question includes:
- Why it's likely to come up (linked to prior interview patterns)
- STAR framework prompt (Situation, Task, Action, Result)
- Suggested talking points from Kevin's actual experience

## Step 3: Feedback Panel (Self-Assessment)

Two scoring dimensions:
- **Culture Fit** (1-5 stars): teamwork, communication, adaptability, community
- **Technical Skills** (1-5 stars): data analysis, tool proficiency, problem-solving

Each has a `<textarea>` for notes. Save button persists to `localStorage`. Reset clears all.

## Visual Design

- AutoZone-inspired: red (#CC0000) accent, dark gray (#1F2937) text, white cards, light gray (#F3F4F6) background
- Step indicator: numbered circles with connecting lines, active step highlighted in red
- Cards with subtle shadow, generous padding
- Desktop-optimized, responsive

## Component Tree

```
App
├── StepIndicator
├── PreparationPanel
│   ├── RoleRequirements
│   ├── CandidateProfile
│   └── GapAnalysis
├── InterviewGuidePanel
│   └── QuestionCard (x5)
└── FeedbackPanel
    ├── ScoreSlider (Culture Fit)
    ├── ScoreSlider (Technical Skills)
    ├── NotesTextarea (x2)
    └── SaveButton / ResetButton
```
