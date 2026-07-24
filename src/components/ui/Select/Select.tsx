import type { ChangeEvent } from "react";
import styles from "./Select.module.css";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectAttr {
  label: string;
  id: string;
  name: string;
  options: SelectOption[];
  value: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectProps {
  field: SelectAttr;
}

export default function Select({ field }: SelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={field.id} className={styles.label}>
        {field.label}
      </label>

      <select
        id={field.id}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        className={styles.select}
      >
        <option value="" className={styles.placeholder} disabled>
          Choose an option
        </option>

        {field.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.option}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
