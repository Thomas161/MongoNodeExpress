import React from "react";
import styles from "../css/confirm.module.css";

class Confirmation extends React.Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { onSubmit, value } = this.props;
    return (
      <div>
        <nav className="navbar navbar-lg bg-primary">
          <span className="navbar-brand mb-3 h1">
            <h1 className={styles.header}>Confirmation</h1>
          </span>
        </nav>
        <div className={styles.details}>
          <ul>
            <li>First: {value.firstName}</li>
            <hr />
            <li>Last: {value.lastName}</li>
            <hr />
            <li>Email: {value.email}</li>
            <hr />
            <li>Age: {value.age}</li>
            <hr />
            <li>Superhero: {value.superhero}</li>
            <hr />
            <li>Fave Foods: {value.food}</li>
            <hr />
            <li>Hobbies: {value.hobbies}</li>
          </ul>
        </div>
        <br />
        <br />
        <div className={styles.space}>
          <button className="btn btn-dark btn-lg" onClick={this.back}>
            Back
          </button>
          <div className={styles.submit}></div>
          <button className="btn btn-primary btn-lg" onClick={onSubmit}>
            Submit
          </button>
          <div className={styles.continue}></div>
          <button className="btn btn-success btn-lg" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
