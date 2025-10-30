import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0b0b12]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-[0_0_20px_rgba(102,126,234,0.6)]" />
          <span className="text-xl sm:text-2xl font-extrabold tracking-wider" style={{fontFamily:'Orbitron, Rajdhani, Inter'}}>
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">Grind</span>
            <span className="bg-gradient-to-r from-[#f857a6] to-[#ff5858] bg-clip-text text-transparent">Arena</span>
          </span>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              aria-label="Search tournaments"
              placeholder="Search tournaments, games, players"
              className="w-full h-10 pl-10 pr-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-[#4facfe] focus:ring-2 focus:ring-[#00f2fe]/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Notifications" className="relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-[#ff006e] text-[10px] leading-5 font-bold text-white text-center">3</span>
          </button>
          <button className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#4facfe] shadow-[0_0_24px_rgba(0,255,136,0.5)] flex items-center justify-center border border-white/20">
            <User className="h-5 w-5 text-black/80" />
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
          <input
            aria-label="Search tournaments"
            placeholder="Search tournaments, games, players"
            className="w-full h-10 pl-10 pr-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-[#4facfe] focus:ring-2 focus:ring-[#00f2fe]/20"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
