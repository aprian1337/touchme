import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="container mx-auto" style={{ height: "80vh" }}>
        <div className="flex h-full items-center flex-wrap">
          <div className="w-1/2">
            <h2 className="text-4xl font-fira-code w-full mb-5">
              Hello World, <span className="font-bold">I am</span>
            </h2>
            <h2 className="text-8xl font-inter font-black w-full">
              <span className="text-gray-600">D</span>wiky
              <span className="text-red-500">.</span>
            </h2>
            <h2 className="text-4xl font-fira-code font-light">
              software engineer
            </h2>
            <p className="font-fira-code mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              animi asperiores quas consequatur perspiciatis officiis et iste
              sunt fuga explicabo! Iusto nihil minus rerum unde vitae obcaecati
              soluta dignissimos nisi.
            </p>
            <button className="mt-5 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500">
              Touch Me!
            </button>
          </div>
          <div className="w-1/2 rounded z-20">
            <div className="text-center float-right">
              <img
                src="/avatar.jpg"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  width: "450px",
                  height: "450px",
                }}
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
