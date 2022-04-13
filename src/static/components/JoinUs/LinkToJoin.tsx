import React from "react";
import { Link } from "react-router-dom";

function LinkToJoin() {
  return (
    <Link className="tab" to="/joinUs">
        Join Us!
    </Link>
  );
}

export default LinkToJoin;