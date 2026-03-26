import React from "react";
import Header from "../components/Header";
import DateCalculator from "../components/DateCalculator";

import "../App.css";
import TimeConverter from "../components/TimeConverter";
export default function Index() {
  return (
    <div className="main">
      <Header />
      <DateCalculator />
      <TimeConverter />
    </div>
  );
}
