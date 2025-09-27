export default function CodePreview({ code }) {
  return (
    <div className="mt-4 border p-4 rounded bg-gray-100">
      <h2 className="font-bold">Anteprima codice:</h2>
      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
  );
}
