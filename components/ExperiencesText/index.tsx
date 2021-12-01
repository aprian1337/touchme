import React from "react";
import { ExperiencesList } from "../../interfaces/Experiences";

export default function ExperiencesText(props: ExperiencesList) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-1">{props.role}</h3>
      <h3 className="font-bold italic">{props.employeer}</h3>
      <h5>Description:</h5>
      <p className="leading-tight text-justify">{props.description}</p>
      <hr className="mt-5 mb-5" />
      <h4 className="font-bold">
        {props.dateStart} - {props.dateEnd}
      </h4>
    </div>
  );
}
