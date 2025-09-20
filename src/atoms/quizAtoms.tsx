import { atom } from "jotai";

// Quiz question + option types
export interface QuizOption {
  text: string;
  next?: { _id: string; _type: "quizQuestion" | "leadCapture" } | null;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

// All questions
export const questionsAtom = atom<QuizQuestion[]>([]);

// Current screen
export const screenAtom = atom<"intro" | "quiz" | "email" | "completion">(
  "intro"
);

// Current question ID
export const currentQuestionIdAtom = atom<string | null>(null);

// Lead capture + answers
export const leadCaptureAtom = atom({
  answers: {} as { [key: string]: string },
  lead: { name: "", email: "" },
});

// Current question object
export const currentQuestionAtom = atom((get) => {
  const questions = get(questionsAtom);
  const currentId = get(currentQuestionIdAtom);
  return questions.find((q) => q.id === currentId) || null;
});

// Answer a question & handle branching
export const answerQuestionAtom = atom(
  null,
  (
    get,
    set,
    option: { text: string; next?: { _id: string; _type: string } | null }
  ) => {
    const currentQ = get(currentQuestionAtom);
    if (!currentQ) return;

    // Save answer
    set(leadCaptureAtom, (prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQ.id]: option.text,
      },
    }));

    // Branching
    if (option.next?._type === "quizQuestion") {
      set(currentQuestionIdAtom, option.next._id);
      set(screenAtom, "quiz");
    } else if (option.next?._type === "leadCapture") {
      set(currentQuestionIdAtom, null);
      set(screenAtom, "email");
    } else {
      set(currentQuestionIdAtom, null);
      set(screenAtom, "quiz"); // fallback
      console.warn("⚠️ Option missing next step", option);
    }
  }
);

// Update lead info (name/email)
export const updateLeadAtom = atom(
  null,
  (_get, set, payload: { name?: string; email?: string }) => {
    set(leadCaptureAtom, (prev) => {
      const updated = {
        ...prev,
        lead: { ...prev.lead, ...payload },
      };

      // Complete only when both fields exist
      if (updated.lead.name && updated.lead.email) {
        set(screenAtom, "completion");
      }

      return updated;
    });
  }
);
