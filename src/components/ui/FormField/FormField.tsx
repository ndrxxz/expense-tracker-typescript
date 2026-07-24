import type { ChangeEvent } from "react";
import styles from "./FormField.module.css";

type Field = {
  label: string;
  id: string;
  name: string;
  type: "text" | "number" | "date";
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

type FieldProps = {
  field: Field;
}

export default function FormField({ field }: FieldProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={field.id} className={styles.label}>
        {field.label}
      </label>

      <input
        type={field.type}
        id={field.id}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        placeholder={field.placeholder}
        className={styles.input}
      />
    </div>
  );
}
