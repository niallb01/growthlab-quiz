import IntroScreen from "./screens/IntroScreen";
import QuizScreen from "./screens/QuizScreen";
import EmailScreen from "./screens/EmailScreen";
import ResultsScreen from "./screens/SummaryScreen";
import { screenAtom } from "./atoms/QuizAtoms";
import { useAtom } from "jotai";

export default function App() {
  const [screen] = useAtom(screenAtom);

  return (
    <>
      {screen === "intro" && <IntroScreen />}
      {screen === "quiz" && <QuizScreen />}
      {screen === "email" && <EmailScreen />}
      {screen === "summary" && <ResultsScreen />}
    </>
  );
}
