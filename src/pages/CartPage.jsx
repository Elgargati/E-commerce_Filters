import React, { useState } from "react";

function CartPage({ cart, updateCart }) {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // Quantité par défaut : 1
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantities({ ...quantities, [id]: newQuantity });

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-sm"
            >
              {/* Image du produit */}
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg"
              />

              {/* Informations sur le produit */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="text-gray-600">{item.price.toFixed(2)}€</p>
              </div>

              {/* Modification de la quantité */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      (quantities[item.id] || 1) - 1
                    )
                  }
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-12 text-center border rounded"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      (quantities[item.id] || 1) + 1
                    )
                  }
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <h2 className="text-2xl font-semibold mt-6 text-center">
          Total : {total.toFixed(2)}€
        </h2>
      )}
    </div>
  );
}

export default CartPage;
