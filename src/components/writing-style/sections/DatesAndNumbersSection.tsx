
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";

interface DatesAndNumbersSectionProps {
  control: Control<any>;
}

export function DatesAndNumbersSection({ control }: DatesAndNumbersSectionProps) {
  return (
    <WritingStyleSection title="Dates and Numbers">
      <p className="flex flex-wrap items-center gap-x-2">
        Always spell out numbers
        <FormField
          control={control}
          name="spellOutNumbers"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[90px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0 – 9">0 – 9</SelectItem>
                  <SelectItem value="0 – 10">0 – 10</SelectItem>
                  <SelectItem value="0 – 99">0 – 99</SelectItem>
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
                  <SelectItem value="period">period</SelectItem>
                  <SelectItem value="space">space</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        to separate numbers with four or more digits e.g. 1,000 vs 1.000 vs 1 000
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        For currencies, use the
        <FormField
          control={control}
          name="currencyFormat"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[170px]">
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
        format
        <FormField
          control={control}
          name="currencySpace"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="without">without</SelectItem>
                  <SelectItem value="with">with</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        spaces in between. E.g. we spent 10.000 €
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
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
        periods in currency abbreviations. Example: USD, not U.S.D.
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        For short dates, use
        <FormField
          control={control}
          name="shortDateFormat"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        (without leading zeros). E.g. It was on 1/12/2025
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        For long dates, use
        <FormField
          control={control}
          name="longDateFormat"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DD Month YYYY">DD Month YYYY</SelectItem>
                  <SelectItem value="Month DD, YYYY">Month DD, YYYY</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        (without leading zeros). E.g. It was on 31 December 1905.
      </p>
    </WritingStyleSection>
  );
}
