import React from "react";
import { Link } from "react-router-dom";

function LinkToEvents() {
  return (
    <Link className = "tab" to="/events">
        Events
    </Link>
  );
}

export default LinkToEvents;