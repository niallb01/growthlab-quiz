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

// import { useEffect } from "react";
// import { useAtom } from "jotai";
// import {
//   questionsAtom,
//   currentQuestionIdAtom,
//   currentQuestionAtom,
//   answerQuestionAtom,
// } from "../atoms/QuizAtoms";
// import Questions from "../data/Questions.json";
// import QuestionCard from "../components/QuestionCard";

// export default function QuizScreen() {
//   const [, setQuestions] = useAtom(questionsAtom);
//   const [, setCurrentQuestionId] = useAtom(currentQuestionIdAtom);
//   const [currentQuestion] = useAtom(currentQuestionAtom);
//   const [, answerQuestion] = useAtom(answerQuestionAtom);

//   // Load questions and set first question
//   useEffect(() => {
//     setQuestions(Questions);
//     if (Questions.length > 0) setCurrentQuestionId(Questions[0].id);
//   }, [setCurrentQuestionId, setQuestions]);

//   if (!currentQuestion) return <div>Loading questions...</div>;

//   console.log(currentQuestion, currentQuestionAtom);

//   return <QuestionCard question={currentQuestion} onAnswer={answerQuestion} />;
// }

///////////////////////////

// import { useEffect } from "react";
// import { useAtom } from "jotai";
// import {
//   questionsAtom,
//   currentQuestionIdAtom,
//   currentQuestionAtom,
//   answerQuestionAtom,
// } from "../atoms/QuizAtoms";
// import QuestionCard from "../components/QuestionCard";
// import { fetchQuestions, type QuizQuestion } from "../services/quizService";

// export default function QuizScreen() {
//   const [, setQuestions] = useAtom(questionsAtom);
//   const [, setCurrentQuestionId] = useAtom(currentQuestionIdAtom);
//   const [currentQuestion] = useAtom(currentQuestionAtom);
//   const [, answerQuestion] = useAtom(answerQuestionAtom);

//   // Fetch questions from Sanity and set the first question
//   useEffect(() => {
//     async function loadQuestions() {
//       try {
//         const questions: QuizQuestion[] = await fetchQuestions();
//         setQuestions(questions);

//         if (questions.length > 0) {
//           setCurrentQuestionId(questions[0].id); // start with the first question
//         }
//       } catch (err) {
//         console.error("Error fetching questions from Sanity:", err);
//       }
//     }

//     loadQuestions();
//   }, [setQuestions, setCurrentQuestionId]);

//   if (!currentQuestion) return <div>Loading questions...</div>;

//   return <QuestionCard question={currentQuestion} onAnswer={answerQuestion} />;
// }

//////////////////////////////////////

import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  questionsAtom,
  currentQuestionIdAtom,
  currentQuestionAtom,
  answerQuestionAtom,
} from "../atoms/QuizAtoms";
import { fetchQuestions, type QuizQuestion } from "../services/quizService";
import QuestionCard from "../components/QuestionCard";

export default function QuizScreen() {
  const [, setQuestions] = useAtom(questionsAtom);
  const [, setCurrentQuestionId] = useAtom(currentQuestionIdAtom);
  const [currentQuestion] = useAtom(currentQuestionAtom);
  const [, answerQuestion] = useAtom(answerQuestionAtom);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const questions: QuizQuestion[] = await fetchQuestions();
        setQuestions(questions);
        if (questions.length > 0) setCurrentQuestionId(questions[0].id);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    loadQuestions();
  }, [setCurrentQuestionId, setQuestions]);

  if (!currentQuestion) return <div>Loading questions...</div>;

  return <QuestionCard question={currentQuestion} onAnswer={answerQuestion} />;
}
