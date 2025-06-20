import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                    src="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png"
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
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="React"
                  />
                  <h4>React JS</h4>
                </div>
                <div className="item">
                  <img
                    src="https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg"
                    alt="Mongo"
                  />
                  <h4>Mongodb</h4>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/?size=100&id=XPbkdNSTCUyN&format=png&color=52A3C8"
                    alt="Flutter"
                  />
                  <h4>Flutter</h4>
                </div>
                <div className="item">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
                    alt="Firebase"
                  />
                  <h4>Firebase</h4>
                </div>
                <div className="item">
                  <img
                    src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-designing-a-uiux-app-logo-sql-png-image_10229830.png"
                    alt="SQL"
                  />
                  <h4>SQL</h4>
                </div>
                <div className="item">
                  <img
                    src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/video-games/unreal-engine-qdh1c46xy8c1nedruo2v5.png/unreal-engine-xwo7bd8vu6fzpnkcifgtu.png?_a=DATAdtAAZAA0"
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
