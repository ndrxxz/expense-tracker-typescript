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
  select: SelectAttr;
}

export default function Select({ select }: SelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={select.id} className={styles.label}>
        {select.label}
      </label>

      <select
        id={select.id}
        name={select.name}
        value={select.value}
        onChange={select.onChange}
        className={styles.select}
      >
        <option value="" className={styles.placeholder} disabled>
          Choose an option
        </option>

        {select.options.map((option) => (
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
