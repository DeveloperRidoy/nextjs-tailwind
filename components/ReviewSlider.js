import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

function ReviewSlider({ reviews }) {
  const [review, setreview] = useState(0);

  const { height, width } = useWindowDimensions();

  useEffect(() => setreview(0), [width]);
  return (
    <div>
      <div className="absolute z-10 top-1/2 left-10 right-10 transform translate-y-10 flex justify-between text-3xl">
        <button
          className="transform focus:outline-none focus:scale-125 focus:ring-2 p-1 rounded-lg transition disabled:text-cyan-700 text-cyan-300"
          disabled={review === 0}
          onClick={() => setreview(review - 1)}
        >
          <i aria-hidden className="fas fa-chevron-left"></i>
        </button>
        <button
          className="transform focus:outline-none focus:scale-125 focus:ring-2 p-1 rounded-lg transition disabled:text-cyan-700 text-cyan-300"
          disabled={
            width >= 768
              ? review >= Math.floor((reviews.length - 1) / 2)
              : review === reviews.length - 1
          }
          onClick={() => setreview(review + 1)}
        >
          <i aria-hidden className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="overflow-hidden">
        <p className="capitalize text-center text-4xl mb-32 font-bold">
          reviews
        </p>
        <motion.div
          className="flex"
          style={{ width: `${reviews.length * 100}%` }}
          initial={{ x: 0 }}
          animate={{
            x: `-${(review / reviews.length) * 100}%`,
            transition: { duration: 0.5 },
          }}
        >
          {reviews.map((rev, i) => (
            <div
              className="px-5"
              key={i}
              style={{
                width:
                  width >= 768
                    ? `${(1 / reviews.length) * 50}%`
                    : `${(1 / reviews.length) * 100}%`,
              }}
            >
              <div className="text-center bg-secondary pb-5 pt-24 px-5 lg:px-16 rounded-2xl relative">
                <img
                  src={rev.img}
                  alt={rev.name}
                  className="block mx-auto h-32 w-32 rounded-full absolute -top-16 left-1/2 transform -translate-x-1/2"
                />
                <h3 className="text-2xl">{rev.name}</h3>
                <h4 className="text-cyan-300 text-lg uppercase my-3">gamer</h4>
                <i
                  className="fas fa-quote-left text-cyan-300 text-2xl"
                  aria-hidden
                ></i>
                <p>"{rev.review}"</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ReviewSlider;
