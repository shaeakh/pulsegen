import React, { useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoSendSharp } from "react-icons/io5";
import { BACKEND_URL } from "../../Const";
import AIMessage from "./AIMessage";
import Navbar from "./Navbar";
import UserMessage from "./UserMessage";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Chatbox() {
  const user = useSelector(state => state.user);
  const navigate =  useNavigate();
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(false);
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(0);

  const handelSendMessage = async () => {
    setFetching(true);
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    console.log("Updated Messages (Before Sending):", updatedMessages);

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
      setProgress(data.progress);
      console.log(
        "Updated Messages (After Receiving Response):",
        updatedMessagesWithResponse
      );
    } else {
      console.error("Error fetching data from the server");
    }
    setInput("");
    setFetching(false);
  };
  const handleGenerateReport = () => {
    navigate('/report')
  };
  return (

    <>
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="border-b-4" style={{ width: "100vw" }}>
        <Navbar />
      </div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Blood Group: {user.bloodGroup}</p>
      
      <div>Progress: {progress}% Completed</div>
      {progress === 100 && (
        <button className="btn btn-outline btn-success" onClick={handleGenerateReport}>Generate Report</button>
      )}
      <div className="grid grid-cols-1 content-between w-2/5 h-dvh">
        <div className="flex flex-col h-full overflow-y-auto">
          {messages.map((msg, index) => {
            if (msg.role === "user") {
              return (
                <UserMessage className="" key={index} msg={msg.content} />
              );
            } else {
              return <AIMessage key={index} msg={msg.content} />;
            }
          })}
        </div>
        {progress !== 100 && (
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
            <dir
              data-key="13"
              className="btn bg-transparent border-0 mx-2"
              onClick={handelSendMessage}
              disabled={fetching}
            >
              {fetching ? (
                <CgSandClock
                  className=" color-primary "
                  style={{ height: "35px", width: "35px" }}
                />
              ) : (
                <IoSendSharp
                  disabled={fetching}
                  className=" color-grey "
                  style={{ height: "35px", width: "35px" }}
                />
              )}
            </dir>
          </div>
        )}
      </div>
    </div>
  </>
  );
}
