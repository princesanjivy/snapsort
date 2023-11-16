const ErrorInfo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center text-center">
        <h1 className="text-emerald-500 font-semibold">
          Something went wrong, please scan the QR code again!
        </h1>
      </div>
    </div>
  );
};

export default ErrorInfo;