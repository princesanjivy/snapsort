"use client";

import { ChangeEvent, useState } from "react";

const UploadButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);
  };

  const uploadDataNUrlGet = async () => {
    setIsLoading(true);

    let imageName = "sanjivy.jpg";

    if (!selectedImage) {
      alert("Image not selected!");
      setIsLoading(false);

      return;
    }

    let headersList = {
      Accept: "*/*",
      "Content-Type": "image/jpg",
    };

    let bodyContent = JSON.stringify({
      folder_name: "marriage",
      image_name: imageName,
      phone_number: "9443377775",
      user_name: "sanjivy",
    });

    let url =
      "https://rvgh8m72t1.execute-api.ap-south-1.amazonaws.com/v1/selfi-upload";

    const response = await fetch(url, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    if (response.ok && response.status === 200) {
      const data = await response.json();
      const preSignedUrl = JSON.parse(data.body).fileUploadURL;

      console.log(preSignedUrl);

      const imageData = new FormData();
      imageData.append(imageName, selectedImage);

      try {
        const response = await fetch(preSignedUrl, {
          method: "PUT",
          body: selectedImage,
          headers: headersList,
        });

        if (response.ok) {
          alert("Image uploaded successfully!");
          setSelectedImage(null);
        } else {
          alert("Image upload failed!");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      setIsLoading(false);
    } else {
      console.log(response.status);
    }
  };

  return (
    <div>
      {isLoading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <>
          <input
            type="file"
            accept="image/jpg"
            onChange={handleImageChange}
            className="file-input w-full max-w-xs"
          />
          <button className="btn m-4" onClick={uploadDataNUrlGet}>
            Upload image
          </button>
        </>
      )}
    </div>
  );
};

export default UploadButton;
