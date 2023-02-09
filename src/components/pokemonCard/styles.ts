import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(255,255,255,0.8)",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "150px",
  },
  cardTitle: {
    fontSize: "25px",
    textTransform: "capitalize",
    fontFamily: "Montserrat Bold",
    textShadow: "1px 1px #FFFFFF",
  },
}));
