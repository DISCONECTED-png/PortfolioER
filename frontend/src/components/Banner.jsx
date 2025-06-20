import React, { useEffect, useState } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  const rotate = ['Web Developer', 'App Developer', 'Game Developer'];
  const pauseDuration = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % rotate.length;
      const fullText = rotate[currentIndex];

      if (isDeleting) {
        setText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(pauseDuration);
      }
    };

    const ticker = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <div id="home">
      <div className="banner">
      <div className="content">
        <span className="tagline">Welcome to My Portfolio</span>
        <h1>
          Hi, I am Anant, <span className="wrap">{text}</span>
        </h1>
        <p>
        A full-stack developer passionate about building scalable, user-focused web and mobile applications. With hands-on expertise in the MERN stack, Flutter, and Firebase, I’ve crafted projects like Lost Pigeon, Pager, and Crypto_Quest. I thrive on blending AI, real-time systems, and modern tech to deliver responsive, cutting-edge solutions.
        </p>
        <button onClick={() => console.log('Connect')}>
          Let's Connect <ArrowRightCircle />
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Banner;
