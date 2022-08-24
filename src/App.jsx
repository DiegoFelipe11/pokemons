import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { PokemonProvider } from "./context/PokemonProvider";
import AuthLayout from "./layout/AuthLayout";
import Main from "./layout/main";
import LogIn from "./pokemon/auth/LogIn";
import Register from "./pokemon/auth/Register";
import ListPokemon from "./pokemon/pokemons/ListPokemon";
import CardPokemon from "./components/CardPokemon";
import Pokemon from "./pokemon/pokemons/Pokemon";
import PasswordRecovery from "./pokemon/auth/PasswordRecovery";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PokemonProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index path="Login" element={<LogIn />} />
                <Route path="Register" element={<Register />} />
                <Route path="PasswordRecovery" element={<PasswordRecovery />} />
              </Route>
              <Route path="/Dashboard" element={<Main />}>
                <Route index element={<ListPokemon />} />
                <Route path="Pokemon/:id" element={<Pokemon />} />
              </Route>
            </Routes>
          </PokemonProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
