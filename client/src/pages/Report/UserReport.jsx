import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbGenderBigender } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../Const";
import icon from "../../assets/icon_light.png";

const UserReport = () => {
  const { id } = useParams();
  console.log("id", id);
  const [reportData, setReportData] = useState(null);
  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/user/report/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch report");
        }
        const data = await response.json();
        setReportData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReport();
  }, [id]);
  if (!reportData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    age,
    gender,
    address,
    phone,
    c_c,
    history,
    summary,
    date,
    height,
    weight,
  } = reportData;
  const qr = `https://pulsegen.xyz/report/${id}`;

  return (
    <div className=" flex flex-col items-center">
      <div className="flex flex-col items-center m-8 lg:mx-24">
        <header className="flex flex-row justify-between items-center w-full m-2">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <img
                src={icon}
                alt="icon"
                className="aspect-square w-report_icon"
              />
              <h1 className="text-4xl text-primary font-bold ml-4">
                PulseGen{" "}
              </h1>
            </div>
            <h4 className="text-2xl font-semibold text-primary mt-1">
              Primary Diagnostic Report
            </h4>
          </div>
          <div>
            <QRCode
              size={140}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={qr}
              viewBox={`0 0 256 256`}
            />
          </div>
        </header>
        {/* date & ID */}
        <div className="flex justify-between w-full border-b-2 border-t-2 py-2 border-secondary">
          <p>
            <strong className=" text-primary">Date: </strong>
            {date}
          </p>
          <p>
            <strong className=" text-primary">Report ID: </strong>
            {id} {/* Correct variable name */}
          </p>
        </div>
        {/* patient info */}
        <div className="flex w-full justify-between items-end">
          <div>
            <p className="font-medium text-xl">{name}</p>
            <p>{age} years</p>
            <p className="flex items-center">
              <TbGenderBigender />
              <strong className=" mr-1">:</strong>
              {gender}
            </p>
          </div>
          {/* div at right with everything in it align in right */}
          <div className="flex flex-col items-end">
            <p className="flex items-center">
              +88
              {phone}
            </p>
            <p className="flex items-center">
              {address}
              <FaLocationDot className="ml-1" />
            </p>
          </div>
        </div>
        {/* C/C & History */}
        <div className="flex w-full">
          {/* C/C */}
          <div className="flex flex-col items-start w-1/2 m-4 bg-neutral p-4 rounded-lg">
            <h2 className=" text-xl font-extrabold underline underline-offset-2 text-primary">
              C/C:
            </h2>
            <ReactMarkdown className="prose prose-li:m-0 prose-strong:font-bold">
              {c_c}
            </ReactMarkdown>
          </div>
          {/* History */}
          <div className="flex flex-col items-start w-1/2 m-4 bg-neutral p-4 rounded-lg">
            <h2 className=" text-xl font-extrabold underline underline-offset-2 text-primary">
              History:
            </h2>
            <ReactMarkdown className="prose prose-li:m-0 prose-strong:font-bold">
              {history}
            </ReactMarkdown>
          </div>
        </div>
        {/* Summary */}
        <div className="flex w-full flex-col items-start m-4 bg-neutral p-4 rounded-lg">
          <h2 className=" text-xl font-extrabold underline underline-offset-2 text-primary">
            Summary:
          </h2>
          <ReactMarkdown className="prose prose-li:m-0 prose-strong:font-bold">
            {summary}
          </ReactMarkdown>
        </div>
        {/* footer */}
        <div className="flex text-primary items-center p-2 w-full border-double border-primary border-4 text-sm mt-8 justify-self-end">
          <strong className="mr-2">N.B.</strong>
          <p className="flex items-center border-l-2 border-primary pl-2">
            This AI-generated report is for preliminary guidance only and should
            not replace professional medical consultation. Always seek the
            advice of a qualified healthcare provider for proper diagnosis and
            treatment.
          </p>
        </div>
      </div>
      <button
        onClick={() => window.print()}
        className="bg-primary text-white p-2 rounded-lg m-4"
      >
        Print/Download
      </button>
    </div>
  );
};

export default UserReport;
