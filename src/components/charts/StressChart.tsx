'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', stress: 3 },
  { day: 'Tue', stress: 5 },
  { day: 'Wed', stress: 4 },
  { day: 'Thu', stress: 7 },
  { day: 'Fri', stress: 6 },
  { day: 'Sat', stress: 4 },
  { day: 'Sun', stress: 3 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card-static px-3 py-2 text-xs">
        <p className="text-text-muted">{label}</p>
        <p className="font-semibold" style={{ color: '#F97316' }}>Stress: {payload[0].value}/10</p>
      </div>
    );
  }
  return null;
};

export default function StressChart() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Stress Trend</h3>
          <p className="text-xs text-text-muted mt-0.5">Last 7 days</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span className="text-[10px] font-semibold text-orange-400">Stress</span>
        </div>
      </div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="stressStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#EF4444" />
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
              domain={[0, 10]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 11 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="stress"
              stroke="url(#stressStroke)"
              strokeWidth={2.5}
              dot={{ fill: '#F97316', strokeWidth: 0, r: 4 }}
              activeDot={{ fill: '#F97316', strokeWidth: 2, stroke: '#0F172A', r: 6 }}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
