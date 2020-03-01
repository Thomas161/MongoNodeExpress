import React, { Component } from "react";
import API from "../api/api";
import UserForm from "./UserForm";
import PersonalForm from "./PersonalForm";
import InterestsForm from "./InterestsForm";
import Confirmation from "./Confirmation";
import Success from "./Success";
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
    superhero: "",
    age: "",
    hobbies: "",
    food: "",
    fieldErrors: {
      firstName: "",
      lastName: "",
      email: "",
      superhero: "",
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
      case "superhero":
        formErrors.superhero = value.length < 4 ? "Min 3 chars" : "";
        break;
      case "age":
        formErrors.age = Number(value) ? "" : "must be number";
        break;
      case "food":
        formErrors.food = value.length < 10 ? "Min 10 chars" : "";
        break;
      case "hobbies":
        formErrors.hobbies = value.length < 10 ? "Min 10 chars" : "";
        break;
      default:
        break;
    }
    this.setState({
      formErrors,
      [input]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      superhero,
      age,
      food,
      hobbies
    } = this.state;
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
      console.log(
        "%cSuperhero:",
        "font-family:tahoma; font-size:12px; color:#0EE5EC;",
        superhero
      );
      console.log(
        "%cAge:",
        "font-family:tahoma; font-size:12px; color:#0EE5EC;",
        age
      );
      console.log(
        "%cFoods:",
        "font-family:tahoma; font-size:12px; color:#0EE5EC;",
        food
      );
      console.log(
        "%cHobbies:",
        "font-family:tahoma; font-size:12px; color:#0EE5EC;",
        hobbies
      );
      //add console.log() for =>sex,age,hobbies,fave foods etc
      const combineDetails = {
        firstName,
        lastName,
        email,
        superhero,
        age,
        food,
        hobbies
      };

      API.post("/contacts", combineDetails)
        .then(() =>
          console.log(
            `Sent Data 
            ${combineDetails.firstName}
             ${combineDetails.lastName}
              ${combineDetails.email}
              ${combineDetails.superhero}
              ${combineDetails.age}
              ${combineDetails.food}
              ${combineDetails.hobbies}
              `
          )
        )
        .catch(err => console.log(`Error, ${err}`));

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("superhero", superhero);
      localStorage.setItem("superhero", age);
      localStorage.setItem("superhero", food);
      localStorage.setItem("superhero", hobbies);
      //add sex,age,hobbies,fave foods etc
      let defaultState = {
        firstName,
        lastName,
        email,
        age,
        hobbies,
        food,
        superhero
      };
      this.setState({ defaultState });
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
    //  const storage4 = localStorage.getItem("superhero") === "true";
    //  const storage5 = localStorage.getItem("food") === "true";
    //  const storage6 = localStorage.getItem("hobbies") === "true";
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
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
          <Confirmation
            value={this.state}
            prevStep={this.prevStep}
            onSubmit={this.onFormSubmit}
          />
        );
      case 5:
        return <Success />;
      default:
        return;
    }
  }
}
export default Form;
