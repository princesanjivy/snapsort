import { ReactNode } from "react";

export interface AlertPopupProps {
  message: string;
  type: string;
}

export interface HeaderProps {
  description: string;
  title: string;
}

export interface EventMarriage {
  brideName: string;
  groomName: string;
}

export interface EventBirthday {
  name: string;
}

export interface UserDetail {
  event: string;
  name: string;
  email: string;
  phone: string;
}

export interface DataContextProps<T> {
  children: ReactNode;
}

export interface DataContextValue<T> {
  sharedData: T | null;
  setSharedDataValue: (value: T) => void;
}
