"use client";

import { useRouter } from "next/navigation";

const Selfie = () => {
    const router = useRouter();

    const moveNextPage = () => {
        console.log("move next page");
        router.push("/selfie/upload");
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
                    Register your contact details
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-emerald-50 p-8 m-10 w-full rounded-xl shadow-2xl">
                    <form className="flex flex-col gap-4 justify-center items-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Event</span>
                            </label>
                            <input type="text" placeholder="marriage" className="input input-bordered w-full max-w-xs rounded-lg capitalize" disabled />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs rounded-lg capitalize" required={true} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="john@findyou.com" className="input input-bordered w-full max-w-xs rounded-lg lowercase" required={true} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="911234567890" className="input input-bordered w-full max-w-xs rounded-lg" required={true} />
                        </div>
                        <button type="submit" className="mt-4 btn rounded-lg text-white bg-emerald-400" onClick={moveNextPage}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Selfie;
