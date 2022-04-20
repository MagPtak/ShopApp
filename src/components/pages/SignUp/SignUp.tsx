import { Card, CardContent, Typography, Input, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import "./SignUp.css";

const useStyles = makeStyles({
  card: {
    height: 670,
    width: 500,
    marginTop: 100,
    marginBottom: 100,
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
    borderColor: "grey",
  },
  message: {
    marginTop: 0,
    marginBottom: 15,
    fontWeight: 300,
    fontSize: 14,
    color: "red",
  },
});

const SignUp: React.FC<Record<string, unknown>> = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
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
  console.log(errors);
  return (
    <div className="signUpContainer">
      <Card className={classes.card} sx={{ borderRadius: 3 }}>
        <CardContent className={classes.cardContent}>
          <Typography sx={{ fontSize: 30, fontWeight: 400, marginBottom: 5 }}>
            Enter Your Details
          </Typography>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Input
              placeholder="First Name *"
              sx={{ fontSize: 20 }}
              className={classes.input}
              {...register("firstName", {
                required: "Please fulfill marked fields.",
              })}
            ></Input>
            <p className={classes.message}>{errors.firstName?.message}</p>
            {/* // */}
            <Input
              placeholder="Last Name *"
              sx={{ fontSize: 20 }}
              className={classes.input}
              {...register("firstName", {
                required: "Please fulfill marked fields.",
              })}
            ></Input>
            <p className={classes.message}>{errors.firstName?.message}</p>
            {/* // */}
            <Input
              type="email"
              autoComplete="username"
              placeholder="Email *"
              sx={{ fontSize: 20 }}
              className={classes.input}
              {...register("firstName", {
                required: "Please fulfill marked fields.",
              })}
            ></Input>
            <p className={classes.message}>{errors.firstName?.message}</p>
            {/* // */}
            <Input
              type="password"
              autoComplete="new-password"
              placeholder="Password *"
              sx={{ fontSize: 20 }}
              className={classes.input}
              {...register("password", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
              })}
            ></Input>
            <p className={classes.message}>{errors.password?.message}</p>
            {/* // */}
            <Input
              type="password"
              autoComplete="new-password"
              placeholder="Retype Password *"
              sx={{ fontSize: 20 }}
              className={classes.input}
              {...register("retypePassword", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
              })}
            ></Input>
            <p className={classes.message}>{errors.retypePassword?.message}</p>
            {/* // */}
            <Button
              type="submit"
              sx={{
                backgroundColor: "rgb(255, 85, 0)",
                color: "white",
                width: "150px",
                height: 50,
              }}
            >
              {/* <Link to="#">Sign Up</Link> */}
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
