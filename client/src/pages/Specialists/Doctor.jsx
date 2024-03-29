import React from "react";
import { Badge } from "flowbite-react";

export default function Doctor(props) {
    
  return (
    <div className="w-full border-2 border-grey hover:shadow-md  rounded-lg flex flex-row bg-white mb-2">
      <div className="flex flex-row w-5/12 ">
        <div className="w-1/3    flex p-2">
          <img src={props.img} />
        </div>
        <div className="flex flex-col p-2">
          <p className="font-bold">{props.name}</p>
          <p>{props.deg}</p>
          <p className="text-slate-500	mb-2">specialities</p>
          <div className="flex flex-row justify-start">
            <div className="badge badge-primary text-white mr-2">
              <Badge className="bg-primary" size="sm">
              {props.badge}
              </Badge>
            </div>

            <p>{props.tag}</p>
          </div>
          <div className="badge badge-primary bg-white border-primary text-primary   mr-2">
            <Badge className="" size="sm">
              {props.active==true ? "true" : "false"  } 
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-4/12  p-2">
        <div className="flex flex-col items-start">
          <div className="text-slate-500	">Working in</div>
          <div className="font-bold">{props.place}</div>
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-col items-start w-1/2">
              <div className="text-slate-500">Total Experience</div>
              <div className="font-bold">{props.exp} Years+</div>
            </div>
            <div className="flex flex-col items-start w-1/2">
              <div className="text-slate-500">Total Rating({props.r_n})</div>
              <div className="font-bold">{props.rating}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 rounded-tr-lg rounded-br-lg bg-slate-300 p-10">
        <div className="flex flex-row items-center justify-start">
          <div className="text-5xl font-bold hover:text-red">৳</div>
          <div className="text-4xl font-bold">{props.c_fee} </div>
        </div>
        <div className="text-slate-500">Per Consultation</div>
      </div>
    </div>
  );
}
