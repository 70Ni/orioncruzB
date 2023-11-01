import React from "react";
import image from "../../Images/Img/Image.png";
import '../FloatProjects/floatproject.css'

function FloatProjects() {
  return (
    <div className="floatProjects">
      <div className="Header">Recent Works</div>
      <div className="floatProjectwrapper">
        <img src={image} alt="floatimge" className="floatimge" />
        <img src={image} alt="floatimge" className="floatimge" />
        <img src={image} alt="floatimge" className="floatimge" />
        <img src={image} alt="floatimge" className="floatimge" />
      </div>
    </div>
  );
}

export default FloatProjects;
