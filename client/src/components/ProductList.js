import React, { useState, useEffect } from "react";
import { getProducts } from "../common/api";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {products.map((product) => (
          <div
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 relative group"
            key={product._id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center w-full mt-auto">
              <span className="text-blue-600 font-bold text-lg">₹{product.price}</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Stock: {product.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
