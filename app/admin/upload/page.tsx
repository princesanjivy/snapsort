"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/header";

const Upload = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventName = searchParams.get("event"); // assuming eventName will not be null

  const [headerTitle, setHeaderTitle] = useState<string>("");
  const [event, setEvent] = useState<string>("");
  const [userData, setUserData] = useState<string | null>(null);

  const [selectedZip, setSelectedZip] = useState<File | null>(null);

  const [canUpload, setCanUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const c = Cookies.get("findyou-user-data");

    if (!c) {
      router.replace("/selfie"); // show error page
    } else {
      setUserData("user-present"); // this string doesn't actually used anywhere

      if (eventName) {
        let eSplit = eventName!.split("_");
        let event = eSplit.at(-1);

        let title = "";

        if (event == "birthday") {
          let name = eSplit[0];
          title = name + "'s birthday";
          event = name + " " + event;
        }

        if (event == "marriage") {
          let groom = eSplit[0];
          let brider = eSplit[1];
          title = groom + " weds " + brider;
          event = groom + " " + brider + " " + event;
        }

        setHeaderTitle(title);
        setEvent(event!);
      }
    }
  }, [userData, headerTitle, event]);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    console.log(file);

    setSelectedZip(file || null);
    setCanUpload(true);
  };

  const handleUpload = async () => {
    setIsLoading(true);

    const url =
      "https://rvgh8m72t1.execute-api.ap-south-1.amazonaws.com/v1/bulk_upload";

    const payload = JSON.stringify({
      zip_name: `${eventName}.zip`,
    });

    console.log(payload);

    const headersList = {
      Accept: "*/*",
      "Content-Type": "image/jpg",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headersList,
      body: payload,
    });

    if (response.ok && response.status === 200) {
      const data = await response.json();
      console.log(data.body);

      const preSignedUrl = data.body;
      const response1 = await fetch(preSignedUrl, {
        method: "PUT",
        body: selectedZip,
      });
      if (response1.ok && response1.status === 200) {
        console.log(response1);
        // const uploadedData = await response1.json();
        // console.log(uploadedData);
        router.replace("/admin/success")
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Header title={headerTitle} description="" />

      {/* Body area starts */}
      <div className="flex flex-grow justify-center items-center">
        {userData && (
          // <span className="mt-4 loading loading-dots loading-lg bg-emerald-400"></span>
          <div className="flex flex-col justify-center items-center text-center bg-emerald-50 p-8 m-10 w-full h-min rounded-xl shadow-2xl">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Event</span>
              </label>
              <input
                type="text"
                placeholder={event}
                className="input input-bordered w-full max-w-xs rounded-lg capitalize"
                disabled
              />
            </div>
            <div>
              <input
                type="file"
                accept=" application/zip"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <div>
                <button
                  type="button"
                  className="mt-4 btn rounded-lg text-white bg-emerald-400"
                  onClick={handleUploadClick}
                >
                  Upload photos zip
                </button>
                {selectedZip && (
                  // <span className="pl-2 text-xs">{eventName + ".zip"}</span>
                  <span className="pl-2 text-xs">{selectedZip.name}</span>
                )}
              </div>
            </div>

            {isLoading ? (
              <span className="mt-4 loading loading-dots loading-lg bg-emerald-400"></span>
            ) : (
              <button
                type="button"
                className="mt-4 btn rounded-lg text-white bg-emerald-400"
                disabled={!canUpload}
                onClick={handleUpload}
              >
                Save
              </button>
            )}
          </div>
        )}
      </div>
      {/* Body area ends */}
    </>
  );
};

export default Upload;
