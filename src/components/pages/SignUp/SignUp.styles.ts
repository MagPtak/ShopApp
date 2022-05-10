import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  card: {
    width: 500,
    marginTop: 125,
    marginBottom: 125,
  },

  cardContent: {
    margin: 20,
  },

  link: {
    color: "rgb(0, 0, 139)",
    fontWeight: 200,
    fontSize: 16,
    paddingLeft: 4,
  },

  linkPasswordReminder: {
    color: "rgb(0, 0, 139)",
    fontWeight: 200,
    fontSize: 16,
    paddingLeft: 4,
    marginLeft: 145,
    paddingRight: 0,
  },

  div: {
    display: "flex",
    alignItems: "center",
    marginTop: 25,
  },

  input: {
    width: 428,
    marginBottom: 15,
    borderBottom: "1px solid rgb(0, 0, 139)",
  },

  message: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 300,
    fontSize: 14,
    color: "rgb(255, 0, 0)",
  },

  // button: {
  //   backgroundColor: "rgb(255, 85, 0)",
  //   color: "rgb(250, 250, 250)",
  //   width: "150px",
  //   height: 50,
  //   marginTop: 2,
  //   "&:hover": {
  //     backgroundColor: "rgb(255, 168, 124)",
  //     color: "rgb(0, 0, 0)",
  //   },
  // },
});
