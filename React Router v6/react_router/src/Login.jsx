import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  // console.log(location);
  return (
    <>
      <h2>{location.state.st}</h2>
      <br />

      <h2>Login Page</h2>
      <br />
      <br />
      <form action="" method="post">
        <label for="email">Email:</label>
        <input type="email" name="Email" id="email" required />
        <br />
        <br />
        <label for="password">Password: </label>
        <input type="password" name="Password" id="password" required />
        <br />
        <br />
        <button>Ok</button>
      </form>
    </>
  );
};

export default Login;
