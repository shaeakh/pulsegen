import React, { useRef } from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import Investigation from "./Investigation";
import { useSelector } from 'react-redux';

export default function ReportPage(props) {
  const user = useSelector(state => state.user);
  const P_details = {
    doc_name: "Kunan Dalal",
    date: Date("2024-03-30"),
    hos_name: "Labaid Diagnostic Center",
    logo_link:
      "data:image/png;base64,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",
    p_name: `${user.name}`,
    age: `${user.age}`,
    gender: `${user.gender}`,
    report_sl: 2024032400001,
    present_ill: [
      {
        illness: "cough",
      },
      {
        illness: "Fever",
      },
      {
        illness: "Having Backpain",
      },
    ],
    past_history: [
      {
        type: "Cronic Disease",
        details: "blah blah",
      },
      {
        type: "Surgery",
        details: "blah blah",
      },
      {
        type: "vaccination status",
        details: "blah blah",
      },
      {
        type: "Family History",
        details: "blah blah",
      },
      {
        type: "Period Status (woman)",
        details: "blah blah",
      },
      {
        type: "Travel History",
        details: "blah blah",
      },
    ],
  };
  
  
  return (
    <div className="flex flex-col items-between ">
      <Navbar />
      <Investigation
      className="m-2 "
      doc_name={P_details.doc_name}
      hos_name={P_details.hos_name}
      logo_link={P_details.logo_link}
      p_name={P_details.p_name}
      age={P_details.age}
      gender={P_details.gender}
      report_sl={P_details.report_sl}
        p_ill={P_details.present_ill}
        past_history={P_details.past_history}
        
      />
      
    </div>
  );
}
