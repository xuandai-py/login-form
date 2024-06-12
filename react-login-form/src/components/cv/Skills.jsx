import {
  BlockSection,
  BlockSectionContent,
  Heading,
  UnoderList,
} from "./cv.components";
import cvJson from "./cv.json";
const Skills = () => {
  return (
    <BlockSection>
      <Heading level={4} className="cvh4">
        {cvJson.skills.title}
      </Heading>
      <BlockSectionContent className="skill-content-wrapper">
        {cvJson.skills.content &&
          cvJson.skills.content.map((item, index) => (
            <SkillContent key={index} item={item} />
          ))}
      </BlockSectionContent>
    </BlockSection>
  );
};

const SkillContent = ({ item }) => {
  return (
    <BlockSectionContent className="block-list skill-content">
      <Heading level={4} className="cvh4-normal">
        {item.title}
      </Heading>
      <UnoderList list={item.skill_list} />
    </BlockSectionContent>
  );
};
export default Skills;
