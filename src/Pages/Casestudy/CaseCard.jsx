import React from "react";
import "../Casestudy/Casestudy.css";
import arrow from "../../Images/Svg/Arrowdark.svg";
import image from "../../Images/Img/Image.png";
import Img from '../../Images/Img/xbox/Xb01.png'
import { Link } from "react-router-dom";

function CaseCard({id,header,content,link,image}) {
  return (
    <div>
      <div className="casewrapper" id={id}>
        <div className="img">
          <img src={image} className="caseimage" alt="case-image" />
        </div>
        <div className="Header">{header}</div>
        <div className="para casePara">
          {content}
        </div>
        <div className="linktoCase storyheader">
          
          <a href={link}>Check the workflow</a>
          <img src={arrow} alt="arrow" className="linkarrow" />
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
