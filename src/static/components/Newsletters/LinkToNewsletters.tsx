import React from "react";
import { Link } from "react-router-dom";

function LinkToNewsletters() {
  return (
    <Link className = "tab" to="/newsletters">
        Newsletters
    </Link>
  );
}

export default LinkToNewsletters;