import styles from "./FormField.module.css";

interface Field {
  label: string;
  id: string;
  name: string;
  type: string;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

interface FieldProps {
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
