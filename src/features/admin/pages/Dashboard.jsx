import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function CounselingBookings() {
  const totalUsers = 240;
  const totalCareers = 85;
  const totalBookings = 156;

  const chartData = {
    labels: ["Users", "Careers", "Bookings"],
    datasets: [
      {
        data: [totalUsers, totalCareers, totalBookings],
        backgroundColor: "#2563eb",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors">
          <p className="text-gray-500 dark:text-gray-400">Total Users</p>
          <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {totalUsers}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors">
          <p className="text-gray-500 dark:text-gray-400">Total Careers</p>
          <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {totalCareers}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors">
          <p className="text-gray-500 dark:text-gray-400">Total Bookings</p>
          <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {totalBookings}
          </h2>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8 transition-colors">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Analytics Chart
        </h2>
        <Bar data={chartData} options={options} />
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden transition-colors">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm uppercase">
            <tr>
              <th className="p-4">Student</th>
              <th className="p-4">Counselor</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Mode</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-800 dark:text-gray-100">

            <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <td className="p-4">K.karthik</td>
              <td className="p-4">Dr.Venkataratnam</td>
              <td className="p-4">2026-02-25</td>
              <td className="p-4">10:00 AM</td>
              <td className="p-4">Online</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm">
                  Pending
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Approve
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Complete
                </button>
              </td>
            </tr>

            <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <td className="p-4">R.suresh</td>
              <td className="p-4">Dr. abbdul</td>
              <td className="p-4">2026-02-26</td>
              <td className="p-4">2:00 PM</td>
              <td className="p-4">Offline</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm">
                  Pending
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Approve
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Complete
                </button>
              </td>
            </tr>

            <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <td className="p-4">b.shaik faiz</td>
              <td className="p-4">Dr.Epstine</td>
              <td className="p-4">2026-02-27</td>
              <td className="p-4">11:00 AM</td>
              <td className="p-4">Online</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm">
                  Pending
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Approve
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Complete
                </button>
              </td>
            </tr>

            <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <td className="p-4">s.ismayil</td>
              <td className="p-4">Dr.suneel</td>
              <td className="p-4">2026-02-28</td>
              <td className="p-4">3:00 PM</td>
              <td className="p-4">Online</td>
              <td className="p-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm">
                  Pending
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Approve
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  Complete
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}