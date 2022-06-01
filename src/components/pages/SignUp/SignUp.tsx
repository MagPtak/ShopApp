import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./SignUp.styles";
import routerPaths from "../../../routerPaths";
import "./SignUp.css";
import { AuthService } from "../../../services/AuthService";

const SignUp: React.FC<Record<string, unknown>> = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const firstName = useRef<string | null>();
  const lastName = useRef<string | null>();
  const email = useRef<string | null>();
  const password = useRef<string | number>();
  const authService = new AuthService();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  firstName.current = watch("firstName", "");
  lastName.current = watch("lastName", "");
  email.current = watch("email", "");
  password.current = watch("password", "");

  const registerUser = () => {
    authService
      .registerUser(
        firstName.current!,
        lastName.current!,
        email.current!,
        password.current!
      )
      .then(() => {
        navigate(routerPaths.signin);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleRegisterSubmit = () => {
    registerUser();
  };

  return (
    <div className="signUpContainer">
      <Card className={classes.card} sx={{ borderRadius: 3 }}>
        <CardContent className={classes.cardContent}>
          <Typography sx={{ fontSize: 30, fontWeight: 400, marginBottom: 5 }}>
            Enter Your Details
          </Typography>
          <form onSubmit={handleSubmit(handleRegisterSubmit)}>
            <TextField
              placeholder="First Name *"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: errors.firstName
                  ? "1px solid rgb(255, 0, 0)"
                  : "1px solid rgb(128,128,128)",
                marginBottom: 1,
              }}
              className={classes.input}
              {...register("firstName", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 1,
                  message: "Minimum length is 1",
                },
              })}
            ></TextField>
            <label className={classes.message}>
              {errors.firstName?.message}
            </label>
            <TextField
              placeholder="Last Name *"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: errors.lastName
                  ? "1px solid rgb(255, 0, 0)"
                  : "1px solid rgb(128,128,128)",
                marginBottom: 1,
              }}
              className={classes.input}
              {...register("lastName", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 1,
                  message: "Minimum length is 1",
                },
              })}
            ></TextField>
            <label className={classes.message}>
              {errors.lastName?.message}
            </label>
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
                  ? "1px solid rgb(255, 0, 0)"
                  : "1px solid rgb(128,128,128)",
                marginBottom: 1,
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
            <label className={classes.message}>{errors.email?.message}</label>
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
                  ? "1px solid rgb(255, 0, 0)"
                  : "1px solid rgb(128,128,128)",
                marginBottom: 1,
              }}
              className={classes.input}
              {...register("password", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 5,
                  message: "Minimum length is 5",
                },
              })}
            ></TextField>
            <label className={classes.message}>
              {errors.password?.message}
            </label>
            <TextField
              type="password"
              variant="standard"
              autoComplete="new-password"
              placeholder="Retype Password *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                fontSize: 20,
                borderBottom: errors.retypePassword
                  ? "1px solid rgb(255, 0, 0)"
                  : "1px solid rgb(128,128,128)",
                marginBottom: 1,
              }}
              className={classes.input}
              {...register("retypePassword", {
                required: "Please fulfill marked fields.",
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            ></TextField>
            <label className={classes.message}>
              {errors.retypePassword?.message}
            </label>
            <Button
              type="submit"
              sx={{
                backgroundColor: "rgb(255, 85, 0)",
                color: "rgb(255, 255, 255)",
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
          </form>
          <div className={classes.div}>
            <Typography sx={{ fontSize: 16, fontWeight: 200 }}>
              Already Have An Account? Then
            </Typography>
            <Link to="/signin" className={classes.link}>
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
