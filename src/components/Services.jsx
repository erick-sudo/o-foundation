import React from "react";
import { images, serviceImages } from "../assets/images/images";
import { NavBar } from "./NavBar";
import { ContentOnImage } from "./ContentOnImage";
import { NavLink } from "react-router-dom";
import { PiFlowArrowThin } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FcAddressBook } from "react-icons/fc";

export function Services() {
  const services = {
    "Youth Sports Leagues": [
      "Organize regular sports leagues for various age groups.",
      "Include popular sports like soccer, basketball, baseball, or volleyball.",
      "Emphasize teamwork, fair play, and skill development.",
    ],
    "Sports Camps": [
      "Conduct seasonal sports camps during school breaks or holidays.",
      "Offer intensive training sessions in specific sports.",
      "Include workshops on nutrition, sports psychology, and injury prevention.",
    ],
    "Fitness and Wellness Programs": [
      "Introduce fitness programs focusing on overall well-being.",
      "Include activities like yoga, Pilates, or general fitness classes.",
      "Provide educational sessions on healthy living.",
    ],
    "Leadership Development": [
      "Implement leadership programs for older youth.",
      "Include workshops on communication, teamwork, and decision-making.",
      "Provide opportunities for leadership roles within the organization.",
    ],
    "Academic Support and Tutoring": [
      "Combine sports activities with academic support.",
      "Offer tutoring services for participants to enhance their educational achievements.",
      "Encourage a balance between academics and sports.",
    ],
    "Community Outreach Events": [
      "Organize events that engage the community in sports activities.",
      "Conduct sports clinics, tournaments, or friendly matches.",
      "Promote social inclusion and community bonding.",
    ],
    // "Mentorship Programs": [
    //   "Pair experienced athletes or community leaders as mentors for young participants.",
    //   "Focus on personal development, goal setting, and career guidance.",
    //   "Create a supportive network for youth to seek advice and encouragement.",
    // ],
    // "Specialized Sports Clinics": [
    //   "Offer specialized clinics for specific sports skills.",
    //   "Bring in guest coaches or athletes for expert guidance.",
    //   "Cater to both beginners and those looking to enhance their skills.",
    // ],
    // "Adaptive and Inclusive Sports": [
    //   "Develop programs that cater to individuals with different abilities.",
    //   "Promote inclusivity by adapting sports to accommodate diverse needs.",
    //   "Collaborate with organizations specializing in adaptive sports.",
    // ],
    // "Sports for Social Change": [
    //   "Use sports as a tool for addressing social issues.",
    //   "Organize campaigns, events, or tournaments that raise awareness.",
    //   "Encourage youth to become advocates for positive change.",
    // ],
    // "Career Exploration in Sports": [
    //   "Provide insights into various careers within the sports industry.",
    //   "Arrange workshops, seminars, or internships with professionals.",
    //   "Inspire youth to consider sports-related careers beyond playing.",
    // ],
    // "Healthy Lifestyle Challenges": [
    //   "Launch challenges that promote healthy habits.",
    //   "Include fitness challenges, nutrition awareness campaigns, and stress management activities.",
    //   "Foster a holistic approach to well-being.",
    // ],
  };

  return (
    <div>
      <ContentOnImage
        className="pb-16 bg-green-950/75"
        imageContainerClassName="blur-s"
        image={images.students}
      >
        <div className="container mx-auto px-4">
          <NavBar />
          <p className="text-3xl max-w-2xl py-12 text-white">
            We provide a variety of programs to empower youth through sports and
            holistic development.
          </p>
          <div className="grid p-4 gap-2">
            {Object.keys(services).map((s, idx) => (
              <NavLink
                key={idx}
                className="text-white/50 hover:text-white duration-300 font-bold flex items-center gap-4"
              >
                <PiFlowArrowThin />
                <div>{s}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </ContentOnImage>
      <div>
        {Object.keys(services)
          .reduce((acc, curr, idx) => {
            let phase = Math.floor(idx / 3);
            if (acc[phase]) {
              acc[phase].push(curr);
            } else {
              acc[phase] = [curr];
            }

            return acc;
          }, [])
          .map((sGroup, idx) => (
            <div
              key={idx}
              className={`${
                idx % 2 === 0 ? "text-green-800" : "bg-green-950 text-white"
              } py-12`}
            >
              <div className="grid md:grid-cols-3 lg:container lg:mx-auto">
                {sGroup.map((service, idx2) => (
                  <div
                    key={idx2}
                    className={`px-4 -md:mx-6 -md:py-6 md:py-12  ${
                      idx2 % 2 !== 0
                        ? "-md:border-y md:border-x " +
                          (idx % 2 === 0
                            ? "border-green-950"
                            : "border-white/50")
                        : ""
                    }`}
                  >
                    <h2 className={`text-xl min-h-12 font-bold ${idx % 2 === 0 ? "text-green-950" : "text-green-400"}`}>{service}</h2>
                    <div className="p-4 text-4xl">
                      <ContentOnImage className="h-[40vh]" imageContainerClassName="z-10" image={serviceImages[service]}>
                        <div className="absolute inset-0 bg-green-950/50 z-20"></div>
                      </ContentOnImage>
                    </div>
                    <div className={``}>
                      {services[service].map((bullet, idx3) => (
                        <div key={idx3}>{bullet}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
