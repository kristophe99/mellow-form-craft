
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

interface PunctuationSectionProps {
  control: Control<any>;
}

export function PunctuationSection({ control }: PunctuationSectionProps) {
  const { setValue } = useFormContext();
  
  const punctuationFields = [
    "useSemicolons", 
    "replaceExclamationPoints",
    "useEmDashForAside",
    "emDashSpaces",
    "useEmDashForRange",
    "useOxfordComma",
    "spacesAfterPeriod"
  ];
  
  const defaultValues = {
    useSemicolons: "Use",
    replaceExclamationPoints: false,
    useEmDashForAside: "Use",
    emDashSpaces: "Don't use",
    useEmDashForRange: "Use",
    useOxfordComma: "Use",
    spacesAfterPeriod: "1",
  };
  
  return (
    <WritingStyleSection title="Punctuation">
      <SelectAllSection 
        control={control} 
        sectionName="punctuation"
        fields={punctuationFields}
        setValue={setValue}
        defaultValues={defaultValues}
      />
      
      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useSemicolons"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Use">Use</SelectItem>
                  <SelectItem value="Don't Use">Don't Use</SelectItem>
                  <SelectItem value="N/A">Not applicable</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        semicolons
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="replaceExclamationPoints"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Replace exclamation points
              </div>
            </FormItem>
          )}
        />
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useEmDashForAside"
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
                  <SelectItem value="N/A">Not applicable</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        em dash for aside
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="emDashSpaces"
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
                  <SelectItem value="Don't use">Don't use</SelectItem>
                  <SelectItem value="N/A">Not applicable</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        spaces with em dash
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useEmDashForRange"
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
                  <SelectItem value="N/A">Not applicable</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        em dash for range
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useOxfordComma"
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
                  <SelectItem value="N/A">Not applicable</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        Oxford comma
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        Use
        <FormField
          control={control}
          name="spacesAfterPeriod"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        space(s) after period
      </p>
    </WritingStyleSection>
  );
}
