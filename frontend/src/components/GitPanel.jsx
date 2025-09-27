export default function GitPanel() {
  const createRelease = async () => {
    const res = await fetch("http://localhost:8000/release", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ version: "0.1.0" })
    });
    const data = await res.json();
    alert("Release creata: " + data.url);
  };

  return (
    <div className="mt-6">
      <button
        onClick={createRelease}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Crea Release
      </button>
    </div>
  );
}
