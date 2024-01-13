"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <section
      id="about-us"
      className="relative overflow-hidden h-screen bg-gradient-to-r from-slate-500 to-primary-color border-t-2 border-white"
    >
      <div className="z-0 absolute opacity-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="300"
          viewBox="0 0 257 257"
          fill="none"
        >
          <path
            d="M128.5 0L128.525 128.374L177.675 9.78144L128.571 128.393L219.363 37.6368L128.607 128.428L247.218 79.3249L128.626 128.475L257 128.5L128.626 128.525L247.218 177.675L128.607 128.571L219.363 219.363L128.571 128.607L177.675 247.218L128.525 128.626L128.5 257L128.475 128.626L79.3249 247.218L128.428 128.607L37.6368 219.363L128.393 128.571L9.78144 177.675L128.374 128.525L0 128.5L128.374 128.475L9.78144 79.3249L128.393 128.428L37.6368 37.6368L128.428 128.393L79.3249 9.78144L128.475 128.374L128.5 0Z"
            stroke="#333333"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col px-4 md:px-8 justify-center items center gap-10 lg:flex-row lg:gap-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-start justify-center">
          <h4
            data-aos="fade-down"
            className="font-bold responsiveText bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200"
          >
            {t("title")}
          </h4>
          <hr style={{ width: "200px", borderTopWidth: "3px" }} />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-start justify-center text-[#e3e3e3] lg:pt-24 text-sm md:text-lg lg:text-xl"
        >
          <p className="font-bold">{t("paragraph-one")}</p>
          <p>{t("paragraph-two")}</p>
        </div>
        <div
          data-aos="zoom-in"
          className="relative  md:hidden flex items-center justify-center my-3"
        >
          <Image
            src="/imgs/Frame15.svg"
            width={200}
            height={200}
            className="z-20 relative"
            alt="frame"
          />
          <Image
            src="/imgs/Vector.svg"
            width={150}
            height={150}
            alt="frame"
            className="absolute z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
