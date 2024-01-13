"use client";

import Image from "next/image";
interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
}
function ServiceCard({ src, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-around py-5 gap-5 lg:gap-3">
      <div className=" w-[200px] h-[130px] md:w-[250px] md:h-[130px] lg:w-[400px] lg:h-[250px] border-1 p-1 lg:p-2 rounded bg-clip-border border-transparent bg-gradient-to-r from-gray-500 to-orange-400">
        <Image
          src={src}
          alt={`${title}`}
          width={200}
          height={200}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/imgs/Ellipse1.svg"
          style={{
            width: "100%",
            height: "100%",
          }}
          quality={100}
        />
      </div>
      <div className="flex flex-col items-start justify-center lg:flex-col gap-2 rtl:items-end">
        <h5 className="text-white font-bold text-sm md:text-xl underline">
          {title}
        </h5>
        <p className="w-[260px] pt-2 lg:pt-0 max-sm:pt-0 text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-orange-400 rtl:text-end rtl:text-base rtl:lg:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
