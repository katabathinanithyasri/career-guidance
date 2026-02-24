import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const STORAGE_KEY = "userProfile";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    interests: "",
    skills: "",
    strengths: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load profile from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem(STORAGE_KEY);
    if (savedProfile) {
      setForm(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Basic validation
    if (!form.name || !form.email) {
      toast.error("Name and Email are required!");
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    toast.success("Profile Updated Successfully 🎉");
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">My Profile</h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
        {!isEditing && (
          <>
            {/* Display profile */}
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Phone:</strong> {form.phone}</p>
            <p><strong>Age:</strong> {form.age}</p>
            <p><strong>Address:</strong> {form.address}</p>
            <p><strong>Interests:</strong> {form.interests}</p>
            <p><strong>Skills:</strong> {form.skills}</p>
            <p><strong>Strengths:</strong> {form.strengths}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Edit Profile
            </button>
          </>
        )}

        {isEditing && (
          <>
            {/* Editable form */}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              type="number"
              placeholder="Age"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              type="text"
              placeholder="Address"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="interests"
              value={form.interests}
              onChange={handleChange}
              type="text"
              placeholder="Interests (comma separated)"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              type="text"
              placeholder="Skills (comma separated)"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <input
              name="strengths"
              value={form.strengths}
              onChange={handleChange}
              type="text"
              placeholder="Strengths (comma separated)"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            />

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;