import React from "react";
import { useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ima from "../../Images/Img/Image.png";
import rightarrw from "../../Images/Svg/Right.svg";
import "../Projects/Projects.css";
function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "-95%"]);

  return (
    <div className="outer-projects">
      <div className="headerproje">
        <div className="Header">Projects</div>
        <div className="projectSelector">
          <div className="seleccover">
            {/* <img src={ima} alt="" className="Selector" /> */}
            <Button className="Header selectTxt">UI/UX</Button>
            <Button className="Header selectTxt">Landing page</Button>
            <Button className="Header selectTxt">UI/UX</Button>
          </div>
        </div>
      </div>
      <div className="SwipSection" ref={targetRef}>
        <div className="PrjectBox">
          <>
            <div className="selecbuttonwrp">
              <div className="selecbuttocont">
                <div className="projectSelector">
                  <div className="seleccover">
                    {/* <img src={ima} alt="" className="Selector" /> */}
                    <Button className="selectTxt">UI/UX</Button>
                    <Button className="selectTxt">Landing page</Button>
                    <Button className="selectTxt">UI/UX</Button>
                  </div>
                </div>
              </div>
            </div>
          </>
          <motion.div className="motion" style={{ x }}>
            <img src={ima} alt="img" className="img-project" />
            <img src={ima} alt="img" className="img-project" />
            <img src={ima} alt="img" className="img-project" />
          </motion.div>
        </div>
      </div>
      <div className="linkContainer">
        <div className="IntrigtTop moreLink">Check more</div>
        <img src={rightarrw} alt="arrow" className="aright" />
      </div>
    </div>
  );
}

export default Projects;
