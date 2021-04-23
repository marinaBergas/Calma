import React from "react";
import "./AllAppoints.css";
export const AllAppoints = (props) =>{
  console.log(props.appoint,"props")
  return (
    <>
      <div className="row d-flex flex-column align-content-center">
        <h5 className="text-left mt-sm-3 mb-sm-4 mb-xs-4 my-5 ">Appointments</h5>
        <div className="page-content page-container" id="page-content">
    
          {props.appoint.map((item, index) => {
            return (
              <>
                <div key={index} className="list list-row allAppoint_card">
                  <div className="list-item d-flex justify-content-around">
                    <div className="patientInfo d-flex align-items-center">
                      <img
                        className="patientImg mr-3"
                        src={item.patient.imagePath}
                      ></img>
                      <div className="d-flex flex-column align-content-start ">
                        <div className="text-left">{item.patient.patientName}</div>
                        <div className="item-except text-muted text-sm h-1x">
                          Lorem ipsum is placeholder text
                        </div>
                      </div>
                    </div>
                    <div className="no-wrap">
                      <div className="item-date text-muted text-sm d-md-block">
                      {item.patient.AppDate}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllAppoints;
