import React, { useContext } from "react";
import "./sidebarstyle.css";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import {Link} from 'react-router-dom'
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {

  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{textDecoration:'none'}}>
        <img className="logo" src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/colors.svg" alt="" /></Link>
      </div>
      <div className="center">
        <ul>
        <Link to="/" style={{textDecoration:'none'}}><li><GridViewRoundedIcon className="sidebaricon" /><span>Home</span></li></Link>
          <Link to="/users" style={{textDecoration:'none'}}> <li><GroupRoundedIcon className="sidebaricon" /><span>Users</span></li></Link>
          <Link to="/products" style={{textDecoration:'none'}}> <li><LocalShippingIcon className="sidebaricon" /><span>Products</span></li></Link>
          <Link to="/" style={{textDecoration:'none'}}> <li><LocalMallRoundedIcon className="sidebaricon" /><span>Orders</span></li></Link>

          <Link to="/" style={{textDecoration:'none'}}> <li><CreditCardIcon className="sidebaricon" /><span>Credit</span></li></Link>
          <Link to="/" style={{textDecoration:'none'}}> <li><InsertChartIcon className="sidebaricon" /><span>Charts</span></li></Link>
          <Link to="/" style={{textDecoration:'none'}}> <li><SettingsSystemDaydreamOutlinedIcon className="sidebaricon" /><span>Cloud</span></li></Link>
          <div className="user">
          <Link to="/" style={{textDecoration:'none'}}> <li><SettingsApplicationsIcon className="sidebaricon" /><span>Setting</span></li></Link>
          <Link to="/" style={{textDecoration:'none'}}> <li><ExitToAppIcon className="sidebaricon" /><span>Logout</span></li></Link>
          </div>
        </ul>
      </div>
      <div className="sidebarBottom">
      <div className="mode" onClick={() => dispatch({type:'LIGHT'})}></div>
      <div className="mode" onClick={() => dispatch({type:'DARK'})}></div>

      </div>
    </div>
  );
};

export default Sidebar;
