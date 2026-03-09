import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import authLogo from "../../assets/auth.png";
import googleLogo from "../../assets/google.png";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const userData = await response.json();

      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/home");
    },
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>

        <img src={authLogo} className={`${styles.logo} ${styles.auth}`} alt="logo auth" />

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>

      <h1>Login</h1>
      <h2>GOOGLE AUTHENTENTICATOR</h2>

      <div className={styles.card}>
        <button onClick={() => login()}>
          Entrar com Google
        </button>

        <img
          src={googleLogo}
          className={`${styles.logo} ${styles.google}`}
          alt="Google Logo"
        />
      </div>
    </>
  );
}