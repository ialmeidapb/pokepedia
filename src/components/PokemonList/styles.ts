import { makeStyles } from "@mui/styles";
import Pokeball from "../../assets/imgs/pokeball-bg.png";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${Pokeball})`,
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundColor: "#FAF9F6",
    backgroundSize: "450px",
    width: "100vw",
    height: "100vh",
    margin: "0",
  },
  dropBox: {
    paddingLeft: "50px",
  },
  logoBox: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  dropTitle: {
    fontFamily: "Montserrat Bold",
    fontSize: "16px",
    textShadow: "1px 1px #FFFFFF",
  },
  dropElement: {
    width: "360px",
    backgroundColor: "#FAF9F6",
  },
  moreInfoGrid: {
    width: "100vw",
    textAlign: "center",
  },
  moreInfoText: {
    fontFamily: "Montserrat Bold",
  },
}));
