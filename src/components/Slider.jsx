import React, { useState } from "react";

const images = [
  "https://placehold.co/600x400?text=Image 1",
  "https://placehold.co/600x400?text=Image 2",
  "https://placehold.co/600x400?text=Image 3",
];
const Slider = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const prev = () => {
    if (currentImgIndex > 0) {
      setCurrentImgIndex((prev) => prev - 1);
    } else {
      setCurrentImgIndex(images.length - 1);
    }
  };
  const next = () => {
    if (images.length > currentImgIndex + 1) {
      setCurrentImgIndex((prev) => prev + 1);
    } else {
      setCurrentImgIndex(0);
    }
  };
  return (
    <>
      <h2>Slider</h2>
      <div>
        <img src={images[currentImgIndex]} alt="img" />
      </div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default Slider;
