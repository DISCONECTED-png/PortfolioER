import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import nodeimg from "../assets/nodejs.svg"
import reactimg from "../assets/react.svg"
import mongoimg from "../assets/mongodb.svg"
import flutterimg from "../assets/flutter.svg"
import firebaseimg from "../assets/firebase.svg"
import sql from "../assets/sql.svg"
import unreal from "../assets/unreal.svg"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="skills" className="skills-section">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
              Equipped with a diverse skill set spanning frontend and backend development, database management, and cutting-edge technologies, I craft seamless and innovative digital experiences tailored to user needs.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src={nodeimg}
                    alt="Node JS"
                  />
                  <h4>Node JS</h4>
                </div>
                <div className="item">
                  <img
                    src="https://www.manektech.com/storage/developer/1646733543.webp"
                    alt="Web Development"
                  />
                  <h4>Express JS</h4>
                </div>
                <div className="item">
                  <img
                    src={reactimg}
                    alt="React"
                  />
                  <h4>React JS</h4>
                </div>
                <div className="item">
                  <img
                    src={mongoimg}
                    alt="Mongo"
                  />
                  <h4>Mongodb</h4>
                </div>
                <div className="item">
                  <img
                    src={flutterimg}
                    alt="Flutter"
                  />
                  <h4>Flutter</h4>
                </div>
                <div className="item">
                  <img
                    src={firebaseimg}
                    alt="Firebase"
                  />
                  <h4>Firebase</h4>
                </div>
                <div className="item">
                  <img
                    src={sql}
                    alt="SQL"
                  />
                  <h4>SQL</h4>
                </div>
                <div className="item">
                  <img
                    src={unreal}
                    alt="Unreal"
                  />
                  <h4>Unreal</h4>
                </div>
                
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
