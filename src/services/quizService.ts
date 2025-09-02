import { client } from "./sanityClient";

export interface QuizQuestion {
  _id: string;
  question: string;
  options: string[];
  branch?: number;
}

export async function fetchQuestions(): Promise<QuizQuestion[]> {
  const query = `*[_type == "quizQuestion"]{
    _id,
    question,
    options,
    branch
  }`;
  const questions: QuizQuestion[] = await client.fetch(query);
  return questions;
}
