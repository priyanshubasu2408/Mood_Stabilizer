import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Background from './components/Background';
import ThemeSelector from './components/ThemeSelector';
import JokeCard from './components/JokeCard';
import QuoteCard from './components/QuoteCard';
import PetCard from './components/PetCard';
import MoodQuiz from './components/MoodQuiz/QuizCard';
import HugCard from './components/VirtualHug/HugCard';
import MessageCard from './components/PersonalMessages/MessageCard';
import { Smile } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      <Background />
      <div className="min-h-screen p-6 relative">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smile size={40} className="text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Mood Lifter
            </h1>
          </div>
          <p className="text-lg text-purple-700">Your daily dose of happiness!</p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ThemeSelector />
          <MoodQuiz />
          <HugCard />
          <MessageCard />
          <JokeCard />
          <QuoteCard />
          <PetCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;