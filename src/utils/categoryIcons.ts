import { categoryOptions } from "@/data";

export default function categoryIcons(categoryValue: string) {
  const category = categoryOptions.findLast((category) => category.value === categoryValue);
  return category?.icon;
}