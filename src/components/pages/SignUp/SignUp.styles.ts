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
    color: "darkblue",
    fontWeight: 200,
    fontSize: 16,
    paddingLeft: 4,
  },
  div: {
    display: "flex",
    alignItems: "center",
    marginTop: 25,
  },
  input: {
    width: 428,
    marginBottom: 15,
    borderBottom: "1px solid white",
  },
  message: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 300,
    fontSize: 14,
    color: "red",
  },
});
