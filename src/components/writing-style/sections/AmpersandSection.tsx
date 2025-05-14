
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { WritingStyleSection } from "../WritingStyleSection";

interface AmpersandSectionProps {
  control: Control<any>;
}

export function AmpersandSection({ control }: AmpersandSectionProps) {
  return (
    <WritingStyleSection title="Ampersand">
      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useAmpersand"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Use an ampersand (&) unless it's used in a brand name
              </div>
            </FormItem>
          )}
        />
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="usePlusForAnd"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Don't use '+' to mean 'and'
              </div>
            </FormItem>
          )}
        />
      </p>
    </WritingStyleSection>
  );
}
