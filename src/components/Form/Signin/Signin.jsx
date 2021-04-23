import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import image from "../../../Assets/Images/calm.jpg";
import { Link, useHistory } from "react-router-dom";
import "./Signin.css";
import { useEffect } from "react";
import {
  signInWithGoogle,
  userSignIn,
  userSignOut,
} from "../../../redux/User/User.action";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  signInSuccess: user.signInSuccess,
});

const Signin = () => {
  const { signInSuccess, currentUser } = useSelector(mapState);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = confirmValues.email;
    const password = confirmValues.password;
    dispatch(userSignIn({ email, password }));
  };
  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
    history.push("/");
  };

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

              <Button
                type="submit"
                className="btn-primary rounded-pill  text-white bg-primary font-weight-bold"
              >
                sign in
              </Button>
              <div
                className="d-block goole-btn p-3 text-white bg-primary font-weight-bold mt-5 w-50"
                onClick={handleSignInWithGoogle}
              >
                sign in with{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </div>
              <p>
                Don't have any account?{" "}
        <Link to ="/register/signup">Sign Up</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
