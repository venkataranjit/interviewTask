import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const images = [
    "https://placehold.co/600x400?text=Hello+World 1",
    "https://placehold.co/600x400?text=Hello+World 2",
    "https://placehold.co/600x400?text=Hello+World 3",
    "https://placehold.co/600x400?text=Hello+World 4",
    "https://placehold.co/600x400?text=Hello+World 5",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prev = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const next = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };
  return (
    <>
      <h2>Slider</h2>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          alt={`Slide ${currentIndex + 1}`}
        />
      </AnimatePresence>
    </>
  );
};

export default Slider;
