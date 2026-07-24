import { Forms, Summary } from "@/components/expenses";

export default function Expenses() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col gap-3 w-4xl">
        <Summary budget={0} spent={0} remaining={0} />

        <div className="grid grid-cols-2 gap-3 items-start">
          <Forms onSetBudget={} onAddExpense={} />
        </div>
      </div>
    </div>
  );
}
