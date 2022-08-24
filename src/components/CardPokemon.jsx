import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const CardPokemon = ({ element }) => {
  const id = useParams();
  return (
    <div>
      <div className="w-full max-w-sm py-5 bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={element?.sprites?.front_default}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-black uppercase">
            {element?.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Power: {element?.base_experience}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {id.id != null ? (
              <Link
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                to={"/Dashboard"}
              >
                <i className="bi bi-arrow-left"></i> Volver
              </Link>
            ) : (
              <Link
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                to={`/Dashboard/pokemon/${element.id}`}
              >
                <i className="bi bi-eye-fill"></i> ver
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPokemon;
