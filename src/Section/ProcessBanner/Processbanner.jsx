import React from "react";
import '../ProcessBanner/processBanner.css'
import arrow from '../../Images/Svg/Arrowdark.svg'
function Processbanner() {
  return (
    <div className="DesignprocBanner">
      <div className="Header">our Design process</div>
      <img src={arrow} alt="" className="linkarrow"/>
    </div>
  );
}

export default Processbanner;
