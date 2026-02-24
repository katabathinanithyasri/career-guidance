import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Reports = () => {
  const growthData = [
    { month: "Jan", users: 45, revenue: 32 },
    { month: "Feb", users: 52, revenue: 40 },
    { month: "Mar", users: 60, revenue: 48 },
    { month: "Apr", users: 70, revenue: 55 },
    { month: "May", users: 78, revenue: 62 },
    { month: "Jun", users: 85, revenue: 70 },
  ];

  const bookingData = [
    { month: "Jan", bookings: 28 },
    { month: "Feb", bookings: 38 },
    { month: "Mar", bookings: 45 },
    { month: "Apr", bookings: 52 },
    { month: "May", bookings: 58 },
    { month: "Jun", bookings: 65 },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "₹4,50,000",
      change: "+12% from last month",
    },
    {
      title: "Active Users",
      value: "240",
      change: "+8% from last month",
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+2% from last month",
    },
    {
      title: "Avg. Session Rating",
      value: "4.8",
      change: "+0.3 from last month",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">
        Reports & Analytics
      </h1>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Monthly Growth
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#2563eb"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Monthly Bookings
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {stat.value}
            </h3>
            <p className="text-green-600 text-sm mt-1">
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;