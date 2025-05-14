
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const writingStyleSchema = z.object({
  // Writing Style
  voice: z.string(),
  writeConfidently: z.boolean().optional(),
  avoidWordyPhrases: z.boolean().optional(),
  useCorrectPunctuation: z.boolean().optional(),
  useContractions: z.boolean().optional(),
  useTitleCase: z.boolean().optional(),
  
  // Regional Customization
  region: z.string(),
  
  // Acronyms
  acronymIntroduction: z.string(),
  acronymMentionFrequency: z.string(),
  introduceCommonAcronyms: z.string(),
  emojiUsage: z.string(),
  
  // Gender Inclusivity
  useGenderInclusiveNouns: z.string(),
  useGenderInclusivePronouns: z.string(),
  
  // Ampersand
  useAmpersand: z.boolean().optional(),
  usePlusForAnd: z.boolean().optional(),
  
  // Capitalization
  capitalizeProperNames: z.boolean().optional(),
  emailUrlCapitalization: z.string(),
  
  // Dates and Numbers
  spellOutNumbers: z.string(),
  numberSeparator: z.string(),
  currencyFormat: z.string(),
  currencySpace: z.string(),
  currencyAbbreviationPeriods: z.string(),
  shortDateFormat: z.string(),
  longDateFormat: z.string(),
  
  // Punctuation
  useSemicolons: z.string(),
  replaceExclamationPoints: z.boolean().optional(),
  useEmDashForAside: z.string(),
  emDashSpaces: z.string(),
  useEmDashForRange: z.string(),
  useOxfordComma: z.string(),
  spacesAfterPeriod: z.string(),
});

type WritingStyleFormValues = z.infer<typeof writingStyleSchema>;

