import React from "react";
import ListLeft from "./ListLeft";
import ListRight from "./ListRight";

interface ExperiencesList {
  role: string;
  employeer: string;
  description: string;
  dateStart: Date;
  dateEnd?: Date;
  isLeft: boolean;
}

export default function ExperiencesList(props: ExperiencesList) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(props.dateStart);
  const dateStartString = `${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
  const dateEndString =
    props.dateEnd != null
      ? `${monthNames[date.getMonth()]} ${date.getFullYear()}`
      : "Now";
  return (
    <>
      {props.isLeft ? (
        <ListLeft
          role={props.role}
          employeer={props.employeer}
          description={props.description}
          dateStart={dateStartString}
          dateEnd={dateEndString}
        />
      ) : (
        <ListRight
          role={props.role}
          employeer={props.employeer}
          description={props.description}
          dateStart={dateStartString}
          dateEnd={dateEndString}
        />
      )}
    </>
  );
}
