import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  BarChart3,
  Brain,
  MessageSquareText,
  LayoutDashboard,
  Sparkles,
  Globe,
  Cloud,
} from "lucide-react";
import {
  FaChartBar,
  FaFileExcel,
  FaCode,
  FaProjectDiagram,
  FaBrain,
  FaRobot,
  FaSearch,
  FaCogs,
  FaTable,
  FaLayerGroup,
  FaSortAmountDown,
  FaFont,
  FaCubes,
  FaTags,
  FaBroom,
  FaSlidersH,
  FaCheckDouble,
  FaCompressArrowsAlt,
  FaStream,
  FaPalette,
} from "react-icons/fa";
import {
  SiPython,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiFastapi,
  SiStreamlit,
  SiJupyter,
  SiGooglecolab,
  SiGit,
  SiGithub,
  SiPlotly,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiRender,
  SiGooglegemini,
  SiPwa,
} from "react-icons/si";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages & Core CS",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "SQL (MySQL)", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "Data Structures & Algorithms", icon: <FaProjectDiagram className="w-4 h-4 text-sky-300" /> },
        { name: "OOP", icon: <FaCubes className="w-4 h-4 text-indigo-300" /> },
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Processing",
      color: "text-green-400",
      skills: [
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#8f7bd8]" /> },
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#4DABCF]" /> },
        { name: "Matplotlib", icon: <FaChartBar className="w-4 h-4 text-[#11557c]" /> },
        { name: "Seaborn", icon: <FaChartBar className="w-4 h-4 text-teal-300" /> },
        { name: "EDA", icon: <FaSearch className="w-4 h-4 text-amber-300" /> },
        { name: "Data Cleaning", icon: <FaBroom className="w-4 h-4 text-emerald-300" /> },
        { name: "Feature Engineering", icon: <FaCogs className="w-4 h-4 text-gray-300" /> },
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning & Deep Learning",
      color: "text-purple-400",
      skills: [
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-4 h-4 text-[#F7931E]" /> },
        { name: "XGBoost", icon: <FaLayerGroup className="w-4 h-4 text-green-300" /> },
        { name: "TensorFlow/Keras", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "Regression", icon: <FaSortAmountDown className="w-4 h-4 text-pink-300" /> },
        { name: "Classification", icon: <FaTags className="w-4 h-4 text-sky-300" /> },
        { name: "Clustering", icon: <FaCubes className="w-4 h-4 text-fuchsia-300" /> },
        { name: "Random Forest", icon: <FaProjectDiagram className="w-4 h-4 text-lime-300" /> },
        { name: "LSTM", icon: <FaStream className="w-4 h-4 text-cyan-300" /> },
        { name: "Bi-GRU", icon: <FaStream className="w-4 h-4 text-violet-300" /> },
        { name: "Model Evaluation", icon: <FaCheckDouble className="w-4 h-4 text-emerald-300" /> },
        { name: "Hyperparameter Tuning", icon: <FaSlidersH className="w-4 h-4 text-orange-300" /> },
      ],
    },
    {
      icon: MessageSquareText,
      title: "NLP & Recommendation Systems",
      color: "text-pink-400",
      skills: [
        { name: "NLP", icon: <FaBrain className="w-4 h-4 text-pink-300" /> },
        { name: "Text Preprocessing", icon: <FaBroom className="w-4 h-4 text-gray-300" /> },
        { name: "Tokenization", icon: <FaFont className="w-4 h-4 text-sky-300" /> },
        { name: "TF-IDF", icon: <FaTable className="w-4 h-4 text-amber-300" /> },
        { name: "Cosine Similarity", icon: <FaCompressArrowsAlt className="w-4 h-4 text-teal-300" /> },
        { name: "Text Classification", icon: <FaTags className="w-4 h-4 text-purple-300" /> },
      ],
    },
    {
      icon: LayoutDashboard,
      title: "BI & Dashboard Design",
      color: "text-yellow-400",
      skills: [
        { name: "Power BI", icon: <FaChartBar className="w-4 h-4 text-[#F2C811]" /> },
        { name: "DAX", icon: <FaCode className="w-4 h-4 text-[#F2C811]" /> },
        { name: "Power Query", icon: <FaTable className="w-4 h-4 text-[#F2C811]" /> },
        { name: "Microsoft Excel", icon: <FaFileExcel className="w-4 h-4 text-[#21A366]" /> },
        { name: "Plotly", icon: <SiPlotly className="w-4 h-4 text-[#7A76FF]" /> },
        { name: "Dashboard UI/UX", icon: <FaPalette className="w-4 h-4 text-fuchsia-300" /> },
      ],
    },
    {
      icon: Sparkles,
      title: "GenAI & Agentic AI",
      color: "text-teal-400",
      skills: [
        { name: "GenAI Basics", icon: <FaRobot className="w-4 h-4 text-teal-300" /> },
        { name: "Gemini API", icon: <SiGooglegemini className="w-4 h-4 text-[#8E75B2]" /> },
        { name: "Agentic AI (learning)", icon: <FaRobot className="w-4 h-4 text-sky-300" /> },
      ],
    },
    {
      icon: Globe,
      title: "Full-Stack & Web",
      color: "text-orange-400",
      skills: [
        { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss className="w-4 h-4 text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "PWA", icon: <SiPwa className="w-4 h-4 text-[#5A0FC8]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Deployment",
      color: "text-cyan-400",
      skills: [
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "Streamlit", icon: <SiStreamlit className="w-4 h-4 text-[#FF4B4B]" /> },
        { name: "Jupyter Notebook", icon: <SiJupyter className="w-4 h-4 text-[#F37626]" /> },
        { name: "Google Colab", icon: <SiGooglecolab className="w-4 h-4 text-[#F9AB00]" /> },
        { name: "Git", icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="w-4 h-4 text-white" /> },
        { name: "Render", icon: <SiRender className="w-4 h-4 text-[#46E3B7]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
