import IntroScreen from "./screens/IntroScreen";
import QuizScreen from "./screens/QuizScreen";
import EmailScreen from "./screens/EmailScreen";
import { screenAtom } from "./atoms/QuizAtoms";
import { useAtom } from "jotai";
import CompletionScreen from "./screens/CompletionScreen";

export default function App() {
  const [screen] = useAtom(screenAtom);

  return (
    <>
      {screen === "intro" && <IntroScreen />}
      {screen === "quiz" && <QuizScreen />}
      {screen === "email" && <EmailScreen />}
      {screen === "completion" && <CompletionScreen />}
    </>
  );
}
