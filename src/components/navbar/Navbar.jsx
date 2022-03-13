import React from "react";
import "./navbarstyle.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarwrapper">
        <div className="search">
          <input type="text" placeholder="Search here.." />
          <SearchRoundedIcon className="navbaricon searchicon" />
        </div>
        <div className="items">
          <div className="item removebg">
            <LanguageRoundedIcon className="navbaricon" />
            <span className="language"> English(US)</span>
          </div>
          <div className="item">
            <DarkModeRoundedIcon className="navbaricon" />
          </div>

          <div className="item">
            <NotificationsRoundedIcon className="navbaricon" />
            <span className="inboxmsg">+1</span>
          </div>
          <div className="item">
            <InboxRoundedIcon className="navbaricon" />
            <span className="inboxmsg">+5</span>
          </div>

          <div className="item">
            <FullscreenExitRoundedIcon className="navbaricon" />
          </div>

          <div className="item removebg">
            <img
              className="avatar"
              src="https://www.bkacontent.com/wp-content/uploads/2020/10/Depositphotos_336730000_l-2015.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
