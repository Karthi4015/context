/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAppContext } from "../context/Globalcontext";

// eslint-disable-next-line react/prop-types
const MyProjects = () => {
  const { data } = useAppContext();

  return (
    <section
      className="row d-flex justify-content-around align-items-center pb-5 mb-5 bg-secondary text-light"
      style={{ height: "auto", minHeight: "10vh" }}
    >
      <h1 className="ms-2 my-3 fw-bold">My Projects</h1>

      {projectsData?.map((item) => (
        <div
          key={item.id}
          className="card m-2 bg-info d-flex justify-content-between py-3 shadow"
          style={{ width: "15rem", height: "15rem", backgroundImage: "" }}
        >
          {item.label}
        </div>
      ))}
    </section>
  );
};

export default MyProjects;
