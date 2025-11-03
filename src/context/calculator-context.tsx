
// src/context/calculator-context.tsx
'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useMemo, useReducer } from 'react';

export type UnitSystem = 'metric' | 'imperial';

type State = {
  unitSystem: UnitSystem;
  height: string;
  weight: string;
  gender: 'male' | 'female';
  age: string;
  waist: string;
  hip: string;
  neck: string;
  bust: string;
  activityLevel:
    | 'sedentary'
    | 'lightly_active'
    | 'moderately_active'
    | 'very_active'
    | 'extra_active';
  carbActivityLevel: 'light' | 'moderate' | 'high' | 'very_high';
  fatPercentage: number;
  activity: string;
  duration: string;
  deficit: 'mild' | 'standard' | 'aggressive';
  surplus: 'mild' | 'standard' | 'aggressive';
  tdee: string;
  goalWeight: string;
  weeklyLoss: string;
  weeklyGain: string;
  dietPlan: 'balanced' | 'high_protein' | 'low_carb' | 'keto' | 'custom';
  protein: number;
  carbs: number;
  fat: number;
  calories: string;
  goal: 'fat_loss' | 'maintenance' | 'muscle_gain';
  meals: string;
  hydrationGoal: string;
  bodyFat?: number;
  bmi?: number;
  idealWeight?: string;
  bmr?: number;
  calorieNeeds?: number;
  leanBodyMass?: number;
  ffmi?: number;
  bsa?: number;
  waistToHeightRatio?: number;
  waistToHipRatio?: number;
  bodyShape?: string;
  bodyDensity?: number;
  waterIntake?: number;
};

type Action =
  | { type: 'SET_UNIT_SYSTEM'; payload: UnitSystem }
  | { type: 'SET_USER_DATA'; payload: Partial<State> }
  | { type: 'SET_RESULTS'; payload: Partial<State> };

const initialState: State = {
  unitSystem: 'metric',
  height: '175',
  weight: '70',
  gender: 'female',
  age: '30',
  waist: '80',
  hip: '95',
  neck: '38',
  bust: '90',
  activityLevel: 'sedentary',
  carbActivityLevel: 'moderate',
  fatPercentage: 30,
  activity: '',
  duration: '30',
  deficit: 'standard',
  surplus: 'standard',
  tdee: '',
  goalWeight: '',
  weeklyLoss: '1',
  weeklyGain: '0.5',
  dietPlan: 'balanced',
  protein: 30,
  carbs: 40,
  fat: 30,
  calories: '2000',
  goal: 'maintenance',
  meals: '4',
  hydrationGoal: '',
};

const CalculatorContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function calculatorReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_UNIT_SYSTEM':
      // Keep user data but clear results when switching units
      const {
        bmi,
        bodyFat,
        idealWeight,
        bmr,
        calorieNeeds,
        leanBodyMass,
        ffmi,
        bsa,
        waistToHeightRatio,
        waistToHipRatio,
        bodyShape,
        bodyDensity,
        waterIntake,
        ...userData
      } = state;
      return {
        ...userData,
        height: '',
        weight: '',
        waist: '',
        hip: '',
        neck: '',
        bust: '',
        unitSystem: action.payload,
      };
    case 'SET_USER_DATA':
    case 'SET_RESULTS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}
