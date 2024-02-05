import React from "react";
import { ContentOnImage } from "./ContentOnImage";
import { NavBar } from "./NavBar";
import { images } from "../assets/images/images";
import {
  faHandsHelping,
  faLightbulb,
  faPhone,
  faShieldAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function About() {
  const coreValues = {
    Integrity: {
      description:
        "Upholding the highest ethical standards in all our endeavors.",
      icon: faShieldAlt,
    },
    Collaboration: {
      description:
        "Fostering partnerships and alliances to amplify our impact.",
      icon: faHandsHelping,
    },
    Innovation: {
      description: "Embracing creativity and forward-thinking solutions.",
      icon: faLightbulb,
    },
    Inclusivity: {
      description: "Ensuring diversity and equal opportunities for all.",
      icon: faUsers,
    },
  };

  return (
    <div>
      <ContentOnImage
        className="pb-16 bg-green-950/50"
        imageContainerClassName="blur-s"
        image={images.iraq}
      >
        <div className="container mx-auto px-4">
          <NavBar />

          <h2 className="text-7xl h-[25vh] flex justify-center items-center text-white">
            ABOUT US
          </h2>
        </div>
      </ContentOnImage>

      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[50vh]">
          <div className="absolute top-0 left-0 right-[60%] bottom-0 bg-green-800"></div>
          <div className="absolute top-8 bottom-8 left-[10%] right-[30%]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2015/08/18/20/45/kids-894787_640.jpg"
            />
          </div>
        </div>
        <div className="px-4 py-6 flex flex-col">
          <h2 className="text-4xl mt-8 mb-2">ABOUT OA-FOUNDATION</h2>
          <div className="flex mb-4">
            <div className="border-b-4 border-green-800 w-1/5"></div>
            <div className="border-b-4 border-gray-300 w-1/2"></div>
          </div>
          <div className="mt-4">
            We are a community dedicated to shaping a brighter future for young
            minds. Our journey began with a vision to empower youth through a
            unique blend of sports and academic sponsorships. Guided by a deep
            commitment to fostering holistic development, we have evolved into a
            beacon of opportunity and transformation.
          </div>
          <div>
            Our story is woven with the threads of passion, dedication, and a
            relentless pursuit of excellence. From our humble beginnings to the
            impactful initiatives we now spearhead, OA-Foundation stands as a
            testament to the belief that every young individual deserves the
            chance to unlock their full potential. As you explore our endeavors
            and achievements, join us in the collective endeavor to create
            lasting positive change.
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-800 text-white px-6 py-4 text-xl">
              REQUEST A FREE CONSULTATION
            </button>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h3>Free Consultation</h3>
                <h4> CALL: +254704537283</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContentOnImage
        className=""
        imageContainerClassName=""
        image={
          "https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_640.jpg"
        }
      >
        <div className="bg-green-950/95 py-24">
          <h2 className="text-4xl text-center mb-4 text-white">
            OUR CORE VALUES
          </h2>
          <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-4 w-max mx-auto">
            {Object.keys(coreValues).map((cv, idx) => (
              <div
                className="flex flex-col items-center max-w-[40vh] border border-white/50 px-4 py-12 text-white"
                key={idx}
              >
                <div className="text-6xl">
                  <FontAwesomeIcon icon={coreValues[cv].icon} />
                </div>
                <h2 className="text-3xl py-4">{cv}</h2>
                <div className="text-center text-xl max-w-[30vh]">
                  {coreValues[cv].description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentOnImage>

      <div className="grid md:grid-cols-2">
        <div className="px-4 py-6 flex flex-col">
          <h2 className="text-4xl mt-8 mb-2">WHO WE ARE</h2>
          <div className="flex mb-4">
            <div className="border-b-4 border-green-800 w-1/5"></div>
            <div className="border-b-4 border-gray-300 w-1/2"></div>
          </div>
          <div className="mt-4">
            We are a dynamic collective of individuals united by a common purpose: to
            empower and uplift the next generation. We are educators, mentors,
            advocates, and champions of the belief that every young mind
            possesses unique talents waiting to be nurtured. Our team is driven
            by a shared commitment to providing comprehensive support through
            sports programs and academic sponsorships.
          </div>
          <div>
          We believe in the
            transformative power of a well-rounded education, and our
            initiatives reflect this conviction. From the leadership guiding our
            vision to the volunteers making a hands-on impact, each member of
            OA-Foundation contributes to a culture of inspiration,
            resilience, and inclusivity. Together, we are not just an
            organization; we are a force for positive change, dedicated to
            shaping futures and fostering a legacy of empowered individuals.
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-800 text-white px-6 py-4 text-xl">
              FREE CONSULTATION
            </button>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h3>Free Consultation</h3>
                <h4> CALL: +254704537283</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[50vh]">
          <div className="absolute top-0 right-0 left-[60%] bottom-0 bg-green-800"></div>
          <div className="absolute top-8 bottom-8 right-[10%] left-[30%]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2016/10/07/02/03/children-1720484_640.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
