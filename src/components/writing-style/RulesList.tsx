
import React from "react";

interface RulesListProps {
  rules: string[];
}

export function RulesList({ rules }: RulesListProps) {
  return (
    <div className="border border-border rounded-md p-6">
      <ul className="space-y-3">
        {rules.map((rule, index) => (
          <li key={index} className="flex">
            <span className="text-primary font-medium mr-2">{index + 1}.</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
