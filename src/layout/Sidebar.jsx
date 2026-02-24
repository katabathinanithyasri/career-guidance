import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  ClipboardList,
  Calendar,
  MessageCircle,
  FileText,
  User,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/user", icon: LayoutDashboard },
    { name: "Explore Careers", path: "/user/explore", icon: Compass },
    { name: "Skill Assessment", path: "/user/assessment", icon: ClipboardList },
    { name: "Book Session", path: "/user/book-session", icon: Calendar },
    { name: "Chat", path: "/user/chat", icon: MessageCircle },
    { name: "Resume Resources", path: "/user/resume", icon: FileText },
    { name: "Profile", path: "/user/profile", icon: User },
  ];

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">
        User Menu
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

export default Sidebar;