import React from "react";
import Button from "./Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="w-full border-2 border-black hover:shadow-md  rounded-lg flex flex-row bg-white ">
      <div className="flex flex-row w-5/12 ">
        <div className="w-1/3    flex p-2">
          <img src="https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/73771/profile_photos/dlRSNss3ELcRYe4O0n7GzOXquTjw9DWtTyF1QAnY.jpg" />
        </div>
        <div className="flex flex-col p-2">
          <p className="font-bold">Dr. Md. Mahbubul Islam</p>
          <p>MBBS, BCS(Health), DLO (ENT)</p>
          <p>Rank</p>
          <div className="flex flex-row justify-start">
            <div className="badge badge-primary text-white mr-2">
              <Badge className="bg-primary" size="sm">
                ENT Specialist
              </Badge>
            </div>

            <p>Tag</p>
          </div>
          <div className="badge badge-primary bg-white border-primary text-primary   mr-2">
            <Badge className="" size="sm">
              Active now
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-4/12  p-2">
        <div className="flex flex-col items-start">
          <div className="text-slate-500	">Working in</div>
          <div className="font-bold">Dhaka Medical College</div>
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-col items-start w-1/2">
              <div className="text-slate-500">Total Experience</div>
              <div className="font-bold">9 Years+</div>
            </div>
            <div className="flex flex-col items-start w-1/2">
              <div className="text-slate-500">Total Rating(3322)</div>
              <div className="font-bold">4.5+</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 rounded-tr-lg rounded-br-lg bg-slate-300 p-10">
        <div className="flex flex-row items-center justify-start">
          <div className="text-5xl font-bold hover:text-red">৳</div>
          <div className="text-4xl font-bold">410 </div>
        </div>
        <div className="text-slate-500">Per Consultation</div>
      </div>
    </div>
  );
};

export default Contact;
