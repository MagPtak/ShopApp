import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  selectFirst: {
    color: "white",
    height: "50px",
    borderRight: "1px solid grey",
    borderLeft: "1px solid grey",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  selectSecond: {
    color: "white",
    fontWeight: "400",
    height: "50px",
    borderRight: "1px solid grey",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  cartIcon: {
    height: "50px",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  //Nie działa 😖
  menuButton: {
    "& .Mui-active": {
      "& :active": {
        backgroundColor: "black",
        color: "orange",
      },
    },
    marginRight: "0",
  },
});
