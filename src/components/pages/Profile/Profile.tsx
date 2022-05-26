import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { LocationState } from "../../../components/model/interfaces";

const Profile: React.FC = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const { accessToken } = location.state as LocationState;
  useEffect(() => {
    accessToken &&
      axios
        .get("http://localhost:9595/app/profile", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(function (response: any) {
          console.log("response", response);
          let name = response.data.firstname;
          setUsername(name);
        })
        .catch(function (error: any) {
          console.log(error);
        });
  }, [accessToken]);
  return <div>Profile: {username ? username : ""} </div>;
};

export default Profile;
