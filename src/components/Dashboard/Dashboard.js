import React from "react";
import Card from "./Card/Card";
import Sidebar from "./All-Appointments/Sidebar/Sidebar";
import Appointments from "./Appointments/Appointments";

import WebNavbar from "../Navbar/Navbar";
import { CardData } from "./Card/Card-data";
import AllAppoints from "./All-Appointments/AllAppoints";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="row">
          {CardData.map((item, index) => {
            return (
              <div className="col-lg-3 col-sm-6 ml-5 col-md-6 mx-auto">
                <div>
                  <Card
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    cName={item.cName}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="row ml-5">
          <div className="col-lg-6">
            <Appointments />
          </div>
          <div className="col-lg-5 ml-5">
            <AllAppoints />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
