'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type RiskLevel = 'low' | 'medium' | 'high';

interface RiskIndicatorProps {
  level?: RiskLevel;
  percentage?: number;
  size?: number;
}

const riskConfig = {
  low: {
    color: '#22C55E',
    label: 'Low Risk',
    description: 'No immediate concerns detected',
    bgOpacity: 'bg-risk-low/10',
    textColor: 'text-risk-low',
    borderColor: 'border-risk-low/20',
  },
  medium: {
    color: '#EAB308',
    label: 'Medium Risk',
    description: 'Some indicators need attention',
    bgOpacity: 'bg-risk-medium/10',
    textColor: 'text-risk-medium',
    borderColor: 'border-risk-medium/20',
  },
  high: {
    color: '#EF4444',
    label: 'High Risk',
    description: 'Immediate attention recommended',
    bgOpacity: 'bg-risk-high/10',
    textColor: 'text-risk-high',
    borderColor: 'border-risk-high/20',
  },
};

export default function RiskIndicator({
  level = 'low',
  percentage = 18,
  size = 120,
}: RiskIndicatorProps) {
  const config = riskConfig[level];
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference - (percentage / 100) * circumference);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage, circumference]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`glass-card p-6 ${level === 'high' ? 'pulse-high-risk' : ''}`}
    >
      <div className="flex items-center gap-6">
        {/* Circular progress */}
        <div className="relative flex-shrink-0">
          <svg width={size} height={size} className="-rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="6"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={config.color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: 'stroke-dashoffset 1.5s ease-out',
                filter: `drop-shadow(0 0 8px ${config.color}50)`,
              }}
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: config.color }}>
              {percentage}%
            </span>
            <span className="text-[10px] text-text-muted uppercase tracking-wider">Risk</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bgOpacity} border ${config.borderColor} mb-3`}>
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: config.color }}
            />
            <span className={`text-xs font-semibold ${config.textColor}`}>
              {config.label}
            </span>
          </div>
          <p className="text-sm text-text-secondary mb-2">{config.description}</p>
          <p className="text-xs text-text-muted">
            Based on your last 7 entries
          </p>
        </div>
      </div>
    </motion.div>
  );
}
