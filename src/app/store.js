import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import userReducer from "@/features/user/userSlice";
import adminReducer from "@/features/admin/adminSlice";
import careerReducer from "@/features/careers/careerSlice";
import notificationReducer from "@/features/notifications/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    admin: adminReducer,
    careers: careerReducer,
    notifications: notificationReducer,
  },
});

export default store;