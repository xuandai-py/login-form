import { BlockSection, BlockSectionContent, Heading, UnoderList } from "./cv.components";
import cvJson from "./cv.json";

const Other = () => {
  return (
    <BlockSection>
      <Heading level={4} className="cvh4">
        {cvJson.other.title}
      </Heading>
      <BlockSectionContent className="block-list">
        <UnoderList list={cvJson.other.content} />
      </BlockSectionContent>
    </BlockSection>
  );
};

export default Other;
