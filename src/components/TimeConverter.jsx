import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import Input from "./Input";
import Output from "./Output";
export default function TimeConverter() {
  return (
    <Card>
      <CardHeader
        title={"Date Calculator"}
        text={"Calculate days between two dates"}
      />
      <Input lable={"Days"} type={"text"} />
      <Input lable={"Hours"} type={"text"} />
      <Input lable={"Weeks"} type={"text"} />

      <Output heading={"Conversion Results"} days={7} hours={188} weeks={1} />
    </Card>
  );
}
