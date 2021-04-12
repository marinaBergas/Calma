import React, { useState } from "react";
import Validation from "./Validation";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
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
    e.preventDefault();
    setErrors(Validation(values));
    console.log(errors);
  };
  return { handelChanges, handelSubmit ,errors};
};
export default useForm;