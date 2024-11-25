import React from "react";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow">
      {/* Image du produit */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 object-contain mb-4"
        />
      </div>

      {/* Informations du produit */}
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {product.title.length > 40
          ? `${product.title.substring(0, 40)}...`
          : product.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4 text-center">
        {product.category}
      </p>

      {/* Évaluations */}
      <div className="flex items-center mb-4">
        <FiStar className="text-yellow-500" />
        <FiStar className="text-yellow-500" />
        <FiStar className="text-yellow-500" />
        <FiStar className="text-yellow-500" />
        <FiStar className="text-gray-300" />
        <span className="ml-2 text-gray-500 text-sm">(4.0)</span>
      </div>

      {/* Prix et actions */}
      <div className="flex justify-between items-center w-full">
        <p className="text-xl font-bold text-blue-600">
          {product.price.toFixed(2)}€
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition"
        >
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
