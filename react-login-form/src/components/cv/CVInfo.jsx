import { BlockSection, Heading } from "./cv.components";
import cvJson from "./cv.json";
import CVContentSide from "./CVContentSide";

const CVInfo = () => {
  return (
    <BlockSection className="info-section">
      {/* <div className="side-left"> */}
        <CVContentSide className={"side-left"}>
        
        <Heading level={1} className={"cvh1"}>
          {cvJson.name}
        </Heading>
        <Heading level={2} className={"cvh2"}>
          {cvJson.role}
        </Heading>
      </CVContentSide>
      {/* </div> */}
      {/* <div className="side-right"> */}
        <CVContentSide className={"side-right"}>
        
        <div className="contact">
          {cvJson.contact.content &&
            Object.values(cvJson.contact.content).map((item, index) => (
              <span key={index} className="contact-item">
                {item}
              </span>
            ))}
        </div>
            </CVContentSide>
      {/* </div> */}
    </BlockSection>
  );
};

export default CVInfo;
