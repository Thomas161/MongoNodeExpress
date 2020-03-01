import React from "react";
import "../css/personal.css";

class PersonalForm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <nav className="navbar navbar-lg bg-primary">
          <span className="navbar-brand mb-3 h1">
            <h1 className="header">Personal Details</h1>
          </span>
        </nav>

        <div className="form-collection">
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
            <span className="errorMessage">{value.fieldErrors.superhero}</span>
          )}

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
            <span className="errorMessage">{value.fieldErrors.age}</span>
          )}
        </div>

        <br />
        <div className="space">
          <button className="btn btn-danger btn-lg" onClick={this.back}>
            Back
          </button>
          <div className="divider"></div>
          <button className="btn btn-secondary btn-lg" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default PersonalForm;
