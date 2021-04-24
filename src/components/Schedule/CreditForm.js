import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Book from "./Book";

export default class CreditForm extends React.Component {
  resetForm = () => {
    document.getElementById("credit_form").reset();
  };
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" className="mb-5">
        <form className="mb-5 mt-5 text-primary d-flex">
          <div className="form-row d-flex align-items-center justify-content-around">
            <div className="">
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </div>
            <div className="mb-5">
              <Book />
            </div>
          </div>
          <div class="form-row d-flex align-items-center justify-content-around">
            <div class="form-group">
              <h5 className="align-text-left ">Card Number</h5>
              <input
                ref="fieldName"
                className="form-control"
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div class="form-group">
              <h5 className="">Valid Thru</h5>
              <input
                className="form-control"
                ref="fieldName"
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </div>
          <div class="form-row d-flex align-items-center justify-content-around">
            <div class="form-group">
              <h5 className="">Your Name</h5>
              <input
                className="form-control"
                ref="fieldName"
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div class="form-group">
              <h5 className="">CVC</h5>
              <input
                className="form-control"
                ref="fieldName"
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Book
          </button>
        </form>
      </div>
    );
  }
}
