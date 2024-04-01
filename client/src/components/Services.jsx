import React from "react";
import Button from "../layouts/Button";
import { RiRobotFill } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const Services = () => {
  const icon1 = (
    <RiRobotFill size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaUserDoctor size={35} className=" text-backgroundColor" />;

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
        <ServicesCard icon={icon1} title="AI Test"
          description=" Experience streamlined healthcare efficiency with AI-driven test reporting at our hospital. Harnessing the power of artificial intelligence, receive accurate and prompt test results, 
                        ensuring swift diagnosis and treatment for patients.
                        Say goodbye to waiting times and hello to precision and speed in healthcare management." />

        <ServicesCard icon={icon2} title="Instant primary diagnostic report" 
          description=" Instant Primary Diagnostic Report is an efficient tool designed to provide you with immediate insights into your health condition. 
                       It compiles vital information such as your current symptoms, medical history in a concise format. Our aim is to provide you accurate diagnostics,
                       ensuring you receive the best possible treatment."/>
        <ServicesCard icon={icon3} title="Doctor's consultation"
          description=" Our doctors are committed to provide the best service by spending enough time required for the consultation.
                         We constantly improve our service from the rating and feedback provided by patients.
                         Experience enhanced doctor consultations,ensuring comprehensive analysis and efficient treatment plans tailored to individual patient needs. " />
      </div>
    </div>
  );
};

export default Services;