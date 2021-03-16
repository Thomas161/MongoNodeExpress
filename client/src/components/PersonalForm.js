import React from "react";
import styles from "../css/personal.module.css";

class PersonalForm extends React.Component {
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
          <label htmlFor="formGroupExampleInput">Fave Superhero</label>
          <input
            className={value.fieldErrors.superhero.length > 0 ? "error" : null}
            type="text"
            name="superhero"
            value={value.superhero}
            onChange={onChange("superhero")}
            noValidate
          />
          {value.fieldErrors.superhero.length > 0 && (
            <span className={styles.errorMessage}>
              {value.fieldErrors.superhero}
            </span>
          )}
          <br />
          <label htmlFor="formGroupExampleInput">Age</label>
          <input
            className={value.fieldErrors.age.length > 0 ? "error" : null}
            type="text"
            name="age"
            value={value.age}
            onChange={onChange("age")}
            noValidate
          />
          {value.fieldErrors.age.length > 0 && (
            <span className={styles.errorMessage}>{value.fieldErrors.age}</span>
          )}
          <br />
          <div className={styles.space}>
            <button className="backButtonPersonal" onClick={this.back}>
              Back
            </button>
            <div className={styles.divider}></div>
            <button
              className="continueButtonPersonal"
              onClick={this.continue}
              disabled={!value.superhero || !value.age}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="dateAndTime">
          <span id="clock">{time}</span>
        </div>
      </>
    );
  }
}

export default PersonalForm;
