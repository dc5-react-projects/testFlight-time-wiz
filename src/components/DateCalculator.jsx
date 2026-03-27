import React, { useState } from "react";

import Card from "./Card";
import CardHeader from "./CardHeader";
import Input from "./Input";
import Output from "./Output";
import Checkbox from "./Checkbox";
export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeEndDate, seteIncludeEndDate] = useState(true);

  const MS = {
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7,
  };

  function getTimeDifference(start, end) {
    if (!start || !end) return { days: 0, hours: 0, weeks: 0 };
    const d1 = new Date(start);
    const d2 = new Date(end);
    let difference = Math.abs(d2 - d1);
    if (includeEndDate) {
      difference += MS.day;
    }

    const hours = Math.floor(difference / MS.hour);
    const days = Math.floor(difference / MS.day);
    const weeks = Math.floor(difference / MS.week);
    return { hours, days, weeks };
  }

  console.log(startDate);
  console.log(endDate);

  const result = getTimeDifference(startDate, endDate);
  return (
    <Card>
      <CardHeader
        title={"Date Calculator"}
        text={"Calculate days between two dates"}
      />
      <Input
        lable={"Start Date"}
        type={"date"}
        value={startDate}
        setValue={setStartDate}
      />
      <Input
        lable={"End Date"}
        type={"date"}
        value={endDate}
        setValue={setEndDate}
      />
      <Checkbox
        type={"checkbox"}
        lable={"Include end date"}
        setValue={seteIncludeEndDate}
      />

      <Output
        heading={"Time Difference"}
        days={result.days}
        hours={result.hours}
        weeks={result.weeks}
      />
    </Card>
  );
}
