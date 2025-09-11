// import { atom } from "jotai";
// import type { QuizQuestion } from "../services/quizService";
// import Questions from "../Questions.json";

// export const jsonAtom = atom(Questions);

// export const screenAtom = atom<"intro" | "quiz" | "email" | "summary">("intro");

// export const questionsAtom = atom<QuizQuestion[]>([]);

// export const currentQuestionAtom = atom<string>("q1");

// export const answersAtom = atom<{ [key: string]: string }>({});

// export const fetchQuestionsAtom = atom<unknown[]>([]);

import { atom } from "jotai";

// Shape of your quiz question
export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    next?: string; // "q2" | "email" | "summary"
  }[];
}

// All questions (mock JSON or Sanity)
export const questionsAtom = atom<QuizQuestion[]>([]);

// Which screen we’re on
export const screenAtom = atom<"intro" | "quiz" | "email" | "summary">("intro");

// Track current question ID
export const currentQuestionIdAtom = atom<string | null>(null);

// Store user answers
export const answersAtom = atom<{ [key: string]: string }>({});

// Derived: current question object
export const currentQuestionAtom = atom((get) => {
  const questions = get(questionsAtom);
  const currentId = get(currentQuestionIdAtom);
  return questions.find((q) => q.id === currentId) || null;
});

// Action: answer a question and branch
export const answerQuestionAtom = atom(
  null,
  (get, set, option: { text: string; next?: string }) => {
    const currentQ = get(currentQuestionAtom);
    if (!currentQ) return;

    // Save the answer
    set(answersAtom, {
      ...get(answersAtom),
      [currentQ.id]: option.text,
    });

    // Handle branching
    if (option.next?.startsWith("q")) {
      // Go to another question
      set(currentQuestionIdAtom, option.next);
    } else if (option.next === "email" || option.next === "summary") {
      // Jump to a screen
      set(currentQuestionIdAtom, null);
      set(screenAtom, option.next);
    } else {
      // End fallback
      set(currentQuestionIdAtom, null);
      set(screenAtom, "summary");
    }
  }
);
