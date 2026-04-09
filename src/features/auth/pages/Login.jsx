// src/features/auth/pages/Login.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../../../services/authService";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({
    role: "user",
    email: "",
    password: "",
    captchaInput: ""
  });

  const [emailError, setEmailError] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captcha);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "email") validateEmail(value);
  };

  const handleLogin = async () => {
    if (!form.email || !form.password || !form.captchaInput) {
      toast.error("Please fill all fields!");
      return;
    }

    if (emailError) {
      toast.error("Please fix errors before submitting.");
      return;
    }

    if (form.captchaInput.trim().toUpperCase() !== generatedCaptcha) {
      toast.error("Captcha does not match!");
      generateCaptcha();
      return;
    }

    try {
      const data = await loginUser({
  email: form.email,
  password: form.password,
  role: form.role.toUpperCase() // ✅ FIX
});

      if (!data) {
        toast.error("User not found ❌");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("role", form.role);

      toast.success("Logged in successfully 🎉");
      navigate(form.role === "admin" ? "/admin" : "/user");

    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials or server error ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-blue-100">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-2">Sign in to continue</p>
        </div>

        {/* Role Toggle */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
          <div className="flex bg-blue-50 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setForm({ ...form, role: "user" })}
              className={`w-1/2 py-2 rounded-md transition ${
                form.role === "user" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, role: "admin" })}
              className={`w-1/2 py-2 rounded-md transition ${
                form.role === "admin" ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full p-3 rounded-lg border text-gray-800 bg-white ${
              emailError ? "border-red-400" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Captcha */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Captcha</label>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-mono tracking-widest">
              {generatedCaptcha}
            </span>
            <button
              type="button"
              onClick={generateCaptcha}
              className="text-sm text-blue-600 hover:underline"
            >
              Refresh
            </button>
          </div>
          <input
            type="text"
            name="captchaInput"
            value={form.captchaInput}
            onChange={handleChange}
            placeholder="Type captcha here"
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          Sign In
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;