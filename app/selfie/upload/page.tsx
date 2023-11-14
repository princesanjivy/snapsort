"use client";

import { ChangeEvent, useRef, useState } from "react";

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [canSubmit, setCanSubmit] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [pickedImage, setPickedImage] = useState<string | undefined>(undefined);

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

  return (
    <>
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
        <button
          type="button"
          className="mt-4 btn rounded-lg text-white bg-emerald-400"
          disabled={!canSubmit}
        >
          Submit
        </button>
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
