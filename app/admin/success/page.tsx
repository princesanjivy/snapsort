const Success = () => {
  return (
    <>
      {/* Body area ends */}
      <div className="flex flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center bg-emerald-50 p-8 m-10 h-min rounded-xl shadow-2xl">
          <span className="text-3xl text-emerald-600 font-bold">Thank you</span>
          <br />
          <span className="text-emerald-500 font-semibold">
            Your zip file is uploaded successfully!
          </span>
          {/* studio image will come here */}
          <div className="my-10 w-32 h-32 bg-amber-100 rounded-full"></div>
          <h1 className="text-lg font-semibold">Studio Name</h1>
          {/* subscribe part */}
          <div className="m-2 text-md text-center">
            Dont know what content to put here 😂
          </div>
        </div>
      </div>
      {/* Body area ends */}
    </>
  );
};

export default Success;
