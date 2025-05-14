
import React from "react";
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
