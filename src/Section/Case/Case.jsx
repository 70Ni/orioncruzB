import React from "react";
import "../Case/Case.css";
import Image from "../../Images/Img/Image.png";
import arrow from '../../Images/Svg/Arrowdark.svg'

function Case() {
  return (
    <div className="case-outer">
      <div className="Header">Introductions</div>
      <div className="case-outer-flex">
        <div className="caseLeft">
          <div className="aboutUs Header dark-txt"> About us</div>
          <div className="image">
            <img src={Image} className="case-image" alt="" />
          </div>
        </div>
        <div className="OurStoryBox">
          <div className="Header dark-txt">Our Story</div>
          <div className="storyBxcontent">
            <div className="storyheader">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="Para paraGrid">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised i
            </div>
            <div className="Quotes">
                <img src={arrow} alt="arrw" className="arrow" />
                <div className="para dark-txt bold">Inspired from <br/>the lines</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case;
