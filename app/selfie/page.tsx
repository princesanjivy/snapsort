"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AlertPopup from "@/components/alertPopup";
import { useData } from "@/context/dataContext";
import Header from "@/components/header";
import ErrorInfo from "@/components/errorInfo";
import { EventBirthday, EventMarriage, UserDetail } from "@/types/interface";
import { defaultFormValues } from "@/types/default";
import Link from "next/link";

const Selfie = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventName = searchParams.get("event");

  const { setSharedDataValue } = useData();

  const moveNextPage = () => {
    console.log("move next page");
    router.push("/selfie/upload");
  };

  const [formValues, setFormValues] = useState<UserDetail>(defaultFormValues);

  const [alertData, setAlertData] = useState({
    isVisible: false,
    message: "",
    type: "alert-info",
  });

  const [headerTitle, setHeaderTitle] = useState<string>("");
  // const [eventBirthday, setEventBirthday] = useState<EventBirthday | null>(null);
  // const [eventMarriage, setEventMarriage] = useState<EventMarriage | null>(null);

  // update the event name from query parm to the form fields
  useEffect(() => {
    if (eventName !== null || eventName !== "") {
      console.log(eventName);


      let eSplit = eventName!.split("_");

      let event = eSplit.at(-1);
      let title = "";

      // setFormValues((prevValues) => ({
      //   ...prevValues,
      //   ["event"]: event,
      // }));

      if (event == "birthday") {
        let name = eSplit[0];
        title = name + "'s birthday";

        setHeaderTitle(title)
        event = name + " " + event

        // setEventBirthday({
        //   name: name
        // });
      }

      if (event == "marriage") {
        let groom = eSplit[0];
        let brider = eSplit[1];
        title = groom + " weds " + brider;

        setHeaderTitle(title)
        event = groom + " " + brider + " " + event

        // setEventMarriage({
        //   brideName: brider,
        //   groomName: groom
        // });
      }

      setFormValues((prevValues) => ({
        ...prevValues,
        ["event"]: event!,
        ["eventHeaderTitle"]: title,
      }));
    }
  }, [eventName, headerTitle]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formValues!.phone!.length == 10) {
      console.log(formValues);

      setSharedDataValue(formValues!);
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

  return (
    <>
      {alertData.isVisible && (
        <AlertPopup message={alertData.message} type={alertData.type} />
      )}
      {eventName === null || eventName === "" ? (
        <ErrorInfo />
      ) : (
        <div className="flex flex-col">
          <Header title={headerTitle} description="Register your contact details" />

          {/* Body area */}
          <div className="flex flex-grow justify-center">
            <div className="bg-emerald-50 p-8 mx-10 mt-10 w-full h-min rounded-xl shadow-2xl">
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
                    placeholder="event"
                    className="input input-bordered w-full max-w-xs rounded-lg capitalize"
                    disabled
                    name="event"
                    value={formValues!.event}
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
                    value={formValues!.name}
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
                    value={formValues!.email}
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
                    value={formValues!.phone}
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

          <div className="mb-10 px-8 w-full h-max">
            <div className="m-2 text-md text-center">
              <Link href="/admin" className="label-text-alt link link-hover">Are you the admin?</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Selfie;
