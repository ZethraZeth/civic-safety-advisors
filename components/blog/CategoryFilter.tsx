"use client";

import { BlogCategory, categoryLabels } from "@/lib/blog";
import { clsx } from "clsx";

interface CategoryFilterProps {
  selectedCategory: BlogCategory | "all";
  onSelectCategory: (category: BlogCategory | "all") => void;
}

const categories: Array<BlogCategory | "all"> = [
  "all",
  "houses-of-worship",
  "schools-education",
  "physical-security",
  "emergency-preparedness",
  "training-tips",
  "industry-news",
];

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            selectedCategory === category
              ? "bg-brass-500 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          )}
        >
          {category === "all" ? "All Posts" : categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}
