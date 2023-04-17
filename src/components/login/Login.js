import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

import {
  signInWithGoogle,
  logOut
} from "../../services/Firebase";


export const Login = () => {

    const navigate = useNavigate()
    const user = useContext(UserContext);

    useEffect(() => {
     if (user) {
       navigate("/loggedInPage");
     }
   }, [user, navigate]);


     return (
     <div>
       <section>
         <div>
           <button onClick={signInWithGoogle}>Sign in With google</button>
           {/* <button onClick={logOut}> sign out</button> */}
       </div>
       </section>
     </div>
   );
}
