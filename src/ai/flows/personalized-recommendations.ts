// src/ai/flows/personalized-recommendations.ts
'use server';

/**
 * @fileOverview A personalized recommendation AI agent that provides tailored health and weight management advice.
 *
 * - getPersonalizedRecommendations - A function that generates personalized recommendations based on user data and preferences.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  bmi: z.number().describe('Body Mass Index (BMI) of the user.'),
  bodyFatPercentage: z
    .number()
    .describe('Body fat percentage of the user.'),
  idealWeight: z.string().describe('Ideal weight range for the user.'),
  bmr: z.number().describe('Basal Metabolic Rate (BMR) of the user.'),
  dailyCalorieNeeds: z
    .number()
    .describe('Daily calorie needs of the user.'),
  preferences: z
    .string()
    .describe(
      'User preferences and goals related to health and weight management.'
    ),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'Personalized health and weight management recommendations based on user data and preferences.'
    ),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a personalized health and weight management assistant.

  Based on the following user metrics and preferences, provide tailored recommendations to help them achieve their health goals.

  BMI: {{bmi}}
  Body Fat Percentage: {{bodyFatPercentage}}
  Ideal Weight: {{idealWeight}}
  BMR: {{bmr}}
  Daily Calorie Needs: {{dailyCalorieNeeds}}
  Preferences: {{preferences}}

  Provide clear, actionable, and personalized advice. Focus on diet, exercise, and lifestyle adjustments.
  Ensure your recommendations are safe and sustainable for long-term health.
  Format the response as a concise paragraph.
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
