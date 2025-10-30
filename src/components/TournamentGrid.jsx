import React, { useMemo, useState } from 'react';
import { Gamepad2, Users, IndianRupee, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const tournamentsSeed = [
  {
    id: 'bgmi-1',
    game: 'BGMI',
    name: 'BGMI Solo — Bronze Sprint',
    entry: 20,
    prize: 1000,
    participants: 74,
    max: 100,
    mode: 'Solo',
    tier: 'Bronze',
    startIn: '12m',
  },
  {
    id: 'ff-1',
    game: 'Free Fire',
    name: 'Free Fire Duo — Silver Cup',
    entry: 30,
    prize: 2500,
    participants: 56,
    max: 100,
    mode: 'Duo',
    tier: 'Silver',
    startIn: '25m',
  },
  {
    id: 'valo-1',
    game: 'Valorant',
    name: 'Valorant Squad — Gold Gauntlet',
    entry: 50,
    prize: 5000,
    participants: 18,
    max: 32,
    mode: 'Squad',
    tier: 'Gold',
    startIn: '40m',
  },
  {
    id: 'bgmi-2',
    game: 'BGMI',
    name: 'BGMI Duo — Diamond Clash',
    entry: 100,
    prize: 15000,
    participants: 8,
    max: 32,
    mode: 'Duo',
    tier: 'Diamond',
    startIn: '1h 10m',
  },
];

const Badge = ({ children, color }) => (
  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide ${color}`}>{children}</span>
);

const Progress = ({ value, max }) => {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
      <div className="h-2 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe]" style={{ width: `${pct}%` }} />
    </div>
  );
};

const TournamentCard = ({ t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl p-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#4facfe]/60 hover:shadow-[0_0_40px_-12px_rgba(79,172,254,0.6)] transition"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-white/70">{t.game} • {t.mode} • {t.tier}</div>
            <div className="font-bold leading-tight">{t.name}</div>
          </div>
        </div>
        <Badge color="bg-[#ff006e]/20 text-[#ff7cab] border border-[#ff006e]/30">Live Soon</Badge>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 text-white/80"><IndianRupee className="h-4 w-4" /> Entry: <span className="font-semibold text-white">₹{t.entry}</span></div>
        <div className="flex items-center gap-2 text-white/80"><IndianRupee className="h-4 w-4" /> Prize: <span className="font-semibold text-white">₹{t.prize.toLocaleString()}</span></div>
        <div className="flex items-center gap-2 text-white/80"><Users className="h-4 w-4" /> {t.participants}/{t.max} Joined</div>
        <div className="flex items-center gap-2 text-white/80"><Clock className="h-4 w-4" /> Starts in {t.startIn}</div>
      </div>

      <div className="mt-3">
        <Progress value={t.participants} max={t.max} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-white/70">Skill Tier: <span className="font-semibold text-white">{t.tier}</span></div>
        <button className="px-4 py-2 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00ff88] to-[#4facfe] text-black shadow-[0_0_24px_rgba(0,255,136,0.5)] hover:brightness-110 transition">
          Join
        </button>
      </div>
    </motion.div>
  );
};

const FilterPill = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
      active
        ? 'bg-gradient-to-r from-[#f857a6] to-[#ff5858] text-white border-transparent shadow-[0_0_24px_-8px_rgba(255,88,88,0.6)]'
        : 'bg-white/5 text-white/80 border-white/10 hover:border-white/20'
    }`}
  >
    {label}
  </button>
);

const TournamentGrid = () => {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    if (filter === 'All') return tournamentsSeed;
    return tournamentsSeed.filter(t => t.game === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg sm:text-xl font-extrabold" style={{fontFamily:'Orbitron, Rajdhani, Inter'}}>Live & Upcoming</h2>
        <div className="flex items-center gap-2">
          {['All', 'BGMI', 'Free Fire', 'Valorant'].map(g => (
            <FilterPill key={g} active={filter === g} label={g} onClick={() => setFilter(g)} />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(t => (
          <TournamentCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default TournamentGrid;
