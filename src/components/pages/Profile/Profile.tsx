import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { LocationState } from "../../../components/model/interfaces";

const Profile: React.FC = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const { accessToken } = location.state as LocationState;

  const getUserData = () => {
    accessToken &&
      axios
        .get("http://localhost:9595/app/profile", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response: any) => {
          console.log("response", response);
          let name = response.data.firstname;
          let surname = response.data.lastname;
          let userEmail = response.data.username;

          setUsername(name);
          setEmail(userEmail);
          setLastname(surname);
        })
        .catch((error: any) => {
          console.log(error);
        });
  };

  useEffect(() => {
    getUserData();
  }, [accessToken]);
  return (
    <>
      <div>
        {username ? username : ""} {lastname ? lastname : ""}
      </div>
      <div>{email ? email : ""} </div>
    </>
  );
};

export default Profile;
