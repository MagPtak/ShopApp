import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./SignUp.styles";
import routerPaths from "../../../routerPaths";
import "./SignUp.css";

const SignUp: React.FC<Record<string, unknown>> = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const password = useRef<string | number>();

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

  password.current = watch("password", "");

  const handleLoginSubmit = () => {
    navigate(routerPaths.profile);
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
            <p className={classes.message}>{errors.firstName?.message}</p>
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
            <p className={classes.message}>{errors.lastName?.message}</p>
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
                  ? "1px solid rgb(255, 0, 0)"
                  : "1px solid rgb(128,128,128)",
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
              }}
              className={classes.input}
              {...register("retypePassword", {
                required: "Please fulfill marked fields.",
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            ></TextField>
            <p className={classes.message}>{errors.retypePassword?.message}</p>
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
