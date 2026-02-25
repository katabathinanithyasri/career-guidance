import { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AdminSidebar from "./AdminSidebar";
import Footer from "./Footer";
import useRole from "@/hooks/useRole";

const LayoutWrapper = () => {
  const { isAdmin } = useRole();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      {sidebarOpen && (isAdmin ? <AdminSidebar /> : <Sidebar />)}

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page content */}
        <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-6">
          <Outlet /> 
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;