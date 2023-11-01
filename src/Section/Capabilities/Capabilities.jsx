import React from "react";
import { Button } from "rsuite";
import image from "../../Images/Img/Image.png";
import 'rsuite/dist/rsuite.min.css';
import '../../custom-theme.less';
import "../Capabilities/Capability.css";

function Capabilities() {
  return (
    <div className="capabilites-outer">
      <div className="capbilitieswrapper">
        <div className="capLeft">
          <img src={image} alt="img" className="case-image capbox" />
          <div className="capimgtxt Header">Life is about discovering</div>
        </div>
        <div className="captagBox">
          <div className="Header dark-txt">Capabilities</div>
          <div className="captagCollection">
            <div className="captag">UI/UX</div>
            <div className="captag">Landing page</div>
            <div className="captag">Brand Strategy</div>
            <div className="captag">Illustration</div>
            <div className="captag">Webflow</div>
            <div className="captag">Wordpress</div>
            <div className="captag">Startup</div>
            <div className="captag">Web 3.0</div>
            <div className="captag">Figma</div>
       
          </div>
        </div>
      </div>
      <div className="categorywrapr">
        <div className="categBox">
          <div className="Header dark-txt">UI/UX</div>
          <div className="para dark-txt">
            nly five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
           <div className="buttoncontainte">
            <Button appearance="" active className="Catebutton">UI/UX</Button>
          </div>
        </div>
        <div className="categBox">
          <div className="Header dark-txt">Pitch Deck</div>
          <div className="para dark-txt">
            nly five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="buttoncontainte">
            <Button appearance="" active className="Catebutton"></Button>
          </div>
        </div>
        <div className="categBox">
          <div className="Header dark-txt">Web Development</div>
          <div className="para dark-txt">
            nly five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="buttoncontainte">
            <Button className="Catebutton">UI/UX</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
