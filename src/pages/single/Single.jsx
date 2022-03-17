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
                src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg"
                alt="personimg"
              />
              <div className="persondetails">
                <h1 className="personTitle">Sophie Tracy</h1>
                <div className="detailsItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Sophie@gmail.com</span>
                  </div>

                  <div className="detailsItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+12163547758</span>
                  </div>

                  <div className="detailsItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">A-11, 5th floor, City Vista</span>
                  </div>

                  <div className="detailsItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">US</span>
                  </div>

                  <button className="block">Block</button>
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
