import { Button, FormField } from "@/components/ui";
import styles from "./BudgetForm.module.css";
import { useState } from "react";

export default function BudgetForm() {
  const [budgetInput, setBudgetInput] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!budgetInput) return;

    setBudgetInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.title}>Set budget</div>

      <FormField
        field={{
          label: "Monthly budget (₱)",
          id: "input-budget",
          name: "",
          type: "number",
          value: 0,
          onChange: (e) => setBudgetInput(e.target.value),
          placeholder: "e.g. 20000",
        }}
      />

      <Button label={"Save budget"} />
    </form>
  );
}
