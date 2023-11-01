import React from "react";
import "../../Section/Achievements/Achievemnt.css";
function Achieve() {
  return (
    <div className="outer-achiev">
      <div className="Header">Achievements </div>
      <div className="ValueContainer">
        <div className="archValues">
          <div className="EmpzTxt">Clients</div>
          <div className="num">50+</div>
        </div>
        <div className="archValues">
          <div className="EmpzTxt">Countries</div>
          <div className="num">8+</div>
        </div>
        <div className="archValues">
          <div className="EmpzTxt">Projects</div>
          <div className="num">14+</div>
        </div>
        <div className="archValues">
          <div className="EmpzTxt">Users</div>
          <div className="num">20K</div>
        </div>
      </div>
      <div className="subtxt">Unleashing Excellence, We are innovating new things with passionte clients</div>
    </div>
  );
}

export default Achieve;
