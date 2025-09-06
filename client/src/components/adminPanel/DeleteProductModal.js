import React, { useState } from "react";
import { deleteProduct } from "../../common/api";

export const DeleteProductModal = ({ isOpen, onClose, onDelete }) => {
  const [productId, setProductId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onDelete && productId) {
      try {
        const token = localStorage.getItem("token");
        const res = await deleteProduct(productId, token);
        if (res.status === 200) {
          onDelete({ success: true });
        } else {
          onDelete({ success: false, message: "Failed to delete the product" });
        }
      } catch (error) {
        onDelete({ success: false, error: error?.response?.data?.message });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/40 via-blue-900/20 to-black/40">
      <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-2xl rounded-2xl border-2 border-blue-300 p-10 w-[95vw] max-w-lg relative flex flex-col items-center">
        <div className="w-full flex items-center mb-4">
          <div className="flex-1 flex justify-center">
            <h2 className="text-xl font-semibold text-red-600 text-center">
              Delete Product
            </h2>
          </div>
          <button
            type="button"
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
            name="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <div className="flex gap-4 w-full justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Delete Product
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
