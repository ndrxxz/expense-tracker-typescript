import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="./money.png" alt="money-logo" className={styles.icon} />
        Kwentado
      </div>
    </div>
  );
}
