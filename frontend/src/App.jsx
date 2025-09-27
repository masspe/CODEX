import { useState } from "react";
import PromptInput from "./components/PromptInput";
import CodePreview from "./components/CodePreview";
import GitPanel from "./components/GitPanel";

export default function App() {
  const [code, setCode] = useState("");

  const handleGenerate = async (prompt) => {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setCode(data.code);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Codex Clone 🚀</h1>
      <PromptInput onGenerate={handleGenerate} />
      <CodePreview code={code} />
      <GitPanel />
    </div>
  );
}
