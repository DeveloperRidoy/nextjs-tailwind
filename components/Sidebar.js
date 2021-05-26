import { motion } from "framer-motion";

function Sidebar({showSidebar, setShowSidebar}) {
    return (
      <motion.div
        className="absolute top-0 h-screen md:hidden w-72 bg-primary flex flex-col items-center p-5 z-30 overflow-y-auto"
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
    );
}

export default Sidebar
