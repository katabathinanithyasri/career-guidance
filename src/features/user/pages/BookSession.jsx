import React, { useState } from "react";
import {
  FiUser,
  FiCalendar,
  FiClock,
  FiVideo,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";

export default function Sessions() {
  const counselors = [
    { name: "Dr. Priya Sharma", experience: "12 Years Experience" },
    { name: "Mr. Arjun Mehta", experience: "8 Years Experience" },
    { name: "Ms. Kavya Reddy", experience: "6 Years Experience" },
    { name: "Dr. Rahul Verma", experience: "15 Years Experience" },
    { name: "Mrs. Sneha Iyer", experience: "10 Years Experience" },
  ];

  const [form, setForm] = useState({
    name: "",
    counselor: "",
    date: "",
    time: "",
    mode: "Online",
  });

  const [sessions, setSessions] = useState([]);

  const selectedCounselor = counselors.find(
    (c) => c.name === form.counselor
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.counselor || !form.date || !form.time) return;

    setSessions([...sessions, form]);

    setForm({
      name: "",
      counselor: "",
      date: "",
      time: "",
      mode: "Online",
    });
  };

  const getSessionStatus = (date, time) => {
    const now = new Date();
    const sessionStart = new Date(`${date}T${time}`);
    const sessionEnd = new Date(sessionStart.getTime() + 60 * 60 * 1000);

    if (now > sessionEnd) return "Completed";
    if (now >= sessionStart && now <= sessionEnd) return "Ongoing";
    return "Upcoming";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Book a Counseling Session
      </h1>

      {/* Booking Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 mb-10">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Counselor with Experience */}
          <div>
            <label className="text-sm text-gray-600">Select Counselor</label>
            <select
              name="counselor"
              value={form.counselor}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Choose Counselor</option>
              {counselors.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Experience under counselor only */}
            {selectedCounselor && (
              <div className="flex items-center gap-2 mt-2 text-sm text-blue-700 bg-blue-50 p-2 rounded-lg">
                <FiBriefcase />
                {selectedCounselor.experience}
              </div>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Time */}
          <div>
            <label className="text-sm text-gray-600">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Mode */}
          <div>
            <label className="text-sm text-gray-600">Mode</label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* Submit */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Book Session
            </button>
          </div>
        </form>
      </div>

      {/* Sessions Section */}
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">
        My Sessions
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {sessions.map((session, index) => {
          const status = getSessionStatus(session.date, session.time);

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 font-semibold text-blue-800">
                  <FiUser />
                  {session.counselor}
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full
                    ${
                      status === "Completed"
                        ? "bg-gray-200 text-gray-700"
                        : status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {status}
                </span>
              </div>

              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  {session.date}
                </div>

                <div className="flex items-center gap-2">
                  <FiClock />
                  {session.time}
                </div>

                <div className="flex items-center gap-2">
                  {session.mode === "Online" ? <FiVideo /> : <FiMapPin />}
                  {session.mode}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}