import React from "react";
import Banner from "../../components/shop/Banner";
import NewArrival from "../../components/shop/NewArrival";
import BestSeller from "../../components/common/BestSeller";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <NewArrival />
      <BestSeller />
    </>
  );
};

export default Home;
