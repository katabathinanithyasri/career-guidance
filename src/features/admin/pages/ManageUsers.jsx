import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUsers, addUser, updateUser, deleteUser } from "../../../services/userService";
import { getCounselors } from "../../../services/counselorService";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [counselors, setCounselors] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
    counselorId: ""
  });

  const fetchUsers = async () => {
    try {
      setUsers(await getUsers());
    } catch {
      toast.error("Failed to load users");
    }
  };

  const fetchCounselors = async () => {
    try {
      setCounselors(await getCounselors());
    } catch {
      toast.error("Failed to load counselors");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchCounselors();
  }, []);

  // Add / Update user


  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Delete user?")) return;

    try {
      await deleteUser(id);
      toast.success("Deleted");
      fetchUsers();
    } catch {
      toast.error("Delete failed");
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name: form.name,
    email: form.email,
    role: form.role,
    counselor: form.counselorId ? { id: form.counselorId } : null
  };

  try {
    if (editingId) {
      await updateUser(editingId, payload); // edit existing
      toast.success("User updated");
    } else {
      await addUser(payload); // add new
      toast.success("User added");
    }

    setForm({ name: "", email: "", password: "", role: "USER", counselorId: "" });
    setEditingId(null);
    fetchUsers(); // refresh table
  } catch (err) {
    toast.error("Operation failed: " + err.message);
  }
};

// Edit button handler
const handleEdit = (u) => {
  setForm({
    name: u.name || "",
    email: u.email || "",
    password: "", // optional
    role: u.role || "USER",
    counselorId: u.counselor ? u.counselor.id : ""
  });
  setEditingId(u.id);
};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <select
          value={form.counselorId}
          onChange={(e) => setForm({ ...form, counselorId: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">Assign Counselor</option>
          {counselors.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update User" : "Add User"}
        </button>
      </form>

      {/* TABLE */}
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Counselor</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.counselor ? u.counselor.name : "None"}</td>
              <td className="space-x-2">
                <button onClick={() => handleEdit(u)} className="text-blue-600">
                  Edit
                </button>
                <button onClick={() => handleDelete(u.id)} className="text-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;