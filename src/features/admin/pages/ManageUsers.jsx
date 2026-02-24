const AdminUsers = () => {
  const users = [
    {
      name: "nithya",
      email: "2400031650@kluniversity.in",
      phone: "07997878140",
      age: 18,
      address: "4/46, Shivalayam Street",
      interests: "coding",
      skills: "fsa, java",
      strengths: "problem solving",
      role: "user",
    },
    {
      name: "Rahul Kumar",
      email: "rahul.kumar@example.com",
      phone: "9876543210",
      age: 22,
      address: "123 MG Road, Bangalore",
      interests: "design, art",
      skills: "Figma, Adobe XD",
      strengths: "creativity, attention to detail",
      role: "user",
    },
    {
      name: "Priya Sharma",
      email: "priya.s@example.com",
      phone: "8765432109",
      age: 20,
      address: "456 Park Street, Mumbai",
      interests: "data science, AI",
      skills: "Python, Machine Learning",
      strengths: "analytical thinking",
      role: "user",
    },
  ];

  return (
    <div className="space-y-6 p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Registered Users
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow transition-colors duration-300">
        <table className="min-w-full text-left">
          
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 uppercase text-sm">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Age</th>
              <th className="px-6 py-4">Address</th>
              <th className="px-6 py-4">Interests</th>
              <th className="px-6 py-4">Skills</th>
              <th className="px-6 py-4">Strengths</th>
              <th className="px-6 py-4">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.name}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.email}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.phone}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.age}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.address}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.interests}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.skills}</td>
                <td className="px-6 py-4 text-gray-800 dark:text-gray-100">{user.strengths}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminUsers;