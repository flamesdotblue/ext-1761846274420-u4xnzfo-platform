import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const HeroSpline = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[480px]">
      <Spline
        scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl rounded-2xl p-4 sm:p-6 bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_0_50px_-10px_rgba(79,172,254,0.5)]"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-white/80">India's Daily Esports</div>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight" style={{fontFamily:'Orbitron, Rajdhani, Inter'}}>
              Play Tournaments. Win Cash. Climb the Leaderboard.
            </h1>
            <p className="mt-2 text-white/80 text-sm sm:text-base">
              Join live tournaments across BGMI, Free Fire, Valorant. Secure UPI withdrawals. Anti-cheat protected.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-[0_0_30px_-6px_rgba(102,126,234,0.7)] hover:from-[#6f89ff] hover:to-[#8a56cc] transition">
                <Rocket className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                Play Now
              </button>
              <div className="text-xs sm:text-sm text-white/70">
                Next starts in <span className="font-bold text-white">05:21</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSpline;
