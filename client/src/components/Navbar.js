import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import medigreatLogo from "../assets/medigreat.jpg";

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md py-2 px-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src={medigreatLogo}
            alt="Medigreat Pharma Logo"
            className="h-10 w-10 rounded-full shadow"
          />
        </Link>
        <span className="ml-2 text-xl font-bold text-blue-700">
          Medigreat Pharma
        </span>
      </div>
      <ul className="flex gap-6 items-center">
        <li>
          <Link
            to="/"
            className={`font-medium hover:text-blue-600 transition ${
              location.pathname === "/"
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Home
          </Link>
        </li>
        {user && (
          <li>
            <Link
              to="/products"
              className={`font-medium hover:text-blue-600 transition ${
                location.pathname.startsWith("/products")
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              }`}
            >
              Products
            </Link>
          </li>
        )}

        <li>
          <Link
            to="/about"
            className={`font-medium hover:text-blue-600 transition ${
              location.pathname.startsWith("/about")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`font-medium hover:text-blue-600 transition ${
              location.pathname.startsWith("/contact")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Contact
          </Link>
        </li>
        {user && user.role === "admin" && (
          <li>
            <Link
              to="/admin"
              className={`flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition px-3 py-1 rounded-lg border border-purple-300 bg-purple-50 ${
                location.pathname.startsWith("/admin")
                  ? "bg-purple-200 border-purple-500"
                  : ""
              }`}
            >
              Admin Panel
            </Link>
          </li>
        )}
        {!user && (
          <>
            <li>
              <Link
                to="/login"
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <button
                onClick={handleLogout}
                className="text-white font-medium px-3 py-1.5 bg-red-600 rounded-lg shadow-lg"
              >
                Logout
              </button>
            </li>
            <li className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500 text-white font-semibold shadow-lg border-2 border-white animate-pulse">
              <svg
                className="w-5 h-5 mr-2 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 016 6c0 3.314-2.686 6-6 6s-6-2.686-6-6a6 6 0 016-6zm0 14c4.418 0 8 1.79 8 4v2H2v-2c0-2.21 3.582-4 8-4z" />
              </svg>
              Welcome, {user.username.toUpperCase()}
              {user.role === "admin" && (
                <span className="ml-2 px-2 py-0.5 bg-yellow-400 text-purple-900 rounded-full text-xs font-bold animate-pulse">
                  Admin
                </span>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
