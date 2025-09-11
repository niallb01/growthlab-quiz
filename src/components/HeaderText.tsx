export default function HeaderText({
  text = "Grow yo business bitch",
}: {
  text?: string;
}) {
  return <div>{text}</div>;
}
