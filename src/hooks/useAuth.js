import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    logout: handleLogout,
  };
};

export default useAuth;