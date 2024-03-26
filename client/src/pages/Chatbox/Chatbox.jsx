import React, { useState } from 'react';
import AIMessage from './AIMessage';
import UserMessage from './UserMessage';

export default function Chatbox() {
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(false);
  const [messages, setMessages] = useState([]);

  const handelSendMessage = async () => {
    setFetching(true);
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    console.log("Updated Messages (Before Sending):", updatedMessages);

    const response = await fetch('http://localhost:5000/ai/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedMessages) // Sending the updated messages array
    });

    if (response.ok) {
      const data = await response.json();
      const updatedMessagesWithResponse = [...updatedMessages, data];
      setMessages(updatedMessagesWithResponse);
      console.log("Updated Messages (After Receiving Response):", updatedMessagesWithResponse);
    } else {
      console.error('Error fetching data from the server');
    }
    setInput("");
    setFetching(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col w-96 h-96 bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col h-full overflow-y-auto">
            {messages.map((msg, index) => {
              if (msg.role === "user") {
                return <UserMessage key={index} msg={msg.content} />;
              } else {
                return <AIMessage key={index} msg={msg.content} />;
              }
            })}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-lg"
            />
            <button
              onClick={() => {
                handelSendMessage();
              }}
              className="p-2 bg-primary text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

