"use client";

import AlertPopup from "@/components/alertPopup";
import { defaultLoginFormValues } from "@/types/default";
import { LoginDetail } from "@/types/interface";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Cookies from "js-cookie";
import ErrorInfo from "@/components/errorInfo";
import Header from "@/components/header";

const Admin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventName = searchParams.get("event"); // assuming eventName will not be null
  const queryParamStr = "?event=" + eventName;

  const [formValues, setFormValues] = useState<LoginDetail>(
    defaultLoginFormValues
  );

  const [headerTitle, setHeaderTitle] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    isVisible: false,
    message: "",
    type: "alert-info",
  });

  useEffect(() => {
    const userData = Cookies.get("findyou-user-data");

    if (eventName) {
      console.log(eventName);

      let eSplit = eventName!.split("_");
      let event = eSplit.at(-1);
      let title = "";

      if (event == "birthday") {
        let name = eSplit[0];
        title = name + "'s birthday";
      }

      if (event == "marriage") {
        let groom = eSplit[0];
        let brider = eSplit[1];
        title = groom + " weds " + brider;
      }

      setHeaderTitle(title);
    }

    if (userData) {
      router.replace("/admin/upload" + queryParamStr);
    }
  }, [router, headerTitle]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    if (formValues!.password!.length <= 4) {
      console.log(formValues);
      setIsLoading(false);
      return;
    }

    const payload = JSON.stringify({
      phone_number: formValues.phone,
      password: formValues.password,
    });

    console.log(payload);

    const headersList = {
      Accept: "*/*",
    };

    const url =
      "https://rvgh8m72t1.execute-api.ap-south-1.amazonaws.com/v1/login";
    const response = await fetch(url, {
      method: "POST",
      // headers: headersList,
      body: payload,
    });

    if (response.ok && response.status === 200) {
      const data = await response.json();
      console.log(data);

      if (data["statusCode"] == 200) {
        setIsLoading(false);
        Cookies.set("findyou-user-data", "findyou" + formValues.phone);
        router.replace("/admin/upload" + queryParamStr);
      } else {
        setIsLoading(false);
        setAlertData({
          isVisible: true,
          message: data["body"],
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
    } // TODO: add else part with alerting that password min lenght not satisifed or user not found
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      {alertData.isVisible && (
        <AlertPopup message={alertData.message} type={alertData.type} />
      )}

      {eventName === null || eventName === "" ? (
        <ErrorInfo />
      ) : (
        <>
          <Header
            title={headerTitle}
            description="Register your contact details"
          />

          {/* Body area starts  */}
          <div className="flex flex-grow justify-center items-center">
            <div className="bg-emerald-50 p-8 mx-10 m-10 w-full md:w-5/12 lg:w-4/12 2xl:w-3/12 h-min rounded-xl shadow-2xl">
              <form
                className="flex flex-col gap-4 justify-center items-center"
                onSubmit={handleSubmit}
              >
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="1234567890"
                    className="input input-bordered w-full max-w-xs rounded-lg lowercase"
                    required={true}
                    name="phone"
                    value={formValues!.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered w-full max-w-xs rounded-lg"
                    required={true}
                    name="password"
                    value={formValues!.password}
                    onChange={handleChange}
                  />
                </div>
                {isLoading ? (
                  <span className="mt-4 loading loading-dots loading-lg bg-emerald-400"></span>
                ) : (
                  <button
                    type="submit"
                    className="mt-4 btn rounded-lg text-white bg-emerald-400"
                  >
                    Login
                  </button>
                )}
              </form>
            </div>
          </div>
          {/* Body area ends */}
        </>
      )}
    </>
  );
};

export default Admin;
