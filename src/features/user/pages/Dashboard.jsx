import { motion } from "framer-motion";
import { BookOpen, Target, Calendar, CheckCircle } from "lucide-react";

const stats = [
  { title: "Completed Assessments", value: "12" },
  { title: "Career Matches", value: "5" },
  { title: "Sessions Booked", value: "3" },
  { title: "Profile Strength", value: "85%" },
];

const Dashboard = () => {
  return (
    <div className="space-y-10">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        User Dashboard
      </h1>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-3xl font-bold">
          Welcome Back 👋
        </h2>
        <p className="mt-3 opacity-90 text-lg">
          Track your growth, explore careers, and level up your skills.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-500 text-sm">{stat.title}</p>
            <h2 className="text-3xl font-bold mt-3 text-gray-800 dark:text-white">
              {stat.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <BookOpen className="text-blue-500 mb-3" size={28} />
            <h3 className="font-semibold text-lg">Take Assessment</h3>
            <p className="text-gray-500 text-sm mt-1">
              Discover your strengths
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Target className="text-pink-500 mb-3" size={28} />
            <h3 className="font-semibold text-lg">Explore Careers</h3>
            <p className="text-gray-500 text-sm mt-1">
              Find your perfect path
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Calendar className="text-indigo-500 mb-3" size={28} />
            <h3 className="font-semibold text-lg">Book Session</h3>
            <p className="text-gray-500 text-sm mt-1">
              Talk to a counselor
            </p>
          </div>

        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
            <CheckCircle className="text-green-500" />
            <div>
              <p className="font-medium">Completed Skill Assessment</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
            <BookOpen className="text-blue-500" />
            <div>
              <p className="font-medium">Downloaded Resume Template</p>
              <p className="text-sm text-gray-500">5 days ago</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
            <Target className="text-purple-500" />
            <div>
              <p className="font-medium">Chat with Career Assistant</p>
              <p className="text-sm text-gray-500">1 week ago</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;