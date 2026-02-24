import { useState } from "react";
import toast from "react-hot-toast";

const BookSession = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    mode: "Online",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (!form.name || !form.email || !form.date || !form.time || !form.mode) {
      toast.error("Please fill all fields!");
      return;
    }

    // Save booking in localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(form);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    toast.success("Session booked successfully 🎉");

    // Reset form
    setForm({
      name: "",
      email: "",
      date: "",
      time: "",
      mode: "Online",
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Book Counseling Session</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full p-3 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full p-3 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="font-medium">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="font-medium">Preferred Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="font-medium">Mode</label>
          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Book Session
        </button>
      </form>
    </div>
  );
};

export default BookSession;