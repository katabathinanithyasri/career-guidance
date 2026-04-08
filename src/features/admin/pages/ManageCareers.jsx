// src/features/admin/pages/ManageCareers.jsx
import React, { useEffect, useState } from "react";
import { getCareers, addCareer, updateCareer, deleteCareer } from "../../../services/careerService";

const ManageCareers = () => {
  const [careers, setCareers] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    salary: "",
    roadmap: "",
    demand: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const data = await getCareers();
      setCareers(data || []);
    } catch (error) {
      console.error("Failed to fetch careers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const updatedCareer = await updateCareer(editingId, form);
        setCareers(careers.map(c => (c.id === editingId ? updatedCareer : c)));
        setEditingId(null);
      } else {
        const newCareer = await addCareer(form);
        setCareers([...careers, newCareer]);
      }
      setForm({ title: "", description: "", skills: "", salary: "", roadmap: "", demand: "" });
    } catch (error) {
      console.error("Failed to submit career:", error);
    }
  };

  const handleEdit = (career) => {
    setForm({
      title: career.title,
      description: career.description,
      skills: career.skills,
      salary: career.salary,
      roadmap: career.roadmap,
      demand: career.demand
    });
    setEditingId(career.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCareer(id);
      setCareers(careers.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Failed to delete career:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Careers</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 bg-white p-6 rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills"
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="roadmap"
            value={form.roadmap}
            onChange={handleChange}
            placeholder="Roadmap"
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="demand"
            value={form.demand}
            onChange={handleChange}
            placeholder="Demand"
            className="border px-3 py-2 rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border px-3 py-2 rounded col-span-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Career" : "Add Career"}
        </button>
      </form>

      {/* Table */}
      {loading ? (
        <p>Loading careers...</p>
      ) : careers.length === 0 ? (
        <p className="text-gray-500">No careers available yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2">Title</th>
              <th className="border px-3 py-2">Description</th>
              <th className="border px-3 py-2">Skills</th>
              <th className="border px-3 py-2">Salary</th>
              <th className="border px-3 py-2">Roadmap</th>
              <th className="border px-3 py-2">Demand</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career) => (
              <tr key={career.id} className="hover:bg-gray-100">
                <td className="border px-3 py-2">{career.title}</td>
                <td className="border px-3 py-2">{career.description}</td>
                <td className="border px-3 py-2">{career.skills}</td>
                <td className="border px-3 py-2">{career.salary}</td>
                <td className="border px-3 py-2">{career.roadmap}</td>
                <td className="border px-3 py-2">{career.demand}</td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(career)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(career.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCareers;