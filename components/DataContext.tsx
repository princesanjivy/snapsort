"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DataContextProps<T> {
    children: ReactNode;
}

interface DataContextValue<T> {
    sharedData: T | null;
    setSharedDataValue: (value: T) => void;
}

// Create a generic context
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

// Use a generic type for DataContextValue

interface UserData {
    event: string,
    name: string,
    email: string,
    phone: string,
}

const useData = <T = UserData>(): DataContextValue<UserData> => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context as DataContextValue<UserData>;
};

export { DataProvider, useData };
