import React from "react";
import { useEffect } from "react";
import Processbanner from "../../../Section/ProcessBanner/Processbanner";
import "../../Cases/casepro.css";
import Logo from "../../../Images/Img/Deolittle.png";
import image from "../../../Images/Img/Image.png";
import CaseCard from "../../Casestudy/CaseCard";
import arrow from "../../../Images/Svg/Arrowdark.svg";
import casecard from "../../../json/casestudy.js";
console.log(casecard);

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../Images/Img/Cine/", false, /\.(png|jpe?g|svg)$/)
);

let Header = "About CineCio";

function Cinecio() {
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
            <div className="para">Movie Application</div>
          </div>
          <div className="subtxt caseintrotxt">
            Cine App is to share updates on Movie events and to Book a show.
          </div>
        </div>
        <div>
          <div className="caseimgwrpr">
            <div className="caseintImg">
              <img
                src={images[0]}
                alt="caseStudyImage"
                className="caseBannerimg"
              />
            </div>
          </div>
        </div>
        <div className="casedetails">
          <div className="casedatawrper">
            <div className="casedeta">
              <div className="Header">About CineCio</div>
              <div className="subtxt">
                Latest updates on the Movie Events and Theater experience
              </div>
              <div className="linktoCase storyheader caseprolink">
                Check the workflow
                <img src={arrow} alt="" className="linkarrow" />
              </div>
            </div>
            <div className="casemeta">
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">User Interface and research</div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Industry</div>
                <div className="casepara">Tech and Film</div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Objective</div>
                <div className="casepara">
                  The main objective of the project was to create a better
                  experience for the user who are trying to book a Movie. Also
                  to make better experience with the transactions and sharing
                  feedback
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
                  style={{ border: "5px Solid #EB4B2F" }}
                ></div>
                <div className="colorname"></div>
              </div>
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px Solid #461111" }}
                ></div>
                <div className="colorname"></div>
              </div>
              <div className="globTypowrpr">
                <div
                  className="color-circ"
                  style={{ border: "5px Solid #120206" }}
                ></div>
                <div className="colorname"></div>
              </div>
            </div>
          </div>
          <div className="glofontwrper">
            <div className="subtxt">Typrography</div>
            <div className="globdatawrper">
              <div className="globTypowrpr">
                <div className="font-prim" style={{ fontFamily: "Kanit" }}>
                  Aa
                </div>
                <div className="fontname">Kanit</div>
              </div>
              <div className="globTypowrpr">
                <div className="font-prim">Aa</div>
                <div className="fontname">Inter</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Imagery">
          <div className="singlecolumn">
            <img src={images[1]} alt="" className="tworatio" />
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
          {
            arr.map((x) => (
              <CaseCard
                id={x.Id}
                header={x.Header}
                content={x.Content}
                link={x.Link}
                image={x.Image}
              />
            ))
          }
        </div>
      </div>
      <Processbanner />
    </div>
  );
}

export default Cinecio;
