// // import { useEffect } from "react";
// // import { fetchQuestions } from "./services/quizService";

// import { useAtom } from "jotai";
// import { jsonAtom } from "../atoms/QuizAtoms";

// export default function QuestionCard() {
//   const [questionData] = useAtom(jsonAtom);

//   // SANITY API CALL
//   // useEffect(() => {
//   //   fetchQuestions()
//   //     .then((questions) => {
//   //       console.log("Questions from Sanity:", questions);
//   //     })
//   //     .catch((err) => {
//   //       console.error("Error fetching questions:", err);
//   //     });
//   // }, []);

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

/////////////////////////////

// interface QuestionOption {
//   text: string;
//   next?: string;
// }

// interface QuizQuestion {
//   id: string;
//   question: string;
//   options: QuestionOption[];
// }

// interface QuestionCardProps {
//   question: QuizQuestion;
//   onAnswer: (option: QuestionOption) => void;
// }

// export default function QuestionCard({
//   question,
//   onAnswer,
// }: QuestionCardProps) {
//   return (
//     <div>
//       <h2>{question.question}</h2>
//       <ul>
//         {question.options.map((opt, idx) => (
//           <li key={idx}>
//             <button onClick={() => onAnswer(opt)}>{opt.text}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
/////////////////////

// interface QuestionOption {
//   text: string;
//   next?: string;
// }

// interface QuizQuestion {
//   id: string;
//   question: string;
//   options: QuestionOption[];
// }

// interface QuestionCardProps {
//   question: QuizQuestion;
//   onAnswer: (option: QuestionOption) => void;
// }

// export default function QuestionCard({
//   question,
//   onAnswer,
// }: QuestionCardProps) {
//   return (
//     <div className="p-6 bg-white rounded-xl shadow-md max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">{question.question}</h2>
//       <ul className="space-y-2">
//         {question.options.map((option, idx) => (
//           <li key={idx}>
//             <button
//               className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               onClick={() => onAnswer(option)}
//             >
//               {option.text}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////

import Button from "../components/Button";

interface QuestionOption {
  text: string;
  next?: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuestionOption[];
}

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (option: QuestionOption) => void;
}

export default function QuestionCard({
  question,
  onAnswer,
}: QuestionCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
        <h2 className="text-2xl font-bold">{question.question}</h2>

        <div className="flex flex-col w-full space-y-2">
          {question.options.map((option, idx) => (
            <Button key={idx} onClick={() => onAnswer(option)}>
              {option.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
