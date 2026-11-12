import { Link, useParams, useSearchParams } from "react-router";
import MenuList from "../components/MenuList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { useVendors } from "../hooks/useVendors.js";
import { useAuth } from "../hooks/useAuth.js";

export default function VendorPage() {
  const { id } = useParams(); // the :id part of /vendor/:id
  const { vendors, loading, error, reload } = useVendors();
  const { user } = useAuth();

  // The search text lives in the URL (?q=...), not in useState.
  // Hooks kena stay above the early returns below.
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? ""; // tengok kat url ?q=___

  function setQuery(value) {
    // empty box -> remove ?q= completely. replace avoids one history entry per keystroke
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
        <Link to="/" className="back-link">
          Back to vendors
        </Link>
      </div>
    );
  }

  // Derived list: recalculated every render, never stored in state
  const visibleItems = vendor.menu.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <section>
      <Link to="/" className="back-link">
        ← All vendors
      </Link>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      {/* key resets the search box state when switching between logged-in user and guest */}
      <SearchBox key={user?.uid ?? "guest"} query={query} onChange={setQuery} />
      <p className="muted">{visibleItems.length} item(s) found</p>
      {visibleItems.length === 0 ? (
        <p className="muted">No items match "{query}".</p>
      ) : (
        <MenuList items={visibleItems} />
      )}
    </section>
  );
}
