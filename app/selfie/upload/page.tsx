"use client";

import { ChangeEvent, useRef, useState } from "react";
import { useData } from "@/context/dataContext";
import { useRouter } from "next/navigation";
import AlertPopup from "@/components/alertPopup";
import { UserDetail } from "@/types/interface";
import Header from "@/components/header";
import ErrorInfo from "@/components/errorInfo";
import Image from "next/image";

const Upload = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [alertData, setAlertData] = useState({
    isVisible: false,
    message: "",
    type: "alert-info",
  });

  const [canSubmit, setCanSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [pickedImage, setPickedImage] = useState<string | undefined>(undefined);

  const { sharedData } = useData<UserDetail>();

  if (sharedData != null) {
    console.log(sharedData.email);
  } else {
    return <ErrorInfo />;
  }

  const moveNextPage = () => {
    console.log("move next page");
    router.push("/selfie/success");
  };

  const handleCameraImg = () => {
    console.log("open camera");
  };

  const handleUploadImg = () => {
    // Trigger the file input click when the Upload div is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file && file.type === "image/jpeg") {
      console.log("Selected file:", file);
      const imageUrl = URL.createObjectURL(file);
      setPickedImage(imageUrl);

      setSelectedImage(file || null);
      setCanSubmit(true);
    } else {
      console.log("Please select a valid JPG image.");
      // TODO: replace with <AlertPopup/>
    }
  };

  const loadImageData = (imgFile: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result;
        console.log(result);

        resolve(result);
      };

      reader.onerror = reject;
      reader.readAsDataURL(imgFile!);
    });
  };

  const uploadData = async () => {
    setIsLoading(true);

    const imageData = await loadImageData(selectedImage!);

    const payload = JSON.stringify({
      folder_name: sharedData.event,
      user_name: sharedData.name,
      email: sharedData.email,
      phone_number: sharedData.phone,
      image_name: selectedImage!.name,
      image_data: imageData,
      status: "uploaded",
    });

    console.log(payload);

    const headersList = {
      Accept: "*/*",
      "Content-Type": "image/jpg",
    };

    const url =
      "https://rvgh8m72t1.execute-api.ap-south-1.amazonaws.com/v1/selfi-upload";
    const response = await fetch(url, {
      method: "POST",
      headers: headersList,
      body: payload,
    });

    if (response.ok && response.status === 200) {
      console.log(response.body);
      console.log(response);

      // setAlertData({
      //   isVisible: true,
      //   message: "uploaded successfully!",
      //   type: "alert-info",
      // });

      // setTimeout(() => {
      //   setAlertData({
      //     isVisible: false,
      //     message: "",
      //     type: "",
      //   });

      //   moveNextPage();
      // }, 3000);

      setIsLoading(false);
      setCanSubmit(false);
      moveNextPage();

      // setAlertData({
      //   isVisible: true,
      //   message: "you'll recieve a mail shortly!",
      //   type: "alert-info",
      // });

      // setTimeout(() => {
      //   setAlertData({
      //     isVisible: false,
      //     message: "",
      //     type: "",
      //   });
      // }, 5000);
    } else {
      setAlertData({
        isVisible: true,
        message: "internal server error; try again!",
        type: "alert-error",
      });

      setTimeout(() => {
        setAlertData({
          isVisible: false,
          message: "",
          type: "",
        });
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <>
      {alertData.isVisible && (
        <AlertPopup message={alertData.message} type={alertData.type} />
      )}
      <Header title={sharedData.eventHeaderTitle!} description="Upload your selfie" />
      <div className="p-8 w-full h-max">
        <div className="m-2 text-md text-center">
          Please ensure that your face is directly facing the camera when taking
          the photo. This will help capture a clear and well-framed image.
        </div>
      </div>
      <div className="my-10"></div>
      <div className="flex flex-col justify-center items-center">
        {canSubmit ? (
          <Image
            src={pickedImage!}
            alt="Selected Image"
            className="bg-emerald-50 text-slate-500 flex justify-center items-center mb-10 w-40 h-40 rounded-xl shadow-2xl"
          />
        ) : (
          <>
            {/* <div
              className="bg-emerald-50 font-bold text-slate-500 flex justify-center items-center mb-10 w-40 h-40 rounded-xl shadow-2xl"
              onClick={handleCameraImg}
            >
              Camera
            </div> */}

            <div>
              <input
                type="file"
                accept="image/jpeg"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <div
                className="bg-emerald-50 font-bold text-slate-500 flex justify-center items-center mb-10 w-40 h-40 rounded-xl shadow-2xl"
                onClick={handleUploadImg}
              >
                Upload
              </div>
            </div>
          </>
        )}
        {canSubmit ? (
          <span>Click on the submit button below</span>
        ) : (
          <span>Please take/upload photo</span>
        )}
        {isLoading ? (
          <span className="mt-4 loading loading-dots loading-lg bg-emerald-400"></span>
        ) : (
          <button
            type="button"
            className="mt-4 btn rounded-lg text-white bg-emerald-400"
            disabled={!canSubmit}
            onClick={uploadData}
          >
            Submit
          </button>
        )}
      </div>
      <div className="my-20"></div>
    </>
  );
};

export default Upload;
