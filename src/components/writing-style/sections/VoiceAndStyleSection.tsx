
import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { WritingStyleSection } from "../WritingStyleSection";

interface VoiceAndStyleSectionProps {
  control: Control<any>;
}

export function VoiceAndStyleSection({ control }: VoiceAndStyleSectionProps) {
  return (
    <WritingStyleSection title="Writing Style">
      <p className="flex flex-wrap items-center gap-x-2">
        Use
        <FormField
          control={control}
          name="voice"
          render={({ field }) => (
            <FormItem className="inline-flex m-0">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select voice" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">active</SelectItem>
                  <SelectItem value="passive">passive</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        voice e.g. "The manager approved the proposal" vs "The proposal was approved by the manager"
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="writeConfidently"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Write confidently
              </div>
            </FormItem>
          )}
        />
        — e.g., write "We should meet next week" rather than "I think we should meet next week"
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="avoidWordyPhrases"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Avoid wordy phrases
              </div>
            </FormItem>
          )}
        />
        — e.g., say "Clearly, the report shows" instead of "It's clearly evident that the report shows"
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useCorrectPunctuation"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Use correct punctuation
              </div>
            </FormItem>
          )}
        />
        - misplaced or missing commas, hyphens, semicolons, periods, and more.
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useContractions"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Use contractions where possible
              </div>
            </FormItem>
          )}
        />
        e.g. "Don't" instead of "Do Not"
      </p>

      <p className="flex flex-wrap items-center gap-x-2">
        <FormField
          control={control}
          name="useTitleCase"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 m-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                Use title case in headings and titles
              </div>
            </FormItem>
          )}
        />
        e.g. "How to Write Effective Marketing Headlines" vs "How to write effective marketing headlines"
      </p>
    </WritingStyleSection>
  );
}
