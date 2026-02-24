import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserCheck,
  Calendar,
  BarChart3,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Manage Users", path: "/admin/users", icon: Users },
    { name: "Manage Careers", path: "/admin/careers", icon: Briefcase },
    { name: "Manage Counselors", path: "/admin/counselors", icon: UserCheck },
    { name: "Sessions", path: "/admin/sessions", icon: Calendar },
    { name: "Reports", path: "/admin/reports", icon: BarChart3 },
  ];

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">
        Admin Menu
      </h2>

      <nav className="flex flex-col space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition 
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;