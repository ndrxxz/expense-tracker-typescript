import styles from "./SummaryCard.module.css";

interface SummaryProps {
  label: string;
  amount: number;
}

export default function SummaryCard({ label, amount }: SummaryProps) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.amount}>{amount}</div>
    </div>
  )
}
