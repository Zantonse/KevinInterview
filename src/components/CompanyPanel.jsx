export default function CompanyPanel({ job }) {
  const { companyProfile } = job

  if (!companyProfile) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
        <p className="text-gray-500 text-sm">Company profile not available. Reset and re-generate your prep to include this section.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-blue-700 mb-3">{job.company}</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{companyProfile.summary}</p>
      </div>

      {/* Mission */}
      {companyProfile.mission && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Mission</h3>
          <p className="text-sm text-blue-900">{companyProfile.mission}</p>
        </div>
      )}

      {/* Products & Services + Culture side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {companyProfile.productsServices && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-md font-bold text-gray-800 mb-3">Products & Services</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{companyProfile.productsServices}</p>
          </div>
        )}
        {companyProfile.culture && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-md font-bold text-gray-800 mb-3">Culture & Environment</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{companyProfile.culture}</p>
          </div>
        )}
      </div>

      {/* Core Values */}
      {job.cultureValues?.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-4">Core Values</h3>
          <div className="space-y-4">
            {job.cultureValues.map((v, i) => (
              <div key={i} className="border-l-2 border-blue-200 pl-4">
                <p className="text-sm font-bold text-gray-800">{v.name}</p>
                <p className="text-sm text-gray-600 mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Facts */}
      {companyProfile.keyFacts?.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-md font-bold text-gray-800 mb-3">Key Facts to Know</h3>
          <ul className="space-y-2">
            {companyProfile.keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* What to mention in interview */}
      {companyProfile.interviewTips?.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-md font-bold text-yellow-800 mb-1">What to Mention in Your Interview</h3>
          <p className="text-xs text-yellow-600 mb-3">Show them you did your homework.</p>
          <ul className="space-y-2">
            {companyProfile.interviewTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-yellow-900">
                <span className="text-yellow-500 shrink-0">*</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
