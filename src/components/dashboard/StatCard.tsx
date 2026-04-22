'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: { value: number; isPositive: boolean };
  accentColor?: string;
  glowColor?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  accentColor = 'from-indigo-primary to-indigo-light',
  glowColor = 'rgba(99, 102, 241, 0.1)',
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-5 relative overflow-hidden group cursor-default"
    >
      {/* Subtle glow background */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${glowColor}, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {title}
          </span>
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${accentColor} flex items-center justify-center opacity-80`}>
            {icon}
          </div>
        </div>

        {/* Value */}
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-text-primary tracking-tight">{value}</span>
          {subtitle && (
            <span className="text-sm text-text-muted mb-1">{subtitle}</span>
          )}
        </div>

        {/* Trend */}
        {trend && (
          <div className="flex items-center gap-1.5 mt-3">
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
              trend.isPositive
                ? 'bg-risk-low/10 text-risk-low'
                : 'bg-risk-high/10 text-risk-high'
            }`}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={trend.isPositive ? '' : 'rotate-180'}
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              {Math.abs(trend.value)}%
            </div>
            <span className="text-xs text-text-muted">vs last week</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
