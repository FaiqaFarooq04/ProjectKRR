'use client';

import { motion } from 'framer-motion';
import { LeaderboardEntry } from '../types/game';

interface Props {
  entries: LeaderboardEntry[];
  onBack: () => void;
}

const LeaderboardScreen = ({ entries, onBack }: Props) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">🏆 Leaderboard</h2>

        <ul className="space-y-2 mb-4">
          {entries.map((e, i) => (
            <li key={i} className="flex justify-between border-b">
              <span>{e.name}</span>
              <span className="font-semibold">{e.score}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onBack}
          className="w-full bg-gray-700 text-white py-2 rounded"
        >
          Back
        </button>
      </motion.div>
    </div>
  );
};

export default LeaderboardScreen;
