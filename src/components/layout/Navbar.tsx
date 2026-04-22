'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="glass-navbar sticky top-0 z-20 px-6 py-4 lg:pl-[284px]"
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Page title - visible on mobile */}
        <div className="flex items-center gap-3 lg:hidden ml-12">
          <h1 className="text-lg font-bold text-gradient-indigo">PsyTrack AI</h1>
        </div>

        {/* Search / spacer for desktop */}
        <div className="hidden lg:flex items-center gap-2 flex-1">
          <div className="relative max-w-sm w-full">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search entries..."
              className="w-full pl-10 pr-4 py-2 bg-white/[0.03] border border-glass-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-indigo-primary/30 transition-colors"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Risk Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-risk-low/10 border border-risk-low/20"
          >
            <div className="w-2 h-2 rounded-full bg-risk-low" />
            <span className="text-xs font-semibold text-risk-low">Low Risk</span>
          </motion.div>

          {/* Notification bell */}
          <button className="relative p-2 rounded-lg hover:bg-white/[0.03] transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-text-secondary"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-primary rounded-full" />
          </button>

          {/* User avatar */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-primary to-cyan-primary flex items-center justify-center text-xs font-bold text-white">
              U
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-text-primary leading-none">User</p>
              <p className="text-[11px] text-text-muted mt-0.5">user@psytrack.ai</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
