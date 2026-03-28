import React from "react";

export default function CustomButton({ title, action }) {
  return <div onClick={action}>{title}</div>;
}
