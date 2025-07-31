export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: 'backend' | 'fullstack' | 'frontend' | 'blockchain' | 'ai';
  featured: boolean;
  duration: string;
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: "chargeev",
    title: "ChargeEV - An EV Charging Station Finder",
    description: "A comprehensive EV charger locator application with real-time data integration for accurate charger availability and user-friendly interface.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    githubUrl: "https://github.com/ankitmaurya-12/ChargeEV",
    image: "/images/projects/chargeev.jpg",
    category: "fullstack",
    featured: true,
    duration: "September 2023 - Present",
    achievements: [
      "Led development of EV charger locator application",
      "Integrated real-time data for accurate charger availability",
      "Designed user-friendly interface with 30% increase in user engagement",
      "Collaborated with team of 4, improving delivery time by 15%"
    ]
  },
  {
    id: "blockchain-store",
    title: "Blockchain-backed Data Store",
    description: "A Python-based blockchain data storage solution focusing on data integrity and security with comprehensive project documentation.",
    technologies: ["Python", "Blockchain", "Cryptography", "Data Structures"],
    githubUrl: "https://github.com/ankitmaurya-12/Blockchain",
    image: "/images/projects/blockchain.jpg",
    category: "blockchain",
    featured: true,
    duration: "August 2022 - December 2022",
    achievements: [
      "Built Python-based blockchain data storage solution",
      "Improved data integrity and security protocols",
      "Contributed to structured project report and presentation",
      "Received top grades for comprehensive implementation"
    ]
  },
  {
    id: "insidesigce",
    title: "InsideSIGCE College News Portal",
    description: "A comprehensive college news portal with role-based access for Admins, Organizations, and Readers with MongoDB integration.",
    technologies: ["MongoDB", "Node.js", "Express", "API Integration", "Role-based Access"],
    githubUrl: "https://github.com/ankitmaurya-12/InsideSIGCE",
    image: "/images/projects/news-portal.jpg",
    category: "backend",
    featured: false,
    duration: "January 2022 - May 2022",
    achievements: [
      "Spearheaded creation of College News portal",
      "Implemented role-based access for Admins, Organizations, and Readers",
      "Utilized MongoDB for optimized news data storage and retrieval",
      "Enhanced portal functionality with API-driven news aggregation"
    ]
  }
]; 