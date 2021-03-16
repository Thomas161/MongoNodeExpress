import React, { Component } from "react";
import API from "../api/api";
import UserForm from "./UserForm";
import PersonalForm from "./PersonalForm";
import InterestsForm from "./InterestsForm";
import Confirmation from "./Confirmation";
import Success from "./Success";
import "../css/App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const validateFields = (fieldErrors, ...rest) => {
  let valid = true;
  //iterate over all fieldErrors object, if length is greater than 0,
  //we have an error, boolean valid becomes false, invalid
  //else it's valid(true)
  Object.values(fieldErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  //ensure form is filled out
  Object.values(rest).forEach((val) => {
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
    time: new Date().toLocaleTimeString(),
    fieldErrors: {
      firstName: "",
      lastName: "",
      email: "",
      superhero: "",
      age: "",
      hobbies: "",
      food: "",
    },
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

  handleOtherInput = (input) => (e) => {
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
      [input]: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      superhero,
      age,
      food,
      hobbies,
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

      const combineDetails = {
        firstName,
        lastName,
        email,
        superhero,
        age,
        food,
        hobbies,
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
        .catch((err) => console.log(`Error, ${err}`));

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("superhero", superhero);
      localStorage.setItem("age", age);
      localStorage.setItem("food", food);
      localStorage.setItem("hobbies", hobbies);
      //add sex,age,hobbies,fave foods etc
      let defaultState = {
        firstName,
        lastName,
        email,
        age,
        hobbies,
        food,
        superhero,
      };
      this.setState({ defaultState });
      this.props.history.push("/");
    } else {
      console.error("Error");
    }
  };

  componentDidMount() {
    const storage = localStorage.getItem("firstName") === "true";
    const userSaved = storage ? localStorage.getItem("firstName") : null;
    this.setState({ userSaved, storage });
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    const { step, time } = this.state;
    switch (step) {
      case 1:
        return (
          <UserForm
            value={this.state}
            onChange={this.handleOtherInput}
            nextStep={this.nextStep}
            time={time}
          />
        );
      case 2:
        return (
          <PersonalForm
            value={this.state}
            onChange={this.handleOtherInput}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            time={time}
          />
        );
      case 3:
        return (
          <InterestsForm
            value={this.state}
            onChange={this.handleOtherInput}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            time={time}
          />
        );
      case 4:
        return (
          <Confirmation
            value={this.state}
            prevStep={this.prevStep}
            onSubmit={this.onFormSubmit}
            nextStep={this.nextStep}
            time={time}
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
