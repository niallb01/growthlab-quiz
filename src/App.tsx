// // import { currentQuestionAtom, answersAtom, resultAtom } from "./atoms/quizAtoms";
// // import questionCard from "./components/questionCard";

// // export default function App() {
// //   return <div className="text-6xl bg-green-500">App</div>;
// // }

// import { useEffect } from "react";
// import { useAtom } from "jotai";
// import { questionsAtom, currentQuestionAtom } from "./atoms/quizAtoms";
// import { fetchQuestions } from "./services/quizService";
// import Question from "./components/question";
// import ProgressBar from "./components/progressBar";
// import ResultScreen from "./components/resultScreen";

// export default function App() {
//   const [, setQuestions] = useAtom(questionsAtom);
//   const [currentQuestion] = useAtom(currentQuestionAtom);

//   useEffect(() => {
//     fetchQuestions().then((data) => setQuestions(data));
//   }, [setQuestions]);

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <ProgressBar />
//       {currentQuestion === -1 ? <ResultScreen /> : <Question />}
//     </div>
//   );
// }

import { useEffect } from "react";
import { fetchQuestions } from "./services/quizService";

export default function App() {
  useEffect(() => {
    fetchQuestions()
      .then((questions) => {
        console.log("Questions from Sanity:", questions);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">GrowthLab Quiz Test</h1>
      <p>Check the console to see the fetched questions.</p>
    </div>
  );
}
