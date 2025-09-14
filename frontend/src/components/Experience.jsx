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
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <h3>
                {exp.role}{" "}
                <span
                  className={`status-badge ${
                    exp.status === "Ongoing" ? "ongoing" : "completed"
                  }`}
                >
                  {exp.status}
                </span>
              </h3>
              <h4>{exp.company}</h4>
              <p className="date">
                {exp.date} • {exp.type}
              </p>
            </div>
            <p className="description">{exp.description}</p>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
