import Link from "next/link";

const Hero = () => {
    return <>
        {/* hero begins */}
        <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
            <div
                className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
                <div
                    className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
                    <h1 className="relative mb-4 text-3xl font-black leading-tight text-emerald-500 sm:text-6xl xl:mb-8">
                        Get your event photos effortlessly
                    </h1>
                    <p className="pr-0 mb-8 text-base font-medium text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
                        An innovative state of the are AI based face finder service
                        exclusively tailored for wedding and Birthday events.
                    </p>
                    <Link
                        href="https://wa.me/919443376775?text=Hi"
                        className="mt-4 btn rounded-lg text-white bg-emerald-400"
                        target="_blank"
                    >
                        Contact Us
                    </Link>
                </div>
                {/* <svg className="absolute left-0 max-w-md mt-24 -ml-64 left-svg" viewBox="0 0 423 423"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <linearGradient x1="100%" y1="0%" x2="4.48%" y2="0%" id="linearGradient-1">
                                <stop stop-color="#5C54DB" offset="0%" />
                                <stop stop-color="#6A82E7" offset="100%" />
                            </linearGradient>
                            <filter x="-9.3%" y="-6.7%" width="118.7%" height="118.7%" filterUnits="objectBoundingBox"
                                id="filter-3">
                                <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                                <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1" />
                            </filter>
                            <rect id="path-2" x="63" y="504" width="300" height="300" rx="40" />
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity=".9">
                            <g id="Desktop-HD" transform="translate(-39 -531)">
                                <g id="Hero" transform="translate(43 83)">
                                    <g id="Rectangle-6" transform="rotate(45 213 654)">
                                        <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-2" />
                                        <use fill="url(#linearGradient-1)" xlinkHref="#path-2" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg> */}
            </div>
        </div>
        {/* hero ends */}
    </>
}

export default Hero;