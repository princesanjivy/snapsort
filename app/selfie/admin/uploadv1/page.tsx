"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const UploadV1 = () => {
    const router = useRouter();

    const userData = Cookies.get("findyou-user-data");

    if (userData === null || userData === undefined) {
        router.push("/selfie/admin");

        return;
    }

    return <h1>Bulk upload ui will come here</h1>;
}

export default UploadV1;
