// utils/formatAnswers.ts
export const formatAnswers = (answers: Record<string, string>) => {
  return Object.entries(answers)
    .map(([q, a]) => `${q}: ${a}`)
    .join("\n");
};
