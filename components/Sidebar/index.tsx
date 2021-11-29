import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="h-full w-20 border-r-2 border-gray-300 top-0 left-0 fixed z-10 overflow-x-hidden py-8 white-space-nowrap">
        <Link href="/">
          <h1 className="text-center text-2xl font-bold cursor-pointer">
            <a>
              <span className="text-red-500">D</span>w
            </a>
          </h1>
        </Link>
        <i className="fab fa-facebook"></i>
        <div className="bottom-0 absolute">
          <div className="text-center p-6 block">
            <div className="block mb-5 cursor-pointer">
              <a href="http://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
            <div className="block mb-5 cursor-pointer">
              <a href="http://linkedin.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="block mb-5 cursor-pointer">
              <a href="http://linkedin.com">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="block mb-5 cursor-pointer">
              <a href="http://linkedin.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div
              className="bg-red-500"
              style={{
                width: "25px",
                height: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
