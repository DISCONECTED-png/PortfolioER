import React, { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [activelink, setactivelink] = useState("home");
  const [scrolled, setscrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);
  const activeRef = useRef(activelink);
  const sectionIds = ["home", "skills", "experience", "project", "contact"];

  useEffect(() => { activeRef.current = activelink; }, [activelink]);

  useEffect(() => {
    const updateActive = () => {
      const centerY = window.scrollY + window.innerHeight / 2;
      let minDist = Number.POSITIVE_INFINITY;
      let nearestId = activeRef.current;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const sectionCenter = top + rect.height / 2;
        const dist = Math.abs(centerY - sectionCenter);
        if (dist < minDist) { minDist = dist; nearestId = id; }
      });
      if (nearestId !== activeRef.current) {
        setactivelink(nearestId);
        activeRef.current = nearestId;
      }
    };
    const onScroll = () => {
      setscrolled(window.scrollY > 50);
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => { updateActive(); ticking.current = false; });
      }
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // eslint-disable-line

  function onupdateactivelink(id) {
    setactivelink(id);
    activeRef.current = id;
    setMenuOpen(false);
  }

  const links = ["home", "skills", "experience", "project", "contact"];
  const labels = { home: "Home", skills: "Skills", experience: "Experience", project: "Projects", contact: "Contact" };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#home" className="nav-logo" onClick={() => onupdateactivelink("home")}>
        <div className="nav-logo-mark">A</div>
        <span className="nav-logo-text">Anant Moti</span>
      </a>

      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <div className={`rightside ${menuOpen ? "open" : ""}`}>
        <ul>
          {links.map((id) => (
            <li key={id}>
              <a
    className={activelink === id ? "activenavbarlink" : "navbarlink"}
    onClick={() => onupdateactivelink(id)}
    href={`#${id}`}
  >
                {labels[id]}
              </a>
            </li>
          ))}
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anant-moti-465893287" target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="white"/>
                  <path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="white"/>
                  <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z" fill="white"/>
                </svg>
              </a>
              <a href="https://github.com/DISCONECTED-png" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="#ffffff" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;