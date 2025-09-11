// export default function EmailScreen() {
//   return <div data-testid="email-screen">EmailScreen</div>;
// }

import { useState } from "react";
import Button from "../components/Button";

interface MailPageProps {
  onSubmit: (name: string, email: string) => void;
}

export default function EmailScreen({ onSubmit }: MailPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name && email) {
      onSubmit(name, email);
    } else {
      alert("Please enter both your name and email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
        <h2 className="text-2xl font-bold">Almost done!</h2>
        <p className="text-gray-600">
          Enter your name and email to receive your custom quiz results.
        </p>

        <div className="flex flex-col w-full space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
