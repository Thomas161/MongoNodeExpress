import React from "react";

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
            <h1>Personal Details</h1>
            {/* style={h1Styles.fontStyle} */}
          </span>
        </nav>
        <span>
          <label>Fave Superhero</label>
          <input
            className={value.fieldErrors.superhero.length > 0 ? "error" : null}
            type="input"
            name="superhero"
            value={value.superhero}
            onChange={onChange("superhero")}
            noValidate
          />
          {value.fieldErrors.superhero.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.superhero}</span>
          )}

          <br />
          <label>Age</label>
          <input
            className={value.fieldErrors.age.length > 0 ? "error" : null}
            type="input"
            name="age"
            value={value.age}
            onChange={onChange("age")}
            noValidate
          />
          {value.fieldErrors.age.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.age}</span>
          )}
        </span>

        <br />
        <br />
        <button className="btn btn-danger" onClick={this.back}>
          Back
        </button>
        <button className="btn btn-secondary" onClick={this.continue}>
          Continue
        </button>
      </div>
    );
  }
}

// const styles = {
//   button: {
//     margin: 15
//   }
// };
export default PersonalForm;

// import { MuiThemeProvider } from "@material-ui/core/styles/MuiThemeProvider";
// import AppBar from "@material-ui/core/AppBar";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import FormControlLabel from "material-ui/FormControlLabel";
