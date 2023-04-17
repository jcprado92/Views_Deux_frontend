import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../services/Firebase";

function LoggedIn() {

  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      alert("not logged in - redirecting!");
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    logOut();
    alert("you've been logged out");
    navigate('/')
  };

  return (
    <div>
      Welcome {user.displayName} !
      <div>
        <img
          src={user.photoURL}
          height="100 px"
          width="100 px"
        ></img>
      </div>
      {/* <button onClick={handleLogout}> LOG OUT</button> */}
    </div>
  );
}

export default LoggedIn;
