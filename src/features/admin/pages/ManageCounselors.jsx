import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCounselors, addCounselor, updateCounselor, deleteCounselor } from "../../../services/counselorService";

const ManageCounselors = () => {
  const [counselors, setCounselors] = useState([]);
  const [form, setForm] = useState({ name: "", expertise: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getCounselors();
      setCounselors(data || []);
    } catch {
      toast.error("Failed to load counselors");
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) await updateCounselor(editingId, form);
      else await addCounselor(form);

      toast.success(editingId ? "Updated" : "Added");
      setForm({ name: "", expertise: "", email: "" });
      setEditingId(null);
      fetchData();
    } catch { toast.error("Operation failed"); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this counselor?")) return;
    try {
      await deleteCounselor(id);
      setCounselors(prev => prev.filter(c => c.id !== id));
      toast.success("Deleted successfully");
    } catch { toast.error("Delete failed"); }
  };

  const handleEdit = (c) => {
    setForm({ name: c.name, expertise: c.expertise, email: c.email });
    setEditingId(c.id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Counselors</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full p-2 border rounded" required />
        <input value={form.expertise} onChange={e => setForm({ ...form, expertise: e.target.value })} placeholder="Expertise" className="w-full p-2 border rounded" required />
        <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full p-2 border rounded" required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">{editingId ? "Update" : "Add"}</button>
      </form>

      <table className="min-w-full border">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Expertise</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {counselors.length === 0 ? <tr><td colSpan="5" className="text-center p-4">No counselors found</td></tr> :
          counselors.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.expertise}</td>
              <td>{c.email}</td>
              <td className="space-x-2">
                <button onClick={() => handleEdit(c)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(c.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCounselors;