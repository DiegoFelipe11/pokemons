import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPokemon from "../../components/CardPokemon";
import usePokemon from "../../hooks/usePokemon";
const Pokemon = () => {
  const { pokemonId, pokemon } = usePokemon();
  const id = useParams();
  useEffect(() => {
    if (id) {
      pokemonId(id);
    }
  }, [id]);
  return (
    <div className="flex  justify-center ">
      <div className="w-80">
        <CardPokemon element={pokemon} />
      </div>
    </div>
  );
};

export default Pokemon;
/*    */
