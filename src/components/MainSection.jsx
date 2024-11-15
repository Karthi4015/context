/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Technologies from "./Technologies";
import MyProjects from "./MyProjects";
import { useAppContext } from "../context/Globalcontext";

const MainSection = () => {
  const { data } = useAppContext();

  return (
    <main className="">
      <Hero userdata={""} />

      <Technologies techData={""} />

      <MyProjects projectsData={""} />
    </main>
  );
};

export default MainSection;
