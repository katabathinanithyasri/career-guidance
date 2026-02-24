import { useSelector } from "react-redux";

const NotificationBell = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <div className="relative">
      🔔
      {notifications.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
          {notifications.length}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;