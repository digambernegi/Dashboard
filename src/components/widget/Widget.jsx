import React from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./widgetstyle.css";
import { TrendingUpRounded } from "@mui/icons-material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

export default function Widget({ type }) {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        numbers:'+25000',
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonRoundedIcon
            className="wicon"
            style={{color: "white" }}
          />
        ),
        status: "positive",
      };
      break;

    case "orders":
      data = {
        title: "ORDER",
        numbers:'-12000',
        isMoney: false,
        link: "see all order",
        icon: (
          <ShoppingCartRoundedIcon
            className="wicon"
            style={{color: "white" }}
          />
        ),
        status: "negative",
      };
      break;

    case "earning":
      data = {
        title: "EARNING",
        numbers:'456000',
        isMoney: TrendingUpRounded,
        link: "see net earning",
        icon: (
          <AttachMoneyRoundedIcon
            className="wicon"
            style={{color: "white" }}
          />
        ),
        status: "positive",
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        numbers:3489840,
        isMoney: true,
        link: "see total balance",
        icon: (
          <AccountBalanceWalletRoundedIcon
            className="wicon"
            style={{color: "white" }}
          />
        ),
        status: "positive",
      };
      break;

    default:
      return (
        <PersonRoundedIcon
          className="wicon"
          style={{ background: "#d3d3d333", color: "white" }}
        />
      );
  }

  return (
    <div className={`widget ${data.title}`}>
      <div className="left">
        <span className="widgetTitle">{data.title}</span>
        <span className={`widgetNumbers ${data.title}`}>
          {data.isMoney && "$"} {data.numbers}
        </span>
        <span className="widgetLink">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${data.status}`}>
          {data.status === "positive" ? (
            <ArrowDropUpRoundedIcon style={{color:'white', background:'#ffffff4d', borderRadius:'5px', padding:'5px'}}/> 
          ) : (
            <ArrowDropDownRoundedIcon style={{color:'white', background:'#ffffff4d', borderRadius:'5px', padding:'5px'}}/>
          )}
        </div>
        {data.icon}
      </div>
    </div>
  );
}
