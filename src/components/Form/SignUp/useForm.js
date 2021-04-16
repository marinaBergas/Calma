
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../../redux/User/User.action";

import Validation from "./Validation";

const useForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const handelChanges = (e) => {
    setValues({ 
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = (e) => {
   const email = values.email;
   const password = values.password;
   const displayName = values.displayName;
   const confirmpassword = values.confirmpassword;
    e.preventDefault();
    setErrors(Validation(values));
    console.log(errors);
    dispatch(userSignUp({email,password,displayName,confirmpassword}))
  };

  return { handelChanges, handelSubmit ,errors,values};
};
export default useForm;