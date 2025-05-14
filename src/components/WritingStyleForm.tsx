
import React from "react";
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
import { Input } from "@/components/ui/input";
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
        <div className="space-y-8">
          {/* Writing Style */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Writing Style</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                Use
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
            </div>
          </div>

          {/* Regional Customization */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Regional Customization</h2>
            <div className="prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                Customize text to
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem className="inline-flex m-0">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[140px]">
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
                region
              </p>
            </div>
          </div>

          {/* Acronyms */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Acronyms</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                When using an acronym, introduce it with the 
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
            </div>
          </div>

          {/* Gender-Inclusivity */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Gender-Inclusivity</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
            </div>
          </div>

          {/* Ampersand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Ampersand</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                <FormField
                  control={form.control}
                  name="useAmpersand"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 m-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        Use an ampersand (&) unless it's used in a brand name
                      </div>
                    </FormItem>
                  )}
                />
              </p>

              <p className="flex flex-wrap items-center gap-x-2">
                <FormField
                  control={form.control}
                  name="usePlusForAnd"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 m-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        Don't use '+' to mean 'and'
                      </div>
                    </FormItem>
                  )}
                />
              </p>
            </div>
          </div>

          {/* Capitalization */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Capitalization</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
            </div>
          </div>

          {/* Dates and Numbers */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Dates and Numbers</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                Always spell out numbers
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
            </div>
          </div>

          {/* Punctuation */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Punctuation</h2>
            <div className="space-y-4 prose max-w-none text-foreground">
              <p className="flex flex-wrap items-center gap-x-2">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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
            </div>
          </div>
        </div>

        <Button type="submit" className="mt-8">Save Writing Style Preferences</Button>
      </form>
    </Form>
  );
}
