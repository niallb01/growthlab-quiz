import { createClient } from "@sanity/client";
import type { QuizQuestion } from "../atoms/QuizAtoms";
import {
  sanityConfig,
  isClientConfigured,
  getConfigStatus,
} from "../config/sanity";

const client = createClient(sanityConfig);

// Demo questions for unconfigured clients
const demoQuestions: QuizQuestion[] = [
  {
    id: "demo-1",
    question: "What's your primary business goal?",
    options: [
      {
        text: "Increase sales",
        next: { _id: "demo-2", _type: "quizQuestion" },
      },
      {
        text: "Generate leads",
        next: { _id: "demo-2", _type: "quizQuestion" },
      },
      {
        text: "Build brand awareness",
        next: { _id: "demo-2", _type: "quizQuestion" },
      },
    ],
  },
  {
    id: "demo-2",
    question: "What's your biggest marketing challenge?",
    options: [
      {
        text: "Finding the right audience",
        next: { _id: "leadCapture", _type: "leadCapture" },
      },
      {
        text: "Creating engaging content",
        next: { _id: "leadCapture", _type: "leadCapture" },
      },
      {
        text: "Measuring ROI",
        next: { _id: "leadCapture", _type: "leadCapture" },
      },
    ],
  },
];

export async function fetchQuestions(): Promise<QuizQuestion[]> {
  const configStatus = getConfigStatus();
  console.log("🔧 Sanity Config:", configStatus);

  // If client hasn't configured their Sanity project, use demo questions
  if (!isClientConfigured()) {
    console.log("📋 Using demo questions - client needs to configure Sanity");
    return demoQuestions;
  }

  const query = `*[_type == "quizQuestion"] | order(order asc) {
    "id": _id,
    question,
    options[]{
      text,
      next->{
        _id,
        _type,
        shortId,
        title
      }
    }
  }`;

  try {
    const questions: QuizQuestion[] = await client.fetch(query);
    console.log("✅ Fetched questions from Sanity:", questions.length);

    // If no questions found, fall back to demo
    if (questions.length === 0) {
      console.log("📋 No questions found in Sanity, using demo questions");
      return demoQuestions;
    }

    return questions;
  } catch (err) {
    console.error("❌ Error fetching questions from Sanity:", err);

    // In development, show the error
    if (!configStatus.isProduction) {
      console.error(
        "Please add http://localhost:5176 to your Sanity CORS origins"
      );
      throw err;
    }

    // In production, fall back to demo questions to prevent app breaking
    console.log("📋 Production fallback: using demo questions");
    return demoQuestions;
  }
}
