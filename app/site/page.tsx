import AboutTeam from "@/components/site/aboutTeam";
import Feature from "@/components/site/feature";
import Hero from "@/components/site/hero";
import Link from "next/link";

const PricingPoint = ({ point }: any) => {
    return (<>
        <li className="flex items-center">
            <div className="p-2 text-green-500 rounded-full fill-current ">
                <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <span className="ml-3 text-lg text-gray-700">{point}</span>
        </li></>);
};

const Site = () => {
    return (
        <>
            {/* header begins  */}
            <header className="relative z-50 w-full h-24">
                <div
                    className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
                    <a href="/" className="relative flex items-center inline-block h-5 h-full font-black leading-none">
                        {/* <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M121.324 108.391L99.9725 87.0396C99.0728 86.1418 97.9938 85.4441 96.8058 84.992C95.6179 84.54 94.348 84.3439 93.079 84.4165L85.3315 76.669C84.1828 75.5202 82.6248 74.8749 81.0002 74.8749C79.3757 74.8749 77.8177 75.5202 76.669 76.669C75.5202 77.8177 74.8749 79.3757 74.8749 81.0002C74.8749 82.6248 75.5202 84.1828 76.669 85.3315L84.4165 93.079C84.3439 94.348 84.54 95.6179 84.992 96.8059C85.4441 97.9938 86.1418 99.0728 87.0396 99.9725L108.391 121.324C110.107 123.038 112.433 124 114.857 124C117.282 124 119.608 123.038 121.324 121.324C122.18 120.478 122.859 119.472 123.323 118.362C123.787 117.252 124.026 116.06 124.026 114.857C124.026 113.654 123.787 112.463 123.323 111.353C122.859 110.243 122.18 109.236 121.324 108.391Z" fill="#2B2B2A" stroke="black" stroke-width="3" />
                            <path d="M50.8032 99.6064C77.7565 99.6064 99.6064 77.7565 99.6064 50.8032C99.6064 23.8499 77.7565 2 50.8032 2C23.8499 2 2 23.8499 2 50.8032C2 77.7565 23.8499 99.6064 50.8032 99.6064Z" fill="#44F1B1" stroke="black" stroke-width="3" />
                            <path d="M51 56.25C57.9036 56.25 63.5 50.6536 63.5 43.75C63.5 36.8464 57.9036 31.25 51 31.25C44.0964 31.25 38.5 36.8464 38.5 43.75C38.5 50.6536 44.0964 56.25 51 56.25Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M41.5417 52.625C39.4528 53.3012 37.6309 54.6203 36.3364 56.3937C35.0419 58.1671 34.3408 60.3043 34.3334 62.5V64.5833C34.3334 64.5833 38.5 68.75 51 68.75C63.5 68.75 67.6667 64.5833 67.6667 64.5833V62.5C67.6566 60.2877 66.9424 58.1362 65.6277 56.357C64.313 54.5778 62.466 53.2634 60.3542 52.6041" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> */}
                        {/* Find you logo */}
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.9373 42.8501L39.5385 34.4513C39.1847 34.0981 38.7602 33.8236 38.2929 33.6458C37.8256 33.468 37.3261 33.3909 36.8269 33.4194L33.7794 30.3719C33.3275 29.92 32.7146 29.6661 32.0756 29.6661C31.4366 29.6661 30.8237 29.92 30.3719 30.3719C29.92 30.8237 29.6661 31.4366 29.6661 32.0756C29.6661 32.7146 29.92 33.3275 30.3719 33.7794L33.4194 36.8269C33.3909 37.3261 33.468 37.8256 33.6458 38.2929C33.8236 38.7602 34.0981 39.1847 34.4513 39.5385L42.8501 47.9373C43.525 48.6114 44.4398 48.99 45.3937 48.99C46.3476 48.99 47.2624 48.6114 47.9373 47.9373C48.274 47.6048 48.5413 47.2087 48.7237 46.7721C48.9061 46.3354 49.0001 45.8669 49.0001 45.3937C49.0001 44.9205 48.9061 44.452 48.7237 44.0154C48.5413 43.5787 48.274 43.1826 47.9373 42.8501Z" fill="#2B2B2A" stroke="black" stroke-width="1.5" />
                            <path d="M20.1973 39.3945C30.7996 39.3945 39.3945 30.7996 39.3945 20.1973C39.3945 9.5949 30.7996 1 20.1973 1C9.5949 1 1 9.5949 1 20.1973C1 30.7996 9.5949 39.3945 20.1973 39.3945Z" fill="#44F1B1" stroke="black" stroke-width="1.5" />
                            <path d="M20.2747 22.3397C22.9903 22.3397 25.1917 20.1383 25.1917 17.4227C25.1917 14.7072 22.9903 12.5057 20.2747 12.5057C17.5591 12.5057 15.3577 14.7072 15.3577 17.4227C15.3577 20.1383 17.5591 22.3397 20.2747 22.3397Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5541 20.9138C15.7324 21.1798 15.0158 21.6987 14.5065 22.3963C13.9973 23.0939 13.7216 23.9346 13.7186 24.7983V25.6178C13.7186 25.6178 15.3576 27.2568 20.2746 27.2568C25.1916 27.2568 26.8306 25.6178 26.8306 25.6178V24.7983C26.8267 23.9281 26.5457 23.0817 26.0286 22.3819C25.5114 21.682 24.7849 21.165 23.9542 20.9056" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="ml-3 text-xl text-gray-800">
                            FindYou <br />
                            <span className="text-xs">AI face finder</span>
                        </span>
                    </a>
                    <div
                        className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                        {/* <a href="#_"
                            className="relative z-40 px-3 py-2 mr-0 text-sm font-bold text-pink-500 md:px-5 lg:text-white sm:mr-3 md:mt-0">Login</a>
                        <a href="#_"
                            className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Get
                            Started</a> */}
                        <svg className="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block"
                            viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                                    <stop stop-color="#E614F2" offset="0%" />
                                    <stop stop-color="#FC3832" offset="100%" />
                                </linearGradient>
                                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                                    <stop stop-color="#657DE9" offset="0%" />
                                    <stop stop-color="#1C0FD7" offset="100%" />
                                </linearGradient>
                                <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                                    id="a">
                                    <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
                                </filter>
                                <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                                    id="d">
                                    <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
                                </filter>
                                <path
                                    d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
                                    id="b" />
                                <path
                                    d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
                                    id="e" />
                            </defs>
                            <g fill="none" fill-rule="evenodd" opacity=".9">
                                <g transform="rotate(65 416.452 409.167)">
                                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                                    <use fill="url(#c)" xlinkHref="#b" />
                                </g>
                                <g transform="rotate(29 421.929 414.496)">
                                    <use fill="#000" filter="url(#d)" xlinkHref="#e" />
                                    <use fill="url(#f)" xlinkHref="#e" />
                                </g>
                            </g>
                        </svg>
                    </div>

                    {/* <div id="nav-mobile-btn"
                        className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
                        <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
                        <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
                    </div> */}
                </div>
            </header >
            {/* header ends */}

            <Hero />

            <Feature />

            {/* pricing starts here */}
            <div className="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
                <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
                    <h2 className="my-5 text-2xl font-semibold tracking-tight text-indigo-500 uppercase">
                        Our Pricing
                    </h2>
                    <h3 className="max-w-3xl px-5 mt-2 mb-10 text-3xl font-black leading-tight text-center text-emerald-500 sm:mt-0 sm:px-0 sm:text-6xl">
                        Transparent Pricing for Everyone
                    </h3>
                    <div className="flex items-start flex-col gap-8 sm:px-8 sm:flex-row">
                        <div className="relative flex flex-col items-center block sm:flex-row">
                            <div className="relative max-w-full my-4 border border-gray-200 rounded-lg sm:my-5 md:-mr-4">
                                <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                                    <div
                                        className="block max-w-full px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                                        <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">Elite<span
                                            className="ml-2 font-light">Plan</span></h3>
                                        <h4
                                            className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                                            <span className="mr-1 -ml-2 text-lg text-gray-700">₹</span>2100</h4>
                                        <p className="text-sm text-gray-600">In our elite plan you can take advantage of all these
                                            features below.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap px-6 mt-8">
                                        <ul>
                                            <PricingPoint point="Store upto 1200 image" />
                                            <PricingPoint point="Instant processing" />
                                            <PricingPoint point="Bulk download" />
                                            <PricingPoint point="Mail subscription" />
                                        </ul>
                                    </div>
                                    <div className="flex items-center block p-8 uppercase">
                                        <Link
                                            href="https://wa.me/919443376775?text=Hello, I would like to try your Premium Plan"
                                            className="mt-4 btn rounded-lg text-white bg-emerald-400 w-full"
                                            target="_blank"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center block sm:flex-row">
                            <div className="relative max-w-full my-4 border border-gray-200 rounded-lg sm:my-5 md:-mr-4">
                                <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                                    <div
                                        className="block max-w-full px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                                        <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">Premium<span
                                            className="ml-2 font-light">Plan</span></h3>
                                        <h4
                                            className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                                            <span className="mr-1 -ml-2 text-lg text-gray-700">₹</span>3000</h4>
                                        <p className="text-sm text-gray-600">In our premium plan you can take advantage of all these
                                            features below.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap px-6 mt-8">
                                        <ul>
                                            <PricingPoint point="Store upto 2400 image" />
                                            <PricingPoint point="Instant processing" />
                                            <PricingPoint point="Bulk download" />
                                            <PricingPoint point="Mail subscription" />
                                            <PricingPoint point="Brand promotion" />
                                        </ul>
                                    </div>
                                    <div className="flex items-center block p-8 uppercase">
                                        <Link
                                            href="https://wa.me/919443376775?text=Hello, I would like to try your Elite Plan"
                                            className="mt-4 btn rounded-lg text-white bg-emerald-400 w-full"
                                            target="_blank"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us begins */}
            <AboutTeam />

        </>
    );
}

export default Site;
