import React from "react";

class Confirmation extends React.Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <nav className="navbar navbar-lg bg-primary">
          <span className="navbar-brand mb-3 h1">
            <h1>Confirmation</h1>
            {/* style={h1Styles.fontStyle} */}
          </span>
        </nav>

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
