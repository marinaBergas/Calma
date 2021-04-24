import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "./Book.css";
import 'react-calendar/dist/Calendar.css';

const Book = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="Date">
      <h5 className="text-primary text-align-left">Choose Appiontment Date :</h5>
      <Calendar className="text-primary" onChange={onChange} value={date} />
    </div>
  );
};

export default Book;