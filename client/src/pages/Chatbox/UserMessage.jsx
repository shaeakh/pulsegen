import React from "react";

function UserMessage(props) {
  return (
    <div className="flex justify-end items-center w-full">
      <div className="chat chat-end ">
        <div className="chat-bubble bg-secondary text-lime-500">
          {props.msg}
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
