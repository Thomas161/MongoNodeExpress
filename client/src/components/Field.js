import React from "react";

export const Field = ({ value, onChange, isEnabled }) => {
  return (
    <>
      <div>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input
            className={value.fieldErrors.firstName.length > 0 ? "error" : null}
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={onChange}
            noValidate
          />

          {value.fieldErrors.firstName.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.firstName}</span>
          )}
        </div>
        <hr />
        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input
            className={value.fieldErrors.lastName.length > 0 ? "error" : null}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={onChange}
            noValidate
          />

          {value.fieldErrors.lastName.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.lastName}</span>
          )}
        </div>
        <hr />
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            className={value.fieldErrors.email.length > 0 ? "error" : null}
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            noValidate
          />

          {value.fieldErrors.email.length > 0 && (
            <span className="errorMessage">{value.fieldErrors.email}</span>
          )}
        </div>
        <hr />
        <input disabled={!isEnabled} type="submit" />
        {/* <button disabled={!isEnabled}>Submit</button> */}
      </div>
    </>
  );
};
