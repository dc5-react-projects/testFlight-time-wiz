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
      {/* </div> */}
    </div>
  );
}
