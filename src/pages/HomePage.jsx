import VendorCard from "../components/VendorCard.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { useVendors } from "../hooks/useVendors.js";

export default function HomePage() {
  const { vendors, loading, error, reload } = useVendors();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  return (
    <section>
      <h2 className="section-title">Choose a vendor</h2>
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
}
