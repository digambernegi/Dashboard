import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

import "./homestyle.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgetcontainer">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Feature />
          <Chart aspect={2/1} title={'Last 6 Months (Revenue)'}/>
        </div>

        <div className="tablecontainer">
          <div className="tableTitle">
            Latest Transactions
          </div>
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default Home;
