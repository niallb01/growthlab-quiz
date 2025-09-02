// import { atom } from "jotai";

// export const currentQuestionAtom = atom(0);

// export const answersAtom = atom({});

// export const resultAtom = atom(null);

import { atom } from "jotai";
import type { QuizQuestion } from "../services/quizService";

export const questionsAtom = atom<QuizQuestion[]>([]);
export const currentQuestionAtom = atom<number>(0);
export const answersAtom = atom<{ [key: string]: string }>({});
