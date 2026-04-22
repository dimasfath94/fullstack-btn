import { useState, useMemo, useEffect } from "react";
import { products } from "../data/products";
import useDebounce from "../hooks/useDebounce";
import ProductList from "./ProductList";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  const results = useMemo(() => {
    return products.filter((item) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  // simulate API delay
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <p style={{ fontSize: "12px", color: "gray" }}>
        {loading ? "Searching..." : `Found ${results.length} result(s)`}
      </p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList items={results} keyword={query} />
      )}
    </div>
  );
}