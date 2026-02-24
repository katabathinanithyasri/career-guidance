import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const initialCareers =
  JSON.parse(localStorage.getItem("adminCareers")) || [];

const ManageCareers = () => {
  const [careers, setCareers] = useState(initialCareers);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    salary: "",
    roadmap: "",
    demand: "High",
  });

  useEffect(() => {
    localStorage.setItem("adminCareers", JSON.stringify(careers));
  }, [careers]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (!form.title || !form.description) {
      toast.error("Title and Description are required!");
      return;
    }

    const careerData = {
      ...form,
      skills: form.skills.split(",").map((s) => s.trim()),
      roadmap: form.roadmap.split(",").map((r) => r.trim()),
    };

    if (editingIndex !== null) {
      const updated = [...careers];
      updated[editingIndex] = careerData;
      setCareers(updated);
      toast.success("Career updated successfully!");
    } else {
      setCareers([...careers, careerData]);
      toast.success("Career added successfully!");
    }

    setForm({
      title: "",
      description: "",
      skills: "",
      salary: "",
      roadmap: "",
      demand: "High",
    });

    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const c = careers[index];
    setForm({
      title: c.title,
      description: c.description,
      skills: c.skills.join(", "),
      salary: c.salary,
      roadmap: c.roadmap.join(", "),
      demand: c.demand,
    });
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = careers.filter((_, i) => i !== index);
    setCareers(updated);
    toast.success("Career deleted successfully!");
  };

  const demandBadge = (level) => {
    switch (level) {
      case "Very High":
        return "bg-green-100 text-green-700";
      case "High":
        return "bg-blue-100 text-blue-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">
        Manage Careers
      </h1>

      {/* Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Career Title"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        />

        <input
          type="text"
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="Required Skills (comma separated)"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        />

        <input
          type="text"
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="Average Salary"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        />

        <input
          type="text"
          name="roadmap"
          value={form.roadmap}
          onChange={handleChange}
          placeholder="Roadmap Steps (comma separated)"
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        />

        {/* Demand Dropdown */}
        <select
          name="demand"
          value={form.demand}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          <option value="Very High">Very High</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button
          onClick={handleAddOrUpdate}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          {editingIndex !== null ? "Update Career" : "Add Career"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
        <table className="min-w-full">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Salary</th>
              <th className="py-2 px-4">Demand</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {careers.map((career, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-3 px-4">{career.title}</td>
                <td className="py-3 px-4">{career.description}</td>
                <td className="py-3 px-4">{career.salary}</td>

                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${demandBadge(
                      career.demand
                    )}`}
                  >
                    {career.demand}
                  </span>
                </td>

                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-1 bg-blue-600 text-white rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-1 bg-red-600 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCareers;