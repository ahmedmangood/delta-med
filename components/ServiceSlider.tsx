"use client";

import { useTranslations } from "next-intl";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
function ServiceSlider() {
  const t = useTranslations("Hompage");
  const t2 = useTranslations("Services");
  const sliders = [
    {
      id: 1,
      title: t2("SmartHome-title"),
      imgSrc: "/services/service-13.jpg",
      description: t2("SmartHome-desc"),
    },
    {
      id: 2,
      title: t2("DataRoom-title"),
      imgSrc: "/services/service-11.jpg",
      description: t2("DataRoom-desc"),
    },
    {
      id: 3,
      title: t2("SystemNumbering-title"),
      imgSrc: "/services/service-2.jpg",
      description: t2("SystemNumbering-desc"),
    },
    {
      id: 4,
      title: t2("AccessControl-title"),
      imgSrc: "/services/service-3.jpg",
      description: t2("AccessControl-desc"),
    },
    {
      id: 5,
      title: t2("CCTVSystem-title"),
      imgSrc: "/services/service-4.jpg",
      description: t2("CCTVSystem-desc"),
    },
    {
      id: 6,
      title: t2("IntercomeSystem-title"),
      imgSrc: "/services/service-5.png",
      description: t2("IntercomeSystem-desc"),
    },
    {
      id: 7,
      title: t2("SystemSecurity-title"),
      imgSrc: "/services/service-6.jpg",
      description: t2("SystemSecurity-desc"),
    },
    {
      id: 8,
      title: t2("CenteralModern-title"),
      imgSrc: "/services/service-7.jpg",
      description: t2("CenteralModern-desc"),
    },
    {
      id: 9,
      title: t2("ElectricalWorks-title"),
      imgSrc: "/services/electric.jpg",
      description: t2("ElectricalWorks-desc"),
    },
    {
      id: 10,
      title: t2("VideoDisplayWalls-title"),
      imgSrc: "/services/service-8.jpg",
      description: t2("VideoDisplayWalls-desc"),
    },
    {
      id: 11,
      title: t2("WebsitesAndMobileApps-title"),
      imgSrc: "/services/service-9.jpg",
      description: t2("WebsitesAndMobileApps-desc"),
    },
    {
      id: 12,
      title: t2("AdvertismentAndMarketing-title"),
      imgSrc: "/services/service-10.jpg",
      description: t2("AdvertismentAndMarketing-desc"),
    },
  ];

  const featchers = [
    {
      id: 1,
      icon: (
        <FaBrain
          style={{
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "50%",
            fontSize: "40px",
          }}
        />
      ),
      title: t2("feature-one"),
    },
    {
      id: 2,
      icon: (
        <PiShieldCheckFill
          style={{
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "50%",
            fontSize: "40px",
          }}
        />
      ),
      title: t2("feature-two"),
    },
    {
      id: 3,
      icon: (
        <FaArrowTrendUp
          style={{
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "50%",
            fontSize: "40px",
          }}
        />
      ),
      title: t2("feature-three"),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <section
      className="h-screen bg-[#252B42] pb-2 relative overflow-hidden"
      id="services"
    >
      <h2
        data-aos="zoom-in-right"
        className="text-center font-bold text-xl pt-20 pb-2 lg:text-3xl text-orange-400"
      >
        {t2("services-title")}
      </h2>
      <div
        data-aos="zoom-in-left"
        className="flex items-center justify-center pb-8"
      >
        <svg
          className="flex justify-center items-center"
          xmlns="http://www.w3.org/2000/svg"
          width="359"
          height="22"
          viewBox="0 0 359 22"
          fill="none"
        >
          <path
            d="M2 2C19.7562 2 19.7562 20 37.5125 20C55.2687 20 55.2687 2 73.025 2C90.7812 2 90.7812 20 108.496 20C126.253 20 126.253 2 143.967 2C161.723 2 161.723 20 179.438 20C197.194 20 197.194 2 214.949 2C232.706 2 232.706 20 250.463 20C268.218 20 268.218 2 285.975 2C303.731 2 303.731 20 321.488 20C339.243 20 339.243 2 357 2"
            stroke="#4F4F4F"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        data-aos="zoom-in-down"
        className="relative z-10 h-80 border-y-2 border-gray-300 mx-1"
      >
        <Slider {...settings}>
          {sliders.map((slide) => {
            return (
              <ServiceCard
                src={slide.imgSrc}
                title={slide.title}
                description={slide.description}
                key={slide.id}
              />
            );
          })}
        </Slider>
      </div>
      <div
        data-aos="zoom-in-up"
        className=" flex items-center justify-center my-auto"
      >
        <div className="sliderBg w-full h-full absolute z-0 overflow-hidden"></div>
        <div className="w-full overflow-hidden flex items-center justify-center max-sm:gap-2 max-md:gap-20 md:gap-32 my-5 lg:my-3 lg:flex-row px-3">
          {featchers.map((featcher) => {
            return (
              <div
                key={featcher.id}
                className="bg-transparent border-[1px] shadow-sm-light border-gray-500 text-gray-400 flex flex-col items-center justify-center p-5 rounded-[16px] w-[100px] gap-3"
              >
                {featcher.icon}
                <h6>{featcher.title}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSlider;
