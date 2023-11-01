import React from "react";
import "../Footer/footer.css";
import arrow from "../../Images/Svg/Arrow.svg";
import { useEffect } from "react";
import icon from "../../Images/Svg/Check.svg";

function Footer() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  return (
    <div className="outer-footer">
      <div className="footerContent">
        <div className="footerHeader">
          Let's work <br />
          together
        </div>
        <div className="footercontent">
          <div className="logo">
            <div className="Header">Orioncruz</div>
            {/* <img    src="" alt="logo" className='csLogo' /> */}
            <div className="mission">
              {/* <div>
                <img src={icon} alt="icon" className="icon" />
              </div> */}
              empower businesses and organizations to thrive in the
              ever-evolving digital landscape
            </div>
          </div>
          <div className="socilalinks">
            <div className="subtxt">Follow</div>
            <div className="footerLinktxt subtxt">
              Behance
              <img src={arrow} alt="" className="arrw" />
            </div>
            <div className="footerLinktxt subtxt">
              Behance
              <img src={arrow} alt="" className="arrw" />
            </div>
            <div className="footerLinktxt subtxt">
              Behance
              <img src={arrow} alt="" className="arrw" />
            </div>
          </div>
        </div>
        <div className="footeredge">
          <div className="footeredgetxt">© Cstudio 2023</div>
          <div className="footeredgelinks">
            <div className="footlinks">About Us</div>
            <div className="footlinks">About Us</div>
            <div className="footlinks">About Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
