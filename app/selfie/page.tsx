"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AlertPopup from "@/components/AlertPopup";

const Selfie = () => {
  const router = useRouter();

  const moveNextPage = () => {
    console.log("move next page");
    router.push("/selfie/upload");
  };

  const [formValues, setFormValues] = useState({
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

    console.log(formValues);
    if (formValues.phone.length == 10) {
      moveNextPage();
    } else {
      setAlertData({
        isVisible: true,
        message: "Phone number is invalid!",
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
      <div className="p-8 bg-emerald-400 w-full h-max">
        <div className="text-white text-3xl text-center uppercase font-semibold italic">
          Groom weds Bride
        </div>
        <div className="mt-8 text-white text-xl text-center opacity-80 font-medium">
          Get your event photos
        </div>
        <div className="mt-1 text-gray-700 text-lg text-center opacity-30">
          Register your contact details
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-emerald-50 p-8 m-10 w-full rounded-xl shadow-2xl">
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
    </>
  );
};

export default Selfie;
