import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description = "No description available",
  imgUrl,
  url,
}) => {
  const defaultImgUrl = "https://via.placeholder.com/300";

  return (
    <Col size={12} sm={6} md={4} className="project-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl || defaultImgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
