export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  type: 'fulltime' | 'internship' | 'freelance';
}

export const experiences: Experience[] = [
  {
    id: "octanet-intern",
    title: "Web Development Intern",
    company: "Octanet Service Solution",
    location: "Bhubaneswar",
    duration: "August 2023 - September 2023",
    description: [
      "Developed responsive web applications using modern frontend technologies",
      "Collaborated with development team to implement new features and improvements",
      "Gained hands-on experience with both frontend and backend technologies"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
    achievements: [
      "Developed a captivating landing page, increasing site traffic by 20%",
      "Engineered a dynamic To-Do app using JavaScript, enhancing user engagement",
      "Recreated Netflix.com, showcasing coding finesse and attention to detail",
      "Gained proficiency in front-end and back-end technologies under exceptional mentorship"
    ],
    type: "internship"
  }
]; 