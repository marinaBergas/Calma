import React from "react";
import "./AllAppoints.css";
import { AppointData } from "./AppointData";

import Logo from "../../../Assets/Images/cl1.jpg";

function AllAppoints() {
  return (
    <>
      <div className="container px-1 py-5 ml-5">
        <div className="row d-flex flex-column  align-content-start">
          <h5 className="text-left">Appointments</h5>
          <div className="page-content page-container" id="page-content">
            <div className="padding">
              <div className="row">
                <div className="col-sm-6">
                    {AppointData.map((item, index) => {
            return (
              <>
                  <div className="list list-row block">
                    <div className="list-item">
                      <div>
                        <span className="w-48 avatar gd-primary">
                          <img className="docImg" src={item.imagePath}></img>
                        </span>
                      </div>
                      <div className="d-flex flex-column align-content-start ">
                          <div className="text-left">
                        {item.patientName}
                        </div>
                        <div className="item-except text-muted text-sm h-1x">
                        Lorem ipsum is placeholder text commonly used in the graphic
                        </div>
                      </div>
                      <div className="no-wrap">
                        <div className="item-date text-muted text-sm d-none d-md-block">
                          21 July
                        </div>
                      </div>
                    </div>
                  </div>
                      </>
            );
          })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllAppoints;
