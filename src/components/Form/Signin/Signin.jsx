import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import image from "../../../Assets/Images/calm.jpg";
import {  useHistory } from 'react-router-dom';
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
      history.push("/");
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
                  onChange={handelChanges}
                />
              </FormGroup>
              <FormGroup className="text-left">
                <Label for="password">Password</Label>
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
          {/* <div className=" px-0 col-md-6 col-12">
            <img src={image} alt="sign-upimage" className=" w-100" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
