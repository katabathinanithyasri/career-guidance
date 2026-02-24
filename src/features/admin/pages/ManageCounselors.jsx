import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageCounselors = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("counselors")) || [
      {
        name: "Dr. Smith",
        specialization: "Career Counseling",
        experience: "10 years",
        availability: "Available",
      },
      {
        name: "Dr. Williams",
        specialization: "Educational Psychology",
        experience: "8 years",
        availability: "Available",
      },
      {
        name: "Dr. Brown",
        specialization: "Vocational Guidance",
        experience: "12 years",
        availability: "Busy",
      },
      {
        name: "Dr. Johnson",
        specialization: "Career Development",
        experience: "6 years",
        availability: "Available",
      },
    ];

    setCounselors(saved);
    localStorage.setItem("counselors", JSON.stringify(saved));
  }, []);

  const handleDelete = (index) => {
    const updated = counselors.filter((_, i) => i !== index);
    setCounselors(updated);
    localStorage.setItem("counselors", JSON.stringify(updated));
    toast.success("Counselor deleted");
  };

  const getAvailabilityStyle = (status) => {
    return status === "Available"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">
        Manage Counselors
      </h1>

      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
        + Add New Counselor
      </button>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-gray-200 dark:border-gray-700">
            <tr className="text-left text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Specialization</th>
              <th className="py-3 px-4">Experience</th>
              <th className="py-3 px-4">Availability</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {counselors.map((c, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-4 px-4 font-medium">{c.name}</td>
                <td className="py-4 px-4">{c.specialization}</td>
                <td className="py-4 px-4">{c.experience}</td>

                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityStyle(
                      c.availability
                    )}`}
                  >
                    {c.availability}
                  </span>
                </td>

                <td className="py-4 px-4 flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
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

export default ManageCounselors;