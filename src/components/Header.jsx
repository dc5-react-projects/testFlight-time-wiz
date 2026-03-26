import React from "react";
import { ClockIcon } from "@phosphor-icons/react";
import "../App.css";

export default function Header() {
  return (
    <div className="header">
      <div className="circle">
        <ClockIcon size={32} fill="#f8fbff" />
      </div>
      <h1 className="header-title">Time Calculator</h1>
      <p className="header-text">
        Calculate date difference and convert between time units with ease
      </p>
    </div>
  );
}
