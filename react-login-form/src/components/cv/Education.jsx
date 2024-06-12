import React from "react";
import { BlockSection, BlockSectionContent, Heading } from "./cv.components";
import cvJson from "./cv.json";

const Education = () => {
  return (
    <BlockSection>
      <Heading level={4} className="cvh4">
        {cvJson.education.title}
      </Heading>
      <BlockSectionContent className="skill-content-wrapper">
        {cvJson.education.content &&
          cvJson.education.content.map((item, index) => (
            <EducationContent key={index} item={item} />
          ))}
      </BlockSectionContent>
    </BlockSection>
  );
};

const EducationContent = ({ item }) => {
  return (
    <BlockSectionContent className="education-content">
      <Heading level={4} className="cvh4-normal">
        {item.degree}
      </Heading>
      <Heading level={4} className="cvh4-normal">
        {item.major}
      </Heading>
      <span className="education-school">{item.school}</span>
    </BlockSectionContent>
  );
};

export default Education;
