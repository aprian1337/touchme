import React from "react";
import Link from "next/link";

interface ExperiencesList {
  id: string;
  role: string;
  employeer: string;
  description: string;
  dateStart: Date;
  dateEnd?: Date;
}
export default function TableList(props: ExperiencesList) {
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
  const dateStart = new Date(props.dateStart);

  const dateStartString = `${
    monthNames[dateStart.getMonth()]
  } ${dateStart.getFullYear()}`;
  var dateEndString = "Now";
  if (props.dateEnd != null) {
    const dateEnd = new Date(props.dateEnd!);
    dateEndString = `${
      monthNames[dateEnd.getMonth()]
    } ${dateEnd.getFullYear()}`;
  }
  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span>{props.id}</span>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span>{props.role}</span>
        </td>

        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span className="font-bold">{props.employeer}</span>
        </td>

        <td className="py-3 px-6 text-left whitespace-nowrap">
          <span>{`${dateStartString} - ${dateEndString}`}</span>
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex item-start justify-start">
            <Link href={`/admin/experiences/edit/${props.id}`}>
              <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </Link>
            <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
