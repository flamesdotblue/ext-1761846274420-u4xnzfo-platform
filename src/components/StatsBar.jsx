import React from 'react';
import { Trophy, Wallet, TrendingUp } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, gradient }) => (
  <div className="flex-1 min-w-[120px]">
    <div className={`rounded-xl p-4 border border-white/10 bg-white/5 ${gradient} transition hover:scale-[1.01]`}> 
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-white/70">{label}</div>
          <div className="text-lg font-bold">{value}</div>
        </div>
      </div>
    </div>
  </div>
);

const StatsBar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <Stat icon={Wallet} label="Earnings" value="₹2,450" gradient="shadow-[0_0_24px_-8px_rgba(0,255,136,0.45)]" />
      <Stat icon={Trophy} label="Tournaments Won" value="7" gradient="shadow-[0_0_24px_-8px_rgba(255,0,110,0.45)]" />
      <Stat icon={TrendingUp} label="Rank" value="#128" gradient="shadow-[0_0_24px_-8px_rgba(79,172,254,0.45)]" />
    </div>
  );
};

export default StatsBar;
