import React from "react";

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
            <h1>Interests</h1>
            {/* style={h1Styles.fontStyle} */}
          </span>
        </nav>
        <label>Fave Food</label>
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
        <label>Hobbies</label>
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
        <br />
        <button className="btn btn-dark" onClick={this.back}>
          Back
        </button>
        <button className="btn btn-success" onClick={this.continue}>
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
export default InterestsForm;

// import { MuiThemeProvider } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import Button from "@material-ui/core/Button";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControlLabel from "material-ui/FormControlLabel";
