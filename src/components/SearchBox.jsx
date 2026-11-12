import { useAuth } from "../hooks/useAuth.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function SearchBox({ query, onChange }) {
  const { user } = useAuth();
  const [recent, setRecent] = useLocalStorage(
    `ce-searches-${user?.uid ?? "guest"}`,
    [],
  );

  function addSearch(term) {
    const t = term.trim();
    if (!t) return;
    setRecent((prev) =>
      [t, ...prev.filter((s) => s.toLowerCase() !== t.toLowerCase())].slice(
        0,
        5,
      ),
    );
  }

  function handleSubmit(event) {
    event.preventDefault(); // Enter saves the search instead of reloading
    addSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search menu by name…"
        aria-label="Search menu by name"
      />
      {recent.length > 0 && (
        <div className="recent">
          <span className="muted">Recent:</span>
          {recent.map((term) => (
            <button
              key={term}
              type="button"
              className="chip"
              onClick={() => onChange(term)}
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
