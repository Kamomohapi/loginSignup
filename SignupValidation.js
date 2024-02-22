function Validation(values) {
    let errors = {};
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
  
    if (!values.name.trim()) {
      errors.name = "Name should not be empty";
    } else {
      errors.name = "";
    }
  
    if (!values.email.trim()) {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email format is invalid";
    } else {
      errors.email = "";
    }
  
    if (!values.password.trim()) {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password should contain at least eight characters, including at least one digit and one uppercase letter";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default Validation;
  