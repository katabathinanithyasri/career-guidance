import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCounselors, addCounselor, updateCounselor, deleteCounselor } from "../../../services/counselorService";

const ManageCounselors = () => {
  const [counselors, setCounselors] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", expertise: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all counselors
  const fetchData = async () => {
    try {
      const data = await getCounselors();
      setCounselors(data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load counselors");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add / Update counselor
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", form); // Debug

    try {
      if (editingId) {
        await updateCounselor(editingId, form);
        toast.success("Updated successfully");
      } else {
        await addCounselor(form);
        toast.success("Added successfully");
      }

      setForm({ name: "", email: "", expertise: "" });
      setEditingId(null);
      fetchData();
    } catch (err) {
      console.error(err);
      toast.error("Operation failed");
    }
  };

  // Delete counselor
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this counselor?")) return;
    try {
      await deleteCounselor(id);
      setCounselors(prev => prev.filter(c => c.id !== id));
      toast.success("Deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  // Edit counselor
  const handleEdit = (c) => {
    setForm({
      name: c.name || "",
      email: c.email || "",
      expertise: c.expertise || ""
    });
    setEditingId(c.id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Counselors</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          value={form.expertise}
          onChange={e => setForm({ ...form, expertise: e.target.value })}
          placeholder="Expertise"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* Table */}
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Expertise</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {counselors.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">No counselors found</td>
            </tr>
          ) : (
            counselors.map(c => (
              <tr key={c.id}>
                <td className="p-2 border">{c.id}</td>
                <td className="p-2 border">{c.name}</td>
                <td className="p-2 border">{c.email}</td>
                <td className="p-2 border">{c.expertise}</td>
                <td className="p-2 border space-x-2">
                  <button onClick={() => handleEdit(c)} className="text-blue-600">Edit</button>
                  <button onClick={() => handleDelete(c.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCounselors;