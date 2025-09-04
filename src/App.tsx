// import { useEffect } from "react";
// import { fetchQuestions } from "./services/quizService";
import QuizContainer from "./components/QuizContainer";

export default function App() {
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
    <>
      <QuizContainer />
    </>
  );
}
