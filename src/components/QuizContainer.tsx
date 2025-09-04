import Questions from "../Questions.json";

export default function QuizContainer() {
  const questionData = Questions;

  return (
    <div>
      {" "}
      {questionData.map((q) => (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">{q.question}</h2>
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
