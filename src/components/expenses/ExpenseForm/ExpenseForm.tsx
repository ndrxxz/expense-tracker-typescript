import { Button, FormField, Select } from "@/components/ui";
import styles from "./ExpenseForm.module.css";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { categoryOptions } from "@/data";
import type { Expense } from "@/types";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [form, setForm] = useState({
    descInput: "",
    amountInput: "",
    categoryInput: "",
    dateInput: "",
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { descInput, amountInput, categoryInput, dateInput } = form;

    if (!descInput || !amountInput || !categoryInput || !dateInput) return;

    const newExpense = {
      id: Date.now(),
      description: descInput,
      amount: parseFloat(amountInput),
      category: categoryInput,
      date: dateInput,
    }

    onAddExpense(newExpense);

    setForm({
      descInput: "",
      amountInput: "",
      categoryInput: "",
      dateInput: "",
    });
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.title}>Add expenses</div>

      <FormField
        field={{
          label: "Description",
          id: "input-desc",
          name: "descInput",
          type: "text",
          value: form.descInput,
          onChange: handleChange,
          placeholder: "e.g. Jollibee lunch",
        }}
      />

      <FormField
        field={{
          label: "Amount (₱)",
          id: "input-amount",
          name: "amountInput",
          type: "number",
          value: form.amountInput,
          onChange: handleChange,
          placeholder: "e.g. 0.00",
        }}
      />

      <Select field={{
        label: "Category",
        id: "input-category",
        name: "categoryInput",
        options: categoryOptions,
        value: form.categoryInput,
        onChange: handleChange
      }} />

      <FormField
        field={{
          label: "Date",
          id: "input-date",
          name: "dateInput",
          type: "date",
          value: form.dateInput,
          onChange: handleChange,
        }}
      />

      <Button label={"+ Add expense"} />
    </form>
  );
}
