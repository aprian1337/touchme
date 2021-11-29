import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Container from "../../components/Container";
import Experiences from "../../components/Experiences";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function experiences() {
  return (
    <div>
      <Sidebar />
      <Header uri="experiences" />
      <Container>
        <Breadcrumb title="Experiences" />
        <Experiences />
      </Container>
    </div>
  );
}
