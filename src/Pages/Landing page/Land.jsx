import React from "react";
import { useState,useEffect,useRef } from "react";
import Achieve from "../../Section/Achievements/Achieve";
import Brief from "../../Section/Brief/Brief";
import Capabilities from "../../Section/Capabilities/Capabilities";
import CaseBanner from "../../Section/CaseStudy/CaseBanner";
import Clients from "../../Section/Clients/Clients";
import Feedback from "../../Section/Feedback/Feedback";
import Footer from "../../Section/Footer/Footer";
import LoadingScreen from "../../Section/LoadingScreen/LoadingScreen";
import IntoSec from "../../Section/Intro/IntoSec";
import Projects from "../../Section/Projects/Projects";
import Casestudy from "../Casestudy/Casestudy";
function Land() {
  const [theme, settheme] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    function setTheme(themeName) {
      settheme((document.documentElement.className = themeName));
    }
    setTheme("theme-dark");
    setTimeout(() => {
      setTimeout(() => setLoading(false), 3000);
    }, []);
    console.log(theme);
  }, [theme]);
  return (
    <div className="landwrapper">
         { loading ? <LoadingScreen />:
      <>
        <IntoSec />
        <Brief />
        <Achieve />
        {/* <Projects /> */}
        {/* <CaseBanner /> */}
        <Capabilities />
        {/* <Clients /> */}
        {/* <Feedback /> */}
      </>}
    </div>
  );
}

export default Land;
