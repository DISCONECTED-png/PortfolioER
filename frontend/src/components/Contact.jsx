import { useState } from "react";
import React from "react";
import Contactimg from "./Contactimg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://portfolioer-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      {/* Left info panel */}
      <div className="contact-info">
        <span className="contact-label">Say Hello</span>
        <h2>Get In Touch</h2>
        <div className="contact-accent"></div>
        <p>Have a project in mind or just want to chat? Feel free to reach out — I'm always open to new opportunities and collaborations.</p>
  
        <div className="contact-details">
          <div className="contact-detail-row">
            <div className="contact-detail-icon">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"/></svg>
            </div>
            <div className="contact-detail-text">
              <span>Email</span>
              <span>anantmoti05@gmail.com</span>
            </div>
          </div>
          <div className="contact-detail-row">
            <div className="contact-detail-icon">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
            </div>
            <div className="contact-detail-text">
              <span>Location</span>
              <span>Delhi, India</span>
            </div>
          </div>
          <div className="contact-detail-row">
            <div className="contact-detail-icon">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div className="contact-detail-text">
              <span>Response Time</span>
              <span>Within 24 hours</span>
            </div>
          </div>
        </div>
  
        <div className="contact-socials">
          <a href="https://github.com/DISCONECTED-png" target="_blank" rel="noreferrer" className="contact-social-btn">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-btn">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" stroke="#ff8080" strokeWidth="1.8"/></svg>
          </a>
          
        </div>
      </div>
  
      {/* Right form */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
          </div>
          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
          <textarea rows="6" value={formDetails.message} placeholder="Tell me about your project or just say hi..." onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
          <button type="submit"><span>{buttonText}</span></button>
          {status.message && (
            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};
