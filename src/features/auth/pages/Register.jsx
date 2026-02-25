import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    setPasswordChecks({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[@$!%*?&]/.test(password),
    });
  };

  const getStrength = () => {
    const passed = Object.values(passwordChecks).filter(Boolean).length;

    if (passed === 4) return "Strong";
    if (passed >= 2) return "Medium";
    return "Weak";
  };

  const handleRegister = () => {
    if (!form.username || !form.password) {
      toast.error("Please fill all fields!");
      return;
    }

    if (getStrength() !== "Strong") {
      toast.error("Password must meet all requirements!");
      return;
    }

    toast.success("Registered successfully 🎉");
    navigate("/login");
  };

  const strength = getStrength();

  return (
    <div className="flex items-center justify-center min-h-screen
                    bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100">

      <div className="bg-white p-10 rounded-xl shadow-lg
                      w-full max-w-md border border-blue-100 space-y-6">

        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Create Account
        </h1>

        {/* Email */}
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create Password"
            className="w-full p-3 rounded-lg border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Strength Indicator */}
          {form.password && (
            <p
              className={`mt-2 text-sm font-semibold ${
                strength === "Strong"
                  ? "text-green-600"
                  : strength === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Strength: {strength}
            </p>
          )}

          {/* Requirements */}
          <div className="mt-3 space-y-2 text-sm">
            <Requirement
              met={passwordChecks.length}
              text="At least 8 characters"
            />
            <Requirement
              met={passwordChecks.uppercase}
              text="At least one uppercase letter"
            />
            <Requirement
              met={passwordChecks.number}
              text="At least one number"
            />
            <Requirement
              met={passwordChecks.special}
              text="At least one special character (@$!%*?&)"
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition font-medium"
        >
          Register
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

/* Requirement Component */
const Requirement = ({ met, text }) => (
  <div className="flex items-center space-x-2">
    <span
      className={`text-lg ${
        met ? "text-green-600" : "text-indigo-400"
      }`}
    >
      {met ? "✔" : "✖"}
    </span>

    <span className="text-slate-600">
      {text}
    </span>
  </div>
);

export default Register;