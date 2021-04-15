const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "this field is required";
  } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/g.test(values.name)) {
    errors.name = "this field accepts characters only";
  } else if (values.name.length < 8) {
    errors.name = "name must be not less than 8";
  }
  if (!values.email) {
    errors.email = "this field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "this field accepts email only";
  }
  if (!values.password) {
    errors.password = "this field is required";
  } else if (values.password.length < 8) {
    errors.password = "password must be not less than 8";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "this field is required";
  } else if (values.confirmpassword.length < 8) {
    errors.confirmpassword = "password must be not less than 8";
  } else if (!(values.password === values.confirmpassword)) {
    errors.confirmpassword = "password doesnot match";
  }

  return errors;
};

export default Validation;
