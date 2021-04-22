import React, { useState } from "react";
import Card from "./Card/Card";
import Appointments from "./Appointments/Appointments";
import { CardData } from "./Card/Card-data";
import AllAppoints from "./All-Appointments/AllAppoints";
import SideBar from "./Sidebartwo/SideBar";
import Background from "./Sidebartwo/Background";
import Navbar from "./Sidebartwo/Navbar";

function Dashboard() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className="blog_background">
      <div className="container ">
        <div className="row">
          <Background setIsOpened={setIsOpened} show={isOpened} />
          <Navbar toggleMenu={setIsOpened} />
          <SideBar show={isOpened} setIsOpened={setIsOpened} />
        </div>
        <div className="row text-center mx-auto mt-5 align-items-md-center justify-content-md-center">
          {CardData.map((item, index) => {
            return (
              <div className="col-lg-3 mt-5 col-md-6 mx-auto text-center col-sm-6 ">
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
        
            <Appointments />
          
      </div>
    <div/>
    </div>
  );
}

export default Dashboard;
