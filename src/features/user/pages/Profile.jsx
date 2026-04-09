import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    avatar: "", // URL or base64
  });

  const userId = JSON.parse(localStorage.getItem("user"))?.id;

  // Fetch profile on mount
  useEffect(() => {
    if (!userId) return;
    axios
      .get(`${API_URL}/${userId}`)
      .then((res) => {
        setUser(res.data);
        setForm({
          name: res.data.name || "",
          email: res.data.email || "",
          avatar: res.data.avatar || "",
        });
      })
      .catch(() => toast.error("Failed to fetch profile"));
  }, [userId]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, avatar: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      if (!form.name || !form.email) {
        toast.error("Name and Email are required");
        return;
      }
      const res = await axios.put(`${API_URL}/${userId}`, form);
      setUser(res.data);
      toast.success("Profile updated 🎉");
      setIsEditing(false);
    } catch {
      toast.error("Failed to update profile");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-6">
      <h1 className="text-2xl font-bold dark:text-white">My Profile</h1>

      <div className="flex flex-col items-center">
        {form.avatar ? (
          <img
            src={form.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-blue-500"
          />
        ) : (
          <div className="w-24 h-24 rounded-full mb-4 bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-bold">
            {form.name[0] || "U"}
          </div>
        )}
        {isEditing && (
          <input type="file" accept="image/*" onChange={handleAvatar} className="mb-4" />
        )}
      </div>

      {!isEditing ? (
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
          <div className="flex gap-4 mt-2">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;