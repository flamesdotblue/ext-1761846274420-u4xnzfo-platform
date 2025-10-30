import React from 'react';
import Header from './components/Header';
import HeroSpline from './components/HeroSpline';
import StatsBar from './components/StatsBar';
import TournamentGrid from './components/TournamentGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white font-sans antialiased">
      <Header />

      <main className="relative">
        <section className="relative w-full">
          <HeroSpline />
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-10">
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 shadow-[0_0_40px_-10px_rgba(0,255,136,0.25)]">
            <StatsBar />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 pb-24">
          <TournamentGrid />
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} GrindArena • Built for India’s daily esports
      </footer>
    </div>
  );
}

export default App;
