import React from "react";
import image from "../../Images/Img/Image.png";



function ProcesSection({header,content,img}) {
  return (
    <div className="procSection">
      <div className="proctext">
        <div className="Header">{header}</div>
        <div className="para">
          {content}
        </div>
      </div>
      <div className="procImage">
        <img src={img} alt="" className="processImage" />
      </div>
    </div>
  );
}

export default ProcesSection;
