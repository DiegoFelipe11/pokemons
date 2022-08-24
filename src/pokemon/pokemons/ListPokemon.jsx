import usePokemon from "../../hooks/usePokemon";
import CardPokemon from "../../components/CardPokemon";
const ListPokemon = () => {
  const { pokemons } = usePokemon();
  return (
    <>
      <div className="md:grid grid-cols-4 gap-4 ">
        {pokemons.length ? (
          pokemons.map((element) => (
            <CardPokemon key={element.id} element={element} />
          ))
        ) : (
          <p>NO HAY ELEMENTOS</p>
        )}
      </div>
    </>
  );
};
export default ListPokemon;
