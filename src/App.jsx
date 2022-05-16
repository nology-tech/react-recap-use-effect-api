import { useEffect, useState } from "react";
import "./App.scss";

import BreedOptions from "./components/BreedOptions/BreedOptions";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("all");

  return (
    <div className="app">
      <h1>Api & useEffect() recap</h1>
      <BreedOptions onChange={() => null} selected={selectedBreed} />
      {dogs.length > 0 && <Carousel imagesArr={dogs} />}
    </div>
  );
};
export default App;
