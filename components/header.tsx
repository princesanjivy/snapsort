import { HeaderProps } from "@/types/interface";

const Header = ({ description, title }: HeaderProps) => {
  return (
    <div className="p-8 bg-emerald-400 w-full h-max">
      <div className="text-white text-3xl text-center uppercase font-semibold italic">
        {title}
      </div>
      <div className="mt-8 text-white text-xl text-center opacity-80 font-medium">
        Get your event photos
      </div>
      {description && (
        <div className="mt-1 text-gray-700 text-lg text-center opacity-30">
          {description}
        </div>
      )}
    </div>
  );
};

export default Header;
