
import React from "react";
import { WritingStyleForm } from "@/components/writing-style/WritingStyleForm";

export default function WritingStylePage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Writing Style Preferences</h1>
        <p className="text-muted-foreground mb-8">
          Configure how your content should be written by setting your preferred writing style options below.
          After saving, you will see a list of generated rules based on your selections.
        </p>
        <WritingStyleForm />
      </div>
    </div>
  );
}
