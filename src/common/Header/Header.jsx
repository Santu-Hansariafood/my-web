import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  return (
    <header className="w-full bg-blue-600 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-white text-2xl font-bold">
        <img src="/path/to/logo.png" alt="Company Logo" className="h-10" />
      </Link>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/"
          className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
