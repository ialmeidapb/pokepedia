import { FunctionComponent, useEffect, useState } from "react";
// * 3rd part libs
import {
  Grid,
  Box,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
// * TYPES
import Pokemon, { Stats } from "../../types/Pokemon";
// * API & REDUX
import { api } from "../../features/pokemon/services/pokemonApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPokemon } from "../../features/pokemon/pokemonSlice";
//COMPONENTS
import PokemonCard from "../pokemonCard";
import Footer from "../footer";
//LOCAL IMPORTS
import { useStyles } from "./styles";
//ASSETS
import PokepediaLogo from "../../assets/imgs/PokePedia-logo.png";

export const PokemonList: FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch();
  const currentPokemon = useAppSelector((state) => state.pokemon);
  const [pokemons, setPokemons] = useState({ results: [{ name: "" }] });
  const [pokemonName, setPokemonName] = useState("pikachu");
  const classes = useStyles();

  useEffect(() => {
    const listPokemons = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1279")
        .then((response) => response.json())
        .then((allpokemon) => setPokemons(allpokemon));
    };
    listPokemons();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      api
        .getPokemonByName(pokemonName)
        .then((pokemon) => {
          const currentPokemonStats: Stats = {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            specialAttack: pokemon.stats[3].base_stat,
            specialDefense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
          };

          const newPokemon: Pokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default?.toString(),
            height: pokemon.height.toString(),
            weight: pokemon.weight.toString(),
            type: pokemon.types[0].type.name,
            move: pokemon.moves[0].move.name,
            stats: currentPokemonStats,
          };
          dispatch(setPokemon(newPokemon));
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchPokemon();
  }, [pokemonName, dispatch]);

  const handleChange = (event: SelectChangeEvent) => {
    setPokemonName(event.target.value as string);
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Grid className={classes.root}>
      <Box className={classes.logoBox}>
        <img width={350} src={PokepediaLogo} alt="logo" />
      </Box>
      <Box className={classes.dropBox}>
        <Typography className={classes.dropTitle}>
          Select your Pokemon, to know more about it:
        </Typography>
        <Select
          displayEmpty
          value={pokemonName}
          color={"error"}
          defaultValue={pokemonName}
          className={classes.dropElement}
          onChange={handleChange}
        >
          {pokemons.results
            .filter((e) => !e.name.includes("-gmax"))
            .map((pokemon) => {
              return (
                <MenuItem key={pokemon.name} value={pokemon.name}>
                  {capitalizeFirstLetter(pokemon.name)}
                </MenuItem>
              );
            })}
        </Select>
      </Box>
      <PokemonCard currentPokemon={currentPokemon} />
      <Box className={classes.moreInfoGrid}>
        <Typography className={classes.moreInfoText}>
          Want to know more?{" "}
          <a
            href={`https://www.google.com/search?q=${currentPokemon.name}`}
            target="_blank"
          >
            Click here
          </a>
        </Typography>
      </Box>
      <Footer />
    </Grid>
  );
};
