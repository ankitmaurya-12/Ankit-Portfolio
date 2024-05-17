// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div>
        <h3>ChargeEV - An EV Charging Station Finder</h3>
        <p>University Project, September 2023 - Present</p>
        <ul>
          <li>Led the development of an EV charger locator application, integrating real-time data for accurate charger availability.</li>
          <li>Designed a user-friendly interface, resulting in a 30% increase in user engagement.</li>
          <li>Collaborated with a team of 4, improving project delivery time by 15%.</li>
          <li><a href="https://github.com/ankitmaurya-12/ChargeEV">GitHub Repository</a></li>
        </ul>
      </div>
      <div>
        <h3>Blockchain-backed Data Store</h3>
        <p>College Project, August 2022 - December 2022</p>
        <ul>
          <li>Built a Python-based blockchain data storage solution, improving data integrity and security.</li>
          <li>Contributed to a structured project report and presentation, receiving top grades.</li>
          <li>Developed the frontend, ensuring seamless user experience and team synergy.</li>
          <li><a href="https://github.com/ankitmaurya-12/Blockchain">GitHub Repository</a></li>
        </ul>
      </div>
      <div>
        <h3>InsideSIGCE College News Portal</h3>
        <p>College Project, January 2022 - May 2022</p>
        <ul>
          <li>Spearheaded the creation of a College News portal catering to Admins, Organizations, and Readers.</li>
          <li>Utilized MongoDB to optimize news data storage and retrieval.</li>
          <li>Enhanced portal functionality by integrating API-driven news aggregation.</li>
          <li><a href="https://github.com/ankitmaurya-12/InsideSIGCE">GitHub Repository</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
