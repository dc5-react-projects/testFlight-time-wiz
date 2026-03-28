import { useState } from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import Input from "./Input";
import Output from "./Output";
import CustomButton from "./CustomButton";

const MS = {
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
};

export default function TimeConverter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [weeks, setWeeks] = useState(0);
  // const [activeInput, setActiveInput] = useState("");

  // useEffect(() => {
  //   if (activeInput === "days") {
  //     setHours(days * 24);
  //     setWeeks(days / 7);
  //   } else if (activeInput === "hours") {
  //     setDays(hours / 24);
  //     setWeeks(hours / (24 * 7));
  //   } else if (activeInput === "weeks") {
  //     setDays(weeks * 7);
  //     setHours(weeks * 7 * 24);
  //   }
  // }, [days, activeInput, hours, weeks]);

  function handleDaysChange(value) {
    const num = value;
    setDays(num);
    // setActiveInput("days");
    setHours(num * 24);
    setWeeks(num / 7);
  }

  function handleHoursChange(value) {
    const num = value;
    setHours(num);
    // setActiveInput("hours");

    setDays(num / 24);
    setWeeks(num / (24 * 7));
  }

  function handleWeeksChange(value) {
    const num = value;
    setWeeks(num);
    // setActiveInput("weeks");

    setDays(num * 7);
    setHours(num * 7 * 24);
  }

  function clearAll() {
    setDays(0);
    setHours(0);
    setWeeks(0);
    // setActiveInput(null);
  }

  return (
    <Card>
      <CardHeader
        title={"Date Calculator"}
        text={"Calculate days between two dates"}
      />
      <Input
        lable={"Days"}
        type={"number"}
        setValue={handleDaysChange}
        value={days}
      />
      <Input
        lable={"Hours"}
        type={"number"}
        setValue={handleHoursChange}
        value={hours}
      />
      <Input
        lable={"Weeks"}
        type={"number"}
        setValue={handleWeeksChange}
        value={Math.round(weeks)}
      />

      <Output
        heading={"Conversion Results"}
        days={days}
        hours={hours}
        weeks={Math.round(weeks)}
      />

      <CustomButton title={"Clear"} action={clearAll} />
    </Card>
  );
}
