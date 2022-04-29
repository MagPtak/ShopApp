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
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../SignUp/SignUp.css";
import { useStyles } from "../SignUp/SignUp.styles";
import { useState } from "react";
import routerPaths from "../../../routerPaths";
// import useLocalStorage from "../../../hooks/useLocalStorage";
// import { Email, Password } from "@mui/icons-material";

const SignIn: React.FC<Record<string, unknown>> = () => {
  const [checked, setChecked] = useState(false);
  // const [user, setUser] = useLocalStorage("users", [
  //   {
  //     id: "",
  //     userName: "",
  //     password: "",
  //   },
  // ]);

  const classes = useStyles();
  const navigate = useNavigate();
  const password = useRef({});
  const email = useRef({});

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  password.current = watch("password", "");
  email.current = watch("email", "");

  function handleLoginSubmit() {
    navigate(routerPaths.profile);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  function toggleLocalStorage() {
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
  }

  useEffect(() => {
    toggleLocalStorage();
  }, [checked]);

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
                borderBottom: errors.email ? "1px solid red" : "1px solid grey",
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
                  ? "1px solid red"
                  : "1px solid grey",
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
                    <Checkbox
                      className={classes.checkbox}
                      checked={checked}
                      onChange={handleChange}
                    />
                  }
                  label="Remember me"
                />
                <Link to="#" className={classes.linkPasswordReminder}>
                  Forgot Password?
                </Link>
              </div>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "rgb(255, 85, 0)",
                  color: "white",
                  width: "150px",
                  height: 50,
                  marginTop: 2,
                  "&:hover": {
                    backgroundColor: "rgb(255, 168, 124)",
                    color: "black",
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
