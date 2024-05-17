// src/components/ToggleDarkMode.js
import React, { useState } from 'react';
import './ToggleDarkMode.css';

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="toggle-dark-mode" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleDarkMode;
