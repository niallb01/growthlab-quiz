// import { leadSchema } from "../validation/leadSchema";

// import { useAtom } from "jotai";
// import Button from "../components/Button";
// import { leadCaptureAtom } from "../atoms/QuizAtoms";

// interface MailPageProps {
//   onSubmit: (name: string, email: string) => void;
// }

// export default function EmailScreen({ onSubmit }: MailPageProps) {
//   const [leadCapture, setLeadCapture] = useAtom(leadCaptureAtom);

//   const handleSubmit = () => {
//     const { name, email } = leadCapture.lead;

//     // Validate with Joi schema
//     const { error } = leadSchema.validate({ name: name, email });

//     if (error) {
//       alert(error.details[0].message); // keep MVP simple
//       return;
//     }

//     console.log("✅ Valid lead:", { name, email });
//     onSubmit(name, email);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
//         <h2 className="text-2xl font-bold">Almost done!</h2>
//         <p className="text-gray-600">
//           Enter your name and email to receive your custom quiz results.
//         </p>

//         <div className="flex flex-col w-full space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={leadCapture.lead.name}
//             onChange={(e) =>
//               setLeadCapture((prev) => ({
//                 ...prev,
//                 lead: { ...prev.lead, name: e.target.value },
//               }))
//             }
//             className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             value={leadCapture.lead.email}
//             onChange={(e) =>
//               setLeadCapture((prev) => ({
//                 ...prev,
//                 lead: { ...prev.lead, email: e.target.value },
//               }))
//             }
//             className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <Button onClick={handleSubmit}>Submit</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import { useAtom } from "jotai";
// import Button from "../components/Button";
// import { leadCaptureAtom, updateLeadAtom } from "../atoms/QuizAtoms";
// import { leadSchema } from "../validation/leadSchema";
// // import { formatAnswers } from "../utils/formatAnswers";

// interface MailPageProps {
//   onSubmit: (name: string, email: string) => void;
// }

// export default function EmailScreen({ onSubmit }: MailPageProps) {
//   const [leadCapture] = useAtom(leadCaptureAtom);
//   const [, updateLead] = useAtom(updateLeadAtom);

//   const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

//   const handleSubmit = async () => {
//     const { name, email } = leadCapture.lead;

//     // Validate using Joi
//     const { error } = leadSchema.validate(
//       { name, email },
//       { abortEarly: false }
//     );

//     if (error) {
//       const fieldErrors: { name?: string; email?: string } = {};
//       error.details.forEach((d) => {
//         if (d.path[0] === "name") fieldErrors.name = d.message;
//         if (d.path[0] === "email") fieldErrors.email = d.message;
//       });
//       setErrors(fieldErrors);
//       return;
//     }

//     setErrors({});

//     console.log("✅ Valid lead:", {
//       name,
//       email,
//       answers: leadCapture.answers,
//     });

//     // Prepare MailerLite payload
//     const mailerLiteData = {
//       email,
//       name,
//       fields: {
//         quiz_answers: JSON.stringify(leadCapture.answers),
//       },
//       groups: ["lead-capture"], // optional segment
//     };

//     try {
//       const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-MailerLite-ApiKey": process.env.NEXT_PUBLIC_MAILERLITE_API_KEY!,
//         },
//         body: JSON.stringify(mailerLiteData),
//       });
//       const data = await res.json();
//       console.log("✅ Subscriber added:", data);

//       // Trigger parent callback
//       onSubmit(name, email);
//     } catch (err) {
//       console.error("MailerLite error:", err);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
//         <h2 className="text-2xl font-bold">Almost done!</h2>
//         <p className="text-gray-600">
//           Enter your name and email to receive your custom quiz results.
//         </p>

//         <div className="flex flex-col w-full space-y-2">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={leadCapture.lead.name}
//             onChange={(e) => updateLead({ name: e.target.value })}
//             className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//           <input
//             type="email"
//             placeholder="Your Email"
//             value={leadCapture.lead.email}
//             onChange={(e) => updateLead({ email: e.target.value })}
//             className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}

//           <Button onClick={handleSubmit}>Submit</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////

import { useState } from "react";
import { useAtom } from "jotai";
import Button from "../components/Button";
import { leadCaptureAtom, updateLeadAtom } from "../atoms/QuizAtoms";
import { leadSchema } from "../validation/leadSchema";
import { formatAnswers } from "../utils/formatAnswers";

interface MailPageProps {
  onSubmit: (name: string, email: string) => void;
}

export default function EmailScreen({ onSubmit }: MailPageProps) {
  const [leadCapture] = useAtom(leadCaptureAtom);
  const [, updateLead] = useAtom(updateLeadAtom);

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const { name, email } = leadCapture.lead;

    // Validate using Joi
    const { error } = leadSchema.validate(
      { name, email },
      { abortEarly: false }
    );

    if (error) {
      const fieldErrors: { name?: string; email?: string } = {};
      error.details.forEach((d) => {
        if (d.path[0] === "name") fieldErrors.name = d.message;
        if (d.path[0] === "email") fieldErrors.email = d.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const formattedAnswers = formatAnswers(leadCapture.answers);

    const mailerLiteData = {
      email,
      name,
      fields: { quiz_answers: formattedAnswers },
      groups: ["lead-capture"],
    };

    try {
      const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.NEXT_PUBLIC_MAILERLITE_API_KEY!,
        },
        body: JSON.stringify(mailerLiteData),
      });

      const data = await res.json();
      console.log("✅ Subscriber added:", data);

      onSubmit(name, email);
    } catch (err) {
      console.error("MailerLite error:", err);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
        <h2 className="text-2xl font-bold">Almost done!</h2>
        <p className="text-gray-600">
          Enter your name and email to receive your custom quiz results.
        </p>

        <div className="flex flex-col w-full space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={leadCapture.lead.name}
            onChange={(e) => updateLead({ name: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            value={leadCapture.lead.email}
            onChange={(e) => updateLead({ email: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
}
