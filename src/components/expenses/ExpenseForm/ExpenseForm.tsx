import { FormField } from "@/components/ui";
import styles from "./ExpenseForm.module.css";
import { useState, type ChangeEvent } from "react";

export default function ExpenseForm() {
  const [form, setForm] = useState({
    descInput: "",
    amountInput: "",
    categoryInput: "",
    dateInput: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form className={styles.form}>
      <div className={styles.title}>Add expenses</div>

      <FormField
        field={{
          label: "Description",
          id: "input-desc",
          name: "descInput",
          type: "text",
          value: form.descInput,
          onChange: handleChange,
          placeholder: "e.g. Jollibee lunch"
        }}
      />
    </form>
  );
}
