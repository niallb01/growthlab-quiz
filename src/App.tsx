import IntroScreen from "./screens/IntroScreen";
import QuizScreen from "./screens/QuizScreen";
import EmailScreen from "./screens/EmailScreen";
import CompletionScreen from "./screens/CompletionScreen";
import { screenAtom, leadCaptureAtom } from "./atoms/QuizAtoms";
import { useAtom } from "jotai";

export default function App() {
  const [screen] = useAtom(screenAtom);
  const [leadCapture] = useAtom(leadCaptureAtom);

  const handleEmailSubmit = (name: string, email: string) => {
    console.log("Final submit:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Quiz answers:", leadCapture.answers);
  };

  return (
    <>
      {screen === "intro" && <IntroScreen />}
      {screen === "quiz" && <QuizScreen />}
      {screen === "email" && <EmailScreen onSubmit={handleEmailSubmit} />}
      {screen === "completion" && <CompletionScreen />}
    </>
  );
}
