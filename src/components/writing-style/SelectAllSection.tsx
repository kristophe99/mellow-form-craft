
import React from "react";
import { Control, UseFormSetValue } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface SelectAllSectionProps {
  control: Control<any>;
  sectionName: string;
  fields: string[];
  setValue: UseFormSetValue<any>;
  defaultValues?: Record<string, any>;
}

export function SelectAllSection({ control, sectionName, fields, setValue, defaultValues }: SelectAllSectionProps) {
  const handleSelectAll = (checked: boolean) => {
    // For each field in the section, set its value
    fields.forEach(field => {
      // Check if the field is a boolean field (checkbox)
      if (typeof defaultValues?.[field] === 'boolean') {
        setValue(field, checked);
      } 
      // For non-boolean fields like selects, we don't change them
    });
  };

  return (
    <div className="flex items-center space-x-2 mb-3 pb-2 border-b">
      <Checkbox
        id={`select-all-${sectionName}`}
        onCheckedChange={handleSelectAll}
      />
      <label
        htmlFor={`select-all-${sectionName}`}
        className="text-sm font-medium leading-none cursor-pointer"
      >
        Select/deselect all options in this section
      </label>
    </div>
  );
}
