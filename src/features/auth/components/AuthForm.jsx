import { useState } from "react";

const AuthForm = ({ onSubmit, type }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="w-full bg-indigo-600 text-white p-2 rounded">
        {type}
      </button>
    </form>
  );
};

export default AuthForm;