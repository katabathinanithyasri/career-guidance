import React, { useState, useEffect } from "react";
import { FiBriefcase } from "react-icons/fi";
import toast from "react-hot-toast";
import { addSession, getSessions, updateSession, deleteSession } from "../../../services/sessionService";
import { getCounselors } from "../../../services/counselorService";

export default function BookSession() {
  const [counselors, setCounselors] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({
    name: "",
    counselorId: "",
    date: "",
    time: "",
    mode: "ONLINE",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch counselors dynamically
  useEffect(() => {
    fetchCounselors();
    fetchUserSessions();
  }, []);

  const fetchCounselors = async () => {
    try {
      const data = await getCounselors();
      setCounselors(data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch counselors");
    }
  };

  const fetchUserSessions = async () => {
    try {
      const allSessions = await getSessions();
      const userSessions = allSessions.filter(s => s.user?.id === user.id);
      setSessions(userSessions);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch your sessions");
    }
  };

  const selectedCounselor = counselors.find(c => c.id === parseInt(form.counselorId));

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.counselorId || !form.date || !form.time) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await addSession({
        title: form.name,
        description: "Session Booking",
        date: form.date,
        time: form.time,
        duration: 60,
        mode: form.mode,
        status: "Scheduled",
        counselor: { id: parseInt(form.counselorId) },
        user: { id: user.id },
      });
      toast.success("Session booked 🎉");
      setForm({ name: "", counselorId: "", date: "", time: "", mode: "ONLINE" });
      fetchUserSessions();
    } catch (err) {
      console.error(err);
      toast.error("Booking failed ❌");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this session?")) return;
    try {
      await deleteSession(id);
      toast.success("Session deleted");
      fetchUserSessions();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleEdit = async (session) => {
    const newStatus = prompt(
      "Update session status (Scheduled / Completed / Cancelled):",
      session.status
    );
    if (!newStatus) return;
    try {
      await updateSession(session.id, { ...session, status: newStatus });
      toast.success("Session updated");
      fetchUserSessions();
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Book Session</h1>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 mb-10">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border rounded"
        />

        <select
          name="counselorId"
          value={form.counselorId}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Counselor</option>
          {counselors.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        {selectedCounselor && (
          <div className="text-sm text-blue-600 flex gap-2 items-center">
            <FiBriefcase /> {selectedCounselor.expertise || selectedCounselor.experience || "-"}
          </div>
        )}

        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input type="time" name="time" value={form.time} onChange={handleChange} />

        <select name="mode" value={form.mode} onChange={handleChange}>
          <option value="ONLINE">Online</option>
          <option value="OFFLINE">Offline</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Book Session
        </button>
      </form>

      {/* Booked Sessions */}
      <h2 className="text-2xl font-semibold mb-4">Your Booked Sessions</h2>
      {sessions.length === 0 ? (
        <p className="text-gray-500">No sessions booked yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map(s => (
            <div key={s.id} className="bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-2">{s.description}</p>
                <p><span className="font-semibold">Counselor:</span> {s.counselor?.name}</p>
                <p><span className="font-semibold">Specialization:</span> {s.counselor?.expertise}</p>
                <p><span className="font-semibold">Experience:</span> {s.counselor?.experience} yrs</p>
                <p><span className="font-semibold">Availability:</span> {s.counselor?.availability}</p>
                <p><span className="font-semibold">Date:</span> {s.date}</p>
                <p><span className="font-semibold">Time:</span> {s.time}</p>
                <p><span className="font-semibold">Mode:</span> {s.mode}</p>
                <p className={`inline-block px-2 py-1 rounded-full mt-2 font-semibold ${
                  s.status === "Scheduled" ? "bg-yellow-200 text-yellow-800" :
                  s.status === "Completed" ? "bg-green-200 text-green-800" :
                  "bg-red-200 text-red-800"
                }`}>{s.status}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button onClick={() => handleEdit(s)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                  Edit
                </button>
                <button onClick={() => handleDelete(s.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}