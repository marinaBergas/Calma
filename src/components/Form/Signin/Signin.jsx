import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import image from "../../../Assets/Images/header.jpg";
import { signInWithGoogle } from "../../../firebase/utils";

import "./Signin.css";

const handleSubmit = async (e) => {
  e.preventDefault();
};
const Signin = () => {
  return (
    <div className="signin py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="signin-form col-md-6 col-12">
            <Form onSubmit={handleSubmit}>
              <h3 className="my-5">Sign In</h3>
              <FormGroup className="text-left">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </FormGroup>
              <FormGroup className="text-left">
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </FormGroup>
              <Button type="submit" className="mb-3">
                Submit
              </Button>
              <Button className="btn" onClick={signInWithGoogle}>
                sign in with google
              </Button>
            </Form>
          </div>
          {/* <div className=" px-0 col-md-6 col-12">
            <img src={image} alt="sign-upimage" className=" w-100" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
