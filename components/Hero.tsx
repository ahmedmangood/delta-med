"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { PrimaryButton } from ".";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  const t = useTranslations("Hompage");
  return (
    <section
      id="home"
      className={`h-screen relative padding_container bg-gradient-to-r from-[#252B42] to-primary-color border-b-2 border-gray-200 overflow-hidden`}
    >
      <div className="relative z-[2] flex flex-col items-center justify-center lg:flex-row pt-44 md:pt-60 my-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-flex-start gap-3 rtl:px-2"
        >
          <h1 className="text-4xl font-bold lg:text-4xl leading-[1.2] rtl:leading-[1.4] capitalize bg-clip-text text-transparent bg-gradient-to-r from-white-color to-orange-color">
            {t("hero-title")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-200">
            {t("hero-paragraph")}
          </p>
          <Link
            className="border-2 border-orange-color hover:bg-orange-color text-sm font-semibold transition-colors text-white py-3 px-14 shadow rounded-xl mx-auto mt-5 mb-3 flex justify-center items-center gap-3"
            href={"https://wa.me/0547341541"}
            target="_blanck"
          >
            {t("contact-btn")}
            <FaWhatsapp style={{ fontSize: "20px" }} />
          </Link>
        </div>
        <div
          className="lg:flex items-center justify-center hidden lg:w-[100%]"
          data-aos="fade-down-left"
        >
          <Image
            src="/imgs/header.svg"
            alt="header image"
            width={800}
            height={400}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
            }}
            className="z-10"
          />
          <div className="absolute z-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="290"
              height="290"
              viewBox="0 0 316 317"
              fill="none"
            >
              <path
                d="M8.94816 200.493C-4.58502 170.982 -2.86545 129.523 19.4647 105.012C43.1168 79.0504 79.3975 116.379 109.828 98.5981C136.603 82.9537 124.348 24.1629 166.646 4.42403C206.123 -8.73522 230.099 18.3323 252.008 38.1274C272.404 56.5565 272.5 87.1323 283.225 112.335C293.189 135.75 309.885 155.686 312.82 181.026C316.29 210.988 318.501 243.925 301.409 269.353C283.889 295.417 253 315.053 221.545 316.817C191.319 318.513 164.477 301.946 137.304 289.38C116.336 279.684 85.7016 267.278 65.8678 255.542C38.9485 239.614 21.8861 228.706 8.94816 200.493Z"
                fill="#3d60609c"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="heroBackground"></div>
    </section>
  );
};

export default Hero;
