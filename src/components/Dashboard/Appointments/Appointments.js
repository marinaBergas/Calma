import React, { useEffect, useState } from "react";
import Logo from "../../../Assets/Images/cl1.jpg";
import "./Appointments.css";
import CallIcon from "@material-ui/icons/Call";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { AppointRequests } from "./AppointRequests";
import AllAppoints from "../All-Appointments/AllAppoints";
import { Disapprove } from "../../../redux/Request/Request.action";
import { useDispatch, useSelector } from "react-redux";
import { Accepted } from "../../../redux/Appointments/Appoint.action";

function Appointments() {
  let patient = useSelector(p=>p.request);
  let appoint = useSelector(p=>p.appoint);
  const dispatch=useDispatch();
  return (
    <>
      <div className="container px-1 py-5 mx-auto">
        <div className="row d-flex flex-column align-content-start mt-0">
          <h5 className="text-left">Appointments Requests</h5>
          <div className="card">
            <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
              <div className="left d-flex flex-column">
                <h5 className="mb-1">10:00 - 11:00 AM</h5>
                <p className="text-muted mb-1 sm-text">Monday, August 19</p>
              </div>
              <div className="right">
                <img src="https://i.imgur.com/Mcd6HIg.jpg" className="client-img" ></img>
              </div>
            </div>
            <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
              <div className="left d-flex flex-column">
                <h5 className="mb-1">Lindsey Johnson</h5>
                <p className="text-muted mb-1 sm-text">FIRST VISIT</p>
              </div>
              <div className="right d-flex">
                <div className="mr-2">
                  <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 40 }} />
                </div>
                <div className="d-flex justify-content-between mx-2 px-3 card-strip">
                  <div className="left d-flex flex-column">
                    <h5 className="mb-1">{item.patientName}</h5>
                    <p className="text-muted mb-1 sm-text">FIRST VISIT</p>
                  </div>
                  <div className="right d-flex">
                    <div className="mr-2">
                      <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 40 }} />
                    </div>
                    <div>
                      <CallIcon style={{ color: "blue", fontSize: 40 }} />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between mx-2 px-3 card-strip">
                  <div className="left d-flex">
                    <h5 className="mb-1 text-muted">Duration</h5>{" "}
                    <span className="time">{item.Duration}</span>
                  </div>
                  <div className="right d-flex">
                    <p className="mb-0 price">
                      <strong className="text-muted">$80.00</strong>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-around mx-auto px-3 py-3">
                  <button className="btn btn-danger p-2 mr-3 w-50"onClick= {()=>{
                    dispatch(Disapprove(item))
                  }}>
                    Disapprove
                  </button>
                  <button
                    className="btn btn-success w-50"
                    onClick={() => {
                      dispatch(Accepted(item));
                      dispatch(Disapprove(item))
                    }}
                  >
                    Approve
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
      <div className="col-lg-5 mx-auto col-md-8 col-sm-8 mb-sm-5">
      <AllAppoints appoint={appoint}/>
      </div>
        </div>
    </>
  );
}
export default Appointments;
