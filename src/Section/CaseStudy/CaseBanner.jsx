import React from "react";
import "../CaseStudy/caseBanner.css";
import image from "../../Images/Img/Image.png";
import { Button } from "rsuite";
function CaseBanner() {
  return (
    <div className="caseStudy-overlay">
      <div className="case-studycard">
        <div className="caseBaLeft">
          <img src={image} alt="" className="casebanner" />
        </div>
        <div className="casebanright">
          <div className="Header dark-txt caseBaHeader">
            Get into some 
            Case studies
          </div>
          <Button className="casebanlink Catebutton Header   dark-txt">Check workflows</Button>
        </div>
      </div>
    </div>
  );
}

export default CaseBanner;
