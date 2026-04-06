import { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuickQuizProps {
  courseId: string;
  moduleId: string;
}

// Mock quiz data - in a real app, this would be fetched from a database or file
const quizData: Record<string, Record<string, Question[]>> = {
  git: {
    '01-intro': [
      { question: 'What command checks the git version?', options: ['git status', 'git --version', 'git init', 'git log'], correct: 1 }
    ]
  }
};

export default function QuickQuiz({ courseId, moduleId }: QuickQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions = quizData[courseId]?.[moduleId] || [
    { question: 'What is the primary goal of this module?', options: ['To learn Git', 'To learn AI', 'To learn Docker', 'To learn Rust'], correct: 0 }
  ];

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
        <Sparkles className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-indigo-900 mb-2">Quiz Completed!</h3>
        <p className="text-indigo-700 mb-6">You scored {score} out of {questions.length}.</p>
        <button 
          onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }}
          className="flex items-center gap-2 mx-auto px-6 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
        >
          <RefreshCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-indigo-600 font-bold">
        <Sparkles className="w-5 h-5" />
        <h3>Quick Quiz</h3>
      </div>
      <p className="text-slate-900 font-medium mb-6">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              selectedOption === index
                ? index === question.correct
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-rose-50 border-rose-200 text-rose-700'
                : 'bg-slate-50 border-slate-200 hover:border-indigo-200 text-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              {option}
              {selectedOption === index && (
                index === question.correct ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
              )}
            </div>
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </motion.button>
      )}
    </div>
  );
}
