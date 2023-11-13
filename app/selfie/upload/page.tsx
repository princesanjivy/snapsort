const Upload = () => {
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
            <div className="flex flex-col justify-center items-center">
                <div className="bg-emerald-50 text-slate-500 flex justify-center items-center my-10 w-40 h-40 rounded-xl shadow-2xl">
                    Camera
                </div>
                <div className="bg-emerald-50 text-slate-500 flex justify-center items-center mb-10 w-40 h-40 rounded-xl shadow-2xl">
                    Upload
                </div>
                <span>Please take/upload photo</span>
            </div>
            <div className="my-20"></div>
            <div className="p-8 bg-emerald-400 w-full h-max">
                <div className="m-2 text-white text-md text-center opacity-60">
                    Please ensure that your face is directly facing the camera when taking the photo.
                    This will help capture a clear and well-framed image.
                </div>
            </div>
        </>
    );
};

export default Upload;