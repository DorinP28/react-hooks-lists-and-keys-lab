import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technology = technologies.map((tech, index) => {
    return <span key={index}>{tech}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      {technology}
      <div className="technologies"></div>
    </div>
  );
}

export default ProjectItem;
