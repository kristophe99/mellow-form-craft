
import React from "react";

interface RulesListProps {
  rules: string[];
}

export function RulesList({ rules }: RulesListProps) {
  return (
    <div className="mt-10 border border-border rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">Generated Writing Style Rules</h2>
      <pre className="whitespace-pre-line bg-muted p-4 rounded-md text-sm">
        {rules.join('\n')}
      </pre>
    </div>
  );
}
