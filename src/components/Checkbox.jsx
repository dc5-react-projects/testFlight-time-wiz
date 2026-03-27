import React from "react";

export default function Checkbox({ lable, type, value, setValue }) {
  return (
    <div className="input-container ">
      <label className="input-label" htmlFor="start-date">
        {lable}
      </label>
      <input
        className="checkbox"
        type={type}
        id="start-date"
        value={value}
        onChange={(e) => setValue(e.target.checked)}
      ></input>
    </div>
  );
}
