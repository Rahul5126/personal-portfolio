import React from "react";

import "./Footer.css";

import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">

      <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
            <span>rs9565589422@gmail.com</span>
            <div className="f-icons">
            <a href='https://www.instagram.com/the_rahul.singh/' alt=''>
              <Insta color="white" size={"3rem"} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100012672181783" alt=''>
              <Facebook color="white" size={"3rem"} />
              </a>
              <a href='https://github.com/Rahul5126?tab=repositories' alt=''>
              <Gitub color="white" size={"3rem"} />
              </a>
            </div>
        </div>
      
    </div>
  );
};

export default Footer;