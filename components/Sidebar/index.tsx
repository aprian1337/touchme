import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="h-full w-20 border-r-2 border-gray-300 top-0 left-0 fixed z-10 overflow-x-hidden py-8 white-space-nowrap">
        <h1 className="text-center text-2xl font-bold">
          <span className="text-red-500">D</span>w
        </h1>
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
            <h1 className="text-red-500" style={{ fontSize: "8px" }}>
              touchme
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
