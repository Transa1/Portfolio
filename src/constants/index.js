import project1 from "../assets/projects/Project-1.jpg";
import project2 from "../assets/projects/Project-2.jpg";
import project3 from "../assets/projects/Project-3.jpg";
import project4 from "../assets/projects/Project-4.jpg";
import project5 from "../assets/projects/Project-5.jpg";

export const HERO_CONTENT = `I am a passionate data scientist and machine learning researcher with a deep interest in developing accurate and impactful models. With 4 years of hands-on experience, I have sharpened my skills in analyzing complex datasets, implementing cutting-edge algorithms, and optimizing machine learning pipelines. My expertise spans statistical analysis, data preprocessing, and model deployment, allowing me to deliver robust and scalable solutions. I am driven by the potential of data to drive innovation and decision-making, and my goal is to leverage my expertise to push the boundaries of research and create solutions that solve real-world problems.`;

export const ABOUT_TEXT = `I am a highly dedicated and professional software developer with a strong focus on Python, Java, and C++. With experience contributing to various projects for both public and private institutions, I specialize in advanced data structures and machine learning. My expertise lies in crafting complex, efficient solutions, backed by excellent time management, attention to detail, and a commitment to AGILE methodologies. I am also a strong team player with effective communication skills, empathy, and leadership qualities, consistently aiming to deliver impactful results.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Data Scientist And Machine Learning Researcher",
    company: "CSI PRO",
    description: `Led a team in researching and developing a machine learning model for the clasification of EEG patterns. Analyzed raw data, trained models to forecast and reduce noise, engineered features, and developed a complex, yet precise solution. Implemented a web application to visualize predictions and provide an inmersive view of the process.`,
    technologies: ["Python", "Scikit-Learn", "Polars", "StatsForecast", "Flask"],
  },
  {
    year: "Jun-2024 - Nov-2024",
    role: "Fullstack Developer",
    company: "Enroque Bienes Raíces",
    description: `Designed and developed a real estate platform for listing properties, managing user accounts, and facilitating transactions. Implemented features such as property search, user authentication and a secure monitoring process for both the realtor and the clients.`,
    technologies: ["Django", "PostgreSQL", "TailwindCSS", "Selenium"],
  },
  {
    year: "2021 - 2022",
    role: "Leetcode Tutor",
    company: "COBACH JGCC",
    description: `Helped in the education of more than 60 high school students in the area of software development and competitive programming. Managed to educate highly successful students who brought back home two state wide bronze medals and one nationwide silver medal.`,
    technologies: ["C++", "Python", "C#"],
  },
  {
    year: "2020 - 2021",
    role: "Embedded Systems Developer",
    company: "COBACH JGCC",
    description: `Desgined, programmed and implemented multiple systems on Arduino and Raspberry Pi for the educational purposes of more than 30 high school students, projects include miniature replica of a RC car controlled via remote app, humidity tracker and prosthetic arm.`,
    technologies: ["C++", "Arduino", "Raspberry Pi", "Python", "3D Printing", "CNC"],
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
    title: "Realtor Platform",
    image: project2,
    description:
      "A real estate platform built to streamline property listings, manage user accounts, and handle client-realtor transactions in a secure and efficient way.",
    technologies: ["Django", "PostgreSQL", "TailwindCSS", "Selenium", "Python", "JavaScript"],
  },
  {
    title: "Prosthetic Arm",
    image: project4,
    description:
      "A functioning prosthetic arm printed on PLA that detects nerve induced signals and executes the movement on it's limbs.",
    technologies: ["C++", "Arduino", "Fusion 360", "Proteus", "Python"],
  },
  {
    title: "RC Car",
    image: project5,
    description:
      "A minituare version of a Range Rover 4x4 powered by an arduino uno, controlled via a mobile app.",
    technologies: ["C++", "Arduino", "Fuison 360", "Proteus", "MIT App Inventor"],
  },
  {
    title: "Game Store Inventory Control",
    image: project3,
    description:
      "A Swing application that tracks sales and generates inventory reports for a mid-sized game store.",
    technologies: ["Java", "PostgreSQL", "Swing"],
  }
];

export const CONTACT = {
  address: " CSI PRO | 5J - 205, Universidad de Sonora",
  phoneNo: "7:00 AM - 4:00 PM",
  email: "kevinx.martinez.haro@gmail.com",
};
