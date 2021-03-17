import React from "react";
import styles from "../css/interests.module.css";

class InterestsForm extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { value, onChange, time } = this.props;
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
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Fave Food</label>
          <input
            type="text"
            value={value.food}
            className={value.fieldErrors.food.length > 0 ? "error" : null}
            name="food"
            placeholder="foods"
            onChange={onChange("food")}
          />
          {value.fieldErrors.food.length > 0 && (
            <span className={styles.errorMessage}>
              {value.fieldErrors.food}
            </span>
          )}
          <br />
          <label htmlFor="formGroupExampleInput">Hobbies</label>
          <input
            type="text"
            value={value.hobbies}
            className={value.fieldErrors.hobbies.length > 0 ? "error" : null}
            name="hobbies"
            placeholder="hobbies"
            onChange={onChange("hobbies")}
          />
          {value.fieldErrors.hobbies.length > 0 && (
            <span className={styles.errorMessage}>
              {value.fieldErrors.hobbies}
            </span>
          )}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="backButtonOne" onClick={this.back}>
            Back
          </button>
          {/* <div className="divider"></div> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="continueButtonOne"
            onClick={this.continue}
            disabled={!value.food || !value.hobbies}
          >
            Continue
          </button>
        </div>
        <div className="dateAndTime">
          <span id="clock">{time}</span>
        </div>
      </>
    );
  }
}

export default InterestsForm;
