import React, { useState } from "react";
import { sendContactEmail } from "../common/api";

export const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await sendContactEmail(formData);
      if (res.data && res.data.success) {
        setStatus("Message sent successfully!");
        setformData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus((res.data && res.data.error) || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-8">
      {/* Hero Section */}
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          We'd love to hear from you! Fill out the form below and our team will
          get back to you as soon as possible.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 justify-center items-start">
        {/* Contact Form */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <form
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
              Send Us a Message
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-blue-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={(e) =>
                setformData({ ...formData, message: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <div
                className={`text-center mt-2 ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex-1 flex flex-col justify-center text-gray-700 px-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
            Contact Details
          </h2>
          <div className="flex items-center mb-3">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="font-medium">+91-XXXXXXXXXX</span>
          </div>
          <div className="flex items-center mb-3">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </span>
            <span className="font-medium">support@medigreatepharma.com</span>
          </div>
          <div className="flex items-center mb-3">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 20h5v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2h5" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span className="font-medium">
              123 Pharma Street, Mumbai, India
            </span>
          </div>
          <div className="flex items-center mb-3">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <span className="font-medium">
              Support Hours: 9am - 9pm, Mon-Sat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
