import React from "react";
import "../style/Company.css";
import image from "../images/company.avif";

const Company = () => {
  return (
    <>
      <div className=" flex flex-wrap main-company">
        <div className="Company-left ">
          <h1 className="Company__heading">
            Data to enrich your
            <br /> <span className="company-span">online business</span>
          </h1>
          <p className="pt-4 company-text">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui
            <br /> irure quilorem cupidatat commodo. Elit sunt amet fugiat
            <br /> veniam occaecat fugiat aliqua.
          </p>
          <button className="getStarted">Get Started</button>
          <button className="LiveDemo">Live Demo</button>
        </div>
        <div className="company-right">
          <img src={image} className=" h-[90vh] ]" alt="company image"></img>
        </div>
      </div>
    </>
  );
};

export default Company;
