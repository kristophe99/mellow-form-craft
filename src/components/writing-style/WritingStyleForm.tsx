
import React, { useState } from "react";
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
    const rulesList: string[] = [
      `Use ${data.voice} voice e.g. "The manager approved the proposal" vs "The proposal was approved by the manager"`,
      `${data.writeConfidently ? "Write confidently" : "Don't write confidently"} — e.g., write "We should meet next week" rather than "I think we should meet next week"`,
      `${data.avoidWordyPhrases ? "Avoid wordy phrases" : "Don't avoid wordy phrases"} — e.g., say "Clearly, the report shows" instead of "It's clearly evident that the report shows"`,
      `${data.useCorrectPunctuation ? "Use correct punctuation" : "Don't enforce correct punctuation"} - misplaced or missing commas, hyphens, semicolons, periods, and more.`,
      `${data.useContractions ? "Use contractions where possible" : "Don't use contractions"} e.g. "Don't" instead of "Do Not"`,
      `${data.useTitleCase ? "Use title case in headings and titles" : "Don't use title case in headings and titles"} e.g. "How to Write Effective Marketing Headlines" vs "How to write effective marketing headlines"`,
      `Customize text to ${data.region} region`,
      `When using an acronym, introduce it with the ${data.acronymIntroduction} on ${data.acronymMentionFrequency} mention. Example: BMW (Bayerische Motoren Werke (BMW).`,
      `${data.introduceCommonAcronyms} introduce common acronyms e.g. CEO`,
      `${data.emojiUsage} of emojis e.g. 🤮`,
      `${data.useGenderInclusiveNouns} gender-inclusive nouns if possible e.g., "police officer" and not "policeman"`,
      `${data.useGenderInclusivePronouns} gender-inclusive pronouns if possible e.g., Each employee should submit their report by Friday vs Each employee should submit his report by Friday`,
      `${data.useAmpersand ? "Use" : "Don't use"} an ampersand (&) unless it's used in a brand name`,
      `${data.usePlusForAnd ? "Use" : "Don't use"} '+' to mean 'and'`,
      `${data.capitalizeProperNames ? "Capitalize" : "Don't capitalize"} proper names, geographic terms, historic episodes, and words derived from proper nouns E.g. USA, Julius Caesar`,
      `${data.emailUrlCapitalization} all lowercase when writing out an email address or website URL e.g. Info@nuwacom.ai vs info@nuwacom.ai`,
      `Spell out numbers ${data.spellOutNumbers}`,
      `Use ${data.numberSeparator} for number separators`,
      `Use ${data.currencyFormat} for currency format ${data.currencySpace} space, ${data.currencyAbbreviationPeriods} periods in abbreviations`,
      `Use ${data.shortDateFormat} for short date format`,
      `Use ${data.longDateFormat} for long date format`,
      `${data.useSemicolons} semicolons`,
      `${data.replaceExclamationPoints ? "Replace" : "Don't replace"} exclamation points`,
      `${data.useEmDashForAside} em dash for aside`,
      `${data.emDashSpaces} spaces with em dash`,
      `${data.useEmDashForRange} em dash for range`,
      `${data.useOxfordComma} Oxford comma`,
      `Use ${data.spacesAfterPeriod} space(s) after period`
    ];

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
