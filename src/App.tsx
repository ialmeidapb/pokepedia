import { FunctionComponent } from "react";
import { PokemonList } from "./components/PokemonList";
import "./assets/styles/global.css";
import "./assets/fonts/fonts.css";

export type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return (
    <>
      <PokemonList />
    </>
  );
};
