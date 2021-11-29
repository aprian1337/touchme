import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Header {
  uri: string;
}

export default function Header(props: Header) {
  const homeIsActive = props.uri == "home" ? "font-black" : "";
  const aboutMeIsActive = props.uri == "about-me" ? "font-black" : "";
  const experiencesIsActive = props.uri == "experiences" ? "font-black" : "";
  return (
    <div>
      <div className="fixed z-0 right-0 top-0 pointer-events-none">
        <Image src="/bg.png" alt="Background" width={1750} height={850} />
      </div>
      <nav className="">
        <div className="text-center mt-10">
          <Link href="/">
            <a
              href=""
              className="inline m-5 font-fira-code is-active cursor-pointer"
            >
              <span className={homeIsActive}>home</span>
            </a>
          </Link>
          <Link href="/about-me">
            <a className="inline m-5 font-fira-code">
              <span className={aboutMeIsActive}>about me</span>
            </a>
          </Link>
          <Link href="experiences">
            <a className="inline m-5 font-fira-code">
              <span className={experiencesIsActive}>work experience</span>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
