export default function QuizText({
  text = "Find out what type of marketer you with this quick quiz",
}: {
  text?: string;
}) {
  return <div>{text}</div>;
}
