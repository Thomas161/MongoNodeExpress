import React from "react";
import i from "../image/404.jpg";
import { Link } from "react-router-dom";

const imgFit = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative"
};
const buttonStyle = {
  fontSize: "1.2em"
};
export const Error = () => {
  return (
    <>
      <button className="btn btn-warning">
        <span className="glyphicon glyphicon-fast-backward"> </span>
        &nbsp;&nbsp;&nbsp;
        <Link style={buttonStyle} to="/">
          Home
        </Link>
      </button>
      <img src={i} style={imgFit} alt="Error Page" />
    </>
  );
};
