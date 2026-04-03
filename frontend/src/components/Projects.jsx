import React from "react";
import { ProjectCard } from "./ProjectCard";
import post1 from "../assets/post1.png";
import pager from "../assets/pager.svg";
import Jobpic from "../assets/Jobshield.svg";
import kanpic from "../assets/Kanbee.svg";
import cryp from "../assets/cryptoquest.svg";
import football from "../assets/football.svg";
import suraj from "../assets/surajlog.svg";
import archflow from "../assets/archflow.png";

const projects = [
  { title: "ArchFlow", jpTitle: "アーキフロー", description: "AI-powered system architecture designer with interactive flow diagrams.", imgUrl: archflow, tags: ["React", "React Flow", "Node", "AI"], url: "https://arch-flow-jet.vercel.app/" },
  { title: "JobShield", jpTitle: "偽造の盾", description: "Detects fraudulent job offers using AI and NLP.", imgUrl: Jobpic, tags: ["React", "NLP", "Firebase"], url: "https://jobshield.onrender.com/" },
  { title: "Lost Pigeon", jpTitle: "迷子の鳩", description: "MERN Stack Microblogging Platform", imgUrl: post1, isPhoto: true, tags: ["MERN", "Express", "React"], url: "https://lostpigeon.onrender.com/" },
  { title: "Suraj Ent.", jpTitle: "スージ企業", description: "Created website for Suraj Enterprises India's Trusted Industrial Blower", imgUrl: suraj, tags: ["React", "Express"], url: "https://www.surajenterprises.org/" },
  { title: "Kanbee", jpTitle: "カンビー", description: "Smart Taskboard with smart assign features and drag/drop using Socket.io", imgUrl: kanpic, tags: ["Socket.io", "React", "Node"], url: "https://kanbee.onrender.com/" },
  { title: "Crypto_Quest", jpTitle: "暗号の探求", description: "React JS app for tracking cryptocurrencies.", imgUrl: cryp, tags: ["React", "REST API", "Charts"], url: "https://cryptoquest100.netlify.app/" },
  { title: "Pager - Chat", jpTitle: "ページャー", description: "Real-time chat app with user authentication.", imgUrl: pager, tags: ["Flutter", "Firebase", "AI Bot"], url: "https://github.com/DISCONECTED-png/chatapp_flutter_with_aibot" },
  { title: "Final Whistle", jpTitle: "最後の笛", description: "Track and manage sports games.", imgUrl: football, tags: ["Flutter", "BLoC"], url: "https://github.com/DISCONECTED-png/Api_pl_table_bloc_flutter" },
];

const Projects = () => {
  return (
    <section className="manga-project-section" id="project">
      
      {/* Infinite Warning Tape Animation */}
      <div className="warning-tape-container">
        <div className="warning-tape">
          <span>⚠️ CAUTION // SECURE ARCHIVE // CLASS S THREAT LEVEL // RESTRICTED ACCESS ⚠️</span>
          <span>CAUTION // SECURE ARCHIVE // CLASS S THREAT LEVEL // RESTRICTED ACCESS ⚠️</span>
          <span>CAUTION // SECURE ARCHIVE // CLASS S THREAT LEVEL // RESTRICTED ACCESS ⚠️</span>
        </div>
      </div>

      <div className="bg-kanji-massive">領域</div>

      <div className="manga-container mt-shift">
        <div className="section-header">
          <span className="skills-label">CHAPTER 4 / 第4章</span>
          <h2 className="glitch-text" data-text="CLASSIFIED WORKS">CLASSIFIED WORKS</h2>
          <div className="katana-slash-static"></div>
        </div>
        
        <p className="manga-subtitle">
          A visual log of deployed architectures, digital constructs, and cross-platform applications. <span className="highlight-red">TARGETS LOCKED.</span>
        </p>

        <div className="manga-project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;