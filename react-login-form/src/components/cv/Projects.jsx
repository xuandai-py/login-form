import React from "react";
import { BlockSection, BlockSectionContent, Heading } from "./cv.components";
import cvJson from "./cv.json";

const Projects = () => {
  return (
    <BlockSection className={"projects"}>
      <Heading level={4} className="cvh4">
        {cvJson.projects.title}
      </Heading>
      <BlockSectionContent className="project-content-wrapper">
        {cvJson.projects.content &&
          cvJson.projects.content.map((item, index) => (
            <ProjectContent key={index} item={item} />
          ))}
      </BlockSectionContent>
    </BlockSection>
  );
};

const ProjectContent = ({ item }) => {
  return (
    <BlockSectionContent className="project-content">
      <div className="project-content-heading">
        <Heading level={3} className="cvh3">
          {item.project_title}
        </Heading>
        <Heading level={3} className="cvh3">
          {item.project_url}
        </Heading>
      </div>

      <p>{item.project_description}</p>
    </BlockSectionContent>
  );
};

export default Projects;
