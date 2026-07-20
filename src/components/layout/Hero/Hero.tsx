import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Track. Save. Grow.
      </h1>
      <p className={styles.subtitle}>
        A smarter way to manage your expenses, build better habits, and reach
        your financial goals faster.
      </p>
    </div>
  );
}
