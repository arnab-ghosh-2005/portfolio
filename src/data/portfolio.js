// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  your name, links, experience, education, certificates and
//  projects without touching the page components.
// ─────────────────────────────────────────────────────────────

import eventronImg from "@/assets/images/projects/eventron.svg";
import movieImg from "@/assets/images/projects/movie-recommender.svg";
import emotionImg from "@/assets/images/projects/emotion-prediction.svg";
import mentalImg from "@/assets/images/projects/mental-health-predictor.svg";
import taxiImg from "@/assets/images/projects/taxi-fare-dashboard.svg";
import foodImg from "@/assets/images/projects/food-delivery-dashboard.svg";

export const profile = {
  name: "Arnab Ghosh",
  shortName: "Arnab",
  email: "arnabg873@gmail.com",
  phone: "+91 93820 74189",
  phoneHref: "tel:+919382074189",
  location: "Memari, Burdwan, West Bengal, India",
  resume: "/Arnab_Ghosh_Resume.pdf",
  // Rotating text in the hero section
  roles: [
    "Data Analyst",
    "Machine Learning & Deep Learning Developer",
    "UI/UX Designer",
    "Learning GenAI & Agentic AI",
  ],
  intro:
    "Final-year B.Tech student turning raw data into clear, actionable insights with Python, SQL, Power BI and machine learning.",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/arnabghosh2005/",
  github: "https://github.com/arnab-ghosh-2005",
  leetcode: "https://leetcode.com/u/arnab_ghosh2005/",
  hackerrank: "https://www.hackerrank.com/profile/arnabg873",
  kaggle: "https://www.kaggle.com/arnabghosh05",
  x: "https://x.com/ArnabGhosh2005",
};

export const experiences = [
  {
    title: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    period: "May 2026 – Jun 2026",
    type: "Internship",
    bullets: [
      "Conducted exploratory data analysis (EDA) on restaurant datasets using Python, including data cleaning and preprocessing on real-world tabular data.",
      "Performed statistical analysis and visualization to derive actionable business insights from ratings, cuisine trends and pricing distributions.",
      "Analyzed online delivery patterns across the dataset to surface trends relevant to business decision-making.",
      "Built analytical reports and visualizations with Matplotlib and Seaborn, communicating findings clearly to stakeholders.",
    ],
    link: {
      label: "View on Drive",
      href: "https://drive.google.com/drive/folders/1KylM1apFcRLMZ6w958NCQHD9c9nA-jUD",
    },
  },
  {
    title: "Content Team Member",
    company: "Sourcify IN",
    period: "Jul 2025 – Aug 2026",
    type: "Part-time · Hybrid",
    bullets: ["Part-time member of the Content Team at Sourcify (India)."],
    link: {
      label: "Company page",
      href: "https://www.linkedin.com/company/99279056/",
    },
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Business Systems",
    school: "Academy of Technology, Kolkata",
    mascot: "🎓",
    year: "Sep 2023 – Jun 2027",
    achievements: ["SGPA: 7.9 (through 6th semester)"],
    skills: ["Python", "SQL", "Data Structures & Algorithms", "OOP"],
    description:
      "Final-year student focused on data analysis, machine learning and deep learning.",
  },
  {
    degree: "Higher Secondary Examination (WBCHSE)",
    school: "Bohar High School",
    mascot: "📘",
    year: "Apr 2021 – May 2022",
    achievements: ["Grade: A+"],
    skills: [],
    description: "",
  },
];

export const achievements = [
  {
    title: "2nd Runner-Up · TechSprint",
    detail:
      "Organized by GDGoC (Google Developer Groups on Campus), Academy of Technology.",
  },
  {
    title: "Shortlisted · Smart India Hackathon (SIH) 2025",
    detail: "Shortlisted at the campus level.",
  },
];

