
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";

interface PunctuationSectionProps {
  control: Control<any>;
}

export function PunctuationSection({ control }: PunctuationSectionProps) {
  return (
    <WritingStyleSection title="Punctuation">
      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useSemicolons"
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
        Semicolons
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
                Replace exclamation points with periods
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
                  <SelectItem value="Don't use">Don't use</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        an em-dash (-) to offsite an aside e.g. She finally replied to the email—three days later—with a simple "OK."
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
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        spaces before and after the em-dash e.g. She finally replied to the email — three days later — with a simple "OK."
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
                  <SelectItem value="Don't use">Don't use</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        an em-dash to connect a range of numbers or dates e.g. Pages 45–52 of the report cover key findings.
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
                  <SelectItem value="Don't use">Don't use</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        Oxford (serial) commas before the last items in a series
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
                  <SelectTrigger className="w-[60px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        spaces after a period
      </p>
    </WritingStyleSection>
  );
}
