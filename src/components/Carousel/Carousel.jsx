import React, { useState } from "react";

import "./Carousel.scss";

const Carousel = props => {
  const { imagesArr } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === imagesArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(imagesArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={handleDecrement} className="carousel__arrow">
        {"<"}
      </button>
      <img src={imagesArr[counter]} alt="" className="carousel__image" />
      <button onClick={handleIncrement} className="carousel__arrow">
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
