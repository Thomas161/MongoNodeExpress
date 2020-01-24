import React, { Component } from "react";
import API from "../api/api";
import { Field } from "./Field";
import "../App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const validateFields = (fieldErrors, ...rest) => {
  let valid = true;
  //iterate over all fieldErrors object, if length is greater than 0,
  //we have an error, boolean valid becomes false, invalid
  //else it's valid(true)
  Object.values(fieldErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  //ensure form is filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      fieldErrors: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  }

  handleOtherInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.fieldErrors;
    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 3 ? "Min 3 chars" : "";
        break;
      case "lastName":
        formErrors.lastName = value.length < 3 ? "Min 3 chars" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
    // () => console.log(this.state)
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email } = this.state;
    if (validateFields(this.state.fieldErrors)) {
      console.log(
        "%cSubmitted",
        "font-family:monospace; font-size:20px; color:gold;"
      );
      console.log(
        "%cFirst Name : ",
        "font-family:tahoma; font-size:12px; color:#A835D8;",
        firstName
      );
      console.log(
        "%cLast Name :",
        "font-family:tahoma; font-size:12px; color:#0AE62F;",
        lastName
      );
      console.log(
        "%cEmail:",
        "font-family:tahoma; font-size:12px; color:#0EE5EC;",
        email
      );
      const combineDetails = {
        firstName,
        lastName,
        email
      };
      API.post("/contacts", combineDetails)
        .then(() =>
          console.log(
            `Sent Data ${combineDetails.firstName} ${combineDetails.lastName} ${combineDetails.email}`
          )
        )
        .catch(err => console.log(`Error, ${err}`));

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);

      e.target.reset();
    } else {
      console.error("Error");
    }
  };

  componentDidMount() {
    const storage = localStorage.getItem("firstName") === "true";
    const userSaved = storage ? localStorage.getItem("firstName") : null;
    this.setState({ userSaved, storage });
    /**OPTIONAL */
    //  const storage1 = localStorage.getItem("lastName") === "true";
    //  const storage2 = localStorage.getItem("email") === "true";
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>React Form</h1>
            <form onSubmit={this.onFormSubmit} noValidate>
              <Field value={this.state} onChange={this.handleOtherInput} />
            </form>
            <hr />
          </div>
        </div>
      </>
    );
  }
}
export default Form;
