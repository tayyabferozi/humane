import { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import "./home.scss";

const Home = () => {
  const [sideInActive, setSideInActive] = useState(true);

  const toggleSidenav = () => {
    setSideInActive((prevState) => !prevState);
  };

  return (
    <div className="home">
      <Sidebar sideInActive={sideInActive} toggleSidenav={toggleSidenav} />
      <div className="homeContainer">
        <Navbar sideInActive={sideInActive} toggleSidenav={toggleSidenav} />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="clients" />
          <Widget type="meetings" />
          <Widget type="revenue" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
