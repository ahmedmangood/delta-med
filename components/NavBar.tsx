"use client";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import SideBar from "./SideBar";

const allServices = [
  {
    id: 1,
    title: "All Services",
    url: "/services",
  },
  {
    id: 2,
    title: "Serviced Offices",
    url: "/services/serviced_offices",
  },
  {
    id: 3,
    title: "Virtual Offices",
    url: "/services/virtual_offices",
  },
  {
    id: 4,
    title: " Meeting Rooms",
    url: "/services/meeting_rooms",
  },
  {
    id: 5,
    title: "Business Support",
    url: "/services/business_support",
  },
  {
    id: 6,
    title: "Company Formation",
    url: "/services/company_formation",
  },
];

function NavBar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav className="absolute top-0 z-50 w-full px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src="/logosm.png" alt="logo" width={50} height={50} />
        </Link>
        <ul className="text-white gap-6 hidden lg:flex">
          <Dropdown
            label={
              <li className="hover:text-green-600 transition-colors">
                Services
              </li>
            }
            inline
            className="w-[180px] text-center flex flex-col items-center justify-center bg-gray-100 hover:text-green-600 transition-colors"
          >
            {allServices.map((service) => {
              return (
                <Dropdown.Item
                  key={service.id}
                  className="border-b-2 border-gray-200 w-full hover:text-gray-400 transition-color"
                >
                  <Link href={service.url} className="">
                    {service.title}
                  </Link>
                </Dropdown.Item>
              );
            })}
          </Dropdown>
          <li className="hover:text-green-600 transition-colors">
            <Link href={"about"}>About</Link>
          </li>
          <li className="hover:text-green-600 transition-colors">
            <Link href={"contact"}>Contact</Link>
          </li>
        </ul>
        <SideBar />
      </div>
    </nav>
  );
}

export default NavBar;
