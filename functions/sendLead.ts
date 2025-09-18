// src/netlify/functions/sendLead.ts

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

//     const formattedAnswers = Object.entries(answers || {})
//       .map(([q, a], i) => `Q${i + 1}: ${a}`)
//       .join("\n");

//     const payload = {
//       email,
//       name,
//       fields: { quiz_answers: formattedAnswers },
//       groups: ["GrowthLab Leads"], // replace with your group
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
/////////////////////////////

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

//     const formattedAnswers = Object.entries(answers || {})
//       .map(([q, a], i) => `Q${i + 1}: ${a}`)
//       .join("\n");

//     const payload = {
//       email,
//       name,
//       fields: { quiz_answers: formattedAnswers },
//       groups: ["GrowthLab Leads"], // replace with your group
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
////////////////////////////

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

//     const formattedAnswers = Object.entries(answers || {})
//       .map(([, a], i) => `Q${i + 1}: ${a}`)
//       .join("\n");

//     // const payload = {
//     //   email,
//     //   name,
//     //   fields: { quiz_answers: formattedAnswers },
//     //   groups: ["GrowthLab Leads"],
//     // };
//     const payload = {
//       email,
//       name,
//       fields: { quiz_answers: formattedAnswers },
//       groups: [Number(process.env.MAILERLITE_GROUP_ID)],
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
//   } catch (err: unknown) {
//     // Type guard: check if err is an Error
//     const message =
//       err instanceof Error
//         ? err.message
//         : typeof err === "string"
//         ? err
//         : "Unknown error";

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: message }),
//     };
//   }
// };
//////////////////////////////////////

import type { Handler } from "@netlify/functions";

interface LeadPayload {
  name: string;
  email: string;
  answers?: Record<string, string>;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, answers }: LeadPayload = JSON.parse(
      event.body || "{}"
    );

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    const formattedAnswers = Object.entries(answers || {})
      .map(([, a], i) => `Q${i + 1}: ${a}`)
      .join("\n");

    const payload = {
      email,
      name,
      fields: { quiz_answers: formattedAnswers },
      groups: [process.env.MAILERLITE_GROUP_ID], // <-- Use the variable directly
    };

    const API_KEY = process.env.MAILERLITE_API_KEY;
    if (!API_KEY) throw new Error("MailerLite API key missing");

    const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`MailerLite error: ${res.status} - ${text}`);
    }

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown server error";

    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
};
