const CounselorForm = () => {
  return (
    <div className="bg-white p-6 shadow rounded-xl space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Name" />
      <input className="w-full border p-2 rounded" placeholder="Expertise" />
      <button className="bg-green-600 text-white px-6 py-2 rounded">
        Add Counselor
      </button>
    </div>
  );
};

export default CounselorForm;