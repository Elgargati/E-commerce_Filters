import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

function HomePage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Produit non trouvé");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const applyFilters = () => {
    let filtered = products.filter(
      (p) =>
        (filters.category ? p.category === filters.category : true) &&
        p.price >= filters.priceRange[0] &&
        p.price <= filters.priceRange[1]
    );
    setFilteredProducts(filtered);
  };

  useEffect(applyFilters, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg text-center">
          {error}
        </div>
      )}

      {/* Filtres stylisés */}
      {!error && (
        <Filter
          filters={filters}
          setFilters={setFilters}
          categories={products.map((p) => p.category)}
        />
      )}

      {/* Grille des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Aucun produit trouvé */}
      {filteredProducts.length === 0 && !error && (
        <div className="text-center text-gray-600 mt-12 text-lg">
          Aucun produit ne correspond à vos critères.
        </div>
      )}
    </div>
  );
}

export default HomePage;
