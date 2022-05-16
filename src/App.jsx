import { useEffect, useState } from "react";
import "./App.scss";

import BreedOptions from "./components/BreedOptions/BreedOptions";
import Carousel from "./components/Carousel/Carousel";

// IS TO GET THE RANDOM DOGS
// DO THIS ON LOAD

const App = () => {
  const [dogs, setDogs] = useState([]);

  const [selectedBreed, setSelectedBreed] = useState("all");

  // ASYNC / AWAIT -> WAIT FOR RESPONSES FROM THE API
  const getRandomDogs = async () => {
    const url = "https://dog.ceo/api/breeds/image/random/5";
    // SEND REQUEST TO API / AWAIT THE RESPONSE & STORE IT IN A VARIABLE
    const response = await fetch(url);
    // TO GET THE INFORMATION -> TURN IT INTO JSON
    const data = await response.json();

    setDogs(data.message);
  };

  const getByBreed = async breed => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random/5`;

    const response = await fetch(url);
    const data = await response.json();

    setDogs(data.message);
  };

  // TO RUN CODE WHEN A COMPONENT IS LOADED -> USE EFFECT
  // - 1ST -> FUNCTION TO RUN
  // - 2ND -> DEPENDENCY ARRAY -> EMPTY [] TO ONLY RUN ON LOAD

  //   useEffect(() => {
  //     getRandomDogs();
  //   }, []);

  // TO RUN CODE WHEN A VALUE IS CHANGED / SOMETHING IS UPDATED -> USE EFFECT
  // ADD VALUE TO WATCH IN DEP ARR []

  useEffect(() => {
    if (selectedBreed === "all") {
      getRandomDogs();
    } else {
      getByBreed(selectedBreed);
    }
  }, [selectedBreed]);

  // CAPTURE THE SELECTION -> WHICH BREED IS CHOSEN / SELECTED?
  // EVENT -> TARGET -> VALUE -> WHAT HAS BEEN SELECTED BY USER
  const handleChange = event => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div className="app">
      <h1>Api & useEffect() recap</h1>
      <BreedOptions onChange={handleChange} selected={selectedBreed} />
      {dogs.length > 0 && <Carousel imagesArr={dogs} />}
    </div>
  );
};
export default App;
