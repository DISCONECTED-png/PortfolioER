import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={4} className="text-center text-sm-start">
            <h4>About</h4>
            <p>
            Crafting code, shaping ideas, and building digital wonders. Welcome to my world—where creativity and technology collide.
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/anant-moti-465893287"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="white" />
                <path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="white" />
                <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="white" />
              </svg></a>
              <a href="https://github.com/DISCONECTED-png"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
                <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg></a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <h4>Contact</h4>
            <p>Email: anantmoti05@gmail.com</p>
            <p>Mob no: 8447082847</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}