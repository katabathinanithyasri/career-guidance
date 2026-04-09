import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getSessions, addSession, updateSession, deleteSession } from "../../../services/sessionService";
import { getUsers } from "../../../services/userService";
import { getCounselors } from "../../../services/counselorService";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [users, setUsers] = useState([]);
  const [counselors, setCounselors] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    counselorId: "",
    userId: "",
    date: "",
    time: "",
    duration: "",
    mode: "Online",
    status: "Scheduled"
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchSessions();
    fetchData();
  }, []);

  const fetchSessions = async () => {
    try {
      const data = await getSessions();
      setSessions(data);
    } catch {
      toast.error("Failed to fetch sessions");
    }
  };

  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData || []);
      const counselorsData = await getCounselors();
      setCounselors(counselorsData || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      description: form.description,
      date: form.date,
      time: form.time,
      duration: form.duration,
      mode: form.mode,
      status: form.status,
      counselor: { id: form.counselorId },
      user: { id: form.userId }
    };
    try {
      if (editingId) await updateSession(editingId, payload);
      else await addSession(payload);
      toast.success(editingId ? "Updated successfully" : "Added successfully");
      setForm({ title: "", description: "", counselorId: "", userId: "", date: "", time: "", duration: "", mode: "Online", status: "Scheduled" });
      setEditingId(null);
      fetchSessions();
    } catch (err) {
      console.error(err);
      toast.error("Operation failed");
    }
  };

  const handleEdit = (s) => {
    setForm({
      title: s.title,
      description: s.description,
      counselorId: s.counselor?.id || "",
      userId: s.user?.id || "",
      date: s.date,
      time: s.time,
      duration: s.duration,
      mode: s.mode,
      status: s.status
    });
    setEditingId(s.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this session?")) return;
    try {
      await deleteSession(id);
      toast.success("Deleted successfully");
      fetchSessions();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Sessions</h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />

          <select name="userId" value={form.userId} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Select User</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>

          <select name="counselorId" value={form.counselorId} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Select Counselor</option>
            {counselors.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>

          <div className="flex space-x-4">
            <input type="date" name="date" value={form.date} onChange={handleChange} className="flex-1 p-2 border rounded" required />
            <input type="time" name="time" value={form.time} onChange={handleChange} className="flex-1 p-2 border rounded" required />
            <input type="number" name="duration" value={form.duration} onChange={handleChange} placeholder="Duration (hrs)" min="1" className="flex-1 p-2 border rounded" required />
          </div>

          <div className="flex space-x-4">
            <select name="mode" value={form.mode} onChange={handleChange} className="flex-1 p-2 border rounded">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <select name="status" value={form.status} onChange={handleChange} className="flex-1 p-2 border rounded">
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {editingId ? "Update Session" : "Add Session"}
          </button>
        </form>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded-2xl shadow-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th>Title</th>
              <th>Description</th>
              <th>User</th>
              <th>Counselor</th>
           
             
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length === 0 && <tr><td colSpan="13" className="text-center p-4">No sessions available</td></tr>}
            {sessions.map(s => (
              <tr key={s.id} className="text-center">
                <td>{s.title}</td>
                <td>{s.description}</td>
                <td>{s.user?.name}</td>
                <td>{s.counselor?.name}</td>
           
               
                <td>{s.date}</td>
                <td>{s.time}</td>
                <td>{s.duration}</td>
                <td>{s.mode}</td>
                <td>{s.status}</td>
                <td>
                  <button onClick={() => handleEdit(s)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                  <button onClick={() => handleDelete(s.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sessions;