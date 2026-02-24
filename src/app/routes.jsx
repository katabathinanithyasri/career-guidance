import { Routes, Route, Navigate } from "react-router-dom";

// Auth
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";

// User Pages
import UserDashboard from "@/features/user/pages/Dashboard";
import ExploreCareers from "@/features/user/pages/ExploreCareers";
import SkillAssessment from "@/features/user/pages/SkillAssessment";
import BookSession from "@/features/user/pages/BookSession";
import Chat from "@/features/user/pages/Chat";
import ResumeResources from "@/features/user/pages/ResumeResources";
import Profile from "@/features/user/pages/Profile";

// Admin Pages
import AdminDashboard from "@/features/admin/pages/Dashboard";
import ManageUsers from "@/features/admin/pages/ManageUsers";
import ManageCareers from "@/features/admin/pages/ManageCareers";
import ManageCounselors from "@/features/admin/pages/ManageCounselors";
import Sessions from "@/features/admin/pages/Sessions";
import Reports from "@/features/admin/pages/Reports";

// Layout
import LayoutWrapper from "@/layout/LayoutWrapper";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* User Pages */}
    <Route path="/user" element={<LayoutWrapper />}>
      <Route index element={<UserDashboard />} />
      <Route path="explore" element={<ExploreCareers />} />
      <Route path="assessment" element={<SkillAssessment />} />
      <Route path="book-session" element={<BookSession />} />
      <Route path="chat" element={<Chat />} />
      <Route path="resume" element={<ResumeResources />} />
      <Route path="profile" element={<Profile />} />
    </Route>

    {/* Admin Pages */}
    <Route path="/admin" element={<LayoutWrapper />}>
      <Route index element={<AdminDashboard />} />
      <Route path="users" element={<ManageUsers />} />
      <Route path="careers" element={<ManageCareers />} />
      <Route path="counselors" element={<ManageCounselors />} />
      <Route path="sessions" element={<Sessions />} />
      <Route path="reports" element={<Reports />} />
    </Route>

    {/* Fallback */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesConfig;