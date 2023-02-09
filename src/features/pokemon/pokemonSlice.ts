import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Pokemon from "../../types/Pokemon";

const initialState: Pokemon = {
  id: 1,
  name: "",
  image: "",
  height: "",
  weight: "",
  type: "",
  move: "",
  stats: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.type = action.payload.type;
      state.move = action.payload.move;
      state.stats = action.payload.stats;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
