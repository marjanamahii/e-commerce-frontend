/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../Shop/TrendingProducts";
import DealsSection from "./DealsSection";
import PromoBanner from "./PromoBanner";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <DealsSection />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
