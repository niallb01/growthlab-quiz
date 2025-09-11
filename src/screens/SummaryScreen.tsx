// export default function SummaryScreen() {
//   return <div data-testid="summary-screen">Summary</div>;
// }

import Button from "../components/Button";
import { useAtom } from "jotai";
import { screenAtom } from "../atoms/QuizAtoms";

export default function SummaryScreen() {
  const [, setScreen] = useAtom(screenAtom);

  const handleContinue = () => {
    setScreen("email"); // switch to MailPage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
        <h2 className="text-2xl font-bold">Your Summary</h2>
        <p className="text-gray-600">
          Thanks for completing the quiz! Click below to enter your details and
          receive your tailored results.
        </p>

        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </div>
  );
}
