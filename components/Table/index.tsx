import { useMutation } from "@apollo/client";
import React from "react";
import { DATA_COLUMN, MUTATION_DELETE_DATA } from "../../graphql/queries";
import Loading from "../Loading";
import TableList from "../TableList";

export default function Table(props: any) {
  return (
    <div>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">#</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-left">Employeer</th>
            <th className="py-3 px-6 text-left">Period</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {props.data?.touchme_experiences.map((item: DATA_COLUMN) => (
            <TableList
              key={item.id}
              handleDelete={props.handleDelete}
              id={item.id}
              dateStart={item.period_start}
              description={item.desc}
              employeer={item.employeer}
              role={item.role}
              dateEnd={item.period_end}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
