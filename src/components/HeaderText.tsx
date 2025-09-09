export default function HeaderText({
  text = "Grow yo business",
}: {
  text?: string;
}) {
  return <div>{text}</div>;
}
