
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RulesList } from "@/components/writing-style/RulesList";

export default function WritingStyleResultsPage() {
  const location = useLocation();
  const { rules } = location.state || { rules: [] };

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Writing Style Rules</h1>
          <Link to="/writing-style">
            <Button variant="outline">Back to Settings</Button>
          </Link>
        </div>
        
        <p className="text-muted-foreground mb-8">
          Below are the writing style rules generated based on your preferences.
          You can go back to adjust your settings at any time.
        </p>
        
        {rules.length > 0 ? (
          <RulesList rules={rules} />
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No rules have been generated yet.</p>
            <Link to="/writing-style" className="mt-4 inline-block">
              <Button>Configure Writing Style</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
