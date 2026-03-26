import React from "react";

export default function Input({ lable, type, placeholder }) {
  return (
    <div className="input-container">
      {/* <div className="input-wrapper"> */}
      <label className="input-label" htmlFor="start-date">
        {lable}
      </label>
      <input
        className="input"
        type={type}
        id="start-date"
        placeholder={placeholder}
      ></input>
      {/* <input type="number" min="1" max="10" step="1" value="1"></input> */}
      {/* </div> */}
    </div>
  );
}
