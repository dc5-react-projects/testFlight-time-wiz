import React from "react";

export default function CustomButton({ title, action }) {
  return (
    // <div className="clear-btn" onClick={action}>
    //   {title}
    // </div>
    <button className="clear-btn" onClick={action}>
      {title}
    </button>
  );
}
