"use client";

import AlertPopup from "@/components/alertPopup";
import { defaultLoginFormValues } from "@/types/default";
import { LoginDetail } from "@/types/interface";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Cookies from "js-cookie";

const Admin = () => {
    const router = useRouter();

    const [formValues, setFormValues] = useState<LoginDetail>(defaultLoginFormValues);

    const [alertData, setAlertData] = useState({
        isVisible: false,
        message: "",
        type: "alert-info",
    });

    useEffect(() => {
        const userData = Cookies.get("findyou-user-data");

        if (userData) {
            router.push("/admin");
        }
    }, [router]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (formValues!.password!.length <= 4) {
            console.log(formValues);
            return;
        }

        const payload = JSON.stringify({
            phone_number: formValues.phone,
            password: formValues.password
        });

        console.log(payload);

        const headersList = {
            Accept: "*/*",
        };

        const url =
            "https://rvgh8m72t1.execute-api.ap-south-1.amazonaws.com/v1/login";
        const response = await fetch(url, {
            method: "POST",
            // headers: headersList,
            body: payload,
        });

        if (response.ok && response.status === 200) {
            const data = await response.json();
            console.log(data);

            if (data["statusCode"] == 200) {
                Cookies.set("findyou-user-data", "findyou" + formValues.phone);
                router.push("/admin/upload");
            } else {
                setAlertData({
                    isVisible: true,
                    message: data["body"],
                    type: "alert-error",
                });

                setTimeout(() => {
                    setAlertData({
                        isVisible: false,
                        message: "",
                        type: "",
                    });
                }, 3000);
            }
        }  // TODO: add else part with alerting that password min lenght not satisifed or user not found
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <>
            {alertData.isVisible && (
                <AlertPopup message={alertData.message} type={alertData.type} />
            )}
            <div className="flex flex-col" style={{ minHeight: "90vh" }}>
                {/* Body area */}
                <div className="flex flex-grow justify-center items-center">
                    <div className="bg-emerald-50 p-8 mx-10 mt-10 w-full h-min rounded-xl shadow-2xl">
                        <form
                            className="flex flex-col gap-4 justify-center items-center"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="1234567890"
                                    className="input input-bordered w-full max-w-xs rounded-lg lowercase"
                                    required={true}
                                    name="phone"
                                    value={formValues!.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered w-full max-w-xs rounded-lg"
                                    required={true}
                                    name="password"
                                    value={formValues!.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 btn rounded-lg text-white bg-emerald-400"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
