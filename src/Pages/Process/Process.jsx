import React from "react";
import { useEffect } from "react";
import image from "../../Images/Img/Image.png";
import CaseBannerL from "../../Section/CaseStudyBanner/CaseBannerL";
import CaseCard from "../Casestudy/CaseCard";
import "../Process/process.css";
import ProcesSection from "./ProcesSection";
import data from '../../json/Process.js'

function Process() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  return (
    <div className="Process-overlay">
      <div className="processwrapper">
        <div class="img">
          <img src={image} class="proceshedrImg" alt="case-image" />
        </div>
        <div className="IntroTXT">Our Design Process</div>
        {
          data.map((x)=><ProcesSection header={x.Header} content={x.Content} img={x.Image} />)
        }
      </div>
      {/* <CaseBannerL /> */}
    </div>
  );
}

export default Process;
