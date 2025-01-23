/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.jpg";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 50% Discounts On</h4>
        <h1>Winter Sale</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequuntur sunt magnam porro minus necessitatibus rerum eveniet est
          commodi, recusandae non ipsam nobis eius dolorem accusantium?
          Similique dolores eveniet asperiores.
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE MORE</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
