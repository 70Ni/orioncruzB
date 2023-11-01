import React from "react";
import { useEffect } from "react";
import Processbanner from "../../../Section/ProcessBanner/Processbanner";
import "../../Cases/casepro.css";
import Logo from "../../../Images/Img/Deolittle.png";
import image from "../../../Images/Img/Image.png";
import CaseCard from "../../Casestudy/CaseCard";
import arrow from "../../../Images/Svg/Arrowdark.svg";
import casecard from '../../../json/casestudy.js'



let Header = "Xbox console";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../Images/Img/xbox/", false, /\.(png|jpe?g|svg)$/)
);

function CasePro() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  let arr = casecard.map((x) => x).filter((y) => y.Header !== Header);
  console.log(arr);
  return (
    <div className="case-outer">
      <div className="casewrapper">
        <div className="Caseintro">
          <div className="Logo">
            <img src={Logo} alt="logo" />
            <div className="para">Gaming Accessories</div>
          </div>
          <div className="subtxt caseintrotxt">
            Redesigning the xbox console for a new Inspirations and feel
          </div>
        </div>
        <div>
          <div className="caseimgwrpr">
            <div className="caseintImg" style={{ background: "#202807" }}>
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
              <div className="Header">Xbox console</div>
              <div className="subtxt">
                Xbox console was a concept design. The project was to share the
                features and experience of new xbox console from a different
                prospective.
              </div>
              <div className="linktoCase storyheader caseprolink">
                Check the workflow
                <img src={arrow} alt="" className="linkarrow" />
              </div>
            </div>
            <div className="casemeta">
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">Interaface Design</div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Industry</div>
                <div className="casepara">Game Design and accessories</div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Objectives</div>
                <div className="casepara">
                  The objective was to express the xbox material and feel to
                  user. We created the design based on the shape and behaviour
                  of the console. Also this need to express the game based
                  previews with out loosing the inspiration.
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
                  style={{ border: "5px solid #E9BA59" }}
                ></div>
              </div>
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px solid #6AD62D" }}
                ></div>
              </div>
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px solid #212907" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="glofontwrper">
            <div className="subtxt">Typrography</div>
            <div className="globdatawrper">
              <div className="globTypowrpr">
                <div className="font-prim" style={{ fontFamily: "Lexend" }}>
                  Aa
                </div>
                <div className="fontname">Lexend</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Imagery">
          <div className="singlecolumn">
            <img src={images[6]} alt="" className="tworatio" />
          </div>
          <div className="twocoloumlayout">
            <div className="item">
              <img src={images[2]} alt="" className="oneratio" />
            </div>{" "}
            <div className="item">
              <img src={images[3]} alt="" className="oneratio" />
            </div>
          </div>
          <div className="two1and2ratio">
            <div className="item flexone">
              <img src={images[4]} alt="" className="tworatio" />
            </div>{" "}
            <div className="item flextwo">
              <img src={images[5]} alt="" className="tworatio" />
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

export default CasePro;
