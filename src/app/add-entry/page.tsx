'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AdvancedCheck from '@/components/forms/AdvancedCheck';

const moodEmojis = ['😢', '😞', '😔', '😕', '😐', '🙂', '😊', '😄', '😁', '🤩'];

export default function AddEntryPage() {
  const [mood, setMood] = useState(5);
  const [sleep, setSleep] = useState(7);
  const [stress, setStress] = useState(4);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const getStressColor = (value: number) => {
    if (value <= 3) return '#22C55E';
    if (value <= 6) return '#EAB308';
    return '#EF4444';
  };

  const stressGradient = `linear-gradient(to right, #22C55E 0%, #EAB308 50%, #EF4444 100%)`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Add Entry</h1>
        <p className="text-sm text-text-muted mt-1">Record how you&apos;re feeling today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mood Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <label className="block text-sm font-semibold text-text-primary mb-1">
            How is your mood?
          </label>
          <p className="text-xs text-text-muted mb-5">Rate from 1 (lowest) to 10 (highest)</p>

          {/* Emoji display */}
          <div className="flex justify-center mb-5">
            <motion.span
              key={mood}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl"
            >
              {moodEmojis[mood - 1]}
            </motion.span>
          </div>

          {/* Slider */}
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={mood}
              onChange={(e) => setMood(Number(e.target.value))}
              className="w-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #6366F1 ${((mood - 1) / 9) * 100}%, rgba(255,255,255,0.08) ${((mood - 1) / 9) * 100}%)`,
              }}
            />
            <div className="flex justify-between mt-2 px-0.5">
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-medium ${
                    i + 1 === mood ? 'text-indigo-light' : 'text-text-muted'
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Value label */}
          <div className="text-center mt-3">
            <span className="text-lg font-bold text-indigo-light">{mood}</span>
            <span className="text-sm text-text-muted">/10</span>
          </div>
        </motion.div>

        {/* Sleep Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <label className="block text-sm font-semibold text-text-primary mb-1">
            Hours of sleep
          </label>
          <p className="text-xs text-text-muted mb-5">How many hours did you sleep last night?</p>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <input
                type="number"
                min="0"
                max="24"
                step="0.5"
                value={sleep}
                onChange={(e) => setSleep(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white/[0.03] border border-glass-border rounded-xl text-text-primary text-lg font-semibold focus:outline-none focus:border-cyan-primary/30 transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-text-muted">hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSleep(Math.max(0, sleep - 0.5))}
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-glass-border flex items-center justify-center text-text-secondary hover:border-cyan-primary/30 transition-colors"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setSleep(Math.min(24, sleep + 0.5))}
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-glass-border flex items-center justify-center text-text-secondary hover:border-cyan-primary/30 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Quality indicator */}
          <div className="flex items-center gap-2 mt-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: sleep >= 7 ? '#22C55E' : sleep >= 5 ? '#EAB308' : '#EF4444',
              }}
            />
            <span className="text-xs text-text-muted">
              {sleep >= 7 ? 'Healthy sleep duration' : sleep >= 5 ? 'Below recommended' : 'Insufficient sleep'}
            </span>
          </div>
        </motion.div>

        {/* Stress Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <label className="block text-sm font-semibold text-text-primary mb-1">
            Stress level
          </label>
          <p className="text-xs text-text-muted mb-5">Rate your current stress level</p>

          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={stress}
              onChange={(e) => setStress(Number(e.target.value))}
              className="w-full cursor-pointer"
              style={{
                background: stressGradient,
              }}
            />
            <div className="flex justify-between mt-2 px-0.5">
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-medium`}
                  style={{
                    color: i + 1 === stress ? getStressColor(stress) : '#64748B',
                  }}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Value with color */}
          <div className="text-center mt-3">
            <span
              className="text-lg font-bold"
              style={{ color: getStressColor(stress) }}
            >
              {stress}
            </span>
            <span className="text-sm text-text-muted">/10</span>
            <p className="text-xs text-text-muted mt-1">
              {stress <= 3 ? 'Relaxed' : stress <= 6 ? 'Moderate' : 'High stress'}
            </p>
          </div>
        </motion.div>

        {/* Advanced Check */}
        <AdvancedCheck />

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-3.5 rounded-xl font-semibold text-sm relative overflow-hidden
              transition-all duration-300 transform
              ${submitted
                ? 'bg-risk-low text-white'
                : 'bg-gradient-to-r from-indigo-primary to-cyan-primary text-white hover:shadow-lg hover:shadow-indigo-primary/20 hover:scale-[1.02] active:scale-[0.98]'
              }
              ${isSubmitting ? 'opacity-80 cursor-wait' : ''}
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving...
              </span>
            ) : submitted ? (
              <span className="flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Entry Saved!
              </span>
            ) : (
              'Save Entry'
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
