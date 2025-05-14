
import React from "react";

interface WritingStyleSectionProps {
  title: string;
  children: React.ReactNode;
}

export function WritingStyleSection({ title, children }: WritingStyleSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-4 prose max-w-none text-foreground">
        {children}
      </div>
    </div>
  );
}
