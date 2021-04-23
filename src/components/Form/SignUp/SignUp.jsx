import React, { useState } from "react";

import { useHistory, link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";
import image from "../../../Assets/Images/calm.jpg";

import "./SignUp.css";
import { FaUserMd } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import useForm from "./useForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut, userSignUp } from "../../../redux/User/User.action";

const mapState = ({ user }) => ({
  signUpSuccess: user.signUpSuccess,
  signInSuccess: user.signInSuccess,
});

const SignUp = () => {
  const [rSelected, setRSelected] = useState(1);
  const governorates = [
    { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
    { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
    {
      id: "3",
      governorate_name_ar: "الأسكندرية",
      governorate_name_en: "Alexandria",
    },
    {
      id: "4",
      governorate_name_ar: "الدقهلية",
      governorate_name_en: "Dakahlia",
    },
    {
      id: "5",
      governorate_name_ar: "البحر الأحمر",
      governorate_name_en: "Red Sea",
    },
    { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
    { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
    {
      id: "8",
      governorate_name_ar: "الغربية",
      governorate_name_en: "Gharbiya",
    },
    {
      id: "9",
      governorate_name_ar: "الإسماعلية",
      governorate_name_en: "Ismailia",
    },
    {
      id: "10",
      governorate_name_ar: "المنوفية",
      governorate_name_en: "Menofia",
    },
    { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
    {
      id: "12",
      governorate_name_ar: "القليوبية",
      governorate_name_en: "Qaliubiya",
    },
    {
      id: "13",
      governorate_name_ar: "الوادي الجديد",
      governorate_name_en: "New Valley",
    },
    { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
    { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
    { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
    {
      id: "17",
      governorate_name_ar: "بني سويف",
      governorate_name_en: "Beni Suef",
    },
    {
      id: "18",
      governorate_name_ar: "بورسعيد",
      governorate_name_en: "Port Said",
    },
    { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
    {
      id: "20",
      governorate_name_ar: "الشرقية",
      governorate_name_en: "Sharkia",
    },
    {
      id: "21",
      governorate_name_ar: "جنوب سيناء",
      governorate_name_en: "South Sinai",
    },
    {
      id: "22",
      governorate_name_ar: "كفر الشيخ",
      governorate_name_en: "Kafr Al sheikh",
    },
    { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
    { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
    { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
    {
      id: "26",
      governorate_name_ar: "شمال سيناء",
      governorate_name_en: "North Sinai",
    },
    { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
  ];

  const { signUpSuccess, signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (signUpSuccess) {
      history.push("/");
    }
  }, [signUpSuccess]);
  useEffect(() => {
    if (signInSuccess) {
      history.push("/");
    }
  }, [signInSuccess]);

  const { handelChanges, handelSubmit, errors, values } = useForm();
  return (
    <div className="signup py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="signup-form col-md-6 col-12">
            <Form
              className="p-3"
              onSubmit={(e) => {
                handelSubmit(e, rSelected);
              }}
            >
              <h3 className="mt-5">Sign Up As</h3>
              <ButtonGroup className="mb-4">
                <Button
                  className={
                    rSelected === 1
                      ? "btn btn-dark rounded-circle border border-dark mx-3 btn_signup"
                      : "btn btn-light rounded-circle border border-dark mx-3 btn_signup"
                  }
                  onClick={() => setRSelected(1)}
                  active={rSelected === 1}
                >
                  <FaUserAlt
                    className={
                      rSelected === 1 ? "text-primary h2" : "text-dark h2"
                    }
                  />
                  <p className="fw-bolder" >Visitor</p>
                </Button>
                <Button
                  className={
                    rSelected === 2
                      ? "btn btn-dark rounded-circle border border-dark mx-3 btn_signup "
                      : "btn btn-light rounded-circle border border-dark mx-3 btn_signup"
                  }
                  onClick={() => setRSelected(2)}
                  active={rSelected === 2}
                >
                  <FaUserMd
                    className={
                      rSelected === 2 ? "text-primary h2" : "text-dark h2"
                    }
                  />
                  <p className="fw-bolder" > Doctor</p>
                </Button>
              </ButtonGroup>
              <FormGroup className="text-left">
                <Label for="name">Name*</Label>
                <Input
                  type="name"
                  name="displayName"
                  id="name"
                  value={values.name}
                  placeholder="Enter Your Name"
                  onChange={handelChanges}
                />
                {errors.name && (
                  <p className="text-danger text-left mt-2 ml-2">
                    {errors.name}
                  </p>
                )}
              </FormGroup>
              <FormGroup className="text-left">
                <Label for="email">Email*</Label>
                <Input
                  type="text"
                  name="email"
                  value={values.email}
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={handelChanges}
                />
                {errors.email && (
                  <p className="text-danger text-left mt-2 ml-2">
                    {errors.email}
                  </p>
                )}
              </FormGroup>
              <FormGroup className="text-left">
                <Label for="password">Password*</Label>

                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handelChanges}
                />
                {errors.password && (
                  <p className="text-danger text-left mt-2 ml-2">
                    {errors.password}
                  </p>
                )}
              </FormGroup>
              <FormGroup className="text-left">
                <Label for="confirmpassword">Confirm password*</Label>
                <Input
                  type="password"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={handelChanges}
                />
                {errors.confirmpassword && (
                  <p className="text-danger text-left mt-2 ml-2">
                    {errors.confirmpassword}
                  </p>
                )}
              </FormGroup>
              {rSelected === 2 && (
                <div>
                  <FormGroup className="text-left">
                    <Label for="exampleSelect">Governorates*</Label>
                    <Input
                      type="select"
                      name="select"
                      id="exampleGovernorate"
                      onChange={handelChanges}
                      defaultValue="Cairo"
                    >
                      {governorates.map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.governorate_name_en}
                          >
                            {item.governorate_name_en}
                          </option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                  <FormGroup className="text-left">
                    <Label for="exampleSelect">Gender*</Label>
                    <Input
                      type="select"
                      name="selectgender"
                      id="examplegender"
                      onChange={handelChanges}
                      defaultValue="male"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="text-left">
                    <Label for="exampleNumber">Years of experience*</Label>
                    <Input
                      type="number"
                      name="numberyear"
                      id="exampleNumber"
                      placeholder="Years"
                      onChange={handelChanges}
                    />
                  </FormGroup>
                  <FormGroup className="text-left">
                    <Label for="name">License No*</Label>
                    <Input
                      type="number"
                      name="license"
                      id="license"
                      placeholder="License Number"
                      onChange={handelChanges}
                    />
                  </FormGroup>
                  <FormGroup className="text-left">
                <Label for="spectext">Specialized*</Label>
                <Input
                  type="text"
                  name="spectext"
                  value={values.spec}
                  id="spectext"
                  placeholder="Enter Your Specialized"
                  onChange={handelChanges}
                />
               
              </FormGroup>
                </div>
              )}
              <Button
                type="submit"
                className="btn btn-primary rounded-pill mb-3 text-white bg-primary font-weight-bold"
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
