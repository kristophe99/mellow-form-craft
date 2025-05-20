
import React from "react";
import { Control, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";
import { SelectAllSection } from "../SelectAllSection";

interface AcronymsSectionProps {
  control: Control<any>;
}

export function AcronymsSection({ control }: AcronymsSectionProps) {
  const { setValue } = useFormContext();
  
  const acronymFields = [
    "acronymIntroduction", 
    "acronymMentionFrequency", 
    "introduceCommonAcronyms", 
    "emojiUsage"
  ];
  
  const defaultValues = {
    acronymIntroduction: "acronym in parantheses",
    acronymMentionFrequency: "first",
    introduceCommonAcronyms: "Do",
    emojiUsage: "Limited Use",
  };
  
  return (
    <WritingStyleSection title="Acronyms">
      <SelectAllSection 
        control={control} 
        sectionName="acronyms"
        fields={acronymFields}
        setValue={setValue}
        defaultValues={defaultValues}
      />
    
      <p className="flex flex-wrap items-center gap-x-2">
        When using an acronym, introduce it with the 
        <FormField
          control={control}
          name="acronymIntroduction"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[190px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="acronym in parantheses">acronym in parentheses</SelectItem>
                  <SelectItem value="full term in parantheses">full term in parentheses</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        on
        <FormField
          control={control}
          name="acronymMentionFrequency"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="first">first</SelectItem>
                  <SelectItem value="every">every</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        mention
      </p>
      
      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="introduceCommonAcronyms"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Do">Do</SelectItem>
                  <SelectItem value="Don't">Don't</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        introduce common acronyms e.g. CEO
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="emojiUsage"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="No">No</SelectItem>
                  <SelectItem value="Limited Use">Limited Use</SelectItem>
                  <SelectItem value="Frequent">Frequent</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        of emojis e.g. 🤮
      </p>
    </WritingStyleSection>
  );
}
