import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useCallback, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/Auth";
import "./login.css";
import app from "../../firebase/base";
import App from "../../firebase/base";

const Login = () => {
  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>, navigate: NavigateFunction) => {
      event.preventDefault();

      const { email, password } = Object.fromEntries(
        new FormData(event.currentTarget).entries()
      );
      try {
        await signInWithEmailAndPassword(
          getAuth(App),
          email.toString(),
          password.toString()
        );
        navigate("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <div>Already Logged In</div>;
  }

  return (
    <div>
      <div className="login-box">
        <h1>Login</h1>
        <form
          className="login-form"
          onSubmit={(ev) => handleLogin(ev, navigate)}
        >
          <input
            name="email"
            className="login-input"
            type="text"
            placeholder="Email"
            id="login-input"
          />
          <input
            name="password"
            className="login-input"
            type="password"
            placeholder="Password"
            id="login-input"
          />
          <button type="submit" id="login-button">
            Login
          </button>
        </form>
      </div>

      {/* <form
          className={styles["login-form"]}
          onSubmit={(ev) => handleLogin(ev, navigate)}
        >
          <h3>Login</h3>
          <label className={styles["login-label"]}>
            Email
            <input
              className={styles["login-input"]}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className={styles["login-label"]}>
            Password
            <input
              className={styles["login-input"]}
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className={styles["login-button"]} type="submit">
            Login
          </button>
        </form> */}
    </div>
  );
};

export default Login;
