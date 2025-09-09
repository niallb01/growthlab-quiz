import Button from "../components/Button";
import { useAtom } from "jotai";
import { screenAtom } from "../atoms/QuizAtoms";
import logo from "../assets/growthlab-logo.png";
import HeaderText from "../components/HeaderText";
import QuizText from "../components/QuizText";

export default function IntroScreen() {
  const [, setScreen] = useAtom(screenAtom);

  const handleStart = () => {
    setScreen("quiz");
  };

  return (
    <div data-testid="intro-screen">
      <h1 data-testid="app-header">
        <HeaderText />
      </h1>
      <div>
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="GrowthLab logo"
            className="h-80 w-auto"
            data-testid="app-logo"
          />
        </div>
        <h1 data-testid="quiz-text">
          <QuizText />
        </h1>
        <Button onClick={handleStart}>Start Quiz</Button>
      </div>
    </div>
  );
}
