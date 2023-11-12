"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const RowText = () => {
  return (
    <div className="flex flex-col justify-around md:flex-row">
      <div className="mb-4 md:mr-4">
        <label className="mb-2 block">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          required={true}
          className="input input-bordered rounded-lg w-full max-w-xs"
        />
      </div>
      <div className="mb-4 md:mr-4">
        <label className="mb-2 block">Email</label>
        <input
          type="email"
          placeholder="test@mail.com"
          required={true}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

interface OnEventNameChangeProps {
  onEventNameChange: (newEventName: string | null) => void;
}

const GetQueryText = (props: OnEventNameChangeProps) => {
  const searchParams = useSearchParams();
  const eventName = searchParams.get("event");

  console.log(eventName);

  // props.onEventNameChange(eventName);

  useEffect(() => {
    // Call the callback function to update the parent component's state
    props.onEventNameChange(eventName);
  }, [eventName, props.onEventNameChange]);


  return (
    <div>
      {eventName && (
        <h1 className="mx-2 text-xl text-red-500">
          Event name: {eventName.trim()}
        </h1>
      )}
    </div>
  );
};

export default function Test() {
  // State to hold the eventName value
  const [eventName, setEventName] = useState<string | null>(null);

  // Callback function to update the eventName state
  const handleEventNameChange = (newEventName: string | null) => {
    setEventName(newEventName);
  };


  return (
    // <div>
    //   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //     <form className="card-body">
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Email</span>
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="email"
    //           className="input input-bordered"
    //           required
    //         />
    //       </div>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Password</span>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="password"
    //           className="input input-bordered"
    //           required
    //         />
    //         <label className="label">
    //           <a href="#" className="label-text-alt link link-hover">
    //             Forgot password?
    //           </a>
    //         </label>
    //       </div>
    //       <div className="form-control mt-6">
    //         <button className="btn btn-primary">Login</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <>
      <GetQueryText onEventNameChange={handleEventNameChange} />
      {/* Use the eventName value in this component */}
      {eventName && (
        <h2>Event name from GetQueryText: {eventName}</h2>
      )}
      <div className="flex justify-center items-center">
        <div className="bg-white p-10 w-max rounded-lg shadow-2xl flex items-center">
          <div className="bg-blue-500 w-10 h-10"></div>
          <div className="bg-amber-500 w-10 h-20"></div>
          <div className="bg-red-500 w-10 h-40"></div>
        </div>
      </div>

      <div className="bg-white p-8 m-10 w-6/12 rounded-lg shadow-2xl">
        <div className="flex justify-evenly">
          <div>
            <label className="mb-2 block">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="mb-2 block">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>

      {/* Second card below */}
      <div className="flex justify-center">
        <div className="bg-white p-8 m-10 w-max md:w-7/12 2xl:w-5/12 rounded-lg shadow-2xl">
          <form>
            <div>
              <RowText />
              <RowText />
              <RowText />

              <div className="mt-4 md:m-0 flex justify-center">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div style={{ width: "min-content", border: "1px solid black" }}>
          This div will be as narrow as its content allows.
          <div className="bg-blue-500 w-40 h-20"></div>
        </div>

        <div style={{ width: "max-content", border: "1px solid black" }}>
          This div will expand to the maximum width needed by its content.
          <div className="bg-blue-500 w-40 h-20"></div>
        </div>
      </div>
    </>
  );
}
