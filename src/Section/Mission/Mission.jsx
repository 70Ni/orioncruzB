import React from "react";
import { useEffect,useState } from "react";
import Icon from "../../Images/Img/freelancer.png";
import "../Mission/mission.css";
function Mission() {
  const [theme, settheme] = useState();

  useEffect(() => {
    function setTheme(themeName) {
      settheme((document.documentElement.className = themeName));
    }
    setTheme("theme-dark");
  }, [theme]);

  return (
    <div className="Missionwrapper">
      <div className="Missionhero">
        <div className="rightwraprM">
          <div className="para connPara">
            Our mission is simple – to transform your digital dreams into
            reality. We're here to provide tailored solutions that align with
            your unique goals and challenges. Whether you're looking to boost
            your online visibility, engage your audience, increase sales, or
            enhance user experience, we have the expertise and creativity to
            make it happen.
          </div>
          <div className="Header conneHeader">Our Way of approach</div>
        </div>
      </div>
      <div className="connect">
        <div className="chatbutton">
          <img src={Icon} className="iconfreelance" />
          <div className="subtxt chattxt">Chat</div>
          <div className="online"></div>
        </div>
        <div className="para">Let's get in touch</div>
      </div>
    </div>
  );
}

export default Mission;
