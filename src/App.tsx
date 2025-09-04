// import { useEffect } from "react";
// import { fetchQuestions } from "./services/quizService";
import IntroScreen from "./components/IntroScreen";
import QuizScreen from "./components/QuizScreen";
import EmailScreen from "./components/EmailScreen";
import ResultsScreen from "./components/resultScreen";
import { screenAtom } from "./atoms/quizAtoms";
import { useAtom } from "jotai";

export default function App() {
  const [screen] = useAtom(screenAtom);

  return (
    <>
      {/* <IntroScreen />
      <QuizContainer /> */}
      {screen === "intro" && <IntroScreen />}
      {screen === "quiz" && <QuizScreen />}
      {screen === "email" && <EmailScreen />}
      {screen === "results" && <ResultsScreen />}
    </>
  );
}
