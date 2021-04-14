import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import image from "../../../Assets/Images/calm.jpg";
import { Link, useHistory } from 'react-router-dom';
import "./Signin.css";
import { useEffect } from "react";
import {signInWithGoogle, userSignIn,userSignOut} from '../../../redux/User/User.action'
const mapState = ({user}) => ({
  currentUser:user.currentUser,
  signInSuccess :user.signInSuccess,
});


const Signin = () => {
  const {signInSuccess,currentUser} = useSelector(mapState);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      history.push("/dashboard");
      dispatch(userSignOut());
    }
  }, [signInSuccess]);
  
  const resetForm = () => {
    setconfirmValues({});
  };
  const [confirmValues, setconfirmValues] = useState({
    email: "",
    password: "",
  });
  const handelChanges = (e) => {
   setconfirmValues({ 
      ...confirmValues,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit =  e =>{
  e.preventDefault();
 const email =confirmValues.email;
 const password = confirmValues.password;
  dispatch(userSignIn({email,password}))
}
const handleSignInWithGoogle = ()=>{
  dispatch(signInWithGoogle())
}

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
                  onChange={handelChanges}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handelChanges}
                />
              </FormGroup>
               <Button type="submit" className="mb-3"  >Submit</Button>
              <Button className="btn" onClick={handleSignInWithGoogle}>sign in with google</Button>
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
