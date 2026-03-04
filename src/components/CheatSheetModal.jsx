const PRINT_STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 11px;
    color: #1a1a1a;
    line-height: 1.5;
    padding: 24px;
  }
  .header { border-bottom: 2px solid #1d4ed8; padding-bottom: 10px; margin-bottom: 16px; }
  .header h1 { font-size: 20px; color: #1d4ed8; margin-bottom: 2px; }
  .subtitle { color: #6b7280; font-size: 10px; }
  h2 {
    font-size: 12px;
    font-weight: 700;
    color: #111827;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 4px;
    margin-bottom: 8px;
  }
  .section { margin-bottom: 14px; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 14px; }
  ul { padding-left: 14px; }
  li { margin-bottom: 3px; }
  .value-name { font-weight: 700; }
  .star-block {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-left: 3px solid #1d4ed8;
    border-radius: 4px;
    padding: 8px 10px;
    margin-bottom: 8px;
    page-break-inside: avoid;
  }
  .star-question { font-weight: 600; margin-bottom: 6px; font-size: 11px; }
  .star-field { margin-bottom: 5px; }
  .star-label {
    font-weight: 700;
    color: #1d4ed8;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .star-text { color: #374151; margin-top: 1px; }
  .next-steps-block {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 4px;
    padding: 10px 14px;
  }
  .gap-item { color: #b91c1c; }
  .strength-item { color: #15803d; }
  @page { margin: 1.5cm; size: letter; }
  @media print { body { padding: 0; } }
`

function generateHTML(job, starDrafts, interviews) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  })

  const starStories = (job.commonQuestions || [])
    .map((q, i) => ({ question: q.question, draft: (starDrafts || {})[i] || {} }))
    .filter(({ draft }) => ["situation", "task", "action", "result"].some((k) => draft[k]?.trim()))

  const lastAnalyzed = [...interviews].reverse().find(
    (iv) => iv.status === "analyzed" && iv.analysis?.nextSteps?.length
  )
  const nextSteps = lastAnalyzed?.analysis?.nextSteps || []

  const li = (items, cls = "") =>
    (items || []).map((s) => `<li class="${cls}">${s}</li>`).join("")

  const strengthsHTML = li(job.gapAnalysis?.strongMatch, "strength-item")
  const gapsHTML = li(job.gapAnalysis?.gap, "gap-item")
  const cultureHTML = (job.cultureValues || [])
    .map((v) => `<li><span class="value-name">${v.name}:</span> ${v.description}</li>`)
    .join("")
  const factsHTML = li(job.companyProfile?.keyFacts)
  const tipsHTML = li(job.companyProfile?.interviewTips)
  const nextStepsHTML = li(nextSteps)

  const starHTML = starStories
    .map(
      ({ question, draft }) => `
      <div class="star-block">
        <div class="star-question">${question}</div>
        ${["situation", "task", "action", "result"]
          .filter((k) => draft[k]?.trim())
          .map(
            (k) => `
          <div class="star-field">
            <div class="star-label">${k}</div>
            <div class="star-text">${draft[k]}</div>
          </div>`
          )
          .join("")}
      </div>`
    )
    .join("")

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Cheat Sheet — ${job.company}</title>
  <style>${PRINT_STYLES}</style>
</head>
<body>
  <div class="header">
    <h1>${job.company} — ${job.roleTitle}</h1>
    <p class="subtitle">Interview Prep Cheat Sheet &nbsp;·&nbsp; ${today}</p>
  </div>

  <div class="grid2">
    ${strengthsHTML ? `<div class="section"><h2>Lead With These</h2><ul>${strengthsHTML}</ul></div>` : ""}
    ${gapsHTML ? `<div class="section"><h2>Address Proactively</h2><ul>${gapsHTML}</ul></div>` : ""}
  </div>

  ${cultureHTML ? `<div class="section"><h2>Culture Values to Weave In</h2><ul>${cultureHTML}</ul></div>` : ""}

  <div class="grid2">
    ${factsHTML ? `<div class="section"><h2>Key Facts to Know</h2><ul>${factsHTML}</ul></div>` : ""}
    ${tipsHTML ? `<div class="section"><h2>What to Mention</h2><ul>${tipsHTML}</ul></div>` : ""}
  </div>

  ${starHTML ? `<div class="section"><h2>Your STAR Stories</h2>${starHTML}</div>` : ""}

  ${nextStepsHTML ? `<div class="section"><h2>Before You Walk In</h2>
    <div class="next-steps-block"><ul>${nextStepsHTML}</ul></div>
  </div>` : ""}
</body>
</html>`
}

export default function CheatSheetModal({ job, starDrafts, interviews, onClose }) {
  const handlePrint = () => {
    const html = generateHTML(job, starDrafts, interviews)
    const win = window.open("", "_blank")
    win.document.write(html)
    win.document.close()
    win.focus()
    win.print()
  }

  const starStories = (job.commonQuestions || [])
    .map((q, i) => ({ question: q.question, draft: (starDrafts || {})[i] || {} }))
    .filter(({ draft }) => ["situation", "task", "action", "result"].some((k) => draft[k]?.trim()))

  const lastAnalyzed = [...interviews].reverse().find(
    (iv) => iv.status === "analyzed" && iv.analysis?.nextSteps?.length
  )
  const nextSteps = lastAnalyzed?.analysis?.nextSteps || []

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl my-4">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-lg border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-bold text-gray-800">Pre-Interview Cheat Sheet</h2>
            <p className="text-xs text-gray-500 mt-0.5">{job.company} — {job.roleTitle}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-700 cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 cursor-pointer text-sm px-3 py-1.5 rounded border border-gray-200"
            >
              Close
            </button>
          </div>
        </div>

        {/* Content preview */}
        <div className="p-6 space-y-6 text-sm">
          {/* Strengths + Gaps */}
          <div className="grid grid-cols-2 gap-6">
            {job.gapAnalysis?.strongMatch?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Lead With These</h3>
                <ul className="space-y-1">
                  {job.gapAnalysis.strongMatch.map((s, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-sm text-green-800">
                      <span className="text-green-500 shrink-0 mt-0.5">+</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.gapAnalysis?.gap?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Address Proactively</h3>
                <ul className="space-y-1">
                  {job.gapAnalysis.gap.map((g, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-sm text-red-800">
                      <span className="text-red-400 shrink-0 mt-0.5">–</span>{g}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Culture Values */}
          {job.cultureValues?.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Culture Values to Weave In</h3>
              <ul className="space-y-1.5">
                {job.cultureValues.map((v, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    <span className="font-semibold">{v.name}:</span> {v.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Facts + Tips */}
          <div className="grid grid-cols-2 gap-6">
            {job.companyProfile?.keyFacts?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Key Facts to Know</h3>
                <ul className="space-y-1">
                  {job.companyProfile.keyFacts.map((f, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-1.5">
                      <span className="text-blue-400 shrink-0">·</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.companyProfile?.interviewTips?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">What to Mention</h3>
                <ul className="space-y-1">
                  {job.companyProfile.interviewTips.map((t, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-1.5">
                      <span className="text-yellow-500 shrink-0">*</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* STAR Stories */}
          {starStories.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Your STAR Stories</h3>
              <div className="space-y-3">
                {starStories.map(({ question, draft }, i) => (
                  <div key={i} className="border border-gray-200 border-l-4 border-l-blue-500 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">{question}</p>
                    <div className="space-y-2">
                      {["situation", "task", "action", "result"]
                        .filter((k) => draft[k]?.trim())
                        .map((k) => (
                          <div key={k}>
                            <span className="text-xs font-bold text-blue-700 uppercase">{k}: </span>
                            <span className="text-sm text-gray-700">{draft[k]}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {nextSteps.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Before You Walk In</h3>
              <ul className="space-y-1">
                {nextSteps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                    <span className="font-bold text-green-500 shrink-0">{i + 1}.</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {starStories.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">
              Draft your STAR answers in the Interview Guide tab to see them here.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
