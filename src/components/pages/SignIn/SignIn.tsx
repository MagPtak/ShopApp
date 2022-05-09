import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../SignUp/SignUp.styles";
import "../SignUp/SignUp.css";
import routerPaths from "../../../routerPaths";

const SignIn: React.FC<Record<string, unknown>> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const password = useRef<string | number>();
  const email = useRef<string | number>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  password.current = watch("password", "");
  email.current = watch("email", "");

  const handleLoginSubmit = () => {
    toggleLocalStorage();
    navigate(routerPaths.profile);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const toggleLocalStorage = () => {
    if (checked) {
      localStorage.removeItem("credentials");
      const getLocalStorage = localStorage.getItem("credentials");
      let users = [];
      if (getLocalStorage === null) {
        users = [];
      } else {
        users = JSON.parse(getLocalStorage);
        // users.find(el => el.email.current !== email.current)
      }
      users.push(email.current, password.current);
      localStorage.setItem("credentials", JSON.stringify(users));
    }
  };

  return (
    <div className="signUpContainer">
      <Card className={classes.card} sx={{ borderRadius: 3 }}>
        <CardContent className={classes.cardContent}>
          <Typography sx={{ fontSize: 30, fontWeight: 400, marginBottom: 5 }}>
            Enter Your Details
          </Typography>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <TextField
              variant="standard"
              autoComplete="username"
              placeholder="Email *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: errors.email
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid rgb(128,128,128)",
              }}
              className={classes.input}
              {...register("email", {
                required: "Please fulfill marked fields.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            ></TextField>
            <p className={classes.message}>{errors.email?.message}</p>
            <TextField
              type="password"
              variant="standard"
              autoComplete="new-password"
              placeholder="Password *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: errors.password
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid 	rgb(128,128,128)",
              }}
              className={classes.input}
              {...register("password", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
              })}
            ></TextField>
            <p className={classes.message}>{errors.password?.message}</p>
            <div className="formBottom">
              <div className="checkbox">
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label="Remember me"
                />
                <Link to="#" className={classes.linkPasswordReminder}>
                  Forgot Password?
                </Link>
              </div>
              <Button
                type="submit"
                // className={classes.button}
                sx={{
                  backgroundColor: "rgb(255, 85, 0)",
                  color: "rgb(250, 250, 250)",
                  width: "150px",
                  height: 50,
                  marginTop: 2,
                  "&:hover": {
                    backgroundColor: "rgb(255, 168, 124)",
                    color: "rgb(0, 0, 0)",
                  },
                }}
              >
                Sign Up
              </Button>
            </div>
          </form>
          <div className={classes.div}>
            <Typography sx={{ fontSize: 16, fontWeight: 200 }}>
              Don't have an account?
            </Typography>
            <Link to="/signup" className={classes.link}>
              Click here to create one
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
