import React from "react";

import Card from "./Card";
import CardHeader from "./CardHeader";
import Input from "./Input";
import Output from "./Output";
export default function DateCalculator() {
  return (
    <Card>
      <CardHeader
        title={"Date Calculator"}
        text={"Calculate days between two dates"}
      />
      <Input lable={"Start Date"} type={"date"} />
      <Input lable={"End Date"} type={"date"} />

      <Output heading={"Time Difference"} days={7} hours={188} weeks={1} />
    </Card>
  );
}
