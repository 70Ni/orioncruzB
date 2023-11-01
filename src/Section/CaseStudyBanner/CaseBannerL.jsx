import React from "react";
import arrow from "../../Images/Svg/Arrowdark.svg";
import image from "../../Images/Img/Image.png";
import "../CaseStudyBanner/caseStudybanner.css";

function CaseBannerL() {
  return (
    <div className="CaseBannerLouter">
      <div className="caseBanlouter">
        <div className="CasebannerLeft">
          <div className="Header">Case Studies</div>
          <div className="subtxt">
            evenly five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
          <div className="Quotes">
            <img src={arrow} alt="arrw" className="arrow" />
            <div className="para dark-txt bold ">
              Inspired from <br />
              the lines
            </div>
          </div>
        </div>
        <div className="CasebannerRight">
          <img src={image} alt="caseBanner image" className="caseBannerImage" />
        </div>
      </div>
    </div>
  );
}

export default CaseBannerL;
