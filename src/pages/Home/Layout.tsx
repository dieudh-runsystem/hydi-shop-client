import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
