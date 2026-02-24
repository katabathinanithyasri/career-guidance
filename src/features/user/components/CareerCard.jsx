const CareerCard = ({ career }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold">{career.title}</h2>
      <p className="text-gray-600 mt-2">{career.description}</p>
      <button className="mt-4 text-indigo-600 font-semibold">
        View Details
      </button>
    </div>
  );
};

export default CareerCard;