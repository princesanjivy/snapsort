"use client";

import AlertPopup from "@/components/alertPopup";
import { defaultRetrieveFormValues } from "@/types/default";
import { RetrieveDetail } from "@/types/interface";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import ErrorInfo from "@/components/errorInfo";
import Header from "@/components/header";

const Retrieve = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventName = searchParams.get("event"); // assuming eventName will not be null
  const queryParamStr = "?event=" + eventName;

  const [formValues, setFormValues] = useState<RetrieveDetail>(
    defaultRetrieveFormValues
  );

  const [headerTitle, setHeaderTitle] = useState<string>("");
  const [zipLink, setZipLink] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    isVisible: false,
    message: "",
    type: "alert-info",
  });

  useEffect(() => {
    if (eventName) {
      console.log(eventName);

      setFormValues((prevValues) => ({
        ...prevValues,
        ["event"]: eventName,
      }));

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
  }, [router, headerTitle, eventName]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formValues.phone.length != 10) {
      setAlertData({
        isVisible: true,
        message: "phone number invalid!",
        type: "alert-error",
      });
      setTimeout(() => {
        setAlertData({
          isVisible: false,
          message: "",
          type: "",
        });
      }, 3000);
      return;
    }

    setIsLoading(true);

    const payload = JSON.stringify({
      phone_number: formValues.phone,
      table_name: formValues.event,
    });

    console.log(payload);

    const headersList = {
      Accept: "*/*",
    };

    const url =
      "https://rvgh8m72t1.execute-api.ap-south-1.amazonaws.com/v1/retrieve_zip";
    const response = await fetch(url, {
      method: "POST",
      headers: headersList,
      body: payload,
    });

    if (response.ok && response.status === 200) {
      const data = await response.json();
      console.log(data["body"]);

      setZipLink(data["body"]);

      if (data["statusCode"] == 200) {
        setIsLoading(false);
        setAlertData({
          isVisible: true,
          message: "Thanks for using FindYou,",
          type: "alert-info",
        });
        setTimeout(() => {
          setAlertData({
            isVisible: false,
            message: "",
            type: "",
          });
          router.replace("/site");
        }, 3000);
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
    }
  };

  // to download the zip file automatically 
  useEffect(() => {
    if (zipLink) {
      const downloadLink = document.createElement('a');
      downloadLink.href = zipLink;
      downloadLink.download = eventName + ".zip";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }, [zipLink]);

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
                    <span className="label-text">Event</span>
                  </label>
                  <input
                    type="text"
                    placeholder="marriage"
                    className="input input-bordered w-full max-w-xs rounded-lg capitalize"
                    required={true}
                    name="event"
                    value={formValues!.event}
                    disabled={true}
                  />
                </div>
                {isLoading ? (
                  <span className="mt-4 loading loading-dots loading-lg bg-emerald-400"></span>
                ) : (
                  <button
                    type="submit"
                    className="mt-4 btn rounded-lg text-white bg-emerald-400"
                  >
                    FindYou
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

export default Retrieve;
