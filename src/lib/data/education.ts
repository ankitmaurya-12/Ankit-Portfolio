export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  coursework: string[];
  achievements: string[];
}

export const education: Education = {
  id: "bachelor-cs",
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Smt. Indira Gandhi College of Engineering",
  location: "Ghansoli, Navi Mumbai",
  duration: "Expected Graduation: 2024",
  gpa: "GPA: 9.0/10.0",
  coursework: [
    "Advanced Web Development: In-depth study of front-end and back-end web technologies, including React, Node.js, and RESTful APIs",
    "Blockchain Technology: Comprehensive exploration of blockchain architecture, smart contracts, and decentralized applications",
    "Data Structures and Algorithms: Rigorous training in data organization, algorithm design, and problem-solving strategies",
    "Machine Learning: Introduction to machine learning concepts, including supervised and unsupervised learning, and hands-on projects using Python",
    "Cybersecurity: Study of network security, encryption methods, and ethical hacking techniques to protect against cyber threats"
  ],
  achievements: [
    "Academic Excellence: Maintained strong academic performance throughout the program",
    "Project Development: Successfully completed multiple technical projects including blockchain and web applications",
    "Technical Skills: Developed proficiency in multiple programming languages and frameworks",
    "Problem Solving: Enhanced analytical and problem-solving skills through coursework and projects",
    "Continuous Learning: Actively engaged in learning new technologies and staying updated with industry trends"
  ]
}; 