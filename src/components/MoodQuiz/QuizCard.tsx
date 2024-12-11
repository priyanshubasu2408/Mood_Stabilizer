import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { quizQuestions } from './questions';

export default function QuizCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (personality: string) => {
    const newAnswers = [...answers, personality];
    if (currentQuestion < quizQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(prev => prev + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const getPersonalityResult = () => {
    const personalities = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const dominantPersonality = Object.entries(personalities)
      .sort(([,a], [,b]) => b - a)[0][0];

    const results: Record<string, string> = {
      cozy: "You're a warm chocolate brownie with extra love! 🍫",
      cheerful: "You're a rainbow cupcake spreading joy everywhere! 🧁",
      elegant: "You're a sophisticated dessert that brings class to any situation! ✨",
      refreshing: "You're a burst of freshness in everyone's life! 🍋",
      energetic: "You're radiating positive energy today! ⚡",
      calm: "You're like a peaceful morning breeze! 🌅",
      seeking: "You're on a beautiful journey of self-discovery! 🌟",
      creative: "Your imagination knows no bounds! 🎨",
      homebody: "You're creating your own cozy paradise! 🏡",
      adventurous: "You're ready for life's exciting adventures! 🌊",
      "nature-lover": "You're in perfect harmony with nature! 🌿",
      social: "You're the life of every party! 🎉"
    };

    return results[dominantPersonality] || "You're uniquely wonderful! ✨";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Mood Quiz</h2>
      {showResult ? (
        <div className="text-center">
          <p className="text-xl mb-4">{getPersonalityResult()}</p>
          <button
            onClick={resetQuiz}
            className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Sparkles size={20} />
            Take Quiz Again
          </button>
        </div>
      ) : (
        <>
          <p className="text-lg mb-4">{quizQuestions[currentQuestion].question}</p>
          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.personality)}
                className="w-full text-left p-3 rounded-lg bg-white/50 hover:bg-white/90 transition-colors"
              >
                {option.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}