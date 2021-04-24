import React, { useState } from "react";
import Book from "../Schedule/Book";
import CreditForm from "../Schedule/CreditForm";
import { AppointRequests } from "../Dashboard/Appointments/AppointRequests";

  import { Disapprove } from "../../redux/Request/Request.action";

import { useDispatch, useSelector } from "react-redux";
import Background from "./Sidebartwo/Background";
import Navbar from "./Sidebartwo/Navbar";
import SideBar from "./Sidebartwo/SideBar";

export default function Patients() {
    let patient = useSelector((p) => p.request);
    const dispatch = useDispatch();
    const [isOpened, setIsOpened] = useState(true);

  return (
    <>
    
      <div className="container mt-5">
      <div className="row mt-5">
          <Background setIsOpened={setIsOpened} show={isOpened} />
          <Navbar toggleMenu={setIsOpened} />
          <SideBar show={isOpened} setIsOpened={setIsOpened} />
        </div>
        <h2 className="text-primary mt-5 text-left">patients :</h2>
        <div className="row patient-container">
        {patient.map((item, index) => {
              return (
              
                  <div key={index} className="px-1 py-3 mx-auto">
                      <div className="card">
                        <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                          <div className="left d-flex flex-column">
                            <h5 className="mb-1">{item.time}</h5>
                            <p className="text-muted mb-1 sm-text">
                              {item.AppDate}
                            </p>
                          </div>
                          <div className="right">
                            <img
                              className="client-img"
                              src={item.imagePath}
                            ></img>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                          <div className="left d-flex flex-column">
                            <h5 className="mb-1">{item.patientName}</h5>
                            <p className="text-muted mb-1 sm-text">FIRST VISIT</p>
                          </div>
                        </div>
                        <div className="row justify-content-between mx-2 px-3 card-strip">
                          <div className="left d-flex">
                            <h5 className="mb-1 text-muted">Duration</h5>
                            <span className="time">{item.Duration}</span>
                          </div>
                          <div className="right d-flex">
                            <p className="mb-0 price">
                              <strong className="text-muted">$80.00</strong>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mx-2 px-3">
                          <button
                            className="btn btn_appoint btn-danger p-2 mr-3 w-50"
                            onClick={() => {
                              dispatch(Disapprove(item));
                            }}
                          >
                            Remove Patient
                          </button>
                        </div>
                      </div>
                    </div>
             
              );
            })}
        </div>
      </div>
    </>
  );
}
