import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

import "./singlestyle.css";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singlecontainer">
        <Navbar />
        <div className="singletop">
          <div className="singleleft">
            <div className="edit">edit</div>
            <h1 className="singleTitle">Information</h1>
            <div className="singleItem">
              <img
                className="singleimg"
                src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg"
                alt="personimg"
              />
              <div className="persondetails">
                <h1 className="personTitle">Hogn won</h1>
                <div className="detailsItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Hongnwon@gmail.com:</span>
                  </div>

                  <div className="detailsItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">1111111111</span>
                  </div>

                  <div className="detailsItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">djsfjsdnkjs:</span>
                  </div>

                  <div className="detailsItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">US</span>
                  </div>
                </div>
            </div>
          </div>
        <div className="singlecenter">
          <Chart aspect={3/1} title={'User Spending (last 6 months)'}/>
          </div>
        </div>
        <div className="singlebottom">
          <List/>
          </div>
        
      </div>
    </div>
  );
}

export default Single;
