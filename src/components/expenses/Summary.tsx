import { SummaryCard } from "@/components/dashboard";

interface SummaryProps {
  budget: number;
  spent: number;
  remaining: number;
}

export default function Summary({ budget, spent, remaining }: SummaryProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <SummaryCard label="Monthly budget" amount={budget} />
      <SummaryCard label="Total spent" amount={spent} />
      <SummaryCard label="Remaining" amount={remaining} />
    </div>
  );
}
