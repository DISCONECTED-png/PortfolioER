import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import post1 from "../assets/post1.png";
import pager from "../assets/pager.svg";
import Jobpic from "../assets/Jobshield.svg";
import kanpic from "../assets/Kanbee.svg";
import cryp from "../assets/cryptoquest.svg";
import football from "../assets/football.svg";
import suraj from "../assets/surajlog.svg";
import archflow from "../assets/archflow.png"

const Projects = () => {
  const projects = [
    {
      title: "ArchFlow",
      description: "AI-powered system architecture designer with interactive flow diagrams.",
      imgUrl: archflow,
      tags: ["React", "React Flow", "Node.js", "Express", "AI", "MongoDB"],
      url: "https://arch-flow-jet.vercel.app/",
    },
    {
      title: "JobShield",
      description: "Detects fraudulent job offers using AI and NLP.",
      imgUrl: Jobpic,
      tags: ["React", "NLP", "AI", "Firebase", "MongoDB"],
      url: "https://jobshield.onrender.com/",
    },
    {
      title: "Lost Pigeon",
      description: "MERN Stack Microblogging Platform",
      imgUrl: post1,
      isPhoto: true,
      tags: ["MongoDB", "Express", "React", "MongoDB"],
      url: "https://lostpigeon.onrender.com/",
    },
    {
      title: "Suraj Enterprises",
      description:
        "Created website for Suraj Enterprises India's Trusted Industrial Blower",
      imgUrl: suraj,
      tags: ["React","Express"],
      url: "https://www.surajenterprises.org/",
    },
    {
      title: "Kanbee",
      description:
        "Smart Taskboard with smart assign features and drag/drop using Socket.io",
      imgUrl: kanpic,
      tags: ["Socket.io", "MongoDB", "React", "Node"],
      url: "https://kanbee.onrender.com/",
    },
    {
      title: "Crypto_Quest",
      description: "React JS app for tracking cryptocurrencies.",
      imgUrl: cryp,
      tags: ["React", "REST API", "Charts"],
      url: "https://cryptoquest100.netlify.app/",
    },
    {
      title: "Pager - Chat App",
      description: "Real-time chat app with user authentication.",
      imgUrl: pager,
      tags: ["Flutter", "Firebase", "AI Bot"],
      url: "https://github.com/DISCONECTED-png/chatapp_flutter_with_aibot",
    },
    {
      title: "Final Whistle",
      description: "Track and manage sports games.",
      imgUrl: football,
      tags: ["Flutter", "BLoC", "REST API"],
      url: "https://github.com/DISCONECTED-png/Api_pl_table_bloc_flutter",
    },
  ];

  return (
    <section className="project" id="project">
      <div className="project-header">
        <span className="project-label">What I've Built</span>
        <h2>Projects</h2>
        <div className="project-accent"></div>
        <p className="subtitle">
          Explore my portfolio of projects showcasing a range of technologies and innovative solutions.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
