// import { useEffect } from "react";
// import { fetchQuestions } from "./services/quizService";

import { useAtom } from "jotai";
import { jsonAtom } from "../atoms/quizAtoms";

export default function QuizScreen() {
  const [questionData] = useAtom(jsonAtom);

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

  return (
    <div>
      {questionData.map((q) => (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-1">{q.question}</h2>
          <ul>
            {q.options.map((option) => (
              <li className="mb-1">{option.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
