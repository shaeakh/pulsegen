import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Pulsegen offers several services including healthcare , online prescriptions, medicine delivery, and
          integrated tests and diagnostics. Our secure technology gives affordable access to healthcare for all.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab Test"
          description=" Our streamlined process offers quick and precise results, enabling patients to take proactive steps towards managing their health. From detecting early signs of illness to monitoring treatment effectiveness, 
          our tests provide valuable insights to empower informed decisions and promote overall well-being." />

        <ServicesCard icon={icon2} title="Health Check" 
          description="From thorough health assessments to personalized treatment plans, we keep you informed every step of the way. With regular updates and transparent communication,
           we empower you to actively participate in managing your health.Trust us to provide attentive care , guiding you towards a healthier, happier life."/>

        <ServicesCard icon={icon3} title="Heart Health"
          description="we prioritize your heart health with advanced diagnostics and personalized care. Our comprehensive approach includes state-of-the-art tests to assess your heart's condition accurately. With timely updates and expert guidance,
           we ensure you stay informed about your heart health every step of the way. " />
      </div>
    </div>
  );
};

export default Services;