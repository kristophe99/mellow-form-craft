
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WritingStyleSection } from "../WritingStyleSection";

interface AcronymsSectionProps {
  control: Control<any>;
}

export function AcronymsSection({ control }: AcronymsSectionProps) {
  return (
    <WritingStyleSection title="Acronyms">
      <p className="flex flex-wrap items-center gap-x-2">
        When using an acronym, introduce it with the 
        <FormField
          control={control}
          name="acronymIntroduction"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="acronym in parantheses">acronym in parantheses</SelectItem>
                  <SelectItem value="with the term in parantheses">with the term in parantheses</SelectItem>
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
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="first">first</SelectItem>
                  <SelectItem value="each">each</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        mention. Example: BMW (Bayerische Motoren Werke (BMW).
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="introduceCommonAcronyms"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[80px]">
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
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Use">Use</SelectItem>
                  <SelectItem value="Never Use">Never Use</SelectItem>
                  <SelectItem value="Limited Use">Limited Use</SelectItem>
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
