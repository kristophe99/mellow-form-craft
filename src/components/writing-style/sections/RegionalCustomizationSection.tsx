
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";

interface RegionalCustomizationSectionProps {
  control: Control<any>;
}

export function RegionalCustomizationSection({ control }: RegionalCustomizationSectionProps) {
  return (
    <WritingStyleSection title="Regional Customization">
      <p className="flex flex-wrap items-center gap-x-2">
        Customize text to
        <FormField
          control={control}
          name="region"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="German (DE)">German (DE)</SelectItem>
                  <SelectItem value="German (AT)">German (AT)</SelectItem>
                  <SelectItem value="German (CH)">German (CH)</SelectItem>
                  <SelectItem value="English (US)">English (US)</SelectItem>
                  <SelectItem value="English (UK)">English (UK)</SelectItem>
                  <SelectItem value="English (CA)">English (CA)</SelectItem>
                  <SelectItem value="English (AU)">English (AU)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        region
      </p>
    </WritingStyleSection>
  );
}
