import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Throttle Theory",
    date: "Aug 2025 – Sep 2025",
    type: "Remote",
    description:
      "Built the homepage for an F1 apparel platform in React + TypeScript with 12+ responsive modules and improved frontend performance by 20%.",
    tags: ["React", "TypeScript", "JavaScript"],
    status: "Completed",
  },
  {
    role: "Flutter & Web Development Intern",
    company: "Duckcart",
    date: "Mar 2025 – Jun 2025",
    type: "Remote",
    description:
      "Refined Firebase Auth reliability (+40% sessions) and delivered 5+ MERN features with secure REST APIs and dynamic UI.",
    tags: ["Flutter", "Firebase", "MERN"],
    status: "Completed",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <span className="experience-label">Where I've Worked</span>
      <h2 className="section-title">Experience</h2>
      <div className="section-accent"></div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-item"
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot">
              <div className={`dot-ring ${exp.status === 'Ongoing' ? 'pulse' : ''}`}></div>
            </div>
            <div className="experience-card">
              <div className="card-top">
                <h3>{exp.role}</h3>
                <span className={`status-badge ${exp.status === 'Ongoing' ? 'ongoing' : 'completed'}`}>
                  {exp.status}
                </span>
              </div>
              <div className="company-row">
                <div className="company-avatar">
                  {exp.company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <span className="company-name">{exp.company}</span>
              </div>
              <div className="date-type">
                {exp.date} <span>{exp.type}</span>
              </div>
              <p className="description">{exp.description}</p>
              <div className="tags">
                {exp.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
