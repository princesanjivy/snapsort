"use client";

import { useState } from "react";

const GetDetails = () => {
  const [eventName, setEventName] = useState("");
  const [imageName, setImageName] = useState("");
  const [phNum, setPhNum] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="m-4 flex justify-evenly">
        <input
          type="text"
          placeholder="Event name"
          value={eventName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Image name"
          value={imageName}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="m-4 flex justify-evenly">
        <input
          type="text"
          placeholder="Phone number"
          value={phNum}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Name"
          value={userName}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
};

export default GetDetails;
