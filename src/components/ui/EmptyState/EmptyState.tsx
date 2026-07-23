import styles from "./EmptyState.module.css";

interface EmptyStateProp {
  description: string;
}

export default function EmptyState({ description }: EmptyStateProp) {
  return <div className={styles.desc}>{description}</div>;
}
