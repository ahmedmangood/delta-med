import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

function Footer() {
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
  return (
    <section className="bg-gray-900 px-4 md:px-8 lg:px-16 py-4">
      <div className="text-white flex flex-col gap-6 md:flex-row items-center justify-between py-7 ">
        <div className="flex flex-col gap-3">
          <h6 className="text-2xl">Follow Us</h6>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <RiFacebookCircleFill className="text-xl" />
            </li>
            <li>
              <FaTwitter className="text-xl" />
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div>
            <div className="flex flex-col gap-3">
              <h6 className="text-xl">Services</h6>
              <ul>
                {allServices.map((service) => {
                  return (
                    <li key={service.id}>
                      <Link href={service.url}>{service.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <h6 className="text-xl">Company</h6>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/services"}>Services</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white flex items-center justify-center">
        All Rights Received - TriplePoint©2024
      </p>
    </section>
  );
}

export default Footer;
