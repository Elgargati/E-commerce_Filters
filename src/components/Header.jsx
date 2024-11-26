import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Header({ cartCount }) {
  return (
    <header className="bg-cyan-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/E-commerce_Filters/">Med-store</Link>
        </h1>

        {/* Navigation */}
        <nav className="flex space-x-6 text-lg font-medium">
          <Link
            to="/E-commerce_Filters/"
            className="hover:text-gray-300 transition-colors"
          >
            Accueil
          </Link>
          <Link
            to="/cart"
            className="flex items-center hover:text-gray-300 transition-colors relative"
          >
            <FiShoppingCart className="text-2xl" />
            {/* Affichage du nombre d'articles dans le panier */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
