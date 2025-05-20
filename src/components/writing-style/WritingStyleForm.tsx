
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { writingStyleSchema } from "./schema";
import { WritingStyleSection } from "./WritingStyleSection";
import { VoiceAndStyleSection } from "./sections/VoiceAndStyleSection";
import { RegionalCustomizationSection } from "./sections/RegionalCustomizationSection";
import { AcronymsSection } from "./sections/AcronymsSection";
import { GenderInclusivitySection } from "./sections/GenderInclusivitySection";
import { AmpersandSection } from "./sections/AmpersandSection";
import { CapitalizationSection } from "./sections/CapitalizationSection";
import { DatesAndNumbersSection } from "./sections/DatesAndNumbersSection";
import { PunctuationSection } from "./sections/PunctuationSection";

type WritingStyleFormValues = z.infer<typeof writingStyleSchema>;

export function WritingStyleForm() {
  const navigate = useNavigate();

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

  function generateRules(data: WritingStyleFormValues) {
    const rulesList: string[] = [];
    
    // Only add rules for fields that are checked or have values
    
    // Voice is always included as it's a select field
    rulesList.push(`Use ${data.voice} voice e.g. "The manager approved the proposal" vs "The proposal was approved by the manager"`);
    
    // Only include checkbox rules if they're checked
    if (data.writeConfidently) {
      rulesList.push(`Write confidently — e.g., write "We should meet next week" rather than "I think we should meet next week"`);
    }
    
    if (data.avoidWordyPhrases) {
      rulesList.push(`Avoid wordy phrases — e.g., say "Clearly, the report shows" instead of "It's clearly evident that the report shows"`);
    }
    
    if (data.useCorrectPunctuation) {
      rulesList.push(`Use correct punctuation - misplaced or missing commas, hyphens, semicolons, periods, and more.`);
    }
    
    if (data.useContractions) {
      rulesList.push(`Use contractions where possible e.g. "Don't" instead of "Do Not"`);
    }
    
    if (data.useTitleCase) {
      rulesList.push(`Use title case in headings and titles e.g. "How to Write Effective Marketing Headlines" vs "How to write effective marketing headlines"`);
    }
    
    // Region is always included as it's a select field
    rulesList.push(`Customize text to ${data.region} region`);
    
    // Acronyms are select fields, so always include them
    rulesList.push(`When using an acronym, introduce it with the ${data.acronymIntroduction} on ${data.acronymMentionFrequency} mention. Example: BMW (Bayerische Motoren Werke (BMW).`);
    rulesList.push(`${data.introduceCommonAcronyms} introduce common acronyms e.g. CEO`);
    rulesList.push(`${data.emojiUsage} of emojis e.g. 🤮`);
    
    // Gender inclusivity are select fields, so always include them
    rulesList.push(`${data.useGenderInclusiveNouns} gender-inclusive nouns if possible e.g., "police officer" and not "policeman"`);
    rulesList.push(`${data.useGenderInclusivePronouns} gender-inclusive pronouns if possible e.g., Each employee should submit their report by Friday vs Each employee should submit his report by Friday`);
    
    // Only include ampersand rules if they're checked
    if (data.useAmpersand) {
      rulesList.push(`Use an ampersand (&) unless it's used in a brand name`);
    } else {
      rulesList.push(`Don't use an ampersand (&) unless it's used in a brand name`);
    }
    
    if (data.usePlusForAnd) {
      rulesList.push(`Use '+' to mean 'and'`);
    } else {
      rulesList.push(`Don't use '+' to mean 'and'`);
    }
    
    // Only include capitalization if checked
    if (data.capitalizeProperNames) {
      rulesList.push(`Capitalize proper names, geographic terms, historic episodes, and words derived from proper nouns E.g. USA, Julius Caesar`);
    }
    
    // Email/URL capitalization is a select field
    if (data.emailUrlCapitalization !== 'N/A') {
      rulesList.push(`${data.emailUrlCapitalization} all lowercase when writing out an email address or website URL e.g. Info@nuwacom.ai vs info@nuwacom.ai`);
    }
    
    // Number formatting are select fields, so always include them
    rulesList.push(`Spell out numbers ${data.spellOutNumbers}`);
    rulesList.push(`Use ${data.numberSeparator} for number separators`);
    rulesList.push(`Use ${data.currencyFormat} for currency format ${data.currencySpace} space, ${data.currencyAbbreviationPeriods} periods in abbreviations`);
    rulesList.push(`Use ${data.shortDateFormat} for short date format`);
    rulesList.push(`Use ${data.longDateFormat} for long date format`);
    
    // Punctuation rules - only include if they have values
    if (data.useSemicolons !== 'N/A') {
      rulesList.push(`${data.useSemicolons} semicolons`);
    }
    
    if (data.replaceExclamationPoints) {
      rulesList.push(`Replace exclamation points`);
    }
    
    if (data.useEmDashForAside !== 'N/A') {
      rulesList.push(`${data.useEmDashForAside} em dash for aside`);
    }
    
    if (data.emDashSpaces !== 'N/A') {
      rulesList.push(`${data.emDashSpaces} spaces with em dash`);
    }
    
    if (data.useEmDashForRange !== 'N/A') {
      rulesList.push(`${data.useEmDashForRange} em dash for range`);
    }
    
    if (data.useOxfordComma !== 'N/A') {
      rulesList.push(`${data.useOxfordComma} Oxford comma`);
    }
    
    rulesList.push(`Use ${data.spacesAfterPeriod} space(s) after period`);

    return rulesList;
  }

  function onSubmit(data: WritingStyleFormValues) {
    console.log(data);
    const generatedRules = generateRules(data);
    
    toast({
      title: "Writing style preferences saved",
      description: "Your settings have been successfully saved.",
    });

    // Navigate to the results page with the generated rules
    navigate('/writing-style/results', { 
      state: { rules: generatedRules }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8">
          <VoiceAndStyleSection control={form.control} />
          <RegionalCustomizationSection control={form.control} />
          <AcronymsSection control={form.control} />
          <GenderInclusivitySection control={form.control} />
          <AmpersandSection control={form.control} />
          <CapitalizationSection control={form.control} />
          <DatesAndNumbersSection control={form.control} />
          <PunctuationSection control={form.control} />
        </div>

        <Button type="submit" className="mt-8">Save Writing Style Preferences</Button>
      </form>
    </Form>
  );
}
