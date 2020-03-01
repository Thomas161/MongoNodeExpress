import React from "react";
class Confirmation extends React.Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { onSubmit, value } = this.props;
    return (
      <div>
        <nav className="navbar navbar-lg bg-primary">
          <span className="navbar-brand mb-3 h1">
            <h1>Confirmation</h1>
          </span>
        </nav>
        <div>
          <ul>
            <li>{value.firstName}</li>
            <li>{value.lastName}</li>
            <li>{value.email}</li>
            <li>{value.superhero}</li>
            <li>{value.age}</li>
            <li>{value.hobbies}</li>
            <li>{value.food}</li>
          </ul>
        </div>

        <button className="btn btn-dark" onClick={this.back}>
          Back
        </button>
        <br />
        <button
          style={{ justifyContent: "center", alignItems: "center" }}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Confirmation;
