import React from "react";

interface ExperiencesList {
  role: string;
  employeer: string;
  description: string;
  dateStart: String;
  dateEnd: String;
}

export default function ExperiencesText(props: ExperiencesList) {
  return (
    <div>
      {/* <h3 className="font-semibold text-lg mb-1">
        Full Stack Engineering Student
      </h3>
      <h3 className="font-bold italic">Alterra Academy</h3>
      <h5>Description:</h5>
      <p className="leading-tight text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos
        inventore, dicta voluptate dolorum similique. A ut ratione eaque,
        corporis fugit adipisci expedita. Voluptatem perferendis dolores itaque
        quisquam et hic.
      </p>
      <hr className="mt-5 mb-5" />
      <h4 className="font-bold">August 2021 - January 2022</h4> */}

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
