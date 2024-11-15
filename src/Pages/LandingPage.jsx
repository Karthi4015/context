/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useAppContext } from "../context/Globalcontext";

const LandingPage = () => {
  const { data } = useAppContext();
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <section
      className="bg-light position-relative"
      style={{ overflowX: "hidden" }}
    >
      <Navbar />

      <MainSection />

      <Footer />
    </section>
  );
};

export default LandingPage;
