export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  social: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
}

export const profile: Profile = {
  name: "Ankit Sanjay Maurya",
  title: "Backend Developer & Full Stack Engineer",
  email: "ankitmaurya291202@gmail.com",
  phone: "7977141889",
  location: "Thane, Maharashtra, India",
  bio: "Passionate backend developer with expertise in Node.js, Python, and Java. Specializing in building scalable APIs, database design, and cloud infrastructure. Experienced in blockchain technology and machine learning with a strong foundation in computer science.",
  avatar: "/images/ankit-profile.jpg",
  social: {
    linkedin: "https://linkedin.com/in/ankitmaurya12",
    github: "https://github.com/ankitmaurya-12",
  }
}; 