const sessions = [
  { id: 1, user: "Nithya", counselor: "Dr. Smith", status: "PENDING" },
];

const SessionTable = () => {
  return (
    <div className="bg-white shadow rounded-xl">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">User</th>
            <th>Counselor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="p-4">{s.user}</td>
              <td>{s.counselor}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SessionTable;