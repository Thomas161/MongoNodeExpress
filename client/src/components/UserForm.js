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
        <button
          className="btn btn-warning"
          style={styles.button}
          onClick={this.continue}
        >
          Continue
        </button>
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
