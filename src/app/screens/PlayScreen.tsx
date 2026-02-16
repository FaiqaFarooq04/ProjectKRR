'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { QUESTIONS } from '../data/questions';
import { Question } from '../types/game';
import {
  StudentState,
  applyAdaptiveRules,
  adjustDifficulty,
  Difficulty
} from '../logic/rules';

interface Props {
  onFinish: (score: number) => void;
}

const TOTAL_QUESTIONS = 10;

const PlayScreen = ({ onFinish }: Props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  /* SCORE */
  const [score, setScore] = useState(0);

  /* ADAPTIVE STATE */
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [questionsAtCurrentLevel, setQuestionsAtCurrentLevel] = useState(0);

  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [failedOnSameQuestion, setFailedOnSameQuestion] = useState(0);
  const [hintUsageCount] = useState(0);

useEffect(() => {
  const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
  setQuestions(shuffled.slice(0, TOTAL_QUESTIONS));
}, []);



  const handleAnswer = (choice: string) => {
    if (selected) return;
    setSelected(choice);

  const q = questions.find(
    (q, i) => i >= index && q.difficulty === difficulty) || questions[index];
    const isCorrect = choice === q.answer;

    // Update score
    if (isCorrect) {
      setScore(s => s + 1);
      setTotalCorrect(c => c + 1);
      setConsecutiveCorrect(c => c + 1);
      setFailedOnSameQuestion(0);
    } else {
      setTotalIncorrect(i => i + 1);
      setFailedAttempts(f => f + 1);
      setFailedOnSameQuestion(f => f + 1);
      setConsecutiveCorrect(0);
    }

    const answered = totalCorrect + totalIncorrect + 1;

    const studentState: StudentState = {
      consecutiveCorrect: isCorrect ? consecutiveCorrect + 1 : 0,
      totalCorrect: isCorrect ? totalCorrect + 1 : totalCorrect,
      totalIncorrect: !isCorrect ? totalIncorrect + 1 : totalIncorrect,
      failedAttempts: isCorrect ? failedAttempts : failedAttempts + 1,
      failedOnSameQuestion: isCorrect ? 0 : failedOnSameQuestion + 1,
      hintUsageCount,
      totalQuestions: answered,
      accuracy:
        (isCorrect ? totalCorrect + 1 : totalCorrect) / answered,
      difficulty,
      questionsAtCurrentLevel
    };

    const actions = applyAdaptiveRules(studentState);

    const newDifficulty = adjustDifficulty(
      difficulty,
      actions,
      questionsAtCurrentLevel
    );

    if (newDifficulty !== difficulty) {
      setDifficulty(newDifficulty);
      setQuestionsAtCurrentLevel(0);
    } else {
      setQuestionsAtCurrentLevel(q => q + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (index < questions.length - 1) {
      setIndex(i => i + 1);
    } else {
      onFinish(score);
    }
  };

  if (!questions.length) return null;

  const q = questions[index];
  const isCorrect = selected === q.answer;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        key={q.id}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-lg w-96"
      >
        <p className="text-sm text-gray-600 mb-1">
          Question {index + 1} / {questions.length}
        </p>

        <p className="text-xs text-indigo-700 font-semibold mb-2">
          Type: {q.type} • Difficulty: {difficulty}
        </p>

        <h2 className="font-semibold mb-4 text-gray-900">
          {q.question}
        </h2>

        <div className="space-y-2">
          {q.choices.map((c, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(c)}
              className={`w-full py-2 rounded transition
                ${
                  selected
                    ? c === q.answer
                      ? 'bg-green-500 text-white'
                      : c === selected
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-300'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-4 text-sm">
            <p className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'Correct ✔' : 'Incorrect ✖'}
            </p>

            <p className="mt-2 text-gray-700">
              {isCorrect
                ? `Correct! "${selected}" satisfies the rule of ${q.rule}.`
                : `"${selected}" violates the rule of ${q.rule}.`}
            </p>

            <p className="italic text-gray-600 mt-1">
              This question checks {q.type.toLowerCase()} reasoning.
            </p>

            <p className="mt-2 text-gray-700">
              <strong>Explanation:</strong> {q.explanation}
            </p>

            <button
              onClick={nextQuestion}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Next Question
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PlayScreen;