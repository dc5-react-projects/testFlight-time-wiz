import React from "react";
import "../App.css";

export default function CardHeader({ title, text }) {
  return (
    <div className="card-header">
      <h2 className="card-header-title">{title}</h2>
      <p className="card-header-text">{text}</p>
    </div>
  );
}
