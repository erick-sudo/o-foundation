import React from "react";
import { ContentOnImage } from "./ContentOnImage";
import { images } from "../assets/images/images";
import { NavLink, useLocation } from "react-router-dom";
import { Glass } from "./Glass";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];

  const socials = [
    { link: "", icon: <FaFacebookF /> },
    { link: "", icon: <FaXTwitter /> },
    { link: "", icon: <FaInstagram /> },
    { link: "", icon: <FaWhatsapp /> },
  ];

  const support = [
    { link: "", icon: faPhoneAlt, text: "+254727494949" },
    { link: "", icon: faEnvelope, text: "info@gmail.com" },
  ];

  const { pathname } = useLocation();

  return (
    <div>
      <ContentOnImage
        image={images.people}
        imageContainerClassName=""
        className=""
      >
        <div className="bg-green-950/85 py-12">
          <div className="grid md:grid-cols-3 gap-y-12 container mx-auto">
            <div className="flex flex-col items-center">
              <h2 className="text-white text-3xl font-thin px-4">Quick Link</h2>
              <div className="flex flex-col gap-4 p-4">
                {navItems.map((route, idx) => (
                  <NavLink key={idx} to={route.link}>
                    <Glass
                      className={`${
                        pathname === route.link
                          ? "ring-1 ring-green-500/50 text-green-500/50"
                          : "ring-1 ring-white/50 text-white/50"
                      } px-6 py-2`}
                      glassClassName="peer-hover:bg-green-800/75 peer-hover:ring-1 peer-hover:ring-white duration-300"
                    >
                      {route.text}
                    </Glass>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-white text-3xl font-thin px-4">Support</h2>
              <div className="flex flex-col gap-6 p-4 py-4 text-white">
                {support.map((s, idx) => (
                  <NavLink key={idx} className="flex gap-2 items-center hover:text-green-600 duration-300">
                    <FontAwesomeIcon className="text-3xl" icon={s.icon} />
                    <span>{s.text}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-white text-3xl font-thin px-4">
                Our Socials
              </h2>
              <div className="flex flex-col gap-4 p-4">
                {socials.map((s, idx) => (
                  <NavLink key={idx} className="bg-white p-4 text-2xl hover:ring-1 hover:ring-white hover:bg-transparent hover:text-white duration-200">
                    {s.icon}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="border-b border-green-700/50 container mx-auto mt-12"></div>
        </div>
      </ContentOnImage>
      <div className="py-6 px-4 text-center bg-green-950 text-white flex flex-wrap gap-4 justify-center">
        <span>Terms and Conditions</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>&copy; {new Date().getFullYear()}</span>
        <span>OA-Foundation. All Rights Reserved.</span>
      </div>
    </div>
  );
}
