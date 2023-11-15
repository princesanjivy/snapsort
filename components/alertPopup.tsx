import { AlertPopupProps } from "@/types/interface";

const AlertPopup = ({ message, type }: AlertPopupProps) => {
  return (
    <div className="fixed top-0 right-0 p-4">
      <div className={`alert ${type} flex`}>
        {type !== "alert-error" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 h-6 w-6 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span className="text-white font-medium">{message}</span>
      </div>
    </div>
  );
};

export default AlertPopup;
