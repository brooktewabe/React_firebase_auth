import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <>
      {userLoggedIn && (
        <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200">
          <Link to="/" className="text-sm text-blue-600 underline">
            Home
          </Link>
          <Link to="/profile" className="text-sm text-blue-600 underline">
            Profile
          </Link>
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/login");
              });
            }}
            className="text-sm text-blue-600 underline"
          >
            Logout
          </button>
        </nav>
      )}
    </>
  );
};

export default Header;
