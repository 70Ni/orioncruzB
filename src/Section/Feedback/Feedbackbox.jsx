import React from "react";
import "../Feedback/feedback.css";
import user from "../../Images/Img/user.png";
import star from "../../Images/Svg/Star.svg";

function Feedbackbox() {
  return (
    <div className="feedbackbox">
      <div className="feedhead">
        <div className="userwrap">
          <img src={user} alt="user" className="userimg" />
          <div className="feeduser">
            <div className="feedusrname">Sando Doe</div>
            <div className="feedusrind">CTO weber</div>
          </div>
        </div>
        <div className="rating">
          <img src={star} alt="" className="staractive" />
          <img src={star} alt="" className="staractive" />
          <img src={star} alt="" className="staractive" />
          <img src={star} alt="" className="starPassive" />
          <img src={star} alt="" className="starPassive" />
        </div>
      </div>
      <div className="feedbacktxt IntrigtTop">
        Evenly five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </div>
    </div>
  );
}

export default Feedbackbox;