export function WritingStyleForm() {
  const form = useForm<WritingStyleFormValues>({
    resolver: zodResolver(writingStyleSchema),
    defaultValues: {
      voice: "active",
      writeConfidently: true,
      avoidWordyPhrases: true,
      useCorrectPunctuation: true,
      useContractions: true,
      useTitleCase: true,
      region: "English (US)",
      acronymIntroduction: "acronym in parantheses",
      acronymMentionFrequency: "first",
      introduceCommonAcronyms: "Do",
      emojiUsage: "Limited Use",
      useGenderInclusiveNouns: "Use",
      useGenderInclusivePronouns: "Use",
      useAmpersand: false,
      usePlusForAnd: false,
      capitalizeProperNames: true,
      emailUrlCapitalization: "Don't Use",
      spellOutNumbers: "0 – 9",
      numberSeparator: "commas",
      currencyFormat: "symbol-amount",
      currencySpace: "without",
      currencyAbbreviationPeriods: "Don't Use",
      shortDateFormat: "DD/MM/YYYY",
      longDateFormat: "DD Month YYYY",
      useSemicolons: "Use",
      replaceExclamationPoints: false,
      useEmDashForAside: "Use",
      emDashSpaces: "Don't use",
      useEmDashForRange: "Use",
      useOxfordComma: "Use",
      spacesAfterPeriod: "1",
    },
  });

  function onSubmit(data: WritingStyleFormValues) {
    console.log(data);
    toast({
      title: "Writing style preferences saved",
      description: "Your settings have been successfully saved.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Writing Style</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Voice</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select voice" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="passive">Passive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: "The manager approved the proposal" vs "The proposal was approved by the manager"
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="writeConfidently"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Write confidently
                      </FormLabel>
                      <FormDescription>
                        Write "We should meet next week" rather than "I think we should meet next week"
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="avoidWordyPhrases"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Avoid wordy phrases
                      </FormLabel>
                      <FormDescription>
                        Say "Clearly, the report shows" instead of "It's clearly evident that the report shows"
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useCorrectPunctuation"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Use correct punctuation
                      </FormLabel>
                      <FormDescription>
                        Avoid misplaced or missing commas, hyphens, semicolons, periods, etc.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useContractions"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Use contractions where possible
                      </FormLabel>
                      <FormDescription>
                        Example: "Don't" instead of "Do Not"
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useTitleCase"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Use title case in headings and titles
                      </FormLabel>
                      <FormDescription>
                        Example: "How to Write Effective Marketing Headlines" vs "How to write effective marketing headlines"
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Regional Customization</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customize text to region</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="German (DE)">German (DE)</SelectItem>
                        <SelectItem value="German (AT)">German (AT)</SelectItem>
                        <SelectItem value="German (CH)">German (CH)</SelectItem>
                        <SelectItem value="English (US)">English (US)</SelectItem>
                        <SelectItem value="English (UK)">English (UK)</SelectItem>
                        <SelectItem value="English (CA)">English (CA)</SelectItem>
                        <SelectItem value="English (AU)">English (AU)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Acronyms</h2>
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="acronymIntroduction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Acronym introduction</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
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

                <FormField
                  control={form.control}
                  name="acronymMentionFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mention frequency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="first">first</SelectItem>
                          <SelectItem value="each">each</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Example: BMW (Bayerische Motoren Werke (BMW))
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="introduceCommonAcronyms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Introduce common acronyms</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Do">Do</SelectItem>
                        <SelectItem value="Don't">Don't</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: CEO
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emojiUsage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emoji usage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Gender-Inclusivity</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="useGenderInclusiveNouns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender-inclusive nouns</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't Use">Don't Use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: "police officer" not "policeman"
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useGenderInclusivePronouns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender-inclusive pronouns</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't Use">Don't Use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: "Each employee should submit their report" vs "his report"
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Ampersand</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="useAmpersand"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Use an ampersand (&) unless it's used in a brand name
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="usePlusForAnd"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Don't use '+' to mean 'and'
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Capitalization</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="capitalizeProperNames"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Capitalize proper names, geographic terms, historic episodes, and words derived from proper nouns
                      </FormLabel>
                      <FormDescription>
                        Example: USA, Julius Caesar
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailUrlCapitalization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email and URL capitalization</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't Use">Don't Use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: Info@nuwacom.ai vs info@nuwacom.ai
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Dates and Numbers</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="spellOutNumbers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spell out numbers</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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

              <FormField
                control={form.control}
                name="numberSeparator"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number separator</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="commas">commas</SelectItem>
                        <SelectItem value="period">period</SelectItem>
                        <SelectItem value="space">space</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: 1,000 vs 1.000 vs 1 000
                    </FormDescription>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="currencyFormat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency format</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
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

                <FormField
                  control={form.control}
                  name="currencySpace"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency spacing</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="without">without</SelectItem>
                          <SelectItem value="with">with</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Example: we spent 10.000 €
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="currencyAbbreviationPeriods"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency abbreviation periods</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't Use">Don't Use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: USD, not U.S.D.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shortDateFormat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short date format</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: 1/12/2025
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="longDateFormat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Long date format</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DD Month YYYY">DD Month YYYY</SelectItem>
                        <SelectItem value="Month DD, YYYY">Month DD, YYYY</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: 31 December 1905
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Punctuation</h2>
            <div className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="useSemicolons"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Semicolons</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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

              <FormField
                control={form.control}
                name="replaceExclamationPoints"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Replace exclamation points with periods
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useEmDashForAside"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Em-dash for aside</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't use">Don't use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: She finally replied to the email—three days later—with a simple "OK."
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emDashSpaces"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Em-dash spaces</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't use">Don't use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: She finally replied to the email — three days later — with a simple "OK."
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useEmDashForRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Em-dash for range</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Use">Use</SelectItem>
                        <SelectItem value="Don't use">Don't use</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Example: Pages 45–52 of the report cover key findings.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useOxfordComma"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Oxford (serial) comma</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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

              <FormField
                control={form.control}
                name="spacesAfterPeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spaces after period</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full md:w-auto">Save Writing Style Preferences</Button>
      </form>
    </Form>
  );
}
