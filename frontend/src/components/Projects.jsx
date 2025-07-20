import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import post1 from "../assets/post1.png";
import pager from "../assets/pager.svg";
import Jobpic from "../assets/Jobshield.svg"
import kanpic from "../assets/kanbee.svg"
import cryp from "../assets/cryptoquest.svg"
import football from "../assets/football.svg"
const Projects = () => {
  const projects = [
    {
      title: "JobShield",
      description: "Detects fraudulent job offers using AI and NLP.",
      imgUrl: Jobpic,
      url: "https://jobshield.onrender.com/",
    },
    {
      title: "Lost Pigeon",
      description: "MERN Stack Microblogging Platform",
      imgUrl: post1,
      url: "https://lostpigeon.onrender.com/",
    },
    {
      title: "Kanbee",
      description: "Kanbee - Smart Taskboard with smart assign features and drag and drop functionality using Socket.io",
      imgUrl: kanpic,
      url: "https://kanbee.onrender.com/",
    },
    {
      title: "Crypto_Quest",
      description: "React JS app for tracking cryptocurrencies.",
      imgUrl:cryp,
      url: "https://cryptoquest100.netlify.app/",
    },
    {
      title: "Pager - Chat App",
      description: "Real-time chat app with user authentication.",
      imgUrl: pager,
      url: "https://github.com/DISCONECTED-png/chatapp_flutter_with_aibot",
    },
    {
      title: "Final Whistle",
      description: "Track and manage sports games.",
      imgUrl:football,
      url: "https://github.com/DISCONECTED-png/Api_pl_table_bloc_flutter",
    },
  ];

  return (
    <div id="project">
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  >
                    <h2>Projects</h2>
                    <p>
                      Explore my portfolio of projects showcasing a range of
                      technologies and innovative solutions.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="justify-content-center align-items-center mb-4"
                      >
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row className="justify-content-center">
                            {projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
