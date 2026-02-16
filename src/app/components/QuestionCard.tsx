import React from 'react';
import { Question } from '../types/game';

interface QuestionCardProps {
  question: Question;
  onAnswer: (choice: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-4">
      <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
      <div className="grid gap-3">
        {question.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(choice)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
