'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onStart: (name: string) => void;
}

const WelcomeScreen = ({ onStart }: Props) => {
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg w-80 text-center"
      >
        <h1 className="text-2xl font-extrabold text-indigo-800 mb-4">
          🧠 Welcome Buddy
        </h1>

        <label className="block text-left text-gray-800 font-medium mb-1">
          Enter your name
        </label>

        <input
          type="text"
          placeholder="e.g. Ali"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ color: '#333333' }}
          className="w-full border-2 border-indigo-300 p-2 rounded mb-4 focus:outline-none focus:border-indigo-600"
        />

        <button
          disabled={!name}
          onClick={() => onStart(name)}
          className="w-full bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800 disabled:opacity-40"
        >
          Start Game
        </button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
