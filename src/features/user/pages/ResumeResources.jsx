import toast from "react-hot-toast";

const ResumeResources = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">
        Resume Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Template
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            Resume Template 1
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Professional resume template for entry-level positions
          </p>
          <button
            onClick={() => toast.success("Template Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Download
          </button>
        </div>

        {/* 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Guide
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            Interview Guide
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Comprehensive guide for acing technical interviews
          </p>
          <button
            onClick={() => toast.success("Guide Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download
          </button>
        </div>

        {/* 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Template
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            Cover Letter Template
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Customizable cover letter template
          </p>
          <button
            onClick={() => toast.success("Cover Letter Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Download
          </button>
        </div>

        {/* 4 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Workbook
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            Portfolio Project Ideas
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Showcase your projects with guided ideas
          </p>
          <button
            onClick={() => toast.success("Project Ideas Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            Download
          </button>
        </div>

        {/* 5 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Guide
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            LinkedIn Profile Guide
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Optimize your LinkedIn profile for recruiters
          </p>
          <button
            onClick={() => toast.success("LinkedIn Guide Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Download
          </button>
        </div>

        {/* 6 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            PDF
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            Aptitude Preparation PDF
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Practice quantitative and logical reasoning
          </p>
          <button
            onClick={() => toast.success("Aptitude PDF Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
          >
            Download
          </button>
        </div>

        {/* 7 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Guide
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            HR Interview Questions Bank
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Frequently asked HR interview questions
          </p>
          <button
            onClick={() => toast.success("HR Questions Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download
          </button>
        </div>

        {/* 8 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full mb-3">
            Checklist
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            Resume Writing Checklist
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Ensure your resume meets all professional standards
          </p>
          <button
            onClick={() => toast.success("Checklist Downloaded 🎉")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Download
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResumeResources;