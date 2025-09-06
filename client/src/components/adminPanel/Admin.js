import React, { useState } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { AddProductModal } from "./AddProductModal";
import { DeleteProductModal } from "./DeleteProductModal";
import FlashMessage from "../commonComponent/FlashMessage";

export const Admin = () => {
  const [addOpenModal, setaddOpenModal] = useState(false);
  const [deleteOpenModal, setdeleteOpenModal] = useState(false);
  const [flash, setFlash] = useState({ message: "", type: "" });

  const handleDeleteSubmit = (result) => {
    if (result.success) {
      setdeleteOpenModal(false);
      setFlash({ message: "Product deleted successfully", type: "success" });
    } else {
      setFlash({
        message: result.error || "Failed to delete product",
        type: "error",
      });
    }
    // Always clear flash after 2 seconds, for both success and error
    setTimeout(() => {
      setFlash({ message: "", type: "" });
    }, 1500);
  };

  const handleSubmit = (result) => {
    if (result.success) {
      setaddOpenModal(false);
      setFlash({ message: "Product added successfully", type: "success" });
    } else {
      setFlash({
        message: result.error || "Failed to add product",
        type: "error",
      });
    }
    // Always clear flash after 2 seconds, for both success and error
    setTimeout(() => {
      setFlash({ message: "", type: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-blue-400 flex flex-col items-center py-16">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-16 text-center tracking-wide">
        Admin Panel
      </h2>
      <div className="flex flex-row justify-between items-center w-full max-w-6xl gap-12">
        <button
          onClick={() => setaddOpenModal(true)}
          className="flex-1 bg-blue-600 text-white py-24 px-10 rounded-3xl font-bold text-4xl text-center shadow-xl mx-2 transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-blue-700"
        >
          <FaPlusCircle className="mb-6 mx-auto text-6xl" />
          Add Product
        </button>
        {addOpenModal && (
          <AddProductModal
            onClose={() => setaddOpenModal(false)}
            isOpen={addOpenModal}
            onSubmit={handleSubmit}
          />
        )}
        {flash.message && (
          <FlashMessage
            message={flash.message}
            type={flash.type}
            onClose={() => setFlash({ message: "", type: "" })}
          />
        )}
        <button
          onClick={() => setdeleteOpenModal(true)}
          className="flex-1 bg-red-600 text-white py-24 px-10 rounded-3xl font-bold text-4xl text-center shadow-xl mx-2 transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-red-700"
        >
          <FaTrashAlt className="mb-6 mx-auto text-6xl" />
          Delete Product
        </button>
        {deleteOpenModal && (
          <DeleteProductModal
            isOpen={deleteOpenModal}
            onClose={() => setdeleteOpenModal(false)}
            onDelete={handleDeleteSubmit}
          />
        )}
      </div>
    </div>
  );
};
