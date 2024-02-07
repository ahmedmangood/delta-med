import Link from "next/link";
import React from "react";
import { FaSnapchat, FaTwitter } from "react-icons/fa";
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
      <div className="text-white flex flex-col gap-6 md:flex-row items-center md:items-start justify-between py-7 ">
        <div className="flex flex-col gap-3">
          <h6 className="text-2xl my-5">Follow Us</h6>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <RiFacebookCircleFill className="text-xl transition-all duration-450 hover:scale-125 cursor-pointer" />
            </li>
            <li>
              <FaTwitter className="text-xl transition-all duration-450 hover:scale-125 cursor-pointer" />
            </li>
            <li>
              <FaSnapchat className="text-xl transition-all duration-450 hover:scale-125 cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-between gap-10">
          <div>
            <div className="flex flex-col gap-3">
              <h6 className="text-xl">Services</h6>
              <ul className="flex items-start justify-center flex-col gap-2">
                {allServices.map((service) => {
                  return (
                    <li key={service.id}>
                      <Link
                        href={service.url}
                        className="hover:text-green-600 transition-colors"
                      >
                        {service.title}
                      </Link>
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
                  <Link
                    href={"/about"}
                    className="hover:text-green-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services"}
                    className="hover:text-green-600 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className="hover:text-green-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white flex items-center justify-center py-14">
        All Rights Received - TriplePoint©2024
      </p>
    </section>
  );
}

export default Footer;
