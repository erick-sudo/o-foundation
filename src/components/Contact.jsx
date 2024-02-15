import React from "react";
import { NavBar } from "./NavBar";
import { images } from "../assets/images/images";
import { ContentOnImage } from "./ContentOnImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationPin,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  const contacts = [
    {
      icon: faPhoneAlt,
      title: "CALL US",
      link: "+254727494949",
    },
    {
      icon: faEnvelope,
      title: "EMAIL US",
      link: "info@gmail.com",
    },
    {
      icon: faLocationPin,
      title: "OUR ADDRESS",
      link: "+254727494949",
    },
    {
      icon: faClock,
      title: "OFFICE HOURS",
      link: (
        <span>
          MON-FRI
          <br />
          9.00 - 5.00
        </span>
      ),
    },
  ];

  return (
    <div>
      <ContentOnImage
        className="pb-16 bg-green-950/50"
        imageContainerClassName="blur-s"
        image={images.image2}
      >
        <div className="container mx-auto px-4">
          <NavBar />

          <h2 className="text-7xl h-[25vh] flex justify-center items-center text-white">
            CONTACT US
          </h2>
        </div>
      </ContentOnImage>

      <div className="lg:flex container mx-auto my-12 p-4">
        <div className="lg:w-1/2 grid gap-4 p-6 bg-green-200/75">
          <h2 className="font-bold text-3xl text-green-950">
            Send us a message
          </h2>
          <p className="text-green-800">
            Fill out the form below and we will get back to you shortly
          </p>

          <form className="p-4 grid gap-6">
            <div className="grid gap-4 grid-cols-2">
              <input
                className="outline-none px-6 py-4 bg-gray-100 text-xl font-bold rounded-lg block w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                className="outline-none px-6 py-4 bg-gray-100 text-xl font-bold rounded-lg block w-full"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              className="outline-none px-6 py-4 bg-gray-100 text-xl font-bold rounded-lg block w-full"
              type="text"
              placeholder="Phone"
            />
            <input
              className="outline-none px-6 py-4 bg-gray-100 text-xl font-bold rounded-lg block w-full"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="outline-none px-6 py-4 bg-gray-100 text-xl font-bold rounded-lg block w-full"
              rows={6}
              placeholder="Message Here"
            ></textarea>

            <button className="bg-green-900 w-max self-center px-12 py-4 text-white rounded-lg font-bold hover:ring-1 hover:ring-green-900 hover:text-green-900 hover:bg-transparent duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="text-white bg-green-900 grid md:grid-cols-2 lg:w-1/2 p-4 gap-6">
          {contacts.map((contact, idx) => (
            <div className="border flex flex-col items-center py-12" key={idx}>
              <div className="text-5xl">
                <FontAwesomeIcon icon={contact.icon} />
              </div>
              <div className="font-bold my-4 text-2xl text-center">{contact.title}</div>
              <div className="text-center text-xl">{contact.link}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
