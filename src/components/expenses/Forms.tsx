import { BudgetForm, ExpenseForm } from "@/components/expenses"
import type { Expense } from "@/types"

interface FormsProps {
  onSetBudget: (budget: number) => void;
  onAddExpense: (expense: Expense) => void;
}

export default function Forms({ onSetBudget, onAddExpense }: FormsProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
        <BudgetForm onSetBudget={onSetBudget} />
        <div className="h-px bg-zinc-500 my-4"></div>
        <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  )
}
