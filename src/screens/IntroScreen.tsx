import Button from "../components/Button";
import { useAtom } from "jotai";
import { screenAtom } from "../atoms/QuizAtoms";
import logo from "../assets/growthlab-logo.png";

export default function IntroScreen() {
  const [, setScreen] = useAtom(screenAtom);

  const handleStart = () => {
    setScreen("quiz");
  };

  return (
    <div>
      <p>GrowthLab</p>
      <div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="GrowthLab logo" className="h-80 w-auto" />
        </div>
        <Button onClick={handleStart}>Start Quiz</Button>
      </div>
    </div>
  );
}
