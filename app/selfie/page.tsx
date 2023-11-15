"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AlertPopup from "@/components/alertPopup";
import { useData } from "@/context/dataContext";
import Header from "@/components/header";
import ErrorInfo from "@/components/errorInfo";

const Selfie = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventName = searchParams.get("event");

  const { setSharedDataValue } = useData();

  const moveNextPage = () => {
    console.log("move next page");
    router.push("/selfie/upload");
  };

  const [formValues, setFormValues] = useState({
    event: eventName!,
    name: "",
    email: "",
    phone: "",
  });

  const [alertData, setAlertData] = useState({
    isVisible: false,
    message: "",
    type: "alert-info",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formValues.phone.length == 10) {
      console.log(formValues);

      setSharedDataValue(formValues);
      moveNextPage();
    } else {
      setAlertData({
        isVisible: true,
        message: "phone number is invalid!",
        type: "alert-error",
      });

      setTimeout(() => {
        setAlertData({
          isVisible: false,
          message: "",
          type: "",
        });
      }, 3000);
    }
  };

  if (eventName === null || eventName === "") {
    return <ErrorInfo />;
  }

  // setFormValues((prevValues) => ({
  //   ...prevValues,
  //   ["event"]: eventName,
  // }));

  return (
    <>
      {alertData.isVisible && (
        <AlertPopup message={alertData.message} type={alertData.type} />
      )}
      <div className="flex flex-col">
        <Header description="Register your contact details" />

        {/* Body area */}
        <div className="flex flex-grow justify-center">
          <div className="bg-emerald-50 p-8 m-10 w-full h-min rounded-xl shadow-2xl">
            <form
              className="flex flex-col gap-4 justify-center items-center"
              onSubmit={handleSubmit}
            >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Event</span>
                </label>
                <input
                  type="text"
                  placeholder="marriage"
                  className="input input-bordered w-full max-w-xs rounded-lg capitalize"
                  disabled
                  name="event"
                  value={formValues.event}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full max-w-xs rounded-lg capitalize"
                  required={true}
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="john@findyou.com"
                  className="input input-bordered w-full max-w-xs rounded-lg lowercase"
                  required={true}
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="1234567890"
                  className="input input-bordered w-full max-w-xs rounded-lg"
                  required={true}
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="mt-4 btn rounded-lg text-white bg-emerald-400"
              >
                Next
              </button>
              {/* <Link
              type="submit"
              className="mt-4 btn rounded-lg text-white bg-emerald-400"
              href="/selfie/upload"
            >
              Next
            </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selfie;
