import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("TRANSMIT");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("ENCRYPTING...");
    try {
      let response = await fetch("https://portfolioer-backend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("TRANSMIT");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "[ SYS_200 ] TRANSMISSION SUCCESSFUL." });
      } else {
        setStatus({ success: false, message: "[ ERR_500 ] CONNECTION SEVERED. RETRY." });
      }
    } catch (error) {
      setButtonText("TRANSMIT");
      setStatus({ success: false, message: "[ ERR_NET ] UPLINK FAILED." });
    }
  };

  return (
    <section className="god-tier-contact-section" id="contact">
      {/* Background Cyber Grid */}
      <div className="contact-cyber-grid"></div>

      <div className="manga-container contact-split">
        
        {/* LEFT PANEL: TACTICAL INTEL */}
        <motion.div 
          className="contact-intel-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="section-header">
            <span className="skills-label">FINAL CHAPTER / 最終章</span>
            <h2 className="glitch-text" data-text="COMM_LINK">COMM_LINK</h2>
            <div className="katana-slash-static"></div>
          </div>
          
          <p className="manga-subtitle">
            Secure frequency established. Drop a message for collaborations, freelance missions, or just to sync up.
          </p>

          {/* Live Uplink Status */}
          <div className="uplink-status-box">
            <div className="signal-bars">
              <span className="bar b1"></span>
              <span className="bar b2"></span>
              <span className="bar b3"></span>
              <span className="bar b4"></span>
            </div>
            <span className="uplink-text blink-fast">UPLINK_SECURE</span>
          </div>

          <div className="intel-dossier-grid">
            <div className="dossier-row">
              <span className="dossier-label">[ TARGET_ID ]</span>
              <span className="dossier-value">ANANT MOTI <span className="jp-intel">アナント</span></span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">[ FREQ_NET ]</span>
              <span className="dossier-value highlight-red">anantmoti05@gmail.com</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">[ LOC_CORD ]</span>
              <span className="dossier-value">DELHI, INDIA</span>
            </div>
            <div className="dossier-row">
              <span className="dossier-label">[ PING_EST ]</span>
              <span className="dossier-value">&lt; 24 HOURS</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: TERMINAL INPUT MATRIX */}
        <motion.div 
          className="contact-terminal-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Tactical Corners */}
          <div className="ui-corner tl"></div>
          <div className="ui-corner tr"></div>
          <div className="ui-corner bl"></div>
          
          {/* Background Scanlines inside the form */}
          <div className="terminal-scanlines"></div>

          <form onSubmit={handleSubmit} className="god-tier-form">
            <div className="form-header">
              <span className="form-sys-title">MSG_TERMINAL <span className="blink-dot-small"></span></span>
              <span className="form-jp-title">通信</span>
            </div>

            <div className="form-grid-row">
              <div className="terminal-input-group">
                <input type="text" required value={formDetails.firstName} onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                <label>&gt; FIRST_NAME_</label>
                <div className="input-focus-border"></div>
              </div>
              <div className="terminal-input-group">
                <input type="text" required value={formDetails.lastName} onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                <label>&gt; LAST_NAME_</label>
                <div className="input-focus-border"></div>
              </div>
            </div>

            <div className="terminal-input-group">
              <input type="email" required value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)} />
              <label>&gt; EMAIL_ADDRESS_</label>
              <div className="input-focus-border"></div>
            </div>

            <div className="terminal-input-group">
              <input type="tel" required value={formDetails.phone} onChange={(e) => onFormUpdate("phone", e.target.value)} />
              <label>&gt; COMMS_NUMBER_</label>
              <div className="input-focus-border"></div>
            </div>

            <div className="terminal-input-group textarea-group">
              <textarea rows="4" required value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
              <label>&gt; ENCRYPTED_PAYLOAD_</label>
              <div className="input-focus-border"></div>
            </div>

            <button type="submit" className="god-tier-submit-btn">
              <span className="btn-text">{buttonText}</span>
              <span className="btn-jp">送信</span>
              <div className="btn-glitch-overlay"></div>
            </button>

            {status.message && (
              <div className={`terminal-output ${status.success === false ? "error-out" : "success-out"}`}>
                {status.message}
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
};