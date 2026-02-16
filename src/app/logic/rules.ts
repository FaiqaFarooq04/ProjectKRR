// src/app/logic/rules.ts

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface StudentState {
  consecutiveCorrect: number;
  totalCorrect: number;
  totalIncorrect: number;
  failedAttempts: number;
  failedOnSameQuestion: number;
  hintUsageCount: number;
  totalQuestions: number;
  accuracy: number;
  difficulty: Difficulty;
  questionsAtCurrentLevel: number;
}

export interface RuleAction {
  increaseDifficulty?: boolean;
  decreaseDifficulty?: boolean;
  provideHint?: boolean;
  promoteStage?: boolean;
  recommendPractice?: boolean;
}

/**
 * APPLY KRR RULES (IF–THEN)
 */
export function applyAdaptiveRules(state: StudentState): RuleAction {
  const actions: RuleAction = {};

  // Rule 1: IF 3 consecutive correct AND stayed long enough → increase difficulty
  if (state.consecutiveCorrect >= 3 && state.questionsAtCurrentLevel >= 3) {
    actions.increaseDifficulty = true;
  }

  // Rule 2: IF failed attempts ≥ 3 → decrease difficulty
  if (state.failedAttempts >= 3) {
    actions.decreaseDifficulty = true;
  }

  // Rule 4: IF failed twice on same question → provide hint
  if (state.failedOnSameQuestion >= 2) {
    actions.provideHint = true;
  }

  // Rule 6: IF accuracy ≥ 80% → promote stage
  if (state.accuracy >= 0.8) {
    actions.promoteStage = true;
  }

  // Rule 7: IF accuracy < 50% → recommend practice
  if (state.accuracy < 0.5) {
    actions.recommendPractice = true;
  }

  return actions;
}

/**
 * DIFFICULTY TRANSITION LOGIC
 */
export function adjustDifficulty(
  current: Difficulty,
  actions: RuleAction,
  questionsAtCurrentLevel: number
): Difficulty {
  if (actions.increaseDifficulty) {
    if (current === 'Easy' && questionsAtCurrentLevel >= 3) return 'Medium';

    // Medium must appear at least 5 times before Hard
    if (current === 'Medium' && questionsAtCurrentLevel >= 3) {
      return 'Hard';
    }
  }

  if (actions.decreaseDifficulty) {
    if (current === 'Hard') return 'Medium';
    if (current === 'Medium') return 'Easy';
  }

  return current;
}
