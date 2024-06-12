import {
  BlockSection,
  BlockSectionContent,
  Heading,
  UnoderList,
} from "./cv.components";
import cvJson from "./cv.json";

const Experience = () => {
  return (
    <BlockSection className="experience">
      <Heading level={4} className="cvh4">
        {cvJson.experience.title}
      </Heading>

      <BlockSectionContent className="experience-content-wrapper">
        {cvJson.experience.content.map((item, index) => (
          <ExpericenceContent key={index} item={item} />
        ))}
      </BlockSectionContent>
    </BlockSection>
  );
};

const ExpericenceContent = ({ item }) => {
  return (
    <BlockSectionContent className="experience-content">
      <Heading level={3} className="cvh3">
        {item.company}
      </Heading>
      <Heading level={5} className="cvh5">
        {item.position}
      </Heading>
      <Heading level={5} className="cvh5">
        {item.location}|{item.duration}
      </Heading>
      <UnoderList list={item.work_responsibilities} />
    </BlockSectionContent>
  );
};

export default Experience;
