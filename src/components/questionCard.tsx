import { useState } from "react";
import type { QuizQuestion } from "../atoms/QuizAtoms";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (option: {
    text: string;
    next?: { _id: string; _type: string } | null;
  }) => void;
}

export default function QuestionCard({
  question,
  onAnswer,
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (option: any, index: number) => {
    setSelectedOption(index);
    // Add a small delay for smooth transition
    setTimeout(() => {
      onAnswer(option);
    }, 200);
  };

  return (
    <div className="space-y-6">
      {/* Question Header */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option, index)}
            className={`w-full p-3 text-left rounded-md transition-colors duration-150 border ${
              selectedOption === index
                ? "bg-gray-50 border-gray-400 text-gray-900"
                : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900"
            }`}
          >
            <div className="flex items-center space-x-3">
              {/* Radio Button with Checkmark */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all duration-150 ${
                  selectedOption === index
                    ? "bg-gray-600 border-gray-600"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {selectedOption === index && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className="text-base font-medium">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
