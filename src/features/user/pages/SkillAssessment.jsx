import { useState } from "react";

// ------------------------------
// DATA: 5 Major Domains, 3 Minor Domains Each, 10 Questions Each
// ------------------------------
const domains = [
  {
    name: "Technology",
    subjects: [
      {
        name: "Computer Science",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `CS Question ${i + 1}?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Software Developer", minScore: 6 },
          { name: "AI/ML Engineer", minScore: 7 },
          { name: "Data Scientist", minScore: 7 },
          { name: "Systems Engineer", minScore: 5 },
          { name: "Backend Developer", minScore: 6 },
        ],
      },
      {
        name: "Data Analytics",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Data Analytics Question ${i + 1}?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Data Analyst", minScore: 6 },
          { name: "Business Analyst", minScore: 5 },
          { name: "Data Engineer", minScore: 7 },
          { name: "Machine Learning Engineer", minScore: 7 },
          { name: "BI Developer", minScore: 6 },
        ],
      },
      {
        name: "DevOps",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `DevOps Question ${i + 1}?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          answer: 0,
        })),
        careers: [
          { name: "DevOps Engineer", minScore: 6 },
          { name: "Cloud Engineer", minScore: 6 },
          { name: "SRE Engineer", minScore: 7 },
          { name: "Release Manager", minScore: 5 },
          { name: "Automation Engineer", minScore: 6 },
        ],
      },
    ],
  },
  {
    name: "AI & Cloud",
    subjects: [
      {
        name: "Cloud Computing",
        questions: [
          {
            question: "Which of the following is an example of IaaS (Infrastructure as a Service)?",
            options: ["AWS EC2","AWS S3","AWS Lambda","AWS CloudFront"],
            answer: 0
          },
          {
            question: "Which service provides serverless computing?",
            options: ["AWS Lambda","Amazon EC2","Amazon RDS","Amazon VPC"],
            answer: 0
          },
          {
            question: "Which AWS service is primarily used for object storage?",
            options: ["Amazon S3","Amazon EC2","AWS Lambda","Amazon VPC"],
            answer: 0
          },
          {
            question: "What does scalability in cloud computing refer to?",
            options: ["Ability to handle increasing workloads","Ability to reduce workload","Ability to scale code","Ability to increase security"],
            answer: 0
          },
          {
            question: "Which service is an example of PaaS (Platform as a Service)?",
            options: ["AWS Elastic Beanstalk","Amazon EC2","AWS S3","AWS Lambda"],
            answer: 0
          },
          {
            question: "What is the main purpose of a load balancer in cloud architecture?",
            options: ["Distribute traffic across multiple servers","Store user data","Automate deployments","Monitor applications"],
            answer: 0
          },
          {
            question: "What does elasticity in cloud computing allow?",
            options: ["Dynamic resource allocation based on demand","Static allocation of resources","Scaling databases manually","Automated testing"],
            answer: 0
          },
          {
            question: "What is IAM in cloud computing?",
            options: ["Identity and Access Management","Infrastructure Automation Module","Integration API Manager","Internal Access Module"],
            answer: 0
          },
          {
            question: "Multi-tenancy in cloud computing means?",
            options: ["Multiple customers share the same infrastructure securely","Single customer uses the entire cloud","One server per user","Dedicated hardware per application"],
            answer: 0
          },
          {
            question: "Which of these is a cloud deployment model?",
            options: ["Public Cloud","Relational Cloud","Static Cloud","Distributed Cloud"],
            answer: 0
          },
        ],
        careers: [
          { name: "Cloud Engineer", minScore: 6 },
          { name: "Cloud Architect", minScore: 7 },
          { name: "AWS Solutions Architect", minScore: 7 },
          { name: "DevOps Engineer", minScore: 6 },
          { name: "Cloud Consultant", minScore: 6 },
        ]
      },
      {
        name: "Artificial Intelligence",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `AI Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "AI Engineer", minScore: 6 },
          { name: "ML Engineer", minScore: 7 },
          { name: "Data Scientist", minScore: 7 },
          { name: "Research Scientist", minScore: 6 },
          { name: "AI Consultant", minScore: 6 },
        ],
      },
      {
        name: "Machine Learning",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `ML Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "ML Engineer", minScore: 6 },
          { name: "Data Scientist", minScore: 7 },
          { name: "AI Researcher", minScore: 7 },
          { name: "ML Ops Engineer", minScore: 6 },
          { name: "Predictive Analyst", minScore: 6 },
        ],
      },
    ],
  },
  {
    name: "Cybersecurity",
    subjects: [
      {
        name: "Ethical Hacking",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Ethical Hacking Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Cybersecurity Analyst", minScore: 6 },
          { name: "Ethical Hacker", minScore: 7 },
          { name: "Security Consultant", minScore: 6 },
          { name: "Penetration Tester", minScore: 7 },
          { name: "SOC Analyst", minScore: 6 },
        ],
      },
      {
        name: "Network Security",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Network Security Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Network Security Engineer", minScore: 6 },
          { name: "SOC Analyst", minScore: 6 },
          { name: "Cybersecurity Consultant", minScore: 7 },
          { name: "Firewall Specialist", minScore: 6 },
          { name: "Network Auditor", minScore: 6 },
        ],
      },
      {
        name: "Cloud Security",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Cloud Security Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Cloud Security Engineer", minScore: 6 },
          { name: "Security Consultant", minScore: 7 },
          { name: "DevSecOps Engineer", minScore: 7 },
          { name: "Compliance Analyst", minScore: 6 },
          { name: "Cloud Auditor", minScore: 6 },
        ],
      },
    ],
  },
  {
    name: "Design",
    subjects: [
      {
        name: "UI/UX Design",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `UI/UX Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "UI/UX Designer", minScore: 6 },
          { name: "Product Designer", minScore: 7 },
          { name: "Interaction Designer", minScore: 6 },
          { name: "Visual Designer", minScore: 6 },
          { name: "Experience Designer", minScore: 6 },
        ],
      },
      {
        name: "Graphic Design",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Graphic Design Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Graphic Designer", minScore: 6 },
          { name: "Visual Designer", minScore: 7 },
          { name: "Illustrator", minScore: 6 },
          { name: "Brand Designer", minScore: 6 },
          { name: "Creative Designer", minScore: 6 },
        ],
      },
      {
        name: "Product Design",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Product Design Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Product Designer", minScore: 6 },
          { name: "UI/UX Designer", minScore: 7 },
          { name: "Industrial Designer", minScore: 6 },
          { name: "Experience Designer", minScore: 6 },
          { name: "Creative Designer", minScore: 6 },
        ],
      },
    ],
  },
  {
    name: "Business",
    subjects: [
      {
        name: "Finance",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Finance Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Financial Analyst", minScore: 6 },
          { name: "Investment Banker", minScore: 7 },
          { name: "Accountant", minScore: 6 },
          { name: "Risk Analyst", minScore: 6 },
          { name: "Portfolio Manager", minScore: 7 },
        ],
      },
      {
        name: "Marketing",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Marketing Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Marketing Manager", minScore: 6 },
          { name: "Digital Marketing Specialist", minScore: 7 },
          { name: "Brand Manager", minScore: 6 },
          { name: "Content Strategist", minScore: 6 },
          { name: "SEO Specialist", minScore: 6 },
        ],
      },
      {
        name: "Project Management",
        questions: Array.from({ length: 10 }, (_, i) => ({
          question: `Project Management Question ${i + 1}?`,
          options: ["Option A","Option B","Option C","Option D"],
          answer: 0,
        })),
        careers: [
          { name: "Project Manager", minScore: 6 },
          { name: "Scrum Master", minScore: 7 },
          { name: "Program Manager", minScore: 6 },
          { name: "Product Manager", minScore: 6 },
          { name: "Agile Coach", minScore: 7 },
        ],
      },
    ],
  },
];

// ------------------------------
// COMPONENT
// ------------------------------
const CareerAssessment = () => {
  const [stage, setStage] = useState("domain");
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const chooseDomain = (domain) => { setSelectedDomain(domain); setStage("subject"); };
  const chooseSubject = (subject) => { setSelectedSubject(subject); setCurrentQuestion(0); setScore(0); setStage("exam"); };
  const answerQuestion = (optionIndex) => {
    if (optionIndex === selectedSubject.questions[currentQuestion].answer) setScore(score + 1);
    if (currentQuestion + 1 < selectedSubject.questions.length) setCurrentQuestion(currentQuestion + 1);
    else setStage("result");
  };

  if (stage === "domain") return (
    <div>
      <h1 className="text-3xl font-bold">Choose a Domain</h1>
      {domains.map((d,i)=>(<button key={i} onClick={()=>chooseDomain(d)} className="block w-full p-4 bg-blue-600 text-white rounded-lg mt-3">{d.name}</button>))}
    </div>
  );

  if (stage === "subject") return (
    <div>
      <h1 className="text-3xl font-bold">Choose a Subject in {selectedDomain.name}</h1>
      {selectedDomain.subjects.map((s,i)=>(<button key={i} onClick={()=>chooseSubject(s)} className="block w-full p-4 bg-green-600 text-white rounded-lg mt-3">{s.name}</button>))}
    </div>
  );

  if (stage === "exam") {
    const q = selectedSubject.questions[currentQuestion];
    return (
      <div>
        <h1 className="text-3xl font-bold">Exam: {selectedSubject.name}</h1>
        <p className="text-xl mt-4">{q.question}</p>
        {q.options.map((opt,i)=>(<button key={i} onClick={()=>answerQuestion(i)} className="block w-full p-3 mt-2 rounded-lg bg-gray-100 hover:bg-gray-200">{opt}</button>))}
        <p className="mt-2 text-gray-500">Question {currentQuestion + 1} of {selectedSubject.questions.length}</p>
      </div>
    );
  }

  if (stage === "result") {
    const eligibleCareers = selectedSubject?.careers.map(c => {
      let fit = Math.floor((score / selectedSubject.questions.length) * 100);
      return { name: c.name, fit, isLessLikely: score < c.minScore };
    });

    return (
      <div>
        <h1 className="text-3xl font-bold">Exam Result: {selectedSubject.name}</h1>
        <p className="text-xl">Score: {score} / {selectedSubject.questions.length}</p>
        <h2 className="text-2xl font-bold mt-4">Career Options:</h2>
        <ul className="mt-2 space-y-1">
          {eligibleCareers.map((c,i)=>(
            <li key={i}>
              {c.name} - Eligibility: {c.fit}% {c.isLessLikely ? "(Less likely)" : ""}
            </li>
          ))}
        </ul>
        <button onClick={()=>setStage("domain")} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">Retake Assessment</button>
      </div>
    );
  }
};

export default CareerAssessment;