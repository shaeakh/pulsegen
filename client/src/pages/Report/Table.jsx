import React from "react";

export default function Table(props) {
  return (
    <div>
      <div className="overflow-x-auto m-5 mt-20">
        {/* hospital name and logo  */}
        <div className="w-full h-25  p-5 flex justify-start items-center bg-base-200 mt-2">
          <div className="font-bold text-xl">{props.doc_name}</div>
          <div className="font-bold text-xl ml-5">{props.hos_name}</div>
          <div className="w-max border-2 ml-5">
            <img
              src={props.logo_link}
              className="object-contain h-25 w-20"
              alt="Logo"
            />
          </div>
          
        </div>
        <table className="table">
          {/* head */}
          <thead>
            
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="w-36 ">Name</th>
              <td>{props.p_name}</td>              
            </tr>
            {/* row 2 */}
            <tr>
              <th className="w-36 ">Age</th>
              <td>{props.age}</td>
              
            </tr>
            {/* row 3 */}
            <tr>
              <th className="w-36 ">Gender</th>
              <td>{props.gender}</td>
              
            </tr>
            <tr>
              <th className="w-36 ">Report SL</th>
              <td>{props.report_sl}</td>              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
