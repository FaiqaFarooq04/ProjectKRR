export type Screen = 'welcome' | 'play' | 'summary' | 'leaderboard';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: string;
  type: string;
  difficulty: Difficulty;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
  rule: string;
}

export interface LeaderboardEntry {
  name: string;
  score: number;
}