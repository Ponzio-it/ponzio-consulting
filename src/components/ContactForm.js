// components/ContactForm.js
"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import styles from '../styles/Home.module.css';

export default function ContactForm() {
  // State for form fields and status message
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contattaci</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}/>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}  />

        <label htmlFor="message">Messaggio</label>
        <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>

        <button type="submit">Invia</button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </section>
  );
}
