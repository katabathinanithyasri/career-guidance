import { Link, useNavigate } from "react-router-dom";
import useRole from "@/hooks/useRole";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // sleek icons

const Navbar = ({ toggleSidebar }) => {
  const { isAdmin, isAuthenticated, logout } = useRole();
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 dark:text-white text-xl"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Career Guidance
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Sleek Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {!isAuthenticated && (
          <>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        )}

        {isAuthenticated && !isAdmin && (
          <Link to="/user" className="hover:text-blue-600">
            Dashboard
          </Link>
        )}

        {isAuthenticated && isAdmin && (
          <Link to="/admin" className="hover:text-blue-600">
            Admin Dashboard
          </Link>
        )}

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;