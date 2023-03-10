// Unpublished Work © 2021 - 2022 Deere & Company

import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";

const rootReducer = combineReducers({ pokemon: pokemonReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
