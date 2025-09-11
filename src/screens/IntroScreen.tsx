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
        className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-1 max-w-lg w-full"
      >
        <img
          src={logo}
          alt="GrowthLab logo"
          className="h-50 w-auto"
          data-testid="app-logo"
        />

        <h1 data-testid="app-header" className="text-2xl font-bold">
          <HeaderText />
        </h1>

        <div data-testid="quiz-text" className="text-gray-600">
          <QuizText />
        </div>

        <Button onClick={onStartQuiz}>Start Quiz</Button>
      </div>
    </div>
  );
}
