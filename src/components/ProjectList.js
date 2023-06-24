import React from "react";
import ProjectItem from "./ProjectItem";
import { fireEvent } from "@testing-library/react";

function ProjectList({ projects }) {
  // console.log(projects);

  const project = projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;
