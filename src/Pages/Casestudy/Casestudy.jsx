import React from "react";
import { Button } from "rsuite";
import "../Casestudy/Casestudy.css";
import image from "../../Images/Img/Image.png";
import arrow from "../../Images/Svg/Arrowdark.svg";
import { useEffect } from "react";
import CaseBanner from "../../Section/CaseStudy/CaseBanner";
import Processbanner from "../../Section/ProcessBanner/Processbanner";
import FloatProjects from "../../Section/FloatProjects/FloatProjects";
import CaseCard from "./CaseCard";
import arr from "../../json/casestudy.js";

function Casestudy() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  // function setTheme(themeName) {
  //   localStorage.setItem("theme", "theme-dark");
  //   document.documentElement.className = "theme-dark";
  // }
  return (
    <div className="casecover">
      <div className="caseintrowrapper">
        <div className="IntroTXT">We Design things that make things work</div>
        <div className="caseint-right">
          <img src={image} alt="" className="caseImg" />
          <div className="subtxt">
            We Design things that make things workWe Design things that make
            things workWe Design things that make things{" "}
          </div>
        </div>
      </div>
      <div className="casestHeder">
        <div className="Header">Case Studies</div>
        <img src={arrow} alt="" className="arrcasest" />
      </div>
      <div className="casesWrapperbelow">
        {
          <CaseCard
            id={arr[0].Id}
            header={arr[0].Header}
            content={arr[0].Content}
            link={arr[0].Link}
            image={arr[0].Image}
          />
        }
      </div>
      <div className="processsecwrapper">
      {
          <CaseCard
            id={arr[1].Id}
            header={arr[1].Header}
            content={arr[1].Content}
            link={arr[1].Link}
            image={arr[1].Image}
          />
        }
        {
          <CaseCard
            id={arr[2].Id}
            header={arr[2].Header}
            content={arr[2].Content}
            link={arr[2].Link}
            image={arr[2].Image}
          />
        }
      </div>
      <div className="processsecwrapper">
      {
          <CaseCard
            id={arr[3].Id}
            header={arr[3].Header}
            content={arr[3].Content}
            link={arr[3].Link}
            image={arr[3].Image}
          />
        }
        {
          <CaseCard
            id={arr[0].Id}
            header={arr[0].Header}
            content={arr[0].Content}
            link={arr[0].Link}
            image={arr[0].Image}
          />
        }
      </div>
      {/* <Processbanner /> */}
      {/* <FloatProjects /> */}
    </div>
  );
}

export default Casestudy;
