import React from "react";
import ExperiencesText from "../ExperiencesText";
import ListBullet from "./ListBullet";

interface ExperiencesList {
  role: string;
  employeer: string;
  description: string;
  dateStart: String;
  dateEnd: String;
}

export default function ListRight(props: ExperiencesList) {
  return (
    <>
      <div className="flex md:contents">
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
          </div>
          {props.dateEnd == "Now" ? (
            <ListBullet isNow={true} />
          ) : (
            <ListBullet isNow={false} />
          )}
        </div>
        <div className="bg-gray-400 col-start-6 col-end-10 p-4 shadow-xl my-4 mr-auto shadow-md rounded-xl z-20">
          <ExperiencesText
            role={props.role}
            employeer={props.employeer}
            description={props.description}
            dateStart={props.dateStart}
            dateEnd={props.dateEnd}
          />
        </div>
      </div>
    </>
  );
}
