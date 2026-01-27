import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import authLogo from "../../assets/auth.png";
import googleLogo from "../../assets/google.png"
import "../Login/Login.css"

export default function Login() {
 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={authLogo} className="logo auth" alt="logo auth" />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Login</h1>
      <h2>GOOGLE AUTHENTICATOR</h2>
      <div className="card">
        <button>Entrar com Google</button>
        <img src={googleLogo} className="logo google" alt="Google Logo"/>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
    </>
  );
}
