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

export default function ListLeft(props: ExperiencesList) {
  return (
    <>
      <div className="flex flex-row-reverse md:contents">
        <div className="col-start-1 bg-gray-400 col-end-5 p-4 shadow-xl my-4 ml-auto text-right rounded-xl z-20">
          <ExperiencesText
            role={props.role}
            employeer={props.employeer}
            description={props.description}
            dateStart={props.dateStart}
            dateEnd={props.dateEnd}
          />
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
          </div>
          {props.dateEnd == "Now" ? (
            <ListBullet isNow={true} />
          ) : (
            <ListBullet isNow={false} />
          )}
        </div>
      </div>
    </>
  );
}
