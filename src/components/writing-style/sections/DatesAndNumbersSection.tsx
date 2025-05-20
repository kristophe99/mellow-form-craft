
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

interface DatesAndNumbersSectionProps {
  control: Control<any>;
}

export function DatesAndNumbersSection({ control }: DatesAndNumbersSectionProps) {
  const { setValue } = useFormContext();
  
  const datesAndNumbersFields = [
    "spellOutNumbers", 
    "numberSeparator",
    "currencyFormat",
    "currencySpace",
    "currencyAbbreviationPeriods",
    "shortDateFormat",
    "longDateFormat"
  ];
  
  const defaultValues = {
    spellOutNumbers: "0 – 9",
    numberSeparator: "commas",
    currencyFormat: "symbol-amount",
    currencySpace: "without",
    currencyAbbreviationPeriods: "Don't Use",
    shortDateFormat: "DD/MM/YYYY",
    longDateFormat: "DD Month YYYY",
  };
  
  return (
    <WritingStyleSection title="Dates and Numbers">
      <SelectAllSection 
        control={control} 
        sectionName="datesAndNumbers"
        fields={datesAndNumbersFields}
        setValue={setValue}
        defaultValues={defaultValues}
      />

      <p className="flex flex-wrap items-center gap-x-2">
        Spell out numbers
        <FormField
          control={control}
          name="spellOutNumbers"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0 – 9">0 – 9</SelectItem>
                  <SelectItem value="0 – 10">0 – 10</SelectItem>
                  <SelectItem value="Don't spell out">Don't spell out</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        Use
        <FormField
          control={control}
          name="numberSeparator"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="commas">commas</SelectItem>
                  <SelectItem value="periods">periods</SelectItem>
                  <SelectItem value="spaces">spaces</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        for number separators
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        Use
        <FormField
          control={control}
          name="currencyFormat"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="symbol-amount">symbol-amount</SelectItem>
                  <SelectItem value="currency code-amount">currency code-amount</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        for currency format

        <FormField
          control={control}
          name="currencySpace"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="with">with</SelectItem>
                  <SelectItem value="without">without</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        space,

        <FormField
          control={control}
          name="currencyAbbreviationPeriods"
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
        periods in abbreviations
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        Use
        <FormField
          control={control}
          name="shortDateFormat"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem value="YYYY/MM/DD">YYYY/MM/DD</SelectItem>
                  <SelectItem value="DD-MM-YYYY">DD-MM-YYYY</SelectItem>
                  <SelectItem value="MM-DD-YYYY">MM-DD-YYYY</SelectItem>
                  <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        for short date format
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        Use
        <FormField
          control={control}
          name="longDateFormat"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DD Month YYYY">DD Month YYYY</SelectItem>
                  <SelectItem value="Month DD, YYYY">Month DD, YYYY</SelectItem>
                  <SelectItem value="YYYY Month DD">YYYY Month DD</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        for long date format
      </p>
    </WritingStyleSection>
  );
}
