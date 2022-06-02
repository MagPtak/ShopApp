import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  HeaderContainer: {
    flexGrow: 1,
  },

  selectFirst: {
    color: "rgb(255, 255, 255)",
    height: "50px",
    width: 160,
    borderRight: "1px solid rgb(128,128,128)",
    borderLeft: "1px solid rgb(128,128,128)",
    "& .MuiSvgIcon-root": {
      color: "rgb(250,250,250)",
    },
  },
  selectSecond: {
    color: "rgb(250,250,250)",
    fontWeight: "400",
    height: "50px",
    width: 160,
    alignContent: "center",
    borderRight: "1px solid rgb(128,128,128)",
    "& .MuiSvgIcon-root": {
      color: "rgb(250,250,250)",
    },
  },
  cartIcon: {
    height: "50px",
    "& .MuiSvgIcon-root": {
      color: "rgb(250,250,250)",
    },
  },
  menuButton: {
    marginRight: "0",
  },
}));
