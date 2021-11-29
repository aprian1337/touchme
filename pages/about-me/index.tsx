import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function aboutme() {
  return (
    <div>
      <Sidebar />
      <Header uri="about-me" />
      <Container>
        <div className="flex h-full items-center">
          <div style={{ width: "100%" }} className="text-center">
            <Breadcrumb title="About Me" />
            <div className="text-gray-800">
              <h1 className="mt-8 font-inter text-8xl font-black">
                <span className="text-gray-600">D</span>wiky{" "}
                <span className="text-red-500">A</span>prian Ashari
                <span className="text-red-500">.</span>
              </h1>
              <h4 className="font-fira-code text-5xl mt-4">
                software engineer
              </h4>
              <p className="mt-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio sunt architecto consectetur impedit culpa error
                explicabo porro quo, ex maxime nulla tempore voluptas nemo, eum
                eligendi ipsam quidem aperiam sint! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium, enim libero! Omnis
                laborum ea repellat iste? Labore, assumenda totam! Corporis
                reprehenderit voluptas assumenda ipsum molestiae magni rerum
                praesentium optio beatae. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Hic rem aliquam, ipsa omnis dicta
                facere impedit deleniti maiores, rerum adipisci ex labore eius
                nemo illo! Expedita harum ex accusantium quis. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio sunt architecto consectetur impedit culpa error
                explicabo porro quo, ex maxime nulla tempore voluptas nemo, eum
                eligendi ipsam quidem aperiam sint! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium, enim libero! Omnis
                laborum ea repellat iste? Labore, assumenda totam! Corporis
                reprehenderit voluptas assumenda ipsum molestiae magni rerum
                praesentium optio beatae. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Hic rem aliquam, ipsa omnis dicta
                facere impedit deleniti maiores, rerum adipisci ex labore eius
                nemo illo! Expedita harum ex accusantium quis.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
