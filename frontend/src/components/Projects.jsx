import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import post1 from "../assets/post1.png";
import pager from "../assets/pager.png";

const Projects = () => {
  const projects = [
    {
      title: "Lost Pigeon",
      description: "MERN Stack Microblogging Platform",
      imgUrl: post1,
      url: "https://lostpigeon.onrender.com/",
    },
    {
      title: "Crypto_Quest",
      description: "React JS app for tracking cryptocurrencies.",
      imgUrl:
        "https://static-00.iconduck.com/assets.00/generic-cryptocurrency-icon-2048x2048-8uz1hlry.png",
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
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/017/171/328/non_2x/ball-for-soccer-football-icon-in-neomorphism-style-for-mobile-app-sport-equipment-button-for-mobile-application-or-web-on-white-background-vector.jpg",
      url: "https://github.com/DISCONECTED-png/Api_pl_table_bloc_flutter",
    },
    {
      title: "Weather App",
      description: "Fetch weather data from an API.",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/7477/7477790.png",
      url: "https://github.com/DISCONECTED-png/Weather-App",
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
