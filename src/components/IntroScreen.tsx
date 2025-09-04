import Button from "./Button";
import { useAtom } from "jotai";
import { screenAtom } from "../atoms/quizAtoms";

export default function IntroScreen() {
  const [, setScreen] = useAtom(screenAtom);

  const handleStart = () => {
    setScreen("quiz");
  };

  return (
    <div>
      Kerfatcha - Start the Quiz Bitch
      <div>
        <Button onClick={handleStart}>Start Quiz</Button>
      </div>
    </div>
  );
}
