"use client";
import { useRef, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { Dropdown } from "flowbite-react";

const allServices = [
  {
    id: "1",
    title: "All Services",
    url: "/services",
  },
  {
    id: "2",
    title: "Serviced Offices",
    url: "/services/serviced_offices",
  },
  {
    id: "3",
    title: "Virtual Offices",
    url: "/services/virtual_offices",
  },
  {
    id: "4",
    title: " Meeting Rooms",
    url: "/services/meeting_rooms",
  },
  {
    id: "5",
    title: "Business Support",
    url: "/services/business_support",
  },
  {
    id: "6",
    title: "Company Formation",
    url: "/services/company_formation",
  },
];
function SideBar() {
  const [visible, setVisible] = useState<boolean>(false);
  const menu = useRef<any>(null);
  return (
    <>
      <HiOutlineMenu
        onClick={() => setVisible(true)}
        className="lg:hidden block text-white text-3xl hover:text-green-600 transition-colors cursor-pointer"
      />
      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        className="bg-black text-white"
      >
        <Link href={"/"}>
          <Image src="/logosm.png" alt="logo" width={50} height={50} />
        </Link>
        <ul className="text-white gap-16 flex flex-col mt-20">
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
      </Sidebar>
    </>
  );
}

export default SideBar;
