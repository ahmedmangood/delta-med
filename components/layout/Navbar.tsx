"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";
import { Dropdown, Navbar } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function CustomNavbar() {
  const t = useTranslations("Navbar_Links");
  const navbarLinks = [
    {
      id: 1,
      title: t("home"),
      href: "/",
      active: true,
    },
    { id: 2, title: t("services"), href: "/services", active: false },
    { id: 3, title: t("about-us"), href: "/about", active: false },
    { id: 4, title: t("contact-us"), href: "/contact", active: false },
  ];

  const customNavTheme: CustomFlowbiteTheme["navbar"] = {
    root: {
      inner: {
        base: "flex flex-row justify-between flex-wrap items-center px-2 ",
        fluid: {
          off: "",
          on: "",
        },
      },
    },
    collapse: {
      base: "w-full lg:block lg:w-auto rtl:xl:block bg-[#545a6c] shadow-xl lg:shadow-none lg:bg-transparent lis_list ",
      list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium gap-1 rtl:lg:space-x-3 rtl:gap-8",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-800 bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden rtl:xl:hidden rtl:mr-1",
      icon: "h-6 w-6 shrink-0",
    },
    link: {
      active: {
        on: "text-base font-bold text-orange-color",
        off: "text-base text-primary-color hover:text-orange-color rtl:font-semibold transition-colors",
      },
    },
  };
    const path = usePathname();

  return (
    <>
      <Navbar
        rounded={true}
        theme={customNavTheme.root}
        className="bg-[#d8d8d84d] fixed w-full top-0 z-50 border-b-2 border-orange-color-hover h-16 rounded-[0px]"
      >
        <Navbar.Brand
          href="/"
          className="flex flex-row flex-wrap justify-center gap-3 rtl:flex-row-reverse"
        >
          {/* Create gradient color for logo with animation*/}
          <Image
            src={"/imgs/logo.png"}
            alt="logo image"
            width={30}
            height={30}
            priority={true}
            loading={"eager"}
            className={"w-auto h-auto max-md:w-[30px]"}
          />
          <div className="familyPoppins flex flex-col justify-center items-center font-bold uppercase leading-4">
            <h3>Triple Point</h3>
            <h3>For Trading</h3>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse theme={customNavTheme.collapse}>
          {navbarLinks.map((link) => (
            <Navbar.Link
              key={link.id}
              href={link.href}
              theme={customNavTheme.link}
              active={path === link.href}
            >
              {link.title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
        <div
          className={
            "bg-[#d8d8d82f] lg:bg-transparent py-1 px-1 rounded-md flex items-center max-md:items-baseline gap-2 rtl:font-sans rtl:text-lg rtl:max-sm:me-0 rtl:max-sm:ms-auto rtl:lg:w-[185px]"
          }
        >
          <Navbar.Toggle theme={customNavTheme.toggle} />
          <Dropdown
            label={<MdLanguage className="w-5 h-5" />}
            inline
            className="bg-[#d8d8d84d]"
          >
            <Link locale="en" href={"/"}>
              <Dropdown.Item className="rtl:flex-row-reverse ltr:flex-row hover:bg-[#d8d8d84d]">
                <Image
                  src={"/imgs/flags/en.svg"}
                  alt="en"
                  width={20}
                  height={20}
                />
              </Dropdown.Item>
            </Link>
            <Link locale="ar" href={"/"}>
              <Dropdown.Item className="rtl:flex-row-reverse ltr:flex-row hover:bg-[#d8d8d84d]">
                <Image
                  src={"/imgs/flags/arab.svg"}
                  alt="ar"
                  width={20}
                  height={20}
                />
              </Dropdown.Item>
            </Link>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}
