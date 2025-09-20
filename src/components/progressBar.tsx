interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gray-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Progress Text */}
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <span className="font-medium">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="font-medium">{percentage}%</span>
      </div>
    </div>
  );
}