// `file` = image/PDF placed in /public/certificates, `link` = online verification URL.
export const certificates = [
  {
    title: "GenAI – NASSCOM-aligned Assessment",
    issuer: "SFJ · aligned with NASSCOM standards",
    date: "Oct 2026",
    file: "/certificates/genai-nasscom.png",
  },
  {
    title: "GenAI Basics",
    issuer: "Simplilearn",
    link: "https://simpli-web.app.link/e/28uIyZY4A7b",
  },
  {
    title: "Python Certification",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-0b159585-2538-449d-8a34-507232337d9d/",
  },
  {
    title: "Power BI Certification",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-8137700e-38b0-4b59-ab6b-dc926d437a58/",
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/30b9a8d41a1c",
  },
  {
    title: "Python Certification",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/731210e224c5",
  },
];

// `liveLink` is optional – the "Live" button is hidden when it is missing.
export const projects = [
  {
    title: "Eventron — Full-Stack AI Event Management Platform",
    description:
      "Event management platform built with React and MongoDB, with Gemini AI for content generation and smart recommendations, MFA via Phone OTP and Google Auth, and a real-time PWA plus a native Android app through Capacitor.",
    tech: ["React", "MongoDB", "Gemini AI", "PWA", "Capacitor"],
    period: "Apr 2026 – May 2026",
    image: eventronImg,
    color: "#818cf8",
    githubLink: "https://github.com/prattyan/Eventron",
    liveLink: "https://eventron.xyz/",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Content-based recommendation engine using NLP and cosine similarity on movie metadata. Precomputed similarity matrices speed up inference, and a Streamlit app pulls live data from the TMDB API.",
    tech: ["Python", "NLP", "Cosine Similarity", "Streamlit", "TMDB API"],
    period: "Mar 2026 – Apr 2026",
    image: movieImg,
    color: "#fb7185",
    githubLink:
      "https://github.com/arnab-ghosh-2005/movie-recommendation-platform",
    liveLink: "https://semantic-scene.streamlit.app/",
  },
  {
    title: "Emotion Prediction — Deep Learning NLP App",
    description:
      "Deep learning application that classifies text into emotion categories using Bi-GRU and LSTM models in TensorFlow/Keras, with a tokenization and padding pipeline and a FastAPI backend for real-time predictions.",
    tech: ["TensorFlow/Keras", "Bi-GRU", "LSTM", "FastAPI", "Render"],
    image: emotionImg,
    color: "#fbbf24",
    githubLink: "https://github.com/arnab-ghosh-2005/emotion-Prediction",
  },
  {
    title: "Mental Health Score Predictor",
    description:
      "End-to-end ML application predicting mental health scores from lifestyle and behavioral data. Random Forest Regressor tuned with RandomizedSearchCV and served through a FastAPI + Pydantic REST API.",
    tech: ["Scikit-learn", "Random Forest", "FastAPI", "Pandas", "Render"],
    image: mentalImg,
    color: "#34d399",
    githubLink: "https://github.com/arnab-ghosh-2005/Mental-health-prediction",
  },
  {
    title: "Taxi Fare Analysis Dashboard",
    description:
      "Multi-page Power BI report on ride data: KPIs, revenue by vehicle type and payment method, cancellation patterns and ratings, with DAX measures such as Service Quality Score, Revenue Momentum and Customer Retention Rate.",
    tech: ["Power BI", "Power Query", "DAX", "Power BI Service"],
    image: taxiImg,
    color: "#facc15",
    githubLink: "https://github.com/arnab-ghosh-2005/Riding-Analysis-pbix",
  },
  {
    title: "Food Delivery Business Analytics Dashboard",
    description:
      "Power BI dashboard on a relational fact/dimension model with DAX measures for revenue, orders and AOV. Pages cover executive overview, customer analytics and restaurant performance, with a dynamic KPI selector and drill-through.",
    tech: ["Power BI", "Power Query", "DAX", "Excel"],
    image: foodImg,
    color: "#fb923c",
    githubLink: "https://github.com/arnab-ghosh-2005/restaurant-pbix",
  },
];
