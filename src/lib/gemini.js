import { GoogleGenerativeAI } from "@google/generative-ai"

function getClient(apiKey) {
  return new GoogleGenerativeAI(apiKey)
}

function getModel(apiKey) {
  const key = apiKey || import.meta.env.VITE_GEMINI_API_KEY
  const client = getClient(key)
  return client.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { responseMimeType: "application/json" },
  })
}

export async function generatePrepContent(apiKey, jobDescriptionRaw, resumeRaw) {
  const model = getModel(apiKey)

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
  ],
  "companyProfile": {
    "summary": "2-3 sentence overview of what this company does, their industry, and their scale/stage",
    "mission": "their stated or implied mission/purpose based on the JD",
    "productsServices": "what they make, sell, or provide",
    "culture": "what their work culture and environment seem like based on language and signals in the JD",
    "keyFacts": [
      "important fact about the company the candidate should know before walking in (4-5 items)"
    ],
    "interviewTips": [
      "specific thing to mention or reference in the interview to show you did your homework (4-5 items)"
    ]
  }
}

Generate 6-8 requirements, 5-7 responsibilities, 5 items each for gap analysis sections, 5 prep focus items, 6-8 common questions, 4-5 culture values, and all companyProfile fields.`

  const result = await model.generateContent(prompt)
  const raw = result.response.text()
  try {
    return JSON.parse(raw)
  } catch {
    console.error("Gemini returned non-JSON:", raw)
    throw new Error("Failed to parse Gemini response. Check the console for the raw output.")
  }
}

export async function analyzeTranscript(apiKey, jobDescriptionRaw, resumeRaw, previousAnalyses, transcript, interviewerName, interviewerRole) {
  const model = getModel(apiKey)

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
  "postReflection": "candidate's own reflection if they expressed one in the transcript, otherwise empty string",
  "nextSteps": ["specific, actionable thing to do before the next interview based on this analysis (4-5 items)"]
}

Be specific and brutally honest. Reference actual moments from the transcript. Coaching notes should tell the candidate exactly what to say differently next time.`

  const result = await model.generateContent(prompt)
  const raw = result.response.text()
  try {
    return JSON.parse(raw)
  } catch {
    console.error("Gemini returned non-JSON:", raw)
    throw new Error("Failed to parse Gemini response. Check the console for the raw output.")
  }
}

export async function generateStudyPlan(apiKey, job, previousInterview, nextInterview, daysAvailable) {
  const model = getModel(apiKey)

  const prevAnalysisSummary = previousInterview.analysis
    ? `PREVIOUS INTERVIEW ANALYSIS (${previousInterview.interviewerName} — ${previousInterview.interviewerRole}):
- Overall tone: ${previousInterview.analysis.overallTone}
- Summary: ${previousInterview.analysis.summary}
- Strengths: ${(previousInterview.analysis.strengths || []).join("; ")}
- Areas for improvement: ${(previousInterview.analysis.areasForImprovement || []).join("; ")}
- Next steps recommended: ${(previousInterview.analysis.nextSteps || []).join("; ")}
- Interviewer signals: ${(previousInterview.analysis.interviewerSignals || []).join("; ")}`
    : `PREVIOUS INTERVIEW: ${previousInterview.interviewerName} (${previousInterview.interviewerRole}) — not yet analyzed.`

  const nextContext = nextInterview
    ? `NEXT INTERVIEW: ${nextInterview.interviewerName} — ${nextInterview.interviewerRole}`
    : "NEXT INTERVIEW: Final stage (no specific interviewer identified yet)"

  const totalHours = Math.round(daysAvailable * 1.75)

  const prompt = `You are an expert interview coach creating a time-boxed, day-by-day study plan.

ROLE: ${job.roleTitle} at ${job.company}
DAYS AVAILABLE UNTIL NEXT INTERVIEW: ${daysAvailable}
TOTAL STUDY HOURS: ${totalHours} (approximately 1.5-2 hours per day)
${nextContext}

JOB DESCRIPTION SUMMARY:
${(job.jobDescriptionRaw || "").slice(0, 800)}

GAP ANALYSIS:
- Strong matches: ${(job.gapAnalysis?.strongMatch || []).join("; ")}
- Gaps to address: ${(job.gapAnalysis?.gap || []).join("; ")}

${prevAnalysisSummary}

Create a specific, actionable day-by-day study plan. Each day should have a clear theme, 1-2 tasks with hour-level guidance, and be realistic (1.5-2 hours per day). Day 1 orients and assesses. Middle days practice and deepen. The final day is light review and logistics only — no new material within 24 hours of the interview.

Be hyper-specific: reference the actual role, the actual interviewer's background, the actual gaps, and lessons from the previous interview. This should read like advice from someone who studied this candidate's specific situation, not a generic checklist.

Return a JSON object with exactly this structure:
{
  "generatedAt": ${Date.now()},
  "target": "${nextInterview ? `${nextInterview.interviewerName}${nextInterview.scheduledAt ? ` — ${nextInterview.scheduledAt}` : ""}` : "Next interview"}",
  "daysAvailable": ${daysAvailable},
  "totalHours": ${totalHours},
  "overview": "2-3 sentence description of what this plan focuses on and why, based on gap analysis and previous interview signals",
  "days": [
    {
      "dayLabel": "Day 1 — [short description e.g. Today (Mon Mar 9)]",
      "hours": 2,
      "theme": "theme title for this day",
      "tasks": [
        { "label": "Hour 1", "text": "specific actionable task — what to open, read, practice, or produce" },
        { "label": "Hour 2", "text": "specific actionable task" }
      ]
    }
  ]
}

Generate exactly ${daysAvailable} day objects.`

  const result = await model.generateContent(prompt)
  const raw = result.response.text()
  try {
    return JSON.parse(raw)
  } catch {
    console.error("Gemini returned non-JSON:", raw)
    throw new Error("Failed to parse Gemini response. Check the console for the raw output.")
  }
}
