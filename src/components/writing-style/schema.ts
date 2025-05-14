
import * as z from "zod";

export const writingStyleSchema = z.object({
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
