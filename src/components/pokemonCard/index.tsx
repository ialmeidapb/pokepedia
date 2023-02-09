import React from "react";
// * 3rd part libs
import { Grid, Box, Typography } from "@mui/material";
// * TYPES
import Pokemon from "../../types/Pokemon";
//LOCAL IMPORTS
import { useStyles } from "./styles";
//ASSETS
import PokeballImage from "../../assets/imgs/pokeball.png";

interface PokemonInfo {
  currentPokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonInfo> = ({ currentPokemon }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <Typography className={classes.cardTitle} align="center">
          {currentPokemon.name}
        </Typography>
        <Box className={classes.imageGrid}>
          <img
            width={currentPokemon.image ? 150 : 100}
            height={currentPokemon.image ? 150 : 100}
            src={currentPokemon.image ?? PokeballImage}
            alt={currentPokemon.name}
          />
        </Box>
        <Box
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography>
              <b>Height:</b> {currentPokemon.height + "0 cm"}
            </Typography>
            <Typography>
              <b>Weight:</b> {currentPokemon.weight + "0 g"}
            </Typography>
            <Typography>
              <b>Type:</b> {currentPokemon.type}
            </Typography>
            <Typography>
              <b>Special Move:</b> {currentPokemon.move}
            </Typography>
          </Box>
          <Box>
            <Typography>
              <b>Attack Level: </b>
              {currentPokemon.stats?.attack}
            </Typography>
            <Typography>
              <b>Defense Level: </b>
              {currentPokemon.stats?.defense}
            </Typography>
            <Typography>
              <b>HP Level:</b> {currentPokemon.stats?.hp}
            </Typography>
            <Typography>
              <b>Speed Level: </b>
              {currentPokemon.stats?.speed + " km/h"}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PokemonCard;
