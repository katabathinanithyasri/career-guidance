const AssessmentQuestion = ({ question }) => {
  return (
    <div className="bg-white p-6 shadow rounded-xl">
      <h3 className="font-semibold mb-4">{question.text}</h3>
      {question.options.map((opt, i) => (
        <div key={i} className="mb-2">
          <input type="radio" name="option" /> {opt}
        </div>
      ))}
    </div>
  );
};

export default AssessmentQuestion;