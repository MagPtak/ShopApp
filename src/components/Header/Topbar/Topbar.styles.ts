import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) => ({
  HeaderContainer: {
    flexGrow: 1,
  },

  selectFirst: {
    color: "white",
    height: "50px",
    width: 160,
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
    width: 160,
    alignContent: "center",
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
      backgroundColor: "black",
      color: "orange",
    },
    marginRight: "0",
  },
}));
