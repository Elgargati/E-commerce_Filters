const products = [
  { id: 1, name: "Téléphone", category: "electronics", price: 500 },
  { id: 2, name: "Ordinateur", category: "electronics", price: 1200 },
  { id: 3, name: "Chaussures", category: "fashion", price: 80 },
  { id: 4, name: "Montre", category: "fashion", price: 150 },
];

export default function mockAPI() {
  if (!globalThis.fetch) {
    globalThis.fetch = (url) => {
      if (url === "/api/products") {
        return Promise.resolve({
          json: () => products,
        });
      }
      return Promise.reject(new Error("Not found"));
    };
  }
}
