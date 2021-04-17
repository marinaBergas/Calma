import React from "react";
import Logo from "../../../Assets/Images/cl1.jpg";
import "./Appointments.css";
import CallIcon from "@material-ui/icons/Call";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
function Appointments() {
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
                <div>
                  <CallIcon style={{ color: "blue", fontSize: 40 }} />
                </div>
              </div>
            </div>
            <div className="row justify-content-between mx-2 px-3 card-strip">
              <div className="left d-flex">
                <h5 className="mb-1 text-muted">Duration</h5>{" "}
                <span className="time">1 hr</span>
              </div>
              <div className="right d-flex">
                <p className="mb-0 price">
                  <strong className="text-muted">$80.00</strong>
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-around mx-auto px-3 py-3">
              <button className="btn btn-danger mr-5">Disapprove</button>
              <button className="btn btn-success">Approve</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointments;
