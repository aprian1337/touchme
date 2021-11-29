import React from "react";

interface ListBullet {
  isNow?: boolean;
}

export default function ListBullet(props: ListBullet) {
  return (
    <>
      {props.isNow ? (
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-400 shadow" />
      ) : (
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white border-4 border-red-500" />
      )}
    </>
  );
}
