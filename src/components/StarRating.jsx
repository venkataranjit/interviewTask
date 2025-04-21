import React, { useState } from "react";

const StarRating = () => {
  const totalRatings = 5;
  const [rating, setRating] = useState(0);

  return (
    <>
      <h2>Ratings</h2>
      {[...Array(totalRatings)].map((t, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            style={{
              cursor: "pointer",
              color: rating >= starValue ? "gold" : "grey",
            }}
          >
            ★
          </span>
        );
      })}
    </>
  );
};

export default StarRating;
