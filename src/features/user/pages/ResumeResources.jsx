import toast from "react-hot-toast";
import { FiDownload } from "react-icons/fi";

const resources = [
  {
    tag: "Template",
    title: "Resume Template 1",
    description: "Professional resume template for entry-level positions",
    file: "/resources/resume-template-1.pdf",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    tag: "Guide",
    title: "Interview Guide",
    description: "Comprehensive guide for acing technical interviews",
    file: "/resources/interview-guide.pdf",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    tag: "Template",
    title: "Cover Letter Template",
    description: "Customizable cover letter template",
    file: "/resources/cover-letter-template.docx",
    color: "bg-blue-700 hover:bg-blue-800",
  },
  {
    tag: "Workbook",
    title: "Portfolio Project Ideas",
    description: "Showcase your projects with guided ideas",
    file: "/resources/portfolio-ideas.pdf",
    color: "bg-sky-600 hover:bg-sky-700",
  },
  {
    tag: "Guide",
    title: "LinkedIn Profile Guide",
    description: "Optimize your LinkedIn profile for recruiters",
    file: "/resources/linkedin-guide.pdf",
    color: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    tag: "PDF",
    title: "Aptitude Preparation PDF",
    description: "Practice quantitative and logical reasoning",
    file: "/resources/aptitude.pdf",
    color: "bg-blue-800 hover:bg-blue-900",
  },
  {
    tag: "Guide",
    title: "HR Interview Questions Bank",
    description: "Frequently asked HR interview questions",
    file: "/resources/hr-questions.pdf",
    color: "bg-sky-700 hover:bg-sky-800",
  },
  {
    tag: "Checklist",
    title: "Resume Writing Checklist",
    description: "Ensure your resume meets all professional standards",
    file: "/resources/resume-checklist.pdf",
    color: "bg-indigo-700 hover:bg-indigo-800",
  },
  {
    tag: "Template",
    title: "ATS-Friendly Resume Template",
    description: "Optimized resume format for Applicant Tracking Systems",
    file: "/resources/ats-resume-template.pdf",
    color: "bg-cyan-600 hover:bg-cyan-700",
  },
  {
    tag: "Guide",
    title: "Career Roadmap Planner",
    description: "Step-by-step roadmap to plan your career growth",
    file: "/resources/career-roadmap.pdf",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    tag: "PDF",
    title: "Technical Skills Cheat Sheet",
    description: "Quick reference sheet for trending tech skills",
    file: "/resources/technical-skills.pdf",
    color: "bg-sky-600 hover:bg-sky-700",
  },
  {
    tag: "Workbook",
    title: "Personal Branding Workbook",
    description: "Build a strong professional personal brand",
    file: "/resources/personal-branding.pdf",
    color: "bg-blue-700 hover:bg-blue-800",
  },
];

const ResumeResources = () => {
  const handleDownload = (title) => {
    toast.success(`${title} Downloaded 🎉`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">
        Resume Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
              {item.tag}
            </span>

            <h2 className="text-xl font-semibold dark:text-white">
              {item.title}
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {item.description}
            </p>

            <a
              href={item.file}
              download
              onClick={() => handleDownload(item.title)}
              className={`mt-4 inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg transition ${item.color}`}
            >
              <FiDownload size={18} />
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeResources;