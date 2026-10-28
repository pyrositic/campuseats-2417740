import { Link, useParams, useSearchParams } from "react-router";
import MenuList from "../components/MenuList.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { useVendors } from "../hooks/useVendors.js";

export default function VendorPage() {
  const { id } = useParams(); // the :id part of /vendor/:id
  const { vendors, loading, error, reload } = useVendors();

  // The search text lives in the URL (?q=...), not in useState.
  // Hooks must stay above the early returns below.
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  function handleSearch(e) {
    const value = e.target.value;
    // empty box -> remove ?q= completely; replace avoids one history entry per keystroke
    setSearchParams(value ? { q: value } : {}, { replace: true });
  }

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">There is no vendor with the id "{id}".</p>
        <Link to="/">Back to vendors</Link>
      </div>
    );
  }

  // Derived list: recalculated every render, never stored in state
  const visibleItems = vendor.menu.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <section>
      <Link to="/">← All vendors</Link>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <input
        type="search"
        className="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search menu by name…"
        aria-label="Search menu by name"
      />
      <p className="muted">{visibleItems.length} item(s) found</p>
      {visibleItems.length === 0 ? (
        <p className="muted">No items match "{query}".</p>
      ) : (
        <MenuList items={visibleItems} />
      )}
    </section>
  );
}
