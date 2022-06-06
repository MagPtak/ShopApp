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
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../SignUp/SignUp.styles";
import "../SignUp/SignUp.css";
import routerPaths from "../../../routerPaths";
import { AuthService } from "../../../services/AuthService";

const SignIn: React.FC<Record<string, unknown>> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const authService = new AuthService();

  const classes = useStyles();
  const navigate = useNavigate();
  const password = useRef<string | null>(null);
  const email = useRef<string | null>(null);

  useEffect(() => {
    getDataFromStorage();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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
    authService
      .login(email.current!, password.current!)
      .then((response: any): void => {
        toggleLocalStorage();
        navigate(routerPaths.profile, {
          state: { accessToken: response.data.access_token },
        });
      });
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
      }
      users.push(email.current, password.current);
      localStorage.setItem("credentials", JSON.stringify(users));
    }
  };

  const getDataFromStorage = () => {
    const data = localStorage.getItem("credentials");
    if (data) {
      const storageData = JSON.parse(data);
      if (email.current === storageData[0]) {
        setValue("password", storageData[1]);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      getDataFromStorage();
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
              onKeyDown={handleKeyDown}
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
              onClick={getDataFromStorage}
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
