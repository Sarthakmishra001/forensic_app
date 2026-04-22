'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/dashboard/StatCard';
import AIInsightCard from '@/components/dashboard/AIInsightCard';
import RiskIndicator from '@/components/dashboard/RiskIndicator';
import MoodChart from '@/components/charts/MoodChart';
import SleepChart from '@/components/charts/SleepChart';
import StressChart from '@/components/charts/StressChart';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Dashboard() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Page header */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-sm text-text-muted mt-1">Welcome back. Here&apos;s your mental health overview.</p>
      </div>

      {/* Stat cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Mood"
          value="7.2"
          subtitle="/10"
          trend={{ value: 12, isPositive: true }}
          accentColor="from-indigo-primary to-indigo-light"
          glowColor="rgba(99, 102, 241, 0.1)"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          }
        />
        <StatCard
          title="Sleep"
          value="7.3"
          subtitle="hrs"
          trend={{ value: 5, isPositive: true }}
          accentColor="from-cyan-primary to-cyan-light"
          glowColor="rgba(6, 182, 212, 0.1)"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          }
        />
        <StatCard
          title="Stress"
          value="4.6"
          subtitle="/10"
          trend={{ value: 8, isPositive: false }}
          accentColor="from-orange-500 to-orange-400"
          glowColor="rgba(249, 115, 22, 0.1)"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          }
        />
        <StatCard
          title="Risk Score"
          value="Low"
          trend={{ value: 3, isPositive: true }}
          accentColor="from-risk-low to-emerald-400"
          glowColor="rgba(34, 197, 94, 0.1)"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          }
        />
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <MoodChart />
        <SleepChart />
        <StressChart />
      </div>

      {/* Lower section: AI Insight + Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <AIInsightCard />
        </div>
        <div className="lg:col-span-2">
          <RiskIndicator level="low" percentage={18} />
        </div>
      </div>
    </motion.div>
  );
}
