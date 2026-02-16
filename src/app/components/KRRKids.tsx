'use client';

import { useEffect, useState } from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import PlayScreen from '../screens/PlayScreen';
import SummaryScreen from '../screens/SummaryScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import { LeaderboardEntry } from '../types/game';

type Screen = 'welcome' | 'play' | 'summary' | 'leaderboard';

const STORAGE_KEY = 'krrkids_leaderboard';

const KRRKids = () => {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setLeaderboard(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leaderboard));
  }, [leaderboard]);

  return (
    <>
      {screen === 'welcome' && (
        <WelcomeScreen
          onStart={(playerName) => {
            setName(playerName);
            setScreen('play');
          }}
        />
      )}

      {screen === 'play' && (
        <PlayScreen
          onFinish={(finalScore) => {
            setScore(finalScore);
            setLeaderboard(prev => [...prev, { name, score: finalScore }]);
            setScreen('summary');
          }}
        />
      )}

      {screen === 'summary' && (
        <SummaryScreen
          score={score}
          total={5}
          onPlayAgain={() => setScreen('play')}
          onLeaderboard={() => setScreen('leaderboard')}
          onBack={() => setScreen('welcome')}
        />
      )}

      {screen === 'leaderboard' && (
        <LeaderboardScreen
          entries={leaderboard}
          onBack={() => setScreen('welcome')}
        />
      )}
    </>
  );
};

export default KRRKids;
