
import React from "react";
import { Control, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";
import { SelectAllSection } from "../SelectAllSection";

interface CapitalizationSectionProps {
  control: Control<any>;
}

export function CapitalizationSection({ control }: CapitalizationSectionProps) {
  const { setValue } = useFormContext();
  
  const capitalizationFields = [
    "capitalizeProperNames", 
    "emailUrlCapitalization"
  ];
  
  const defaultValues = {
    capitalizeProperNames: true,
    emailUrlCapitalization: "Don't Use",
  };
  
  return (
    <WritingStyleSection title="Capitalization">
      <SelectAllSection 
        control={control} 
        sectionName="capitalization"
        fields={capitalizationFields}
        setValue={setValue}
        defaultValues={defaultValues}
      />
      
      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="capitalizeProperNames"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Capitalize proper names, geographic terms, historic episodes, and words derived from proper nouns
              </div>
            </FormItem>
          )}
        />
        E.g. USA, Julius Caesar
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="emailUrlCapitalization"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
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
        all lowercase when writing out an email address or website URL e.g. Info@nuwacom.ai vs info@nuwacom.ai
      </p>
    </WritingStyleSection>
  );
}
