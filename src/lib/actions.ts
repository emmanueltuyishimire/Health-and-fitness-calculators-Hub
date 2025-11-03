// src/lib/actions.ts
'use server';

import { getPersonalizedRecommendations, PersonalizedRecommendationsInput } from '@/ai/flows/personalized-recommendations';
import { z } from 'zod';

const PersonalizedRecommendationsInputSchema = z.object({
  bmi: z.number(),
  bodyFatPercentage: z.number(),
  idealWeight: z.string(),
  bmr: z.number(),
  dailyCalorieNeeds: z.number(),
  preferences: z.string(),
});

export async function generateRecommendations(input: PersonalizedRecommendationsInput) {
  const validatedInput = PersonalizedRecommendationsInputSchema.safeParse(input);

  if (!validatedInput.success) {
    return { error: 'Invalid input.' };
  }

  try {
    const result = await getPersonalizedRecommendations(validatedInput.data);
    return { recommendations: result.recommendations };
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return { error: 'Failed to generate recommendations. Please try again.' };
  }
}
