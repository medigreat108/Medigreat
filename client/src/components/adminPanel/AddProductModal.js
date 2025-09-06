import React, { useState } from "react";
import { createProduct } from "../../common/api";

export const AddProductModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setformData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await createProduct(formData, token);
      if (res.status === 201) {
        setformData({
          name: "",
          description: "",
          price: "",
          image: "",
          category: "",
          stock: "",
        });
        if (onSubmit) onSubmit({ success: true });
      } else {
        if (onSubmit)
          onSubmit({ success: false, error: "Failed to add product" });
      }
    } catch (error) {
      if (onSubmit)
        onSubmit({ success: false, error: error.response?.data?.message });
    }
  };

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/40 via-blue-900/20 to-black/40">
      <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-2xl rounded-2xl border-2 border-blue-300 p-10 w-[95vw] max-w-lg relative flex flex-col items-center">
        <div className="w-full flex items-center mb-4">
          <div className="flex-1 flex justify-center">
            <h2 className="text-xl font-semibold text-blue-700 text-center">
              Add New Product
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 items-center pb-3 hover:text-blue-600 text-5xl font-bold transition-colors duration-200 ml-4"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <form className="space-y-3 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
