import React from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import "./featurestyle.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRoundedIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="bottomchart">
          <CircularProgressbar
            className="progress"
            value={65}
            text={"65%"}
            strokeWidth={7}
          />
          <p className="subTitle">Total sales made today</p>
          <p className="desc">
            Previous transaction processing, last payments may not be included.
          </p>
          <p className="amount">$400</p>

          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <ArrowDropUpRoundedIcon fontSize="small" />
                <div className="resultAM">$12.15</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult negative">
                <ArrowDropDownRoundedIcon fontSize="small" />
                <div className="resultAM">$12.15</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <ArrowDropUpRoundedIcon fontSize="small" />
                <div className="resultAM">$12.15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
