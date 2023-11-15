"use client";

import { DataContextProps, DataContextValue, UserDetail } from "@/types/interface";
import { createContext, useContext, useState } from "react";

const DataContext = createContext<DataContextValue<object> | undefined>(undefined);

const DataProvider: React.FC<DataContextProps<object>> = ({ children }) => {
    const [sharedData, setSharedData] = useState<object | null>(null);

    const setSharedDataValue = (value: object) => {
        setSharedData(value);
    };

    return (
        <DataContext.Provider value={{ sharedData, setSharedDataValue }}>
            {children}
        </DataContext.Provider>
    );
};

// TODO: use a generic type for DataContextValue
const useData = <T = UserDetail>(): DataContextValue<UserDetail> => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context as DataContextValue<UserDetail>;
};

export { DataProvider, useData };
