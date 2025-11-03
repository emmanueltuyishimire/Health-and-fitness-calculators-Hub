// src/lib/definitions.ts
import { z } from 'zod';

export const BmiSchema = z.object({
  height: z.string().min(1, { message: 'Height is required.' }),
  weight: z.string().min(1, { message: 'Weight is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type BmiFormValues = z.infer<typeof BmiSchema>;

export const BodyFatSchema = z.object({
  gender: z.enum(['male', 'female']),
  height: z.string().min(1, { message: 'Height is required.' }),
  waist: z.string().min(1, { message: 'Waist measurement is required.' }),
  neck: z.string().min(1, { message: 'Neck measurement is required.' }),
  hip: z.string().optional(),
  unitSystem: z.enum(['metric', 'imperial']),
}).refine(data => data.gender === 'female' ? !!data.hip && data.hip.length > 0 : true, {
  message: 'Hip measurement is required for females.',
  path: ['hip'],
});

export type BodyFatFormValues = z.infer<typeof BodyFatSchema>;


export const IdealWeightSchema = z.object({
  gender: z.enum(['male', 'female']),
  height: z.string().min(1, { message: 'Height is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type IdealWeightFormValues = z.infer<typeof IdealWeightSchema>;

export const BmrSchema = z.object({
  gender: z.enum(['male', 'female']),
  age: z.string().min(1, { message: 'Age is required.' }),
  height: z.string().min(1, { message: 'Height is required.' }),
  weight: z.string().min(1, { message: 'Weight is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type BmrFormValues = z.infer<typeof BmrSchema>;

export const TdeeSchema = z.object({
  bmr: z.string().min(1, { message: 'BMR is required. Please calculate it first.' }),
  activityLevel: z.enum([
    'sedentary',
    'lightly_active',
    'moderately_active',
    'very_active',
    'extra_active',
  ]),
});

export type TdeeFormValues = z.infer<typeof TdeeSchema>;

export const CalorieNeedsSchema = z.object({
  bmr: z.string().min(1, { message: 'BMR is required. Please calculate it first.' }),
  activityLevel: z.enum([
    'sedentary',
    'lightly_active',
    'moderately_active',
    'very_active',
    'extra_active',
  ]),
});

export type CalorieNeedsFormValues = z.infer<typeof CalorieNeedsSchema>;

export const RecommendationsSchema = z.object({
  preferences: z.string().min(10, { message: 'Please describe your preferences in at least 10 characters.' }),
});

export type RecommendationsFormValues = z.infer<typeof RecommendationsSchema>;

export const LeanBodyMassSchema = z.object({
    gender: z.enum(['male', 'female']),
    height: z.string().min(1, { message: 'Height is required.' }),
    weight: z.string().min(1, { message: 'Weight is required.' }),
    unitSystem: z.enum(['metric', 'imperial']),
});

export type LeanBodyMassFormValues = z.infer<typeof LeanBodyMassSchema>;

export const FfmiSchema = z.object({
  gender: z.enum(['male', 'female']),
  height: z.string().min(1, { message: 'Height is required.' }),
  weight: z.string().min(1, { message: 'Weight is required.' }),
  bodyFat: z.string().min(1, { message: 'Body fat percentage is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type FfmiFormValues = z.infer<typeof FfmiSchema>;

export const BsaSchema = z.object({
  height: z.string().min(1, { message: 'Height is required.' }),
  weight: z.string().min(1, { message: 'Weight is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type BsaFormValues = z.infer<typeof BsaSchema>;

export const WaistToHeightRatioSchema = z.object({
  height: z.string().min(1, { message: 'Height is required.' }),
  waist: z.string().min(1, { message: 'Waist is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type WaistToHeightRatioFormValues = z.infer<typeof WaistToHeightRatioSchema>;

export const WaistToHipRatioSchema = z.object({
  gender: z.enum(['male', 'female']),
  waist: z.string().min(1, { message: 'Waist is required.' }),
  hip: z.string().min(1, { message: 'Hip is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type WaistToHipRatioFormValues = z.infer<typeof WaistToHipRatioSchema>;

export const BodyShapeSchema = z.object({
  bust: z.string().min(1, { message: 'Bust measurement is required.' }),
  waist: z.string().min(1, { message: 'Waist measurement is required.' }),
  hip: z.string().min(1, { message: 'Hip measurement is required.' }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type BodyShapeFormValues = z.infer<typeof BodyShapeSchema>;

export const BodyDensitySchema = z.object({
  bodyFat: z.string().min(1, { message: 'Body fat percentage is required.' }),
});

export type BodyDensityFormValues = z.infer<typeof BodyDensitySchema>;

export const CalorieDeficitSchema = z.object({
  tdee: z.string().min(1, { message: 'TDEE is required. Please calculate it first.' }),
  deficit: z.enum([
    'mild',
    'standard',
    'aggressive',
  ]),
});

export type CalorieDeficitFormValues = z.infer<typeof CalorieDeficitSchema>;

export const CalorieSurplusSchema = z.object({
  tdee: z.string().min(1, { message: 'TDEE is required. Please calculate it first.' }),
  surplus: z.enum([
    'mild',
    'standard',
    'aggressive',
  ]),
});

export type CalorieSurplusFormValues = z.infer<typeof CalorieSurplusSchema>;

export const CalorieMaintenanceSchema = z.object({
  tdee: z.string().min(1, { message: 'TDEE is required. Please calculate it first.' }),
});

export type CalorieMaintenanceFormValues = z.infer<typeof CalorieMaintenanceSchema>;

export const WeightLossGoalSchema = z.object({
    tdee: z.string().min(1, { message: 'TDEE is required. Please calculate it first.' }),
    currentWeight: z.string().min(1, { message: 'Current weight is required.' }),
    goalWeight: z.string().min(1, { message: 'Goal weight is required.' }),
    weeklyLoss: z.string(),
    unitSystem: z.enum(['metric', 'imperial']),
});

export type WeightLossGoalFormValues = z.infer<typeof WeightLossGoalSchema>;

export const WeightGainGoalSchema = z.object({
    tdee: z.string().min(1, { message: 'TDEE is required. Please calculate it first.' }),
    currentWeight: z.string().min(1, { message: 'Current weight is required.' }),
    goalWeight: z.string().min(1, { message: 'Goal weight is required.' }),
    weeklyGain: z.string(),
    unitSystem: z.enum(['metric', 'imperial']),
});

export type WeightGainGoalFormValues = z.infer<typeof WeightGainGoalSchema>;

export const FatLossTrackerSchema = z.object({
    startingWeight: z.string().min(1, { message: 'Starting weight is required.' }),
    startingBodyFat: z.string().min(1, { message: 'Starting body fat % is required.' }),
    currentWeight: z.string().min(1, { message: 'Current weight is required.' }),
    currentBodyFat: z.string().min(1, { message: 'Current body fat % is required.' }),
    unitSystem: z.enum(['metric', 'imperial']),
});

export type FatLossTrackerFormValues = z.infer<typeof FatLossTrackerSchema>;

export const GoalWeightEstimatorSchema = z.object({
  tdee: z.string().min(1, { message: 'TDEE is required. Please calculate it first.' }),
  currentWeight: z.string().min(1, { message: 'Current weight is required.' }),
  goalWeight: z.string().min(1, { message: 'Goal weight is required.' }),
  targetDate: z.date({
    required_error: "A target date is required.",
  }),
  unitSystem: z.enum(['metric', 'imperial']),
});

export type GoalWeightEstimatorFormValues = z.infer<typeof GoalWeightEstimatorSchema>;
