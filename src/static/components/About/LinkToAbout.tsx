import React from "react";
import { Link } from "react-router-dom";

function LinkToAbout() {
  return (
    <Link className = "tab" to="/about">
        About
    </Link>
  );
}

export default LinkToAbout;