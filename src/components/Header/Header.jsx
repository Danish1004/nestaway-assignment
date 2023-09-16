import React from "react";
import nestaway from "../../images/nestaway.svg";
import "./Header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={nestaway} alt="header-logo" />
      <div className="header-center">
        <select className="inpt-box">
          <option value="Anywhere">Anywhere</option>
          <option value="bengaluru">Bengaluru</option>
          <option value="bangalore">Bangalore</option>
        </select>
      </div>
      <div className="header-right">
        <p>Become a Host</p>
        <ExpandMoreIcon />
        <LanguageIcon />
      </div>
    </div>
  );
};

export default Header;
