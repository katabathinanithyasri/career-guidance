import { useState, useEffect } from "react";

const useRole = () => {
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(!!role);

  const isAdmin = role === "admin";

  const login = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole("");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  return { role, isAdmin, isAuthenticated, login, logout };
};

export default useRole;