const Feature = () => {
    return (
        <>
            {/* section 2 begins */}
            <div className="relative w-full mt-10 px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
                <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
                    <h2 className="my-5 text-2xl font-semibold tracking-tight text-indigo-500 uppercase">
                        Our Features
                    </h2>
                    <h3 className="max-w-3xl px-5 mt-2 text-3xl font-black leading-tight text-center text-emerald-500 sm:mt-0 sm:px-0 sm:text-6xl">
                        Easily find and relive your cherished event photos!
                    </h3>

                    <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">

                        <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/3">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="/static/images/guest.jpeg" alt="guest" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">Guest Registration</h2>
                                    <p className="font-medium">guests can conveniently upload their photos by scanning QR code</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/3">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="/static/images/photographer.jpeg" alt="photographer" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">Photographer Upload</h2>
                                    <p className="font-medium">photographer uploads all photos in JPG format into a single zip file</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/3">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="/static/images/access.jpeg" alt="access" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">Easy Access</h2>
                                    <p className="font-medium">guests simply enter their details to retrieve their event photos hassle-free!</p>
                                </div>
                            </div>
                        </div>

                        {/* feature one */}
                        {/* <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/4">
                            <div className="relative flex flex-col items-center justify-center w-full h-full p-12 mr-5 rounded-lg">
                                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                                <svg className="absolute w-full h-full text-emerald-50 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="232" height="256" viewBox="0 0 232 256" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="#FFFFFF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_99_57" transform="matrix(0.00323803 0 0 0.00293255 -0.328934 0)" />
                                        </pattern>
                                        <image className="opacity-60" id="image0_99_57" width="512" height="341" xlinkHref="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=3270&auto=format&fit=crop" />
                                    </defs>
                                </svg>
                                <h4 className="relative mt-6 text-lg font-bold text-center text-indigo-700">Guest Registration</h4>
                                <p className="relative mt-2 font-semibold text-center text-gray-800">
                                    guests can conveniently
                                    upload their photos by
                                    scanning QR code
                                </p>
                            </div>
                        </div> */}

                        {/* feature two */}
                        {/* <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/4">
                            <div className="relative flex flex-col items-center justify-center w-full h-full p-12 mr-5 rounded-lg">
                                <svg className="absolute w-full h-full text-emerald-50 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="232" height="256" viewBox="0 0 232 256" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="#FFFFFF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="url(#pattern1)" />
                                    <defs>
                                        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_99_58" transform="matrix(0.00323803 0 0 0.00293255 -0.328934 0)" />
                                        </pattern>
                                        <image className="opacity-60" id="image0_99_58" width="512" height="341" xlinkHref="https://images.unsplash.com/photo-1629756048377-09540f52caa1?q=80&w=2768&auto=format&fit=crop" />
                                    </defs>
                                </svg>
                                <h4 className="relative mt-6 text-lg font-bold text-center text-indigo-700">Photographer Upload</h4>
                                <p className="relative mt-2 font-semibold text-center text-gray-800">
                                    photographer uploads all photos in
                                    JPG format into a single zip file
                                </p>
                            </div>
                        </div> */}


                        {/* next features */}
                        {/* <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20"> */}
                        {/* feature third */}
                        {/* <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/4">
                            <div className="relative flex flex-col items-center justify-center w-full h-full p-12 mr-5 rounded-lg">
                                <svg className="absolute w-full h-full text-emerald-50 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="232" height="256" viewBox="0 0 232 256" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="#FFFFFF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="url(#pattern2)" />
                                    <defs>
                                        <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_99_59" transform="matrix(0.00323803 0 0 0.00293255 -0.328934 0)" />
                                        </pattern>
                                        <image className="opacity-60" id="image0_99_59" width="512" height="341" xlinkHref="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=3270&auto=format&fit=crop" />
                                    </defs>
                                </svg>
                                <h4 className="relative mt-6 text-lg font-bold text-center text-indigo-700">Email Notifcation</h4>
                                <p className="relative mt-2 font-semibold text-center text-gray-800">
                                    email is sent to all registered guests to access their photos
                                </p>
                            </div>
                        </div> */}

                        {/* feature four */}
                        {/* <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/4">
                            <div className="relative flex flex-col items-center justify-center w-full h-full p-10 mr-5 rounded-lg">
                                <svg className="absolute w-full h-full text-emerald-50 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="232" height="256" viewBox="0 0 232 256" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="#FFFFFF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M124.832 6.44052C152.616 1.54154 185.946 -7.24847 207.267 11.1871C228.683 29.705 219.663 64.2884 224.04 92.223C227.566 114.729 235.022 136.29 230.36 158.589C225.276 182.903 214.983 206.206 196.686 223.048C176.855 241.302 151.683 258.385 124.832 255.725C98.5183 253.119 83.9106 225.452 62.6464 209.771C41.6352 194.277 7.86803 189.667 1.10927 164.487C-5.67947 139.196 20.4573 117.863 31.6153 94.1652C40.9874 74.26 45.1234 52.0401 61.1586 36.9496C78.7158 20.4267 101.064 10.6313 124.832 6.44052Z" fill="url(#pattern3)" />
                                    <defs>
                                        <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_99_60" transform="matrix(0.00323803 0 0 0.00293255 -0.328934 0)" />
                                        </pattern>
                                        <image className="opacity-60" id="image0_99_60" width="512" height="341" xlinkHref="https://images.unsplash.com/photo-1528569937393-ee892b976859?q=80&w=3270&auto=format&fit=crop" />
                                    </defs>
                                </svg>
                                <h4 className="relative mt-6 text-lg font-bold text-center text-indigo-700">Easy Access</h4>
                                <p className="relative mt-2 font-semibold text-center text-gray-800">
                                    guests simply enter their registered
                                    details to
                                    retrieve their photos hassle-
                                    free
                                </p>
                            </div>
                        </div> */}
                        {/* </div> */}
                    </div>

                    <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
                        <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/3">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="/static/images/email.jpeg" alt="email" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">Email Notification</h2>
                                    <p className="font-medium">email is sent to all registered guests to access their photos</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/3">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="/static/images/accuracy.jpeg" alt="accuracy" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">Face Recoginition</h2>
                                    <p className="font-medium">findyou marks the face recoginition accuracy of 99.9%</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-md p-8 mx-auto mb-0 sm:mb-4 lg:mb-0 lg:w-1/3">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="/static/images/brand.jpeg" alt="brand" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">Brand Spotlight</h2>
                                    <p className="font-medium">increase your brand exposure 10x and get refferals and free marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2 ends */}
        </>
    );
}

export default Feature;