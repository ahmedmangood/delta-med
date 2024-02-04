"use client";

interface PrimaryButtonProps {
  title: string;
  action?: () => void;
  ourStyle?: string;
  icon?: string | React.ReactElement;
}

const CustomButton = ({
  title,
  ourStyle,
  action,
  icon,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`border-2 border-green-600 text-sm font-semibold hover:bg-green-600 transition duration-500 text-white py-3 px-14 shadow mx-auto mt-5 mb-3 ${ourStyle}`}
      onClick={action}
    >
      {title}
      {icon}
    </button>
  );
};

export default CustomButton;
