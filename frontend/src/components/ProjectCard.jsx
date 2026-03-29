import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description = "No description available", imgUrl, url, tags = [], isPhoto = false }) => {
  return (
    <div className="proj-card">
      <a href={url} target="_blank" rel="noopener noreferrer" className="proj-card-link">
      <div className={`proj-img-wrap ${isPhoto ? 'is-photo' : ''}`}>
          <img src={imgUrl || "https://via.placeholder.com/300"} alt={title} />
          <div className="proj-overlay">
            <div className="proj-overlay-content">
              <h4>{title}</h4>
              <p>{description}</p>
              {tags.length > 0 && (
                <div className="proj-tags">
                  {tags.map((tag, i) => <span className="proj-tag" key={i}>{tag}</span>)}
                </div>
              )}
              <span className="proj-cta">
                View Project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};