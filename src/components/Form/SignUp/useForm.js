import React, { useState } from "react";
import { auth, handleUserProfile } from "../../../firebase/utils";
import Validation from "./Validation";
import { db, storage } from "../../../firebase/utils";
import { useHistory } from "react-router";
const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
  select: "Cairo",
  selectgender: "male",
  numberyear: "",
  license: "",
  spectext: "",
  photo: "",
};
const useForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [progres, setprogres] = useState(0);
  const history =useHistory();
  const handelChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const uploadimage = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 180;
        setprogres(percent);
      },
      (err) => console.log(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        await setValues({ ...values, photo: url });
        setprogres(0);
      }
    );
  };
  const handelSubmit = async (e, rSelected) => {
    e.preventDefault();
    
    setErrors(Validation(values));
    if(Object.keys(Validation(values)).length===0)
    {

     
    const {
      displayName,
      email,
      password,
      select,
      selectgender,
      numberyear,
      license,
      spectext,
      photo,
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
        spectext,
        photo,
      });
      setValues({ ...initialState });
    } catch (error) {}
    console.log(errors);
    history.push("/")
  }
  else{
    console.log("nosubmit")
  }
  };
  return { handelChanges, handelSubmit, errors, values, uploadimage, progres };
};
export default useForm;
