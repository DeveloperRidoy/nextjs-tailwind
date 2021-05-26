import {  motion } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Hamburger from "./icons/Hamburger";

function Nav () {
  
  const [showSidebar, setShowSidebar] = useState(false);
  const { width } = useWindowDimensions();
  
  useEffect(() => {

    // hide sidebar on large screen 
    if (width >= 768) setShowSidebar(false);

    // disable scroll when sidebar is open
    document.body.style.overflowY = showSidebar ? "hidden" : "auto";
  }, [showSidebar, width])


    return (
      <>
        <nav className="sticky top-0 inset-x-0 py-3 px-5 lg:px-28 bg-primary flex justify-between items-center capitalize shadow-xl z-20">
          <a
            href="#"
            className="flex items-center focus:text-cyan-300 focus:outline-none transition"
          >
            <img src="logo.png" className="h-14" />
            <p className="ml-3 text-3xl">GamingAMP</p>
          </a>

          {/* desktop menu */}
          <div className="hidden md:flex items-center font-semibold items-center">
            <a
              href="#"
              className="mx-3 transition hover:text-cyan-300 focus:text-cyan-300 focus:outline-none"
            >
              Watch Video
            </a>
            <button className="relative group mx-3 transition focus:outline-none focus:text-cyan-300 z-30">
              <span className="hover:text-cyan-300 transition group-focus:text-cyan-300">
                Live Demo <i aria-hidden className="fas fa-caret-down" />
              </span>
              <div className="absolute hidden flex-col group-hover:flex group-focus:flex font-semibold pb-3 pt-7 left-0 min-w-max px-10 bg-primary">
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  demo 1
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  demo 2
                </a>
              </div>
            </button>
            <button className="relative group mx-3 transition focus:outline-none focus:text-cyan-300">
              <span className="hover:text-cyan-300 transition group-focus:text-cyan-300">
                Blocks <i aria-hidden className="fas fa-caret-down" />
              </span>
              <div className="absolute hidden flex-col group-hover:flex group-focus:flex font-semibold pb-3 pt-7 px-5 left-0 min-w-max bg-primary">
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Headers
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Articles
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Sliders
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Image and Video
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Events and Timeline
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Team and Testimonials
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Pricing Table
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Contacts
                </a>
                <a
                  href="#"
                  className="mx-3 my-1 transition hover:text-cyan-300"
                >
                  Footers
                </a>
              </div>
            </button>
            <button className="mx-3 uppercase transition hover:bg-cyan-400 hover: border-2 border-cyan-400 rounded-xl py-2 px-5 font-semibold focus:outline-none focus:ring-4 z-10">
              buy now
            </button>
          </div>

          {/* mobile menu handler*/}
          <Hamburger
            className={`md:hidden transition duration-200 transform ${
              showSidebar ? "translate-x-96" : "translate-x-0"
            }`}
            onClick={() => setShowSidebar(!showSidebar)}
          ></Hamburger>
        </nav>

        {/* mobile sidebar */}
        <motion.div
          className="fixed top-0 h-screen md:hidden w-72 bg-primary flex flex-col items-center p-5 z-30 overflow-y-auto"
          initial={{ right: "-100%" }}
          animate={{
            right: showSidebar ? 0 : "-100%",
            transition: { duration: 0.2 },
          }}
        >
          <button
            className="focus:outline-none transform transition hover:rotate-90 focus:ring-2 focus:scale-125 rounded p-2 self-end text-2xl"
            onClick={() => setShowSidebar(false)}
          >
            <i className="fas fa-times" aria-hidden></i>
          </button>
          <a href="#" className="text-center my-2">
            watch videos
          </a>
          <button className="my-2 group focus:outline-none ">
            <span className="group-focus:text-cyan-300">
              live demo <i className="fas fa-caret-down" aria-hidden></i>
            </span>
            <div className="hidden group-focus:flex group-hover:flex flex-col flex font-semibold pb-3 min-w-max bg-primary">
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                demo 1
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                demo 2
              </a>
            </div>
          </button>
          <button className="group my-2 focus:outline-none">
            <span className="group-focus:text-cyan-300">
              blocks <i className="fas fa-caret-down" aria-hidden></i>
            </span>
            <div className="hidden flex-col group-hover:flex group-focus:flex font-semibold pb-3 min-w-max bg-primary">
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Headers
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Features
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Articles
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Sliders
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Image and Video
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Events and Timeline
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Team and Testimonials
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Pricing Table
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Contacts
              </a>
              <a href="#" className="mx-3 my-1 transition hover:text-cyan-300">
                Footers
              </a>
            </div>
          </button>
          <button className="border border-cyan-300 py-3 px-10 hover:bg-cyan-400 focus:bg-cyan-400 focus:outline-none focus:ring-4 rounded-lg my-2">
            buy now
          </button>
        </motion.div>
        <div
          className={`md:hidden absolute bg-black ${
            showSidebar ? "opacity-50 inset-0" : "opacity-0"
          } transition duration-500 z-20 `}
          onClick={() => setShowSidebar(false)}
        ></div>
      </>
    );
}

export default Nav
