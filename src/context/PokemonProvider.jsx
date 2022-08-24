import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PokemonContex = createContext();
const PokemonProvider = ({ children }) => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setpokemon] = useState({});
  const [modalbuscador, setmodalbuscador] = useState(false);
  useEffect(() => {
    const getPokemons = async () => {
      let data = [];
      for (let i = 1; i <= 50; i++) {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const res = await url.json();
        data.push(res);
      }
      setPokemons([...data]);
    };
    getPokemons();
  }, []);

  const pokemonId = async (id) => {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.id}`);
    const res = await url.json();
    setpokemon(res);
  };

  const handleModalBuscador = () => {
    setmodalbuscador(!modalbuscador);
  };
  return (
    <PokemonContex.Provider
      value={{
        pokemons,
        pokemon,
        modalbuscador,
        pokemonId,
        handleModalBuscador,
      }}
    >
      {children}
    </PokemonContex.Provider>
  );
};

export { PokemonProvider };
export default PokemonContex;
