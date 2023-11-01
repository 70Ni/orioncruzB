import React from "react";
import { useEffect } from "react";
import Processbanner from "../../../Section/ProcessBanner/Processbanner";
import "../../Cases/casepro.css";
import Logo from "../../../Images/Img/Deolittle.png";
import image from "../../../Images/Img/Image.png";
import CaseCard from "../../Casestudy/CaseCard";
import arrow from "../../../Images/Svg/Arrowdark.svg";
import casecard from "../../../json/casestudy.js";


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../Images/Img/Success/", false, /\.(png|jpe?g|svg)$/)
);
console.log(images);
let Header = "Success.ai";

function Success() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  let arr = casecard.map((x) => x).filter((y) => y.Header !== Header);


  return (
    <div className="case-outer">
      <div className="casewrapper">
        <div className="Caseintro">
          <div className="Logo">
            <img src={Logo} alt="logo" />
            <div className="para">Todo Applicaton</div>
          </div>
          <div className="subtxt caseintrotxt">
            We’re the Intercom of the customer success industry
          </div>
        </div>
        <div>
          <div className="caseimgwrpr">
            <div className="caseintImg" style={{ background: "#1F2025" }}>
              <img
                src={images[5]}
                alt="caseStudyImage"
                className="caseBannerimg"
              />
            </div>
          </div>
        </div>
        <div className="casedetails">
          <div className="casedatawrper">
            <div className="casedeta">
              <div className="Header">Success.ai</div>
              <div className="subtxt">
                Success.ai is a conversational bot that enables companies to
                scale customer success with technology not people
              </div>
              <div className="linktoCase storyheader caseprolink">
                Check the workflow
                <img src={arrow} alt="" className="linkarrow" />
              </div>
            </div>
            <div className="casemeta">
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">Pitch Deck Presentation</div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Industry</div>
                <div className="casepara">Intercom, Tech, ai</div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">
                  A simple to implement conversational success
                  assistant.Automates low-value, high-effort activities so that
                  your people can focus on customer outcomes and business value.
                  Captures business value goals so that sales and customer
                  success teams are aligned
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Globalgidelinewrapper">
          <div className="Header guideHeader">Guideline</div>
          <div className="globcolors">
            <div className="subtxt">Color Theory</div>
            <div className="globdatawrper">
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px solid #8CDDF8" }}
                ></div>
              </div>
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px solid #4B54D1" }}
                ></div>
              </div>
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px solid #1C1D22" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="glofontwrper">
            <div className="subtxt">Typrography</div>
            <div className="globdatawrper">
              <div className="globTypowrpr">
                <div className="font-prim" style={{ fontFamily: "Poppins" }}>
                  Aa
                </div>
                <div className="fontname">Poppins</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Imagery">
          <div className="singlecolumn">
            <img src={images[0]} alt="" className="tworatio" />
          </div>
          <div className="twocoloumlayout">
            <div className="item">
              <img src={images[1]} alt="" className="oneratio" />
            </div>{" "}
            <div className="item">
              <img src={images[2]} alt="" className="oneratio" />
            </div>
          </div>
          <div className="two1and2ratio">
            <div className="item flexone">
              <img src={images[3]} alt="" className="tworatio" />
            </div>{" "}
            <div className="item flextwo">
              <img src={images[4]} alt="" className="tworatio" />
            </div>
          </div>
        </div>

        <div className="Header">Other Case Studies</div>
        <div className="processsecwrapper">
          {arr.map((x) => (
            <CaseCard
              id={x.Id}
              header={x.Header}
              content={x.Content}
              link={x.Link}
              image={x.Image}
            />
          ))}
        </div>
      </div>
      <Processbanner />
    </div>
  );
}

export default Success;
