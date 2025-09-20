import Button from "../components/Button";
import { useAtom } from "jotai";
import { screenAtom } from "../atoms/QuizAtoms";
import logo from "../assets/growthlab-logo.png";
import HeaderText from "../components/HeaderText";
import QuizText from "../components/QuizText";

export default function IntroScreen() {
  const [, setScreen] = useAtom(screenAtom);

  const onStartQuiz = () => {
    setScreen("quiz");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div
        data-testid="intro-screen"
        className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col items-center text-center space-y-6 max-w-lg w-full mx-4"
      >
        {/* Logo Section */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={logo}
              alt="GrowthLab logo"
              className="h-24 w-auto mx-auto"
              data-testid="app-logo"
            />
          </div>

          <div className="space-y-3">
            <h1
              data-testid="app-header"
              className="text-2xl font-semibold text-gray-900"
            >
              <HeaderText />
            </h1>

            <div
              data-testid="quiz-text"
              className="text-base text-gray-600 max-w-md mx-auto leading-relaxed"
            >
              <QuizText />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <Button onClick={onStartQuiz} className="text-base px-8 py-3">
            Start Quiz
          </Button>

          {/* Features preview */}
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>Quick & Easy</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>Personalized Results</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>Free & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
