import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoSendSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Const";
import AIMessage from "./AIMessage";
import Navbar from "./Navbar";
import UserMessage from "./UserMessage";

export default function Chatbox() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(false);
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [generatingReport, setGeneratingReport] = useState(false);
  const [reportId, setReportId] = useState(null);

  useEffect(() => {
    setFetching(true);
    const reqMessage = {
      role: "system",
      content: `The patient is ${user.name}, ${user.age} years old, gender: ${user.gender}, blood group: ${user.bloodGroup}, height: ${user.height} cm, weight: ${user.weight}kg. Now greet the patient and ask for the symptoms.`,
    };
    setMessages([reqMessage]);
    console.log("sending request message:", reqMessage);
    const response = fetch(`${BACKEND_URL}/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([reqMessage]),
    });
    response
      .then((res) => res.json())
      .then((data) => {
        console.log("Data Type of Response:", typeof data);
        const responseMessage = {
          role: data.role,
          content: data.content,
        };
        setMessages([reqMessage, responseMessage]);
        setProgress(0);
        console.log("Updated Messages (After Receiving Response):", messages);
      })
      .catch((error) => {
        console.error("Error fetching data from the server", error);
      });
    setFetching(false);
  }, []);

  const handelSendMessage = async () => {
    setFetching(true);
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    console.log("Updated Messages (Before Sending):", updatedMessages);
    setInput("");

    const response = await fetch(`${BACKEND_URL}/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMessages), // Sending the updated messages array
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Data Type of Response:", typeof data);
      const responseMessage = {
        role: data.role,
        content: data.content,
      };
      const updatedMessagesWithResponse = [...updatedMessages, responseMessage];
      setMessages(updatedMessagesWithResponse);
      if (data.progress == undefined) setProgress(100);
      setProgress(data.progress);
      console.log(
        "Updated Messages (After Receiving Response):",
        updatedMessagesWithResponse
      );
    } else {
      console.error("Error fetching data from the server");
    }
    setFetching(false);
  };

  const handleGenerateReport = async () => {
    setGeneratingReport(true);
    const response = await fetch("http://localhost:5000/ai/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat: messages,
        name: user.name,
        age: user.age,
        gender: user.gender,
        bloodGroup: user.bloodGroup,
        height: user.height,
        weight: user.weight,
        phone: user.phone,
        address: user.address,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Report Generated Successfully:", data);
      setReportId(data._id);
    } else {
      console.error("Error generating report", error);
    }
    setGeneratingReport(false);
  };

  const navigateToReport = () => {
    navigate(`/report/${reportId}`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen w-full">
        <div className="border-b-4" style={{ width: "100vw" }}>
          <Navbar />
        </div>

        <ProgressBar
          completed={progress}
          bgColor={"#19392e"}
          height="20px"
          customLabel={"Progress " + progress + "%"}
          labelSize="15px"
          className="w-11/12"
        />
        <div className="grid grid-cols-1 content-between w-2/5 h-dvh">
          <div className="flex flex-col h-full overflow-y-auto">
            {messages.map((msg, index) => {
              if (msg.role === "user") {
                return (
                  <UserMessage className="" key={index} msg={msg.content} />
                );
              } else if (msg.role === "assistant") {
                return <AIMessage key={index} msg={msg.content} />;
              }
            })}
          </div>
          {progress !== 100 ? (
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handelSendMessage();
                  }
                }}
                onChange={(e) => setInput(e.target.value)}
                className="input border-primary border-2 focus:border-2 focus:border-primary focus:outline-none w-full mx-2"
                placeholder="Enter your diseases and symptoms"
              />
              <div
                className="btn bg-transparent border-0 mx-2"
                onClick={handelSendMessage}
                disabled={fetching}
              >
                {fetching ? (
                  <CgSandClock
                    className="color-primary"
                    style={{ height: "35px", width: "35px" }}
                  />
                ) : (
                  <IoSendSharp
                    disabled={fetching}
                    className="color-grey"
                    style={{ height: "35px", width: "35px" }}
                  />
                )}
              </div>
            </div>
          ) : generatingReport ? (
            <button className="btn btn-outline btn-success" disabled={true}>
              Generating Report...
            </button>
          ) : (
            <>
              <button
                className="btn btn-outline btn-success"
                onClick={handleGenerateReport}
              >
                Generate Report
              </button>
              {reportId && (
                <button
                  className="btn btn-outline btn-success"
                  onClick={navigateToReport}
                >
                  View Report
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
