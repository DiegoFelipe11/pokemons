import { useContext } from "react";
import PokemonContex from "../context/PokemonProvider";
const usePokemon = () => {
  return useContext(PokemonContex);
};

export default usePokemon;
