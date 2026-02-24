import { useState } from "react";
import toast from "react-hot-toast";

const questions = [
  {
    question: "Which activity do you enjoy most?",
    options: ["Coding", "Designing", "Analyzing Data", "Managing Teams"],
  },
  {
    question: "Which subject do you prefer?",
    options: ["Math", "Art", "Computer Science", "Business"],
  },
  {
    question: "What motivates you?",
    options: ["Innovation", "Creativity", "Problem Solving", "Leadership"],
  },
];

const SkillAssessment = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[current] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!answers[current]) {
      toast.error("Please select an option!");
      return;
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      toast.success("Assessment Completed 🎉");
    }
  };

  if (finished) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold dark:text-white">
          Assessment Result
        </h1>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <p className="text-lg">
            Based on your answers, you may excel in:
          </p>

          <h2 className="text-2xl font-bold mt-4 text-blue-600">
            Technology & Innovation 🚀
          </h2>

          <button
            onClick={() => {
              setCurrent(0);
              setAnswers([]);
              setFinished(false);
            }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold dark:text-white">
        Skill Assessment
      </h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">

        <p className="font-medium text-lg">
          {questions[current].question}
        </p>

        <div className="space-y-3">
          {questions[current].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              className={`w-full p-3 rounded-lg ${
                answers[current] === option
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          {current + 1 === questions.length ? "Finish" : "Next"}
        </button>

      </div>

    </div>
  );
};

export default SkillAssessment;