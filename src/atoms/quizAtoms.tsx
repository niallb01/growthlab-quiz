import { atom } from "jotai";
import type { QuizQuestion } from "../services/quizService";
import Questions from "../Questions.json";

export const jsonAtom = atom(Questions);

export const screenAtom = atom<"intro" | "quiz" | "email" | "summary">("intro");

export const questionsAtom = atom<QuizQuestion[]>([]);

export const currentQuestionAtom = atom<string>("q1");

export const answersAtom = atom<{ [key: string]: string }>({});

export const fetchQuestionsAtom = atom<unknown[]>([]);
