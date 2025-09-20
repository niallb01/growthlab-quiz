import { useState } from "react";
import { useAtom } from "jotai";
import Button from "../components/Button";
import { leadCaptureAtom, updateLeadAtom } from "../atoms/QuizAtoms";
import { leadSchema } from "../validation/leadSchema";
import { sendLeadToCRM } from "../utils/sendLeadToCRM";

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

    // Validate with Joi
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

    try {
      await sendLeadToCRM({
        name,
        email,
        answers: leadCapture.answers,
      });

      console.log("✅ Lead sent:", {
        name,
        email,
        answers: leadCapture.answers,
      });

      onSubmit(name, email);
    } catch (err) {
      console.error("CRM submission error:", err);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col items-center text-center space-y-6 max-w-lg w-full mx-4">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-gray-600 text-lg">📧</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Almost Done!
            </h2>
            <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed">
              Enter your details to receive your personalized quiz results.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full space-y-4">
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Your First Name"
                value={leadCapture.lead.name}
                onChange={(e) => updateLead({ name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 bg-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                  <span>⚠️</span>
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={leadCapture.lead.email}
                onChange={(e) => updateLead({ email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                  <span>⚠️</span>
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full text-base py-3"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              "Get My Results"
            )}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <span className="text-green-500">🔒</span>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-blue-500">⚡</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-purple-500">🎁</span>
            <span>Free Forever</span>
          </div>
        </div>
      </div>
    </div>
  );
}
