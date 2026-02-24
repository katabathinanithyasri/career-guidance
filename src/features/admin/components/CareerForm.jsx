import { useState } from "react";

const CareerForm = () => {
  const [form, setForm] = useState({ title: "", description: "" });

  return (
    <div className="bg-white p-6 shadow rounded-xl space-y-4">
      <input
        placeholder="Career Title"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className="w-full border p-2 rounded"
        rows="4"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="bg-indigo-600 text-white px-6 py-2 rounded">
        Add Career
      </button>
    </div>
  );
};

export default CareerForm;