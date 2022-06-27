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
    borderBottom: "1px solid rgb(0, 0, 139)",
  },

  message: {
    marginBottom: 1,

    fontWeight: 300,
    fontSize: 14,
    color: "rgb(255, 0, 0)",
  },

});
