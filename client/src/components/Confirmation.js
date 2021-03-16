import React from "react";
import styles from "../css/confirm.module.css";

class Confirmation extends React.Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { onSubmit, value } = this.props;
    return (
      <>
        <nav className="navbar">
          <div id="container">
            Form
            <div id="flip">
              <div>
                <div>Fill</div>
              </div>
              <div>
                <div>Me</div>
              </div>
              <div>
                <div>Out</div>
              </div>
            </div>
            Wrapper
          </div>
        </nav>
        <div className={styles.details}>
          <ul>
            <li>
              <p>First:</p> {value.firstName}
            </li>
            <hr />
            <li>
              <p>Last:</p> {value.lastName}
            </li>
            <hr />
            <li>
              <p>Email:</p> {value.email}
            </li>
            <hr />
            <li>
              <p>Age:</p> {value.age}
            </li>
            <hr />
            <li>
              <p>Superhero:</p> {value.superhero}
            </li>
            <hr />
            <li>
              <p>Fave Foods:</p> {value.food}
            </li>
            <hr />
            <li>
              <p>Hobbies:</p> {value.hobbies}
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.space}>
          <button className="btn btn-dark btn-md" onClick={this.back}>
            Back
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary btn-md" onClick={onSubmit}>
            Submit
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-success btn-md" onClick={this.continue}>
            Continue
          </button>
        </div>
      </>
    );
  }
}

export default Confirmation;
