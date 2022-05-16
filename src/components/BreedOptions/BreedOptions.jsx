import React from "react";
import "./BreedOptions.scss";

const BreedOptions = ({ onChange, selected }) => {
  const breeds = ["all", "affenpinscher", "african", "airedale", "akita", "appenzeller"];

  const breedOptionsJSX = breeds.map((breed, index) => {
    return (
      <option key={"breed-options" + breed + index} value={breed}>
        {breed}
      </option>
    );
  });

  return (
    <form className="breed-options-form">
      <label htmlFor="breed-options">Select breed: </label>
      <select name="breed-options" onChange={onChange} value={selected}>
        {breedOptionsJSX}
      </select>
    </form>
  );
};
export default BreedOptions;
