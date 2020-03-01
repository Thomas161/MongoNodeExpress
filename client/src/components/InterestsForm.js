import React from "react";
import "../css/interests.css";

class InterestsForm extends React.Component {
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
            <h1 className="int">Interests</h1>
          </span>
        </nav>
        <div className="form-list">
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
            <span className="errorMessage">{value.fieldErrors.food}</span>
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
            <span className="errorMessage">{value.fieldErrors.hobbies}</span>
          )}
        </div>
        <br />
        <div className="hole">
          <button className="btn btn-dark btn-lg" onClick={this.back}>
            Back
          </button>
          <div className="gap"></div>
          <button className="btn btn-success btn-lg" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

// const styles = {
//   button: {
//     margin: 15
//   }
// };
export default InterestsForm;

// import { MuiThemeProvider } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import Button from "@material-ui/core/Button";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControlLabel from "material-ui/FormControlLabel";
