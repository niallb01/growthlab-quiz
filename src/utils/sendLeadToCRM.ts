interface Lead {
  name: string;
  email: string;
  answers: Record<string, string>;
}

export async function sendLeadToCRM({ name, email, answers }: Lead) {
  const res = await fetch("/.netlify/functions/sendLead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, answers }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to send lead: ${JSON.stringify(data)}`);
  }

  return data;
}
