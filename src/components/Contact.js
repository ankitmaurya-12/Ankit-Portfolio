// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        
        <label>Email:</label>
        <input type="email" name="email" required />
        
        <label>Message:</label>
        <textarea name="message" rows="4" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
