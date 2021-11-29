import React from "react";
import Link from "next/link";

interface BreadCrumb {
  title: string;
}

export default function Breadcrumb(props: BreadCrumb) {
  return (
    <div>
      <div className="text-center mb-10 mt-8">
        <h4 className="p-2 text-white bg-red-500  inline font-fira-code">
          ~/
          <Link href="/" passHref>
            <span className="cursor-pointer">aprian1337</span>
          </Link>
          /<span className="font-bold">{props.title}</span>
        </h4>
      </div>
    </div>
  );
}
