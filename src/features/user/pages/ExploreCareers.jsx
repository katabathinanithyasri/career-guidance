import { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const careersData = [
  {
    title: "Software Engineer",
    category: "Technology",
    desc: "Build scalable web & mobile applications.",
    skills: ["React", "Node", "Databases"],
    salary: "₹5,50,00 - ₹9,50,00",
    roadmap: [
      "Learn programming fundamentals",
      "Master a language (JavaScript, Python, etc.)",
      "Build projects & portfolio",
      "Apply for internships/jobs",
    ],
  },
  {
    title: "Data Scientist",
    category: "Technology",
    desc: "Work with AI, ML and data analytics.",
    skills: ["Python", "ML", "Statistics"],
    salary: "₹6,50,00 - ₹10,50,00",
    roadmap: [
      "Learn Python and data analysis",
      "Master statistics & ML algorithms",
      "Work on real datasets",
      "Prepare for job interviews",
    ],
  },
  {
    title: "Civil Services",
    category: "Government",
    desc: "Become an officer in administrative services.",
    skills: ["General Knowledge", "Writing", "Decision Making"],
    salary: "₹15,00,00 - ₹35,00,00 (varies by post)",
    roadmap: [
      "Understand exam pattern & syllabus",
      "Daily current affairs & GS preparation",
      "Practice writing essays & answers",
      "Appear for prelims, mains & interview",
    ],
  },
  {
    title: "MBA",
    category: "Management",
    desc: "Pursue a Master in Business Administration.",
    skills: ["Leadership", "Strategy", "Finance"],
    salary: "₹35,00,00 - ₹1,05,00,00",
    roadmap: [
      "Complete undergraduate degree",
      "Prepare for entrance exams (GMAT/CAT)",
      "Join MBA program",
      "Gain internships & network",
    ],
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    desc: "Design beautiful digital experiences.",
    skills: ["Figma", "Prototyping", "Research"],
    salary: "₹28,00,00 - ₹70,00,00",
    roadmap: [
      "Learn design principles",
      "Master Figma/Adobe XD",
      "Create portfolio projects",
      "Apply for design roles",
    ],
  },
];

const ExploreCareers = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedCareer, setSelectedCareer] = useState(null);

  const filteredCareers = careersData.filter((career) => {
    const matchesSearch = career.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || career.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Explore Career Paths</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search career..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-700"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700"
        >
          <option>All</option>
          <option>Technology</option>
          <option>Design</option>
          <option>Management</option>
          <option>Government</option>
        </select>
      </div>

      {/* Career Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer"
            onClick={() => setSelectedCareer(career)}
          >
            <h2 className="text-xl font-semibold">{career.title}</h2>
            <p className="text-gray-500 mt-2">{career.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {career.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-2 text-gray-600 dark:text-gray-300 font-medium">
              Average Salary: {career.salary}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Career Modal */}
      <AnimatePresence>
        {selectedCareer && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-[450px] max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-2xl font-bold">{selectedCareer.title}</h2>
              <p className="mt-2 text-gray-500">{selectedCareer.desc}</p>

              <p className="mt-4 font-semibold">Required Skills:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedCareer.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="mt-4 font-semibold">Average Salary:</p>
              <p className="text-gray-600 dark:text-gray-300">{selectedCareer.salary}</p>

              <p className="mt-4 font-semibold">Roadmap Steps:</p>
              <ol className="list-decimal list-inside mt-1 text-gray-600 dark:text-gray-300">
                {selectedCareer.roadmap.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => {
                    toast.success("Career added to your interests!");
                    setSelectedCareer(null);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Add to My Path
                </button>

                <button
                  onClick={() => setSelectedCareer(null)}
                  className="px-6 py-2 bg-gray-400 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreCareers;