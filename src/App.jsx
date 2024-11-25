import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.title} a été ajouté au panier.`);

    // Effacer le message après 4 secondes
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <Router>
      <Header />
      <main className="p-4 flex justify-center">
        {message && (
          <div className="fixed top-10 text-center bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
            {message}
          </div>
        )}
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
