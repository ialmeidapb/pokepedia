import React from "react";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.footer}>
      <Typography>&#169; Copyright 2023&nbsp;-&nbsp;</Typography>
      <Typography>Igor Almeida&nbsp;-&nbsp;</Typography>
      <Typography>ialmeida.pb@gmail.com</Typography>
    </Grid>
  );
};

export default Footer;
