import { useEffect, useState } from "react";

const Sessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const demoSessions = [
      {
        student: "John Doe",
        counselor: "Dr. Smith",
        date: "2026-02-20",
        time: "10:00 AM",
        status: "Completed",
      },
      {
        student: "Sarah Johnson",
        counselor: "Dr. Williams",
        date: "2026-02-21",
        time: "2:00 PM",
        status: "Completed",
      },
      {
        student: "Mike Chen",
        counselor: "Dr. Brown",
        date: "2026-02-22",
        time: "11:00 AM",
        status: "Completed",
      },
      {
        student: "Emily Davis",
        counselor: "Dr. Smith",
        date: "2026-02-23",
        time: "3:00 PM",
        status: "Cancelled",
      },
      {
        student: "David Lee",
        counselor: "Dr. Johnson",
        date: "2026-02-24",
        time: "1:00 PM",
        status: "Completed",
      },
    ];

    setSessions(demoSessions);
  }, []);

  const getStatusStyle = (status) => {
    return status === "Completed"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">
        Counseling Sessions
      </h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-gray-200 dark:border-gray-700">
            <tr className="text-left text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider">
              <th className="py-3 px-6">Student</th>
              <th className="py-3 px-6">Counselor</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>

          <tbody>
            {sessions.map((s, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-4 px-6 font-medium">{s.student}</td>
                <td className="py-4 px-6">{s.counselor}</td>
                <td className="py-4 px-6">{s.date}</td>
                <td className="py-4 px-6">{s.time}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      s.status
                    )}`}
                  >
                    {s.status}
                  </span>
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