import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="absolute right-0 top-0 pointer-events-none">
        {/* <img src="bg.png" /> */}
        <Image src="/bg.png" alt="Background" width={1750} height={850} />
      </div>
      <nav className="">
        <div className="text-center mt-10">
          <Link href="/">
            <a
              href=""
              className="inline m-5 font-fira-code is-active cursor-pointer"
            >
              home
            </a>
          </Link>
          <Link href="/about-me">
            <a className="inline m-5 font-fira-code">about me</a>
          </Link>
          <Link href="experiences">
            <a className="inline m-5 font-fira-code">work experience</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
