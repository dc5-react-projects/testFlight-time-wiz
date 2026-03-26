import React from "react";

export default function Output({ heading, days, hours, weeks }) {
  return (
    <div className="output-container">
      <h3 className="output-heading">{heading}</h3>
      <div className="output-wrapper">
        <div className="output-label">
          <span>Days:</span>
          <span>Hours:</span>
          <span>Weeks:</span>
        </div>
        <div className="output-result">
          <span>{days}</span>
          <span>{hours}</span>
          <span>{weeks}</span>
        </div>
      </div>
    </div>
  );
}
