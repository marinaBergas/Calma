import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import image from "../../../Assets/Images/calm.jpg";
import { signInWithGoogle } from "../../../firebase/utils";

import "./Signin.css";

const handleSubmit = async e =>{
  e.preventDefault()
}


const Signin = () => {
  return (
    <div className="signin">
      <div className="container-fluid">
        <div className="row">
          <div className="signin-form col-md-6 col-12">
            <Form onSubmit={handleSubmit}>
              <h1 className="my-5">Sign In</h1>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </FormGroup>
              <Button type="submit" className="mb-3">Submit</Button>
              <Button className="btn" onClick={signInWithGoogle}>sign in with google</Button>
            </Form>
          </div>
          <div className=" px-0 col-md-6 col-12">
            <img src={image} alt="sign-upimage" className=" w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
