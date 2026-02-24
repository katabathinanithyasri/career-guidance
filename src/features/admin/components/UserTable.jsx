const users = [
  { id: 1, name: "Nithya", email: "nithya@gmail.com", role: "USER" },
  { id: 2, name: "Admin", email: "admin@gmail.com", role: "ADMIN" },
];

const UserTable = () => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="text-right p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-4">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td className="p-4 text-right">
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;