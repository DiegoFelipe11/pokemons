import useAuth from "../../hooks/useAuth";
import usePokemon from "../../hooks/usePokemon";
import Modal from "./Modal";
const Header = () => {
  const { logout } = useAuth();
  const { handleModalBuscador } = usePokemon();
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
          {" "}
          Mis Pokemones
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            className="font-bold uppercase"
            onClick={() => handleModalBuscador()}
          >
            Buscar pokemon
          </button>
          <button
            className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
            onClick={() => logout()}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
      <Modal />
    </header>
  );
};

export default Header;
