import { useState } from "react";

export default function PromptInput({ onGenerate }) {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Scrivi un prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={() => onGenerate(prompt)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Genera Codice
      </button>
    </div>
  );
}
