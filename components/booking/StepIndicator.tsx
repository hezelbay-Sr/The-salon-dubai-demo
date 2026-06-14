const steps = ["Branch", "Service", "Stylist", "Date & Time", "Your Details"];

export default function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => {
        const num = index + 1;
        const isCompleted = num < currentStep;
        const isActive = num === currentStep;

        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isCompleted
                    ? "bg-pink-500 text-white"
                    : isActive
                    ? "bg-pink-500 text-white ring-4 ring-pink-100"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {isCompleted ? "✓" : num}
              </div>
              <span
                className={`text-xs mt-1 hidden sm:block ${
                  isActive ? "text-pink-500 font-medium" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-8 md:w-12 mb-4 mx-1 ${
                  num < currentStep ? "bg-pink-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
