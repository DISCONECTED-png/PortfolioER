import React from "react";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, jpTitle, description, imgUrl, url, tags = [], isPhoto = false, index }) => {
  return (
    <motion.div 
      className="tactical-proj-card"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="proj-card-link">
        
        {/* Tactical Crosshair Corners */}
        <div className="ui-corner tl"></div>
        <div className="ui-corner tr"></div>
        <div className="ui-corner bl"></div>
        <div className="ui-corner br"></div>

        <div className={`proj-img-wrap ${isPhoto ? 'is-photo' : ''}`}>
          {/* Scanline / Halftone Overlay */}
          <div className="manga-scanlines"></div>
          
          <img src={imgUrl || "https://via.placeholder.com/300"} alt={title} />
          
          {/* Terminal Decryption Overlay */}
          <div className="proj-overlay">
            <div className="glitch-bar"></div>
            <div className="proj-overlay-content">
              
              <div className="proj-header-row">
                <h4>{title}</h4>
                <div className="jp-target-lock">
                  <span className="blink-dot"></span>
                  <span className="proj-jp">{jpTitle}</span>
                </div>
              </div>
              
              <div className="proj-divider"></div>
              
              <p>{description}</p>
              
              {tags.length > 0 && (
                <div className="proj-tags">
                  {tags.map((tag, i) => <span className="manga-tag-sm" key={i}>[{tag}]</span>)}
                </div>
              )}
              
              <span className="manga-cta">
                <span className="cta-text">ACCESS GRANTED</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                  <line x1="2" y1="12" x2="20" y2="12"/><polyline points="14 5 21 12 14 19"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};