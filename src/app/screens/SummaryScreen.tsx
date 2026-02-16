'use client';

import { motion } from 'framer-motion';

interface Props {
  score: number;
  total: number;
  onPlayAgain: () => void;
  onLeaderboard: () => void;
  onBack: () => void;
}

const SummaryScreen = ({ score, total, onPlayAgain, onLeaderboard, onBack }: Props) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-md text-center w-80"
      >
        <h2 className="text-2xl font-bold mb-4 " style={{ color: '#333333' }}>🎉 Finished!</h2>

        <p className="text-lg mb-6" style={{ color: '#333333' }}>
          Score: <strong>{score} / 10</strong>
        </p>

        <button
          onClick={onPlayAgain}
          className="w-full bg-indigo-600 text-white py-2 rounded mb-3"
        >
          Play Again
        </button>

        <button
          onClick={onLeaderboard}
          className="w-full bg-gray-600 text-white py-2 rounded mb-3"
        >
          Leaderboard
        </button>

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

export default SummaryScreen;
