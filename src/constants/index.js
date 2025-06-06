import project1 from "../assets/projects/Project-1.jpg";
import project2 from "../assets/projects/Project-2.jpg";
import project3 from "../assets/projects/cluster.avif";
import project4 from "../assets/projects/llm.avif";
import project5 from "../assets/projects/map.avif";

export const HERO_CONTENT = `I am a passionate data scientist and machine learning researcher with a deep interest in developing accurate and impactful models. With 4 years of hands-on experience, I have sharpened my skills in analyzing complex datasets, implementing cutting-edge algorithms, and optimizing machine learning pipelines. My expertise spans statistical analysis, data preprocessing, and model deployment, allowing me to deliver robust and scalable solutions. I am driven by the potential of data to drive innovation and decision-making, and my goal is to leverage my expertise to push the boundaries of research and create solutions that solve real-world problems.`;

export const ABOUT_TEXT = `Passionate and highly skilled Data Scientist and Software Engineer with a solid background in Python, Java, and C++, and experience delivering AI-driven solutions across public and private sectors. Specializing in advanced data structures, machine learning, and full-cycle data pipelines—from collection and preprocessing to model development and deployment. Proven ability to work with large datasets, apply deep learning and statistical analysis, and drive predictive modeling projects. Adept in AGILE environments, with strong communication, leadership, and time management skills, committed to continuous learning and impactful, data-driven results.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Data Scientist And Machine Learning Researcher",
    company: "CSI PRO",
    description: `Led a team in researching and developing a machine learning model for the clasification of EEG patterns. Analyzed raw data, trained models to forecast and reduce noise, engineered features, and developed a complex, yet precise solution. Implemented a web application to visualize predictions and provide an inmersive view of the process.`,
    technologies: ["Python", "Scikit-Learn", "Polars", "StatsForecast", "Flask"],
  },
  {
    year: "Nov-2024 - Present",
    role: "Data Engineer",
    company: "Universidad de Sonora",
    description: `Developed an AI-powered academic advisor at the University of Sonora, leveraging historical academic data and clustering algorithms to recommend optimal courses based on student success likelihood. Designed and implemented scalable data pipelines and machine learning workflows to enable real-time recommendations, ensuring data privacy and compliance with institutional policies.`,
    technologies: ["Python", "Scikit-Learn", "Jenkins CI/CD", "Polars", "Seaborn"],
  },
  {
    year: "Feb-2025 - June-2025",
    role: "Data Analyst and Machine Learning Researcher ",
    company: "University of California Davis",
    description: `Contributed to a research initiative at the University of California, Davis, by designing and implementing a geographic clustering model to identify strategic locations for lithium battery recycling facilities for electric vehicles. The model integrated multi-dimensional datasets—population density, environmental impact, regulations, and industrial infrastructure—and was supported by a multi-criteria analysis that considered projected job creation, pollution reduction, socio-economic effects, and policy compliance to inform sustainable site selection.`,
    technologies: ["Python", "Plotly", "Follium", "ArcGIS", "PowerBI"],
  },
  {
    year: "Jun-2024 - Nov-2024",
    role: "Fullstack Developer",
    company: "Enroque Bienes Raíces",
    description: `Designed and developed a real estate platform for listing properties, managing user accounts, and facilitating transactions. Implemented features such as property search, user authentication and a secure monitoring process for both the realtor and the clients.`,
    technologies: ["Django", "PostgreSQL", "TailwindCSS", "Selenium"],
  },
];

export const PROJECTS = [
  {
    title: "EEG Pattern Classification",
    image: project1,
    description:
      "A precise and complex support vector machine for the classification of EEG patterns.",
    technologies: ["Python", "Scikit-Learn", "Polars", "StatsForecast", "Flask"],
  },
  {
    title: "Geospatial Site Planner",
    image: project5,
    description:
      "A machine learning system developed to determine optimal facility locations by analyzing geographic, environmental, and socio-economic data, supporting strategic planning and sustainable infrastructure development.",
    technologies: ["Python", "PowerBI", "Plotly", "Follium", "ArcGIS", "Kepler"],
  },
  {
    title: "AI Academic Mentor",
    image: project3,
    description:
      "AI-driven recommendation system for personalized learning guidance in academic environments.",
    technologies: ["Python", "Polars", "Seaborn", "Jenkins CI/CD"],
  },
  {
    title: "University LLM System",
    image: project4,
    description:
      "AI Assistant for Students – A domain-specific large language model designed to provide intelligent tutoring and academic support.",
    technologies: ["Python", "Hugging Face Transformers", "Ollama", "Distributed Computing", "On Demand for Supercomputing Clusters"],
  },
  {
    title: "Realtor Platform",
    image: project2,
    description:
      "A real estate platform built to streamline property listings, manage user accounts, and handle client-realtor transactions in a secure and efficient way.",
    technologies: ["Django", "PostgreSQL", "TailwindCSS", "Selenium", "Python", "JavaScript"],
  },
];

export const CONTACT = {
  address: " CSI PRO | 5J - 205, Universidad de Sonora",
  phoneNo: "7:00 AM - 4:00 PM",
  email: "kevinx.martinez.haro@gmail.com",
};
