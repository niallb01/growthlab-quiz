// export async function sendLeadToCRM({
//   name,
//   email,
//   answers,
// }: {
//   name: string;
//   email: string;
//   answers: Record<string, string>;
// }) {
//   const formattedAnswers = Object.entries(answers)
//     .map(([q, a], i) => `Q${i + 1}: ${a}`)
//     .join("\n");

//   const payload = {
//     email,
//     name,
//     fields: {
//       quiz_answers: formattedAnswers,
//     },
//     groups: ["GrowthLab Leads"], // change for each client
//   };

//   const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-MailerLite-ApiKey": process.env.NEXT_PUBLIC_MAILERLITE_API_KEY!,
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!res.ok) throw new Error(`CRM error: ${res.statusText}`);
//   return res.json();
// }

// utils/sendLeadToCRM.ts
// export async function sendLeadToCRM({
//   name,
//   email,
//   answers,
// }: {
//   name: string;
//   email: string;
//   answers: Record<string, string>;
// }) {
//   const formattedAnswers = Object.entries(answers)
//     .map(([q, a], i) => `Q${i + 1}: ${a}`)
//     .join("\n");

//   const payload = {
//     email,
//     name,
//     fields: { quiz_answers: formattedAnswers },
//     groups: ["GrowthLab Leads"], // replace with client's group
//   };

//   const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-MailerLite-ApiKey": process.env.NEXT_PUBLIC_MAILERLITE_API_KEY!,
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!res.ok) throw new Error(`CRM error: ${res.statusText}`);
//   return res.json();
// }
////////////////////////////////////////////////

// export async function sendLeadToCRM({
//   name,
//   email,
//   answers,
// }: {
//   name: string;
//   email: string;
//   answers: Record<string, string>;
// }) {
//   const res = await fetch("/.netlify/functions/sendLead", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, answers }),
//   });

//   if (!res.ok) throw new Error("Failed to send lead");

//   return res.json();
// }
/////////////////////////////////

// import type { Handler } from "@netlify/functions";

// export const handler: Handler = async (event) => {
//   if (event.httpMethod !== "POST") {
//     return {
//       statusCode: 405,
//       body: JSON.stringify({ error: "Method not allowed" }),
//     };
//   }

//   try {
//     const { name, email, answers } = JSON.parse(event.body || "{}");

//     if (!name || !email) {
//       return {
//         statusCode: 400,
//         body: JSON.stringify({ error: "Name and email are required" }),
//       };
//     }

//     // Format answers
//     const formattedAnswers = Object.entries(answers || {})
//       .map(([q, a], i) => `Q${i + 1}: ${a}`)
//       .join("\n");

//     const payload = {
//       email,
//       name,
//       fields: { quiz_answers: formattedAnswers },
//       groups: ["GrowthLab Leads"], // change to your MailerLite group
//     };

//     const API_KEY = process.env.MAILERLITE_API_KEY;

//     const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-MailerLite-ApiKey": API_KEY!,
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       const text = await res.text();
//       throw new Error(`MailerLite error: ${res.status} - ${text}`);
//     }

//     const data = await res.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ success: true, data }),
//     };
//   } catch (err: any) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: err.message }),
//     };
//   }
// };
///////////////////////////////

// export async function sendLeadToCRM({
//   name,
//   email,
//   answers,
// }: {
//   name: string;
//   email: string;
//   answers: Record<string, string>;
// }) {
//   const res = await fetch("/.netlify/functions/sendLead", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, answers }),
//   });

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error("Failed to send lead: " + text);
//   }

//   return res.json();
// }

//////////////////////////////

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
