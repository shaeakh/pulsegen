import React from "react";
import Menu from "./Menu";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

export default function Investigation(props) {
  const illness = props.p_ill;
  const past_history = props.past_history;

  return (
    <div>
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
            <thead></thead>
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
      <div className="w-screen flex flex-row">
        <div className="cc w-1/2 my-5 ml-5 mr-2 border-2 border-primary rounded-3xl  p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2"> Past History:</h2>
          <table>
            {past_history.map((history, index) => {
              return (
                <tr>
                  <th className="flex justify-start">{history.type}</th>
                  <td className="font-bold">:</td>
                  <td>{history.details}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="w-1/2">
          <div className="present my-5 ml-2 mr-5 bg-gray-100 border-2 border-primary rounded-3xl  p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2"> Present Illness:</h2>

            {illness.map((ill, index) => {
              return <li>{ill.illness}</li>;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="btn bg-primary text-white  w-1/6 hover:text-primary hover:font-bold hover:border-primary hover:border-2">
          Download Report
        </div>
      </div>
      <Footer2 />
      <Footer1 />
    </div>
  );
}
