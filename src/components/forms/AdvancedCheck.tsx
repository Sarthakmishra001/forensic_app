'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AdvancedCheck() {
  const [isOpen, setIsOpen] = useState(false);
  const [hopelessness, setHopelessness] = useState(1);
  const [anxiety, setAnxiety] = useState(1);
  const [interestLoss, setInterestLoss] = useState(1);
  const [suicidalThoughts, setSuicidalThoughts] = useState(false);

  const scaleLabels = ['None', 'Mild', 'Moderate', 'Strong', 'Severe'];

  const ScaleButtons = ({
    value,
    onChange,
    label,
  }: {
    value: number;
    onChange: (v: number) => void;
    label: string;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-secondary">{label}</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={`
              flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-200
              ${v === value
                ? 'bg-indigo-primary/20 border-indigo-primary/40 text-indigo-light border'
                : 'bg-white/[0.02] border border-glass-border text-text-muted hover:border-glass-border-hover hover:text-text-secondary'
              }
            `}
          >
            {v}
            <span className="block text-[9px] mt-0.5 opacity-70">{scaleLabels[v - 1]}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="glass-card-static overflow-hidden"
    >
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-primary/10 border border-indigo-primary/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-light">
              <path d="M12 2a7 7 0 0 1 7 7c0 3-1.5 5.5-4 7v2H9v-2c-2.5-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
              <line x1="9" y1="22" x2="15" y2="22" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-sm font-semibold text-text-primary">Advanced Psychological Check</span>
            <p className="text-[11px] text-text-muted mt-0.5">Optional — helps improve AI accuracy</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-muted">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>

      {/* Collapsible content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-5 border-t border-glass-border pt-5">
              {/* Info banner */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-primary/5 border border-indigo-primary/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-light flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <p className="text-xs text-text-secondary leading-relaxed">
                  These questions help our AI provide more personalized insights. All responses remain private and encrypted. Answer honestly — there are no right or wrong answers.
                </p>
              </div>

              {/* Scale inputs */}
              <ScaleButtons
                label="Feelings of hopelessness"
                value={hopelessness}
                onChange={setHopelessness}
              />
              <ScaleButtons
                label="Anxiety levels"
                value={anxiety}
                onChange={setAnxiety}
              />
              <ScaleButtons
                label="Loss of interest in activities"
                value={interestLoss}
                onChange={setInterestLoss}
              />

              {/* Suicidal thoughts toggle */}
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-text-secondary">
                  Have you had thoughts of self-harm?
                </label>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Your safety matters. If you&apos;re in distress, please reach out to a crisis helpline.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setSuicidalThoughts(!suicidalThoughts)}
                    className={`
                      relative w-12 h-6 rounded-full transition-colors duration-200
                      ${suicidalThoughts ? 'bg-risk-high/30 border border-risk-high/40' : 'bg-white/[0.06] border border-glass-border'}
                    `}
                  >
                    <motion.div
                      animate={{ x: suicidalThoughts ? 24 : 2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className={`
                        absolute top-0.5 w-5 h-5 rounded-full
                        ${suicidalThoughts ? 'bg-risk-high' : 'bg-text-muted'}
                      `}
                    />
                  </button>
                  <span className="text-xs text-text-muted">
                    {suicidalThoughts ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>

              {/* Crisis help banner */}
              {suicidalThoughts && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-risk-high/10 border border-risk-high/20"
                >
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-risk-high flex-shrink-0 mt-0.5">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-risk-high mb-1">You are not alone</p>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        If you&apos;re experiencing suicidal thoughts, please reach out immediately. 
                        Call <strong className="text-text-primary">988</strong> (Suicide & Crisis Lifeline) 
                        or text <strong className="text-text-primary">HOME</strong> to 741741.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
