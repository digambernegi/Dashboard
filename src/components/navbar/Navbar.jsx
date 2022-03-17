import React, { useContext } from "react";
import "./navbarstyle.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {
  const {dispatch}=useContext(DarkModeContext)

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
            <DarkModeRoundedIcon className="navbaricon" onClick={() => dispatch({type:'TOGGLE'})}/>
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
              src="https://i0.hippopx.com/photos/475/75/706/suit-sufi-blue-business-preview.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
