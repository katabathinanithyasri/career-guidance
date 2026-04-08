// src/features/auth/pages/Register.jsx
import { useState } from "react";
import { registerUser } from "@/features/auth/authService";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleRegister = async () => {
  if (!form.name || !form.email || !form.password) {
    toast.error("Please fill all fields!");
    return;
  }

  try {
    const data = await registerUser({
      ...form,
      role: "USER" // ✅ IMPORTANT
    });

    toast.success("Registered successfully! 🎉");
    navigate("/login");
  } catch (err) {
    console.error(err);
    toast.error("Registration failed ❌");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-blue-100">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border mb-6"
        />

        <button
          onClick={handleRegister}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          Register
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;