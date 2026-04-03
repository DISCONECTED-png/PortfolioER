import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const Nav = () => {
  const [activelink, setactivelink] = useState("home");
  const [scrolled, setscrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);
  const activeRef = useRef(activelink);
  const sectionIds = ["home", "skills", "experience", "project", "contact"];

  // Magnetic Mecha Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    const xPct = e.clientX / window.innerWidth - 0.5;
    const yPct = e.clientY / window.innerHeight - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  useEffect(() => { activeRef.current = activelink; }, [activelink]);

  // Updated Rock-Solid Scroll Tracking Logic
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    
    const onScroll = () => {
      setscrolled(window.scrollY > 50);
      
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          let currentSection = activeRef.current;
          
          // Better logic: Checks which section is at the top 1/3rd of the screen
          sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
              const sectionTop = section.offsetTop;
              // 200px offset threshold to switch links early enough
              if (window.scrollY >= sectionTop - 250) {
                currentSection = id;
              }
            }
          });

          if (currentSection !== activeRef.current) {
            setactivelink(currentSection);
            activeRef.current = currentSection;
          }
          ticking.current = false;
        });
      }
    };

    // Trigger once on load to set correct initial state
    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function onupdateactivelink(id) {
    setactivelink(id);
    activeRef.current = id;
    setMenuOpen(false);
  }

  const links = ["home", "skills", "experience", "project", "contact"];
  
  // Separated EN and JP for that dual-color manga aesthetic
  const labels = { 
    home: { en: "HOME", jp: "ホーム" }, 
    skills: { en: "SKILLS", jp: "能力" }, 
    experience: { en: "PATH", jp: "経歴" }, 
    project: { en: "ARCS", jp: "作品" }, 
    contact: { en: "LINK", jp: "連絡" } 
  };

  return (
    <>
      <motion.nav 
        className={scrolled ? "scrolled kinetic-mecha-nav" : "kinetic-mecha-nav"}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="nav-scan-line"></div>

        <div className="mecha-content-panel">
          
          <a href="#home" className="nav-logo-tactical" onClick={() => onupdateactivelink("home")} style={{ transform: "translateZ(20px)" }}>
            <div className="hanko-stamp">A</div>
            <div className="logo-text-stack">
              <span className="glitch-name" data-text="ANANT MOTI">ANANT MOTI</span>
              <span className="logo-sys">開発者 // SYS.OP</span>
            </div>
          </a>

          <button className={`tactical-hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>

          <div className="desktop-intel-group" style={{ transform: "translateZ(20px)" }}>
            <ul className="tactical-link-list">
              {links.map((id) => (
                <li key={id}>
                  <a
                    className={activelink === id ? "active-mecha-link" : "mecha-link"}
                    onClick={() => onupdateactivelink(id)}
                    href={`#${id}`}
                  >
                    <span className="bracket left">[</span>
                    <div className="link-dual-text">
                      <span className="link-jp">{labels[id].jp}</span>
                      <span className="link-en">{labels[id].en}</span>
                    </div>
                    <span className="bracket right">]</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="tactical-divider-vert"></div>
            
            <div className="mecha-socials">
              <a href="https://www.linkedin.com/in/anant-moti-465893287" target="_blank" rel="noreferrer" className="social-target">
                <div className="social-sniper-lock"></div>
                <div className="svg-wrapper">
                  {/* YOUR LINKEDIN SVG */}
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"/>
                    <path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z"/>
                    <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"/>
                  </svg>
                </div>
              </a>
              <a href="https://github.com/DISCONECTED-png" target="_blank" rel="noreferrer" className="social-target">
                <div className="social-sniper-lock"></div>
                <div className="svg-wrapper">
                  {/* YOUR GITHUB SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="currentColor" fill="none">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-tactical-overlay"
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.5, ease: [0.86, 0, 0.07, 1] }}
          >
            <div className="mobile-menu-grid"></div>
            
            <ul className="mobile-link-list">
              {links.map((id, index) => (
                <motion.li key={id} initial={{ x: -60 }} animate={{ x: 0 }} transition={{ delay: 0.2 + (index * 0.1) }}>
                  <a className={activelink === id ? "mobile-link-active" : "mobile-link"} onClick={() => onupdateactivelink(id)} href={`#${id}`}>
                    <span className="mobile-jp">{labels[id].jp}</span>
                    <span className="mobile-en">{labels[id].en}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <div className="mobile-footer-sys">SYSTEM.ONLINE // A.M. PORTFOLIO</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;