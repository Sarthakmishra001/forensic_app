'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    id: 1,
    date: 'Today, 2:30 PM',
    title: 'Mood improved',
    description: 'Your mood score increased from 5 to 7.2 after the morning session.',
    type: 'positive' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ),
  },
  {
    id: 2,
    date: 'Today, 9:00 AM',
    title: 'New entry logged',
    description: 'You recorded your morning check-in. Mood: 7, Sleep: 7.5h, Stress: 4.',
    type: 'neutral' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
  {
    id: 3,
    date: 'Yesterday, 11:45 PM',
    title: 'Sleep dropped',
    description: 'Sleep duration fell below 6 hours for the second consecutive night.',
    type: 'warning' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    id: 4,
    date: 'Yesterday, 3:15 PM',
    title: 'Stress increased',
    description: 'Stress level spiked to 7/10 — highest in the past week.',
    type: 'negative' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 5,
    date: '2 days ago',
    title: 'AI insight generated',
    description: 'Our AI detected a correlation between your sleep patterns and stress levels.',
    type: 'info' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-1.5 5.5-4 7v2H9v-2c-2.5-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </svg>
    ),
  },
  {
    id: 6,
    date: '3 days ago',
    title: 'Weekly report ready',
    description: 'Your weekly mental health summary is available for download.',
    type: 'neutral' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    id: 7,
    date: '4 days ago',
    title: 'Mood streak: 5 days',
    description: 'You maintained a mood score above 6 for 5 consecutive days. Keep it up!',
    type: 'positive' as const,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const typeStyles = {
  positive: { dot: 'bg-risk-low', bg: 'bg-risk-low/10', border: 'border-risk-low/20', text: 'text-risk-low' },
  negative: { dot: 'bg-risk-high', bg: 'bg-risk-high/10', border: 'border-risk-high/20', text: 'text-risk-high' },
  warning: { dot: 'bg-risk-medium', bg: 'bg-risk-medium/10', border: 'border-risk-medium/20', text: 'text-risk-medium' },
  neutral: { dot: 'bg-text-muted', bg: 'bg-white/[0.03]', border: 'border-glass-border', text: 'text-text-secondary' },
  info: { dot: 'bg-cyan-primary', bg: 'bg-cyan-primary/10', border: 'border-cyan-primary/20', text: 'text-cyan-light' },
};

export default function TimelinePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Timeline</h1>
        <p className="text-sm text-text-muted mt-1">Your mental health journey, event by event</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-glass-border via-glass-border to-transparent" />

        <div className="space-y-1">
          {timelineEvents.map((event, index) => {
            const style = typeStyles[event.type];
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="relative flex gap-5 py-3"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center ${style.text}`}>
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card-static flex-1 p-4 hover:border-glass-border-hover transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-text-primary">{event.title}</h3>
                    <span className="text-[10px] text-text-muted whitespace-nowrap flex-shrink-0">{event.date}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
