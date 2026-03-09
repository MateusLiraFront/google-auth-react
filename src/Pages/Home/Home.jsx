import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    navigate("/");
    return null;
  }

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className={styles.displayHome}>
      <img
        className={styles.userImage}
        src={user.picture}
        alt="Foto do usuário"
      />

      <h2>Nome usuário: {user.name}</h2>
      <h4>Email: {user.email}</h4>

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}