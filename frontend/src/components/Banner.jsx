import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showIntro, setShowIntro] = useState(true);
  
  // 3D Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rotate = ['Android Dev Lead', 'MERN Stack Ninja', 'Flutter Specialist'];
  const pauseDuration = 1000;

  // The NEW High-Speed Katana Timing
  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 1200); // Dramatically reduced from 2500ms to 1200ms
  }, []);

  // 3D Mouse Parallax Tracker
  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    setMousePos({ x, y });
  };

  // Typing Effect (with fixed heights)
  useEffect(() => {
    if (showIntro) return; // Wait for intro

    const handleTyping = () => {
      const currentIndex = loopNum % rotate.length;
      const fullText = rotate[currentIndex];

      if (isDeleting) {
        setText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(30); 
      } else {
        setText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(80); 
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
  }, [text, isDeleting, typingSpeed, loopNum, showIntro]);

  return (
    <div id="home" className="limit-break-banner" onMouseMove={handleMouseMove}>
      
      {/* ================= HIGH-SPEED KATANA SLASH INTRO ================= */}
      {showIntro && (
        <div className="katana-intro-container">
          
          {/* 1. The Blinding Strike Line */}
          <motion.div 
            className="intro-slash-line"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: [1, 1, 0] }}
            transition={{ duration: 0.15, ease: "easeOut" }} /* Lightning fast */
          ></motion.div>

          {/* 2. The Anime Flash (Behind the black halves) */}
          <motion.div 
            className="intro-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, delay: 0.15 }}
          ></motion.div>

          {/* 3. Top Half Splitting */}
          <motion.div 
            className="intro-half top-half"
            initial={{ y: 0, x: 0 }}
            animate={{ y: "-100vh", x: "-10vw" }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.85, 0, 0.15, 1] }} /* Aggressive curve */
          ></motion.div>

          {/* 3. Bottom Half Splitting */}
          <motion.div 
            className="intro-half bottom-half"
            initial={{ y: 0, x: 0 }}
            animate={{ y: "100vh", x: "10vw" }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.85, 0, 0.15, 1] }}
          ></motion.div>
        </div>
      )}

      {/* ================= BANNER CONTENT ================= */}
      <motion.div 
        className="blood-moon"
        animate={{ x: mousePos.x * -2, y: mousePos.y * -2 }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      ></motion.div>
      
      <div className="cyber-grid-bg"></div>
      
      <div className="embers">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <motion.div className="bg-kanji-left parallax-kanji" animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}>覚醒</motion.div>
      <motion.div className="bg-kanji-right parallax-kanji" animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}>無量空処</motion.div>
      
      <motion.div 
        className="manga-hero-panel"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
      >
        <div className="ui-bracket top-left"></div>
        <div className="ui-bracket bottom-right"></div>
        <div className="hud-scanner"></div>

        <div className="system-status">
          <span className="blink-dot"></span> SYSTEM.ONLINE // Lvl_99_AUTHORIZATION
        </div>

        <span className="tagline">VOL 1: IGNITION <span className="jp-small">第1章</span></span>
        
        {/* Title Lock to fix text jumping! */}
        <div className="title-lock">
          <h1 className="glitch-title" data-text="I'M ANANT MOTI.">
            I'M ANANT MOTI.<br />
            <span className="wrap glitch-role">{text}</span>
          </h1>
        </div>
        
        <div className="katana-slash-dynamic"></div>
        
        <p className="hero-description">
          CS Undergrad at IIIT Agartala & GDG Android Lead. Forging scalable architectures and high-performance applications with absolute precision. Mastering the convergence of Flutter, Kotlin, and the MERN stack.
        </p>
        
        <button
          className="tactical-strike-btn"
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="btn-glitch-text" data-text="INITIATE 実行">INITIATE 実行</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="0" y1="12" x2="24" y2="12" className="arrow-line" />
            <polyline points="14 5 24 12 14 19" className="arrow-head" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Banner;