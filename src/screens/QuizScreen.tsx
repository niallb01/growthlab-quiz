import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  questionsAtom,
  currentQuestionIdAtom,
  currentQuestionAtom,
  answerQuestionAtom,
} from "../atoms/QuizAtoms";
import { fetchQuestions } from "../services/quizService";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

export default function QuizScreen() {
  const [questions, setQuestions] = useAtom(questionsAtom);
  const [, setCurrentQuestionId] = useAtom(currentQuestionIdAtom);
  const [currentQuestion] = useAtom(currentQuestionAtom);
  const [, answerQuestion] = useAtom(answerQuestionAtom);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const questions = await fetchQuestions();

        if (questions.length === 0) {
          setError(
            "No questions found. Please check your Sanity configuration."
          );
          return;
        }

        setQuestions(questions);
        setCurrentQuestionId(questions[0].id);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError("Failed to load questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, [setCurrentQuestionId, setQuestions]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 flex flex-col items-center text-center space-y-8 max-w-2xl w-full mx-4">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-slate-600"></div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Loading Quiz
              </h2>
              <p className="text-gray-600">Preparing questions...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center space-y-6 max-w-lg w-full mx-4">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-red-600 text-lg">⚠</span>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Configuration Required
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                This quiz needs to be configured with your Sanity CMS. Check the
                setup guide for instructions.
              </p>
            </div>
            <div className="space-y-2 text-xs text-gray-500">
              <p>Error: {error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 flex flex-col items-center text-center space-y-8 max-w-2xl w-full mx-4">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-gray-600 text-2xl">?</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                No Questions Available
              </h2>
              <p className="text-gray-600">
                No questions to display at the moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate current question number and total questions
  const currentQuestionIndex = questions.findIndex(
    (q) => q.id === currentQuestion.id
  );
  const currentStep = currentQuestionIndex + 1;
  const totalSteps = questions.length;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-xl mx-auto px-4 w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            className="w-full"
          />
        </div>

        {/* Question Container */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <QuestionCard question={currentQuestion} onAnswer={answerQuestion} />
        </div>
      </div>
    </div>
  );
}
