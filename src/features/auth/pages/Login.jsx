import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({ role: "user", username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.username || !form.password) {
      toast.error("Please fill all fields!");
      return;
    }

    localStorage.setItem("role", form.role);
    navigate(form.role === "admin" ? "/admin" : "/user");
    toast.success("Logged in successfully 🎉");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      {/* Login Card */}
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 border border-blue-100">

        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Login
        </h1>

       {/* Role Dropdown */}
<select
  name="role"
  value={form.role}
  onChange={handleChange}
  className="w-full p-3 rounded-lg bg-white border border-blue-300 
             text-gray-800 font-medium
             focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

{/* Username */}
<input
  type="text"
  name="username"
  value={form.username}
  onChange={handleChange}
  placeholder="Username"
  className="w-full p-3 rounded-lg bg-white border border-gray-300
             text-gray-800 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

{/* Password */}
<input
  type="password"
  name="password"
  value={form.password}
  onChange={handleChange}
  placeholder="Password"
  className="w-full p-3 rounded-lg bg-white border border-gray-300
             text-gray-800 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

        <button
          onClick={handleLogin}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Login
        </button>

        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;