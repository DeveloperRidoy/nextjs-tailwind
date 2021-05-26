import { motion } from "framer-motion";
import { useState } from "react";

function Slider2 ({images}) {
    
    const [slider, setSlider] = useState(0);

    return (
      <div className="relative overflow-hidden h-[300px] md:h-[500px]">
        <motion.div
          className="flex h-full"
          style={{ width: `${images.length * 100}%` }}
          animate={{
            x: `-${(slider / images.length) * 100}%`,
            transition: { duration: 0.3 },
          }}
        >
            {images.map((slider, i) => (
                <div
                className="h-full flex-1 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${slider.img})` }}
                key={i}
                ></div>
            ))}
        </motion.div>
        <div
          className="absolute left-0 right-0 z-10 px-5 md:px-20 flex justify-between"
          style={{ top: "50%", transform: "translate(0, -50%)" }}
        >
          <button
            className="bg-cyan-500 rounded-full h-16 w-16 focus:outline-none focus:ring-4 disabled:bg-cyan-800"
            onClick={() => setSlider(slider - 1)}
            disabled={slider === 0}
          >
            <i aria-hidden className="fas fa-chevron-left fa-2x"></i>
          </button>
          <button
            className="bg-cyan-500 rounded-full h-16 w-16 focus:outline-none focus:ring-4 disabled:bg-cyan-800"
            onClick={() => setSlider(slider + 1)}
            disabled={slider === images.length - 1}
          >
            <i aria-hidden className="fas fa-chevron-right fa-2x"></i>
          </button>
        </div>
      </div>
    );
}

export default Slider2
