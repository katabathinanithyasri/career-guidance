const SavedCareers = ({ careers }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {careers.map((c, i) => (
        <div key={i} className="bg-white p-4 shadow rounded-xl">
          {c.title}
        </div>
      ))}
    </div>
  );
};

export default SavedCareers;