export interface Skill {
    category: string;
    skills: string[];
    proficiency: number; // 1-100
    icon?: string;
  }
  
  export const skills: Skill[] = [
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs", "GraphQL"],
      proficiency: 90,
      icon: "server"
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "OracleDB", "PostgreSQL", "Redis"],
      proficiency: 85,
      icon: "database"
    },
    {
      category: "Frontend Development",
      skills: ["React", "Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"],
      proficiency: 80,
      icon: "monitor"
    },
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C", "Solidity"],
      proficiency: 85,
      icon: "code"
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "Linux", "Docker", "Postman", "Arduino"],
      proficiency: 75,
      icon: "git"
    },
    {
      category: "Specialized Technologies",
      skills: ["Blockchain", "Cryptography", "Machine Learning", "IoT", "Encryption", "Networking"],
      proficiency: 70,
      icon: "brain"
    },
    {
      category: "Soft Skills",
      skills: ["Team Collaboration", "Clear Communication", "Problem Solving", "Adaptability", "Leadership"],
      proficiency: 90,
      icon: "communication"
    }
  ];