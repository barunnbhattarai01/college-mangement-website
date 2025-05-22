import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function Contact() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Google Generative AI client
  const ai = new GoogleGenerativeAI({
    apiKey: import.meta.env.VITE_GEMINI_AI_API_KEY,
  });

  async function getRes() {
    if (!question.trim()) return;
    setLoading(true);
    try {
      // Get a generative model instance
      const model = ai.getGenerativeModel({ model: "gemini-pro" }); // or "gemini-1.5-flash"

      // Generate content from the question string
      const result = await model.generateContent(question);

      // Get the response text
      const response = await result.response;
      const text = await response.text();

      setAnswer(text);
    } catch (err) {
      setAnswer("⚠️ Failed to get response. Please try again later.");
      console.error("Gemini error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Contact Info */}
      <div className="bg-gray-100 p-6 md:p-10 rounded-xl shadow-md max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Information</h2>
        <p className="text-xl md:text-2xl">
          <span className="font-semibold">Address:</span> Apex College, Mid Baneshwor, Kathmandu
        </p>
        <p className="pt-2 text-xl md:text-2xl">
          <span className="font-semibold">Phone:</span> +977-01-4478841
        </p>
        <p className="pt-2 text-xl md:text-2xl">
          <span className="font-semibold">Email:</span> info@apexcollege.edu.np
        </p>
      </div>

      {/* Google Maps */}
      <div className="pt-24 flex flex-col items-center px-4">
        <span className="font-bold text-3xl mb-9 text-center">Way to Apex College</span>
        <div className="w-full max-w-4xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5935350529885!2d85.33539907578948!3d27.698954976187316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199940d81663%3A0xaf36b9b58903050f!2sApex%20College!5e0!3m2!1sen!2snp!4v1746447017023!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full"
          />
        </div>
      </div>

      {/* Gemini AI Q&A */}
      <div className="pt-24 px-4 max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Ask Gemini AI about Apex College 🧠</h3>
        <input
          type="text"
          placeholder="Type your question..."
          className="w-full p-3 border rounded-lg text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={getRes}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Thinking..." : "Send"}
        </button>

        {answer && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl text-left text-lg">
            <strong className="block mb-2">Answer:</strong>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
