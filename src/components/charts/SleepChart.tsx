'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', hours: 7.5 },
  { day: 'Tue', hours: 6.0 },
  { day: 'Wed', hours: 8.0 },
  { day: 'Thu', hours: 5.5 },
  { day: 'Fri', hours: 7.0 },
  { day: 'Sat', hours: 8.5 },
  { day: 'Sun', hours: 9.0 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card-static px-3 py-2 text-xs">
        <p className="text-text-muted">{label}</p>
        <p className="text-cyan-light font-semibold">Sleep: {payload[0].value}h</p>
      </div>
    );
  }
  return null;
};

export default function SleepChart() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Sleep Trend</h3>
          <p className="text-xs text-text-muted mt-0.5">Last 7 days</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-primary/10 border border-cyan-primary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-light" />
          <span className="text-[10px] font-semibold text-cyan-light">Sleep</span>
        </div>
      </div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 12]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 11 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="hours"
              fill="url(#sleepGradient)"
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
