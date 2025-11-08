import React from 'react';
import type { View } from '../types';
import { BloomyMascot, SettingsIcon, SparkleIcon, WindIcon, PlusIcon, BloomingIcon } from './Icons';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
  resetChat: () => void;
  onOpenSettings: () => void;
  onShowAffirmation: () => void;
  onOpenBreathingExercise: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView, resetChat, onOpenSettings, onShowAffirmation, onOpenBreathingExercise }) => {
  const handleNavClick = (view: View) => {
      if (view === 'mood-check-in') {
          resetChat();
      } else {
          setView(view);
      }
  }

  const NavButton: React.FC<{ view: View, label: string }> = ({ view, label }) => {
    const isActive = currentView === view;
    return (
        <button
            onClick={() => handleNavClick(view)}
            aria-label={label}
            className={`w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 rounded-full text-sm font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center ${
                isActive
                ? 'bg-brand-primary text-white shadow-md'
                : 'bg-bg-secondary/70 hover:bg-bg-secondary text-text-accent'
            }`}
        >
            <span className="hidden md:inline">{label}</span>
            <BloomingIcon className={`w-6 h-6 md:hidden ${isActive ? 'text-white' : 'text-green-500'}`} />
        </button>
    )
  }

  return (
    <header className="bg-bg-accent backdrop-blur-md shadow-sm p-2 md:p-3 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <BloomyMascot className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-xl md:text-2xl font-bold text-text-accent">Bloomy</h1>
        </div>
        <div className="flex items-center gap-1.5 md:gap-3">
            {/* Prominent New Chat Button */}
            <button
                onClick={resetChat}
                aria-label="New Chat"
                className="w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-brand-primary text-white shadow-md hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary dark:focus:ring-offset-dark-bg transform hover:scale-105 active:scale-95 flex items-center justify-center"
            >
                <span className="hidden md:inline">New Chat</span>
                <PlusIcon className="w-5 h-5 md:hidden" />
            </button>
            <nav className="flex items-center p-1 bg-bg-primary rounded-full">
              <NavButton view="garden" label="My Garden" />
            </nav>
            <button
                onClick={onShowAffirmation}
                className="p-2 rounded-full bg-bg-secondary/70 hover:bg-bg-secondary text-yellow-500 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Show a positive affirmation"
            >
                <SparkleIcon className="w-6 h-6 md:w-7 md:h-7" />
            </button>
             <button
                onClick={onOpenBreathingExercise}
                className="p-2 rounded-full bg-bg-secondary/70 hover:bg-bg-secondary text-blue-400 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Start breathing exercise"
            >
                <WindIcon className="w-6 h-6 md:w-7 md:h-7" />
            </button>
             <button
                onClick={onOpenSettings}
                className="p-2 rounded-full bg-bg-secondary/70 hover:bg-bg-secondary text-text-accent transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Open settings"
            >
                <SettingsIcon className="w-6 h-6 md:w-7 md:h-7" />
            </button>
        </div>
      </div>
    </header>
  );
};
