import React from "react";

class UserForm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <nav className="navbar navbar-lg bg-primary">
          <span className="navbar-brand mb-3 h1">
            <h1>User Form</h1>
            {/* style={h1Styles.fontStyle} */}
          </span>
        </nav>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">First Name</label>
          <input
            className={value.fieldErrors.firstName.length > 0 ? "error" : null}
            type="text"
            name="firstName"
            placeholder="Enter your First Name"
            onChange={onChange("firstName")}
            value={value.firstName}
            noValidate
          />
          {value.fieldErrors.firstName.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.firstName}</span>
          )}
          <br />
          <label htmlFor="formGroupExampleInput">Last Name</label>
          <input
            className={value.fieldErrors.lastName.length > 0 ? "error" : null}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={onChange("lastName")}
            noValidate
          />

          {value.fieldErrors.lastName.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.lastName}</span>
          )}
          <br />
          <label htmlFor="formGroupExampleInput">Email</label>
          <input
            className={value.fieldErrors.email.length > 0 ? "error" : null}
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange("email")}
            noValidate
          />

          {value.fieldErrors.email.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.email}</span>
          )}
          <br />
        </div>
        <div className="chrome">
          <button
            className="btn btn-warning btn-lg"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default UserForm;

const styles = {
  button: {
    margin: 15
  }
};
