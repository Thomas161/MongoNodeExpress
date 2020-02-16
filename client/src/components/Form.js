import React, { Component } from "react";
import API from "../api/api";
import UserForm from "./UserForm";
import PersonalForm from "./PersonalForm";
import InterestsForm from "./InterestsForm";
import Confirmation from "./Confirmation";
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
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    sex: "",
    age: "",
    hobbies: "",
    food: "",
    fieldErrors: {
      firstName: "",
      lastName: "",
      email: "",
      sex: "",
      age: "",
      hobbies: "",
      food: ""
    }
  };

  // nextStep(){}
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //prevStep(){}
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleOtherInput = input => e => {
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
      case "sex":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email";
        break;
      case "age":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email";
        break;
      case "food":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email";
        break;
      case "hobbies":
        formErrors.hobbies = value.length < 3 ? "Min 3 chars" : "";
        break;

      // other case to be matched
      //i.e age/sex/hobbies/fave foods etc
      default:
        break;
    }
    this.setState({ formErrors, [input]: e.target.value });
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
      //add console.log() for =>sex,age,hobbies,fave foods etc
      const combineDetails = {
        firstName,
        lastName,
        email
        //add sex,age,hobbies,fave foods etc
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
      //add sex,age,hobbies,fave foods etc

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
    //  const storage3 = localStorage.getItem("age") === "true";
    //  const storage4 = localStorage.getItem("sex") === "true";
    //  const storage5 = localStorage.getItem("faveFood") === "true";
    //  const storage6 = localStorage.getItem("hobbies") === "true";
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   age,
    //   faveFood,
    //   sex,
    //   hobbies
    // } = this.state;
    //const value = { firstName, lastName, email, age, faveFood, sex, hobbies };
    switch (step) {
      case 1:
        return (
          <UserForm
            value={this.state}
            onChange={this.handleOtherInput}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <PersonalForm
            value={this.state}
            onChange={this.handleOtherInput}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <InterestsForm
            value={this.state}
            onChange={this.handleOtherInput}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return (
          <Confirmation prevStep={this.prevStep} onSubmit={this.onFormSubmit} />
        );
      case 5:
        return <Success />;
      default:
        return;
    }
  }
}
export default Form;
