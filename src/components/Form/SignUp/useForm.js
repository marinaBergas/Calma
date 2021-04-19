import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { userSignUp } from "../../../redux/User/User.action";

import { auth, handleUserProfile } from "../../../firebase/utils";
import Validation from "./Validation";
const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
  select: "Cairo",
  selectgender: "male",
  numberyear: "",
  license: "",
};
const useForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handelChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e, rSelected) => {
    e.preventDefault();
    setErrors(Validation(values));

    const {
      displayName,
      email,
      password,
      select,
      selectgender,
      numberyear,
      license,
    } = values;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, rSelected, {
        displayName,
        email,
        select,
        selectgender,
        numberyear,
        license,
      });
      setValues({ ...initialState });
    } catch (error) {}
    console.log(errors);
    // useDispatch(userSignUp({ email, password, displayName, confirmpassword }));
  };

  return { handelChanges, handelSubmit, errors, values };
};
export default useForm;
