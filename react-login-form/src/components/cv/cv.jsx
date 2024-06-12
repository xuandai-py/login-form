import CVContent from "./CVContent";
import CVContentSide from "./CVContentSide";
import CVInfo from "./CVInfo";
import Education from "./Education";
import Expericence from "./Experience";
import Other from "./Other";
import Projects from "./Projects";
import Skills from "./Skills";
import "./cv.css";

const Cv = () => {
  return (
    <main className="cv-wrapper">
      <CVInfo />
      <CVContent>
        <CVContentSide className={"side-left"}>
          <Projects />
          <Expericence />
        </CVContentSide>
        <CVContentSide className={"side-right"}>
          <Skills />
          <Education />
          <Other />
        </CVContentSide>
      </CVContent>
    </main>
  );
};

export default Cv;
