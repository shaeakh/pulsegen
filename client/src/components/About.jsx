import React from "react";
 import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
          Pulsegen is an online medical service targeting emerging markets that are rapidly digitising. Our mission is
          to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable
          telehealth services that aims to support the public health system, research and clinical trials.
        </p>
        <p className="text-justify lg:text-start">
          Pulsegen offers on-demand GP and specialist consultations with verified and certified doctors, online
          prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic
          Health Records. It is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres,
          and payment providers for an end-to-end digital health experience.
        </p>
        <p className="text-justify lg:text-start">
          Pulsegen systematically focuses on expanding access to affordable healthcare services to all. We promise to
          improve our solutions continuously through our scalable technology and data analytics capabilities. Our
          passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution
          to the healthcare of the future
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;