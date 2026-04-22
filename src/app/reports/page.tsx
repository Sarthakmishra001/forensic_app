'use client';

import { motion } from 'framer-motion';
import MoodChart from '@/components/charts/MoodChart';
import SleepChart from '@/components/charts/SleepChart';
import StressChart from '@/components/charts/StressChart';

export default function ReportsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Page header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Reports</h1>
          <p className="text-sm text-text-muted mt-1">Comprehensive analysis of your mental health data</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-primary to-cyan-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-primary/20 transition-shadow"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Report
        </motion.button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-primary/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-light">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Avg Mood</span>
          </div>
          <p className="text-3xl font-bold text-text-primary">6.9<span className="text-base font-normal text-text-muted">/10</span></p>
          <p className="text-xs text-risk-low mt-2">↑ 8% from last month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-primary/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-light">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Avg Sleep</span>
          </div>
          <p className="text-3xl font-bold text-text-primary">7.3<span className="text-base font-normal text-text-muted"> hrs</span></p>
          <p className="text-xs text-risk-low mt-2">↑ 5% from last month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-400">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Avg Stress</span>
          </div>
          <p className="text-3xl font-bold text-text-primary">4.6<span className="text-base font-normal text-text-muted">/10</span></p>
          <p className="text-xs text-risk-high mt-2">↑ 12% from last month</p>
        </motion.div>
      </div>

      {/* Graph previews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <MoodChart />
        <SleepChart />
        <StressChart />
      </div>

      {/* Bottom section: Risk Summary + AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Risk Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-4">Risk Assessment Summary</h3>
          <div className="space-y-4">
            {[
              { label: 'Depression Risk', value: 15, color: '#22C55E', level: 'Low' },
              { label: 'Anxiety Risk', value: 28, color: '#EAB308', level: 'Low-Medium' },
              { label: 'Burnout Risk', value: 42, color: '#EAB308', level: 'Medium' },
              { label: 'Overall Risk', value: 18, color: '#22C55E', level: 'Low' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-text-secondary">{item.label}</span>
                  <span className="text-xs font-semibold" style={{ color: item.color }}>
                    {item.value}% — {item.level}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Insights Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6"
          style={{
            borderColor: 'rgba(6, 182, 212, 0.15)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-primary to-indigo-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2a7 7 0 0 1 7 7c0 3-1.5 5.5-4 7v2H9v-2c-2.5-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
                <line x1="9" y1="22" x2="15" y2="22" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-text-primary">AI Insights Summary</h3>
          </div>

          <div className="space-y-3">
            {[
              { text: 'Sleep quality correlates strongly with next-day mood scores (+0.78 coefficient).', tag: 'Pattern' },
              { text: 'Stress peaks consistently on Thursdays — consider mid-week stress management.', tag: 'Trend' },
              { text: 'Morning entries show 15% higher mood scores than evening entries.', tag: 'Insight' },
              { text: 'Your 5-day mood streak is your longest in the past month.', tag: 'Achievement' },
            ].map((insight, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-glass-border">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-light bg-cyan-primary/10 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                  {insight.tag}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">{insight.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
