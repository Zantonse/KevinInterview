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
