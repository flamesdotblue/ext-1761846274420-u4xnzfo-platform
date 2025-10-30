import { Home, Gamepad2, Plus, Trophy, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 md:hidden border-t border-white/10 backdrop-blur-xl bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="grid grid-cols-5 items-center">
          <NavItem icon={<Home className="h-5 w-5" />} label="Home" active />
          <NavItem icon={<Gamepad2 className="h-5 w-5" />} label="Play" />
          <div className="grid place-items-center">
            <button className="-mt-6 h-12 w-12 rounded-2xl grid place-items-center text-black bg-gradient-to-r from-[#f857a6] to-[#ff5858] shadow-[0_10px_30px_-10px_#ff5858]">
              <Plus className="h-6 w-6" />
            </button>
          </div>
          <NavItem icon={<Trophy className="h-5 w-5" />} label="Ranks" />
          <NavItem icon={<User className="h-5 w-5" />} label="Profile" />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button className={`flex flex-col items-center gap-1 py-1 text-[11px] ${
      active ? 'text-white' : 'text-white/70'
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
