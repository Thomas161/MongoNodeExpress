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
          <label>Sex</label>
          <input type="checkbox" />

          <input type="checkbox" />
        </span>
        <br />
        <label>Age</label>
        <select>
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
          <option value="40-50">40-50</option>
          <option value="40-50">50-60</option>
          <option value="40-50">60-70</option>
        </select>
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

const styles = {
  button: {
    margin: 15
  }
};
export default PersonalForm;

// import { MuiThemeProvider } from "@material-ui/core/styles/MuiThemeProvider";
// import AppBar from "@material-ui/core/AppBar";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import FormControlLabel from "material-ui/FormControlLabel";
