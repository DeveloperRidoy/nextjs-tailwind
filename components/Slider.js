import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Slider({images}) {
    
    const timeoutRef = useRef(null);

    const interval = 10000;

    const [slider, setSlider] = useState(0);
    
    useEffect(() => {
       if (timeoutRef.current) clearTimeout(timeoutRef.current);

       timeoutRef.current = setTimeout(() => {
         setSlider((prevSlider) =>
           prevSlider === images.length - 1 ? 0 : prevSlider + 1
         );
       }, interval);

       return () => clearInterval(timeoutRef.current);
     }, [slider]);

    return (
      <div className="overflow-hidden relative">
        <div className="absolute bottom-5 left-1/2 xl:bottom-auto xl:top-60 xl:left-40 grid grid-cols-3 gap-12 transform -translate-x-1/2 xl:rotate-90 text-2xl z-10">
          <button
            className={`transform ${
              slider === 0 ? "scale-150" : ""
            } transition focus:outline-none focus:ring focus:scale-150 p-1 rounded`}
            onClick={() => setSlider(0)}
          >
            01
          </button>
          <button
            className={`transform ${
              slider === 1 ? "scale-150" : ""
            } transition focus:outline-none focus:ring focus:scale-150 p-1 rounded`}
            onClick={() => setSlider(1)}
          >
            02
          </button>
          <button
            className={`transform ${
              slider === 2 ? "scale-150" : ""
            } transition focus:outline-none focus:ring focus:scale-150 p-1 rounded`}
            onClick={() => setSlider(2)}
          >
            03
          </button>
        </div>
        <motion.div
          className="text-center flex"
          style={{ width: `${images.length * 100}%` }}
          initial={{ x: 0 }}
          animate={{
            x: `-${(slider / images.length) * 100}%`,
            transition: { duration: 0.2 },
          }}
        >
          {images.map((slider, i) => (
            <div
              key={i}
              className="bg-cover bg-no-repeat w-screen"
              style={{ backgroundImage: `url(${slider.img})` }}
            >
              <div className="flex flex-col items-center bg-black bg-opacity-60 pt-5">
                <h3 className="capitalize text-4xl font-semibold my-2">
                  gamesite template
                </h3>
                <h1 className="uppercase text-3xl  md:text-5xl lg:text-8xl my-10">
                  responsive web <br /> design template
                </h1>
                <p className="max-w-4xl mb-10">
                  Gamers everywhere, we're playing the most prominent PC games
                  in 2019. Featuring both classic games and brand-new games,
                  this listing of the most played computer game on COMPUTER now
                  consists of first-person shooters, multiplayer fight royales,
                  MOBAs, battling games, RPGs, and collectible card video games.
                  Don't be shy to use Responsive Web Design Template.
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 py-4 px-10 focus:ring-4 font-semibold focus:outline-none mb-20 xl:mb-10 rounded-xl">
                  view more
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
}

export default


Slider
