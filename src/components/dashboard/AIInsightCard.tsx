'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AIInsightCardProps {
  message?: string;
}

export default function AIInsightCard({
  message = "Your stress levels have been gradually increasing over the past 3 days. Combined with a slight decrease in sleep quality, this may indicate early signs of burnout. Consider taking short breaks during the day and maintaining a consistent sleep schedule. Your mood resilience is still strong — keep it up!"
}: AIInsightCardProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass-card relative overflow-hidden glow-border-cyan"
      style={{
        borderColor: 'rgba(6, 182, 212, 0.2)',
        boxShadow: '0 0 30px rgba(6, 182, 212, 0.06), 0 0 60px rgba(6, 182, 212, 0.03)',
      }}
    >
      {/* Top gradient bar */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-primary to-transparent" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-primary to-indigo-primary flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a7 7 0 0 1 7 7c0 3-1.5 5.5-4 7v2H9v-2c-2.5-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
              <line x1="9" y1="22" x2="15" y2="22" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">AI Insight</h3>
            <p className="text-[11px] text-text-muted">Generated just now</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-primary/10 border border-cyan-primary/20">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-primary animate-pulse" />
            <span className="text-[10px] font-semibold text-cyan-light uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Chat bubble */}
        <div className="bg-white/[0.02] rounded-2xl rounded-tl-sm p-4 border border-glass-border">
          <p className={`text-sm text-text-secondary leading-relaxed ${isTyping ? 'typing-cursor' : ''}`}>
            {displayedText}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4">
          <button className="text-xs text-text-muted hover:text-cyan-light transition-colors flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View details
          </button>
          <button className="text-xs text-text-muted hover:text-cyan-light transition-colors flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Ask AI
          </button>
        </div>
      </div>
    </motion.div>
  );
}
