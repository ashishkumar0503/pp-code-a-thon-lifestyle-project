import React from "react";
import github from "../images/github.png";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>Made with ❤️ by Geek Navi {""}
            <a href="" target="_blank"/>
            {/* <span><img src={github} alt=""/></span> */}
            </p> 
        </div>
      </footer>
    </>
  );
};

export default Footer;
