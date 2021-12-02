import React from "react";
import Head from "next/head";

export default function Container(props: any) {
  return (
    <div
      className="container mx-auto mt-10 relative"
      style={{ height: "80vh" }}
    >
      <Head>
        <title>Touchme - Dwiky Aprian Ashari</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
    </div>
  );
}
