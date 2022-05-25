import React, { useEffect } from "react";
import axios from "axios";

const Profile: React.FC<Record<string, unknown>> = () => {
  useEffect(() => {
    axios
      .get("http://localhost:9595/app/profile")
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  return <div>Profile</div>;
};

export default Profile;
