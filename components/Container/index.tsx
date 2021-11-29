import React from "react";

export default function Container(props: any) {
  return (
    <div
      className="container mx-auto mt-10 relative"
      style={{ height: "80vh" }}
    >
      {props.children}
    </div>
  );
}
