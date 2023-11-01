import React from "react";
import NavComponent from "./NavComponent";
import "./NavComponent.css";

function Navigations() {
  return (
    <div className="Navwraper">
      <div className="navwrapper">
        <div className="logoCont">
          <div className="Header logotxt">Orioncrus</div>
        </div>
        <div className="navwrper">
          <NavComponent to="/" />
          <NavComponent to="/Case study" />
          <NavComponent to="/Process" />
          <NavComponent to="/Contact" />
        </div>
      </div>
      <div className="BorderBtm"></div>
    </div>
  );
}

export default Navigations;
