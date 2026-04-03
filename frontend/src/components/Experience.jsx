import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Dev Intern",
    jpRole: "ソフトウェア開発",
    company: "Throttle Theory",
    jpCompany: "スロットル・セオリー",
    date: "Aug 2025 – Sep 2025",
    type: "Remote",
    description:
      "Built the homepage for an F1 apparel platform in React + TypeScript with 12+ responsive modules and improved frontend performance by 20%.",
    tags: ["React", "TypeScript", "JavaScript"],
    status: "Completed",
    jpStatus: "完了",
  },
  {
    role: "Flutter & Web Intern",
    jpRole: "ウェブ開発者",
    company: "Duckcart",
    jpCompany: "ダックカート",
    date: "Mar 2025 – Jun 2025",
    type: "Remote",
    description:
      "Refined Firebase Auth reliability (+40% sessions) and delivered 5+ MERN features with secure REST APIs and dynamic UI.",
    tags: ["Flutter", "Firebase", "MERN"],
    status: "Completed",
    jpStatus: "完了",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="manga-experience-section">
      <div className="manga-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="skills-label">CHAPTER 3 / 第3章</span>
          <h2 className="glitch-text" data-text="QUEST LOG">QUEST LOG</h2>
          <div className="katana-slash-static"></div>
          <p className="manga-subtitle">
            Classified mission history and field experience. <span className="highlight-red">DECRYPTION COMPLETE.</span>
          </p>
        </div>

        <div className="manga-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              className="manga-timeline-item"
              key={index}
              initial={{ opacity: 0, x: -60, skewX: 5 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 120 
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Tactical Crosshair Marker */}
              <div className="timeline-marker">
                <div className="marker-crosshair">
                  <div className="marker-diamond"></div>
                </div>
                {/* The glowing data stream line */}
                <div className="marker-line">
                  <div className="marker-pulse"></div>
                </div>
              </div>

              {/* The Action Panel */}
              <div className="manga-exp-card">
                
                {/* Tactical UI Corners */}
                <div className="ui-corner tl"></div>
                <div className="ui-corner tr"></div>
                <div className="ui-corner bl"></div>
                <div className="ui-corner br"></div>

                {/* Background speed lines */}
                <div className="speed-lines-bg"></div>

                <div className="exp-content">
                  <div className="exp-header">
                    <div className="role-wrap">
                      <h3 className="glitch-hover" data-text={exp.role}>{exp.role}</h3>
                      <span className="jp-text">{exp.jpRole}</span>
                    </div>
                    <div className="status-stamp">
                      <span className="stamp-barcode">|||||||||</span>
                      {exp.status} <span className="jp-stamp">{exp.jpStatus}</span>
                    </div>
                  </div>

                  <div className="company-wrap">
                    <span className="company-name">{exp.company}</span>
                    <span className="company-jp">{exp.jpCompany}</span>
                  </div>

                  <div className="date-type-manga">
                    <span className="blink-dot-small"></span>
                    LOG_DATE: {exp.date} <span className="separator">|</span> MODE: {exp.type}_
                  </div>

                  <div className="mission-brief">
                    <span className="brief-label">MISSION_BRIEF:</span>
                    <p className="manga-description">{exp.description}</p>
                  </div>

                  <div className="manga-tags">
                    {exp.tags.map((tag, i) => (
                      <span className="manga-tag" key={i}>[{tag}]</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;