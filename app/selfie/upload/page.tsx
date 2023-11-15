"use client";

import { ChangeEvent, useRef, useState } from "react";
import { useData } from "@/components/DataContext";
import { useRouter } from "next/navigation";
import AlertPopup from "@/components/AlertPopup";

interface UserData {
  event: string;
  name: string;
  email: string;
  phone: string;
}

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

  const { sharedData } = useData<UserData>();

  if (sharedData != null) {
    console.log(sharedData.email);
  } else {
    return (
      <>
        <div className="p-8 bg-emerald-400 w-full h-max">
          <div className="text-white text-3xl text-center uppercase font-semibold italic">
            Groom weds Bride
          </div>
          <div className="mt-8 text-white text-xl text-center opacity-80 font-medium">
            Get your event photos
          </div>
        </div>
        <div className="my-20 text-center">
          Oops something wrong! <br /> Try again by scanning the QR code!
        </div>
      </>
    );
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

  const uploadData = async () => {
    let imageData;
    setIsLoading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      console.log(result);

      imageData = result;
    };
    reader.readAsDataURL(selectedImage!);

    const payload = JSON.stringify({
      folder_name: sharedData.event,
      user_name: sharedData.name,
      email: sharedData.email,
      phone_number: sharedData.phone,
      image_name: selectedImage!.name,
      image_data: imageData, // image data url
      status: "uploaded",
    });

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

      setAlertData({
        isVisible: true,
        message: "uploaded successfully!",
        type: "alert-info",
      });

      setTimeout(() => {
        setAlertData({
          isVisible: false,
          message: "",
          type: "",
        });

        moveNextPage();
      }, 3000);

      setIsLoading(false);
      setCanSubmit(false);

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
      <div className="p-8 bg-emerald-400 w-full h-max">
        <div className="text-white text-3xl text-center uppercase font-semibold italic">
          Groom weds Bride
        </div>
        <div className="mt-8 text-white text-xl text-center opacity-80 font-medium">
          Get your event photos
        </div>
        <div className="mt-1 text-gray-700 text-lg text-center opacity-30">
          Upload your selfie
        </div>
      </div>
      <div className="my-10"></div>
      <div className="flex flex-col justify-center items-center">
        {/* <div
          className="bg-emerald-50 text-slate-500 flex justify-center items-center my-10 w-40 h-40 rounded-xl shadow-2xl"
          onClick={handleCameraImg}
        >
          Camera
        </div> */}
        {canSubmit ? (
          <img
            src={pickedImage}
            alt="Selected Image"
            className="bg-emerald-50 text-slate-500 flex justify-center items-center mb-10 w-40 h-40 rounded-xl shadow-2xl"
          />
        ) : (
          <div>
            <input
              type="file"
              accept="image/jpeg"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <div
              className="bg-emerald-50 text-slate-500 flex justify-center items-center mb-10 w-40 h-40 rounded-xl shadow-2xl"
              onClick={handleUploadImg}
            >
              Upload
            </div>
          </div>
        )}
        {canSubmit ? (
          <span>Click on the submit button below</span>
        ) : (
          <span>Please take/upload photo</span>
        )}
        {isLoading ? (
          <span className="loading loading-dots loading-lg bg-emerald-400"></span>
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
      <div className="absolute bottom-0 p-8 bg-emerald-400 w-full h-max">
        <div className="m-2 text-white text-md text-center opacity-60">
          Please ensure that your face is directly facing the camera when taking
          the photo. This will help capture a clear and well-framed image.
        </div>
      </div>
    </>
  );
};

export default Upload;
