import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p>Tüm hakları saklıdır | Burger King</p>
    </div>
  );
};

export default Footer;
