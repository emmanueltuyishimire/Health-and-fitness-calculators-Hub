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
  activityLevel:
    | 'sedentary'
    | 'lightly_active'
    | 'moderately_active'
    | 'very_active'
    | 'extra_active';
  bmi?: number;
  bodyFat?: number;
  idealWeight?: string;
  bmr?: number;
  calorieNeeds?: number;
};

type Action =
  | { type: 'SET_UNIT_SYSTEM'; payload: UnitSystem }
  | { type: 'SET_USER_DATA'; payload: Partial<State> }
  | { type: 'SET_RESULTS'; payload: Partial<State> };

const initialState: State = {
  unitSystem: 'metric',
  height: '',
  weight: '',
  gender: 'female',
  age: '',
  waist: '',
  hip: '',
  neck: '',
  activityLevel: 'sedentary',
};

const CalculatorContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function calculatorReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_UNIT_SYSTEM':
      return {
        ...initialState, // Reset all fields on unit change
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
