import {useHistory,link} from 'react-router-dom'
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import image from "../../../Assets/Images/calm.jpg";
import "./SignUp.css";
import useForm from "./useForm";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../../../redux/User/User.action';

const mapState = ({user}) => ({
  signUpSuccess:user.signUPSuccess 
});

const SignUp = () => {
  const {signUpSuccess} = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (signUpSuccess) {
      history.push('/');
    }
  }, [signUpSuccess]);

  const { handelChanges, handelSubmit, errors,values } = useForm();
  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row">
         
          <div className="signup-form col-md-6 col-12">
            <Form onSubmit={handelSubmit}>
              <h1 className="my-5">Sign Up</h1>
              <FormGroup>
                <Input
                  type="name"
                  name="displayName"
                  id="name"
                  value={values.name}
                  placeholder="Enter Your Name"
                  onChange={handelChanges}
                />
                {errors.name && <p className="text-danger text-left mt-2 ml-2">{errors.name}</p>}
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="email"
                  value={values.email}
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={handelChanges}
                />
                {errors.email && <p className="text-danger text-left mt-2 ml-2">{errors.email}</p>}
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handelChanges}
                />
                {errors.password && (
                  <p className="text-danger text-left mt-2 ml-2">{errors.password}</p>
                )}
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  id="confirmpassword"
                  placeholder="Enter Your Password"
                  onChange={handelChanges}
                />
                {errors.confirmpassword && (
                  <p className="text-danger text-left mt-2 ml-2">{errors.confirmpassword}</p>
                )}
              </FormGroup>
              <Button type="submit" className="mb-3">Submit</Button>
            </Form>
          </div>
          <div className=" px-0 col-md-6 col-12 ">
            <img src={image} alt="sign-upimage" className=" w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
