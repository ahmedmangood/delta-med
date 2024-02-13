"use client";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import NextLink from "next/link";
import SideBar from "./SideBar";
import Link from "next-intl/link";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  const t = useTranslations("Navbar_Links");
  const allServices = [
    {
      id: 1,
      title: t("allServices"),
      url: "/services",
    },
    {
      id: 2,
      title: t("servicedOffices"),
      url: "/services/serviced_offices",
    },
    {
      id: 3,
      title: t("virtualOffices"),
      url: "/services/virtual_offices",
    },
    {
      id: 4,
      title: t("meetingRooms"),
      url: "/services/meeting_rooms",
    },
    {
      id: 5,
      title: t("businessSupport"),
      url: "/services/business_support",
    },
    {
      id: 6,
      title: t("companyFormation"),
      url: "/services/company_formation",
    },
  ];
  const pathName = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  // const pathNameWithoutLocaleAr = pathName.substring(1);
  // const pathNameWithoutLocaleEn = pathName.substring(1);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   console.log(pathNameWithoutLocale);
  // }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-8 py-4 ${
        isScrolling
          ? "border-b-2 border-gray-200 transition-all duration-500 bg-gray-900"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <NextLink href={"/"}>
          <Image src="/logosm.png" alt="logo" width={50} height={50} />
        </NextLink>
        <div className="flex items-center justify-center gap-4 text-white">
          <ul className="text-white gap-6 hidden lg:flex">
            <Dropdown
              label={
                <li
                  className={`hover:text-green-600 transition-colors ${
                    pathName === "/services" ? "text-green-600" : ""
                  }`}
                >
                  {t("services")}
                </li>
              }
              inline
              className="w-[180px] text-center flex flex-col items-center justify-center bg-gray-100 hover:text-green-600 transition-colors"
            >
              {allServices.map((service) => {
                return (
                  <Dropdown.Item
                    key={service.id}
                    className={`border-b-2 border-gray-200 w-full hover:text-gray-400 transition-color`}
                  >
                    <NextLink href={service.url}>{service.title}</NextLink>
                  </Dropdown.Item>
                );
              })}
            </Dropdown>
            <li
              className={`hover:text-green-600 transition-colors ${
                pathName === "/about" ? "text-green-600" : ""
              }`}
            >
              <NextLink href={"about"}>{t("about-us")}</NextLink>
            </li>
            <li
              className={`hover:text-green-600 transition-colors ${
                pathName === "/contact" ? "text-green-600" : ""
              }`}
            >
              <NextLink href={"contact"}>{t("contact-us")}</NextLink>
            </li>
          </ul>
          <SideBar />

          <Dropdown
            label={
              <span className="text-white text-xl">
                <IoLanguageSharp />
              </span>
            }
            inline
            style={{ color: "white !important" }}
          >
            <Dropdown.Item>
              <Link
                locale="ar"
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={"/flags/ar.png"}
                  width={20}
                  height={20}
                  alt="arabic"
                />
                <h6 className="font-bold">اللغة العربية</h6>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                locale="en"
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={"/flags/en.svg"}
                  width={20}
                  height={20}
                  alt="english"
                />
                <h6 className="font-bold">English</h6>
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
