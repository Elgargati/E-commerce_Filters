import React from "react";

function Filter({ filters, setFilters, categories }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between  mb-6">
      {/* Filtre par catégorie */}
      <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
        <label htmlFor="category" className="text-gray-600 font-medium mr-2">
          Catégorie :
        </label>
        <select
          id="category"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Toutes</option>
          {[...new Set(categories)].map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Filtre par prix */}
      <div className="flex flex-col sm:flex-row items-center">
        <label htmlFor="price" className="text-gray-600 font-medium mr-2">
          Prix :
        </label>
        <input
          type="range"
          id="price"
          min="8"
          max="1000"
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [0, parseInt(e.target.value)],
            })
          }
          className="w-full sm:w-64"
        />
        <span className="ml-4 text-gray-600 font-medium">
          {filters.priceRange[1]}€
        </span>
      </div>
    </div>
  );
}

export default Filter;
