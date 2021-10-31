import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";



const Logout = () => {
    const { state, dispatch } = useContext(UserContext);



  const history = useHistory();
  // promises
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
      dispatch({type:"USER", payload:false})

        history.push("/login", { replace: true });

        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>logout</h1>
    </>
  );
};

export default Logout;
