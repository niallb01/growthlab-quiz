// import { client } from "./sanityClient";

// export interface QuizQuestion {
//   _id: string;
//   question: string;
//   options: string[];
//   branch?: number;
// }

// export async function fetchQuestions(): Promise<QuizQuestion[]> {
//   const query = `*[_type == "quizQuestion"]{
//     _id,
//     question,
//     options,
//     branch
//   }`;
//   const questions: QuizQuestion[] = await client.fetch(query);
//   return questions;
// }

///////////////////////////////////////////////////////////

// import { client } from "./sanityClient";

// export interface QuizOption {
//   text: string;
//   next: string;
// }

// export interface QuizQuestion {
//   id: string; // use a stable ID, not just _id
//   question: string;
//   options: QuizOption[];
// }

// export async function fetchQuestions(): Promise<QuizQuestion[]> {
//   const query = `*[_type == "quizQuestion"]{
//     "id": _id,
//     question,
//     options[]{ text, next }
//   } | order(_createdAt asc)`;

//   return await client.fetch(query);
// }

///////////////////////////////

// import { client } from "./sanityClient";

// export interface QuizOption {
//   text: string;
//   next?: string; // ID of next question or "email" for form
// }

// export interface QuizQuestion {
//   id: string;
//   question: string;
//   options: QuizOption[];
// }

// export async function fetchQuestions(): Promise<QuizQuestion[]> {
//   const query = `*[_type == "quizQuestion"]{
//     "id": _id,
//     question,
//     options[]{ text, next }
//   } | order(_createdAt asc)`;

//   return client.fetch<QuizQuestion[]>(query);
// }

/////////////

import { client } from "./sanityClient";

export interface QuizOption {
  text: string;
  next?: string; // e.g., "q2", "email", or "completion"
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

// Fetch branching questions from Sanity
// export async function fetchQuestions(): Promise<QuizQuestion[]> {
//   const query = `*[_type == "quizQuestion"]{
//     "id": _id,
//     question,
//     options[]{ text, next }
//   } | order(_createdAt asc)`;

//   try {
//     const questions: QuizQuestion[] = await client.fetch(query);
//     console.log("✅ Fetched questions:", questions);
//     return questions;
//   } catch (err) {
//     console.error("❌ Error fetching questions:", err);
//     return [];
//   }
// }

export async function fetchQuestions(): Promise<QuizQuestion[]> {
  const query = `*[_type == "quizQuestion"] | order(order asc) {
    "id": _id,
    question,
    options[]{
      text,
      // If next is a reference, resolve to its _id
      "next": select(
        defined(next->_id) => next->_id,
        next // keep "email" or "completion" strings as-is
      )
    }
  }`;

  try {
    const questions: QuizQuestion[] = await client.fetch(query);
    console.log("✅ Fetched questions:", questions);
    return questions;
  } catch (err) {
    console.error("❌ Error fetching questions:", err);
    return [];
  }
}
