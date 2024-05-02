import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import { FaHome, FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <>
      {userLoggedIn && (
        <nav className="flex flex-row justify-between items-center w-full z-20 fixed top-0 left-0 h-12 border-b bg-gray-200">
          <Link to="/" className="text-sm text-blue-600 underline flex items-center gap-x-1 px-4">
            <FaHome />
            Home
          </Link>
          <div className="flex gap-x-2">
            <Link to="/profile" className="text-sm text-blue-600 underline flex items-center gap-x-1 px-4">
              <FaUser />
              Profile
            </Link>
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="text-sm text-blue-600 underline flex items-center gap-x-1 px-4"
            >
              Logout
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
