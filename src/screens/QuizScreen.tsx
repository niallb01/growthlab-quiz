// // import { useEffect } from "react";
// // import { fetchQuestions } from "./services/quizService";
// import { useAtom } from "jotai";
// import { jsonAtom } from "../atoms/QuizAtoms";

// // question logic in here and send into question card

// export default function QuizScreen() {
//   const [questionData] = useAtom(jsonAtom);
//   // const [currentQuestion] = useAtom(currentQuestionAtom);

//   // render first questioon

//   return (
//     <div>
//       {questionData.map((q) => (
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-1">{q.question}</h2>
//           <ul>
//             {q.options.map((option) => (
//               <li className="mb-1">{option.text}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// SANITY API CALL
// useEffect(() => {
//   fetchQuestions()
//     .then((questions) => {
//       console.log("Questions from Sanity:", questions);
//     })
//     .catch((err) => {
//       console.error("Error fetching questions:", err);
//     });
// }, []);
/////////////////////////////////////////////////////////

import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  questionsAtom,
  currentQuestionIdAtom,
  currentQuestionAtom,
  answerQuestionAtom,
} from "../atoms/QuizAtoms";
import Questions from "../data/Questions.json";
import QuestionCard from "../components/QuestionCard";

export default function QuizScreen() {
  const [, setQuestions] = useAtom(questionsAtom);
  const [, setCurrentQuestionId] = useAtom(currentQuestionIdAtom);
  const [currentQuestion] = useAtom(currentQuestionAtom);
  const [, answerQuestion] = useAtom(answerQuestionAtom);

  // Load questions and set first question
  useEffect(() => {
    setQuestions(Questions);
    if (Questions.length > 0) setCurrentQuestionId(Questions[0].id);
  }, [setCurrentQuestionId, setQuestions]);

  if (!currentQuestion) return <div>Loading questions...</div>;

  console.log(currentQuestion, currentQuestionAtom);

  return <QuestionCard question={currentQuestion} onAnswer={answerQuestion} />;
}
