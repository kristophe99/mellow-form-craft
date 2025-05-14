
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";

interface GenderInclusivitySectionProps {
  control: Control<any>;
}

export function GenderInclusivitySection({ control }: GenderInclusivitySectionProps) {
  return (
    <WritingStyleSection title="Gender-Inclusivity">
      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useGenderInclusiveNouns"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Use">Use</SelectItem>
                  <SelectItem value="Don't Use">Don't Use</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        gender-inclusive nouns if possible e.g., "police officer" and not "policeman"
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useGenderInclusivePronouns"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Use">Use</SelectItem>
                  <SelectItem value="Don't Use">Don't Use</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        gender-inclusive pronouns if possible e.g., Each employee should submit their report by Friday vs Each employee should submit his report by Friday
      </p>
    </WritingStyleSection>
  );
}
