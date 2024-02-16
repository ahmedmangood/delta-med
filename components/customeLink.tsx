import Link from "next/link";

interface LinkProps {
  title: string;
  href: string;
  ourStyle?: string;
  icon?: string | React.ReactElement;
  animate?: any;
}

function CustomeLink({ title, href, ourStyle, animate, icon }: LinkProps) {
  return (
    <Link
      href={href}
      className={`border-2 border-green-600 text-sm font-semibold hover:bg-green-600 transition duration-500 text-white py-3 px-14 shadow mx-auto mt-5 mb-3 ${ourStyle}`}
      aos-data={animate}
    >
      {title}
      {icon}
    </Link>
  );
}

export default CustomeLink;
