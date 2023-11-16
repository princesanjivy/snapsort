"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Upload = () => {
    const router = useRouter();

    useEffect(() => {
        const userData = Cookies.get("findyou-user-data");

        if (!userData) {
            router.push("/admin");
        }
    }, [router]);

    return <h1>Bulk upload ui will come here</h1>;
};

export default Upload;
