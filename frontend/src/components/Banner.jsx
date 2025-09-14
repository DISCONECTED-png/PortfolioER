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
        CS undergrad at IIIT Agartala with hands-on expertise in the MERN stack, Flutter, Firebase, 
            and NLP. Passionate about building scalable, user-focused apps and websites with clean 
            architecture and seamless user experiences.
        </p>
        <button
  onClick={() => {
    const section = document.getElementById('cont');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Let's Connect <ArrowRightCircle />
</button>

      </div>
    </div>
    </div>
    
  );
};

export default Banner;
