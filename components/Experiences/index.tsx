import { useQuery } from "@apollo/client";
import React from "react";
import ExperiencesList from "../ExperiencesList";
import { DATA_COLUMN, QUERY_GET_DATA } from "../../graphql/queries";
import Loading from "../Loading";

export default function Experiences() {
  const { loading, error, data } = useQuery(QUERY_GET_DATA);
  return (
    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
      {loading ? (
        <Loading />
      ) : (
        data?.touchme_experiences.map((item: DATA_COLUMN, index: any) => (
          <ExperiencesList
            key={item.id}
            dateStart={item.period_start}
            dateEnd={item.period_end}
            description={item.desc}
            employeer={item.employeer}
            role={item.role}
            isLeft={index % 2 == 0 ? true : false}
          />
        ))
      )}
    </div>
  );
}
