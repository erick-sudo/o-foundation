// Import necessary React and Tailwind CSS modules
import React from "react";
import { images } from "../assets/images/images";
import { ContentOnImage } from "./ContentOnImage";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VscQuote } from "react-icons/vsc";
import {
  faArrowRight,
  faBook,
  faFistRaised,
  faGroupArrowsRotate,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Glass } from "./Glass";
import { useNavigate } from "react-router-dom";

// Home component
export const Home = () => {
  const emphasis = [
    { icon: faFistRaised, title: "Fitness and Wellness" },
    { icon: faBook, title: "Academic Support" },
    { icon: faGroupArrowsRotate, title: "Community Outreach Activities" },
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      testimony:
        "Joining the Youth Sports Leagues has been an incredible experience for my kids. The emphasis on teamwork, fair play, and skill development is truly commendable. It's more than just sports; it's about building character and fostering a love for a healthy and active lifestyle. Kudos to the dedicated team behind this fantastic initiative!",
    },
    {
      name: "Jason Rodriguez",
      testimony:
        "I can't say enough about the impact of the Fitness and Wellness Programs. The variety of activities, from yoga to general fitness classes, has significantly improved my overall well-being. The educational sessions on healthy living have been eye-opening. It's not just a workout; it's a holistic approach to a healthier life. I highly recommend getting involved!",
    },
    {
      name: "Amanda Carter",
      testimony:
        "The Mentorship Programs provided by this organization have been a game-changer for me. Having an experienced athlete as my mentor has guided me in setting personal goals, developing crucial life skills, and even considering a career in sports. The supportive network created through these programs is invaluable. It's more than mentorship; it's a pathway to personal and professional growth.",
    },
  ];

  const navigate = useNavigate();

  const services = [
    "Youth Sports Leagues",
    "Sports Camps",
    "Leadership Development",
    "Community Outreach Events",
    "Adaptive and Inclusive Sports",
    "Career Exploration",
    "Healthy Lifestyle Challenges",
  ];

  const points = [
    "Join us in making a difference",
    "Volunteer",
    "Participate in our programs",
    "Support our cause",
  ];

  return (
    <div className="">
      <ContentOnImage
        className="pb-16 bg-green-950/50"
        imageContainerClassName="blur-s"
        image={images.image1}
      >
        <div className="container mx-auto px-4">
          <NavBar />
          <Glass className="m-2" glassClassName="blur rounded-md">
            <div className="text-white py-[1em] mt-[20vh] text-6xl lg:text-6xl max-w-3xl">
            Welcome to OA-Foundation, a beacon of empowerment and opportunity for young minds.
            </div>
            <p className="max-w-md m-4 text-white border font-bold p-4">
              We are dedicated to empowering young individuals through sports,
              fostering leadership, teamwork, and personal development.
            </p>
          </Glass>

          <Glass
            className="w-max m-6"
            glassClassName="rounded-md peer-hover:bg-green-800/75 peer-hover:ring-1 peer-hover:ring-white bg-white/75 duration-300"
          >
            <button className="text- px-6 py-4 text-2xl text-white duration-300">
              Explore Now
            </button>
          </Glass>
        </div>
      </ContentOnImage>

      <div className="p-4 mx-auto bg-green-950 text-green-400">
        <h2 className="font-bold text-3xl">Emphasis on:</h2>
        <div className="grid gap-8 md:gap-2 md:flex my-4 font-bold">
          {emphasis.map((e, idx) => (
            <div key={idx} className="md:w-1/3 flex items-center gap-2">
              <div className="text-4xl">
                <FontAwesomeIcon icon={e.icon} />
              </div>
              <div className="">{e.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-100 py-[6em] mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4 container mx-auto">
          <div className="md:w-1/2 min-h-96 m-6 self-stretch flex relative">
            <ContentOnImage
              imageContainerClassName="z-10"
              image={images.image2}
              className="flex-grow"
            >
              <div className="absolute inset-0 bg-green-900/50 z-20"></div>
            </ContentOnImage>
          </div>
          <div className="md:w-1/2 text-green-700">
            <div className="max-w-md grid gap-8 m-2">
              <div className="grid gap-4">
                <h2 className="text-4xl text-green-900">
                  Collaborating for Growth and Excellence
                </h2>
                <div>
                  We aim to provide life-changing opportunities to young
                  children in need. The program focuses on holistic development,
                  incorporating educational workshops, community development,
                  and extracurricular support to enhance the overall well being
                  of sponsored children.
                </div>
              </div>

              <div className="grid gap-4">
                <h2 className="text-4xl text-green-900">Vision</h2>
                <div>
                  Our vision is to be a beacon of inspiration, where every young
                  mind, regardless of background, discovers their limitless
                  potential through the transformative power of sports and
                  education.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:flex container mx-auto p-4 my-12 text-green-700">
        <div className="lg:w-1/3 py-8 flex flex-col gap-4">
          <div className="text-4xl text-green-900">
            Essential strategies to uplift your venture
          </div>
          <div className="px-4 mb-12">
            We aspire to cultivate a generation of resilient, confident, and
            compassionate individuals who contribute positively to their
            communities, breaking barriers and creating a ripple effect of
            empowerment across the globe.
          </div>
          <button
            onClick={() => navigate("/services")}
            className="self-start mx-4 hover:bg-green-900 px-6 py-4 text-2xl hover:text-white text-green-900 ring-green-900 ring-1 duration-200"
          >
            All Services
          </button>
        </div>
        <div className="lg:w-1/3 min-h-[50vh] flex">
          <ContentOnImage className="flex-grow m-6" image={images.image3}>
            <div className="absolute inset-0 bg-green-900/50"></div>
          </ContentOnImage>
        </div>
        <div className="lg:w-1/3 flex flex-col gap-4">
          {services.map((s, idx) => (
            <div
              className="pb-4 px-4 cursor-pointer border-b border-green-700 hover:border-yellow-600 hover:text-yellow-600 duration-200"
              key={idx}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto grid lg:grid-cols-2 py-24">
        <ContentOnImage image={images.image4} className="min-h-96">
          <div className="absolute inset-0 bg-green-900/50"></div>
        </ContentOnImage>
        <div className="grid py-8 px-4">
          <div className="text-[5em] z-10 flex px-4 text-green-900">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <div className="z-20 my-12 text-green-800 text-2xl max-w-2xl mx-auto">
            Together, we envision a world where every child's dreams are
            nurtured, and their journey toward success is guided by the values
            of teamwork, leadership, and unwavering support.
          </div>
          <div className="border-b-4 border-green-900 w-1/4"></div>
        </div>
      </div>

      <ContentOnImage image={images.image5} className="bg-green-950/75">
        <div className="container mx-auto py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 flex flex-col items-center text-white">
              <div className="text-2xl flex flex-wrap gap-2">
                <span className="">Unlock a childs</span>
                <span className="font-bold">POTENTIAL</span>
              </div>
              <div className="text-center z-20 my-12 text-2xl max-w-2xl mx-auto">
                By fostering an environment of encouragement, education, and
                mentorship, we unlock the door to possibilities and empower
                children to envision a future filled with achievement and
                success.
              </div>
              <button
                onClick={() => navigate("/services")}
                className="hover:bg-white px-6 py-4 text-2xl hover:text-green-800 ring-1 ring-white duration-200"
              >
                Explore Now
              </button>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center gap-6">
                {points.map((p, idx) => (
                  <Glass
                    className="py-4 px-6 rounded-md overflow-hidden cursor-pointer text-green-400 font-bold hover:text-white"
                    glassClassName="bg-white/75 blur-sm"
                    key={idx}
                  >
                    {p}
                  </Glass>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentOnImage>

      <div className="container mx-auto py-12 px-4 grid gap-6 lg:grid-cols-2">
        <div className="bg-green-950 text-white max-w-xl">
          <ContentOnImage
            imageContainerClassName="z-10"
            image={images.image1}
            className="min-h-[60vh]"
          >
            <div className="absolute inset-0 bg-green-900/50 z-20"></div>
          </ContentOnImage>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
            <div className="flex">
              <p className="max-w-xs">
                Explore our exciting upcoming events and join us for a day of
                fun and sportsmanship.
              </p>
              <div className="flex-grow flex justify-center px-6">
                <button className="hover:text-green-500">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-950 text-white max-w-xl">
          <ContentOnImage
            imageContainerClassName="z-10"
            image={images.image4}
            className="min-h-[60vh]"
          >
            <div className="absolute inset-0 bg-green-900/50 z-20"></div>
          </ContentOnImage>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-6">Community Impact</h2>
            <div className="flex">
              <p className="max-w-xs">
                Learn how our programs positively impact local communities and
                contribute to youth development.
              </p>
              <div className="flex-grow flex justify-center px-6">
                <button className="hover:text-green-500">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-24 bg-green-200">
        <h2 className="text-center text-4xl font-extrabold text-green-950 px-6 py-2 border-b-4 border-green-700 w-max mx-auto">
          OUR TESTIMONIALS
        </h2>

        <div className="text-green-900 grid lg:grid-cols-3 gap-8 p-4 container mx-auto">
          {testimonials.map((t, idx) => (
            <div className="bg-white p-6 grid" key={idx}>
              <div className="p-4 text-4xl"><VscQuote /></div>
              <div className="pb-4">{t.testimony}</div>
              <div className="flex items-center gap-2">
                <span className="border-2 w-12 border-green-700"></span>
                <span>{t.name.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
