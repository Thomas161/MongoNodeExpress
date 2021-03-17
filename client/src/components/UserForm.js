import React from "react";

class UserForm extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { value, onChange, time } = this.props;
    return (
      <>
        <div className="navbar">
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
        </div>

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
            value={value.lastName}
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
            value={value.email}
            onChange={onChange("email")}
            noValidate
          />

          {value.fieldErrors.email.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.email}</span>
          )}
          <br />
          <button
            className="continueButton"
            onClick={this.continue}
            disabled={!value.firstName || !value.lastName || !value.email}
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

export default UserForm;
