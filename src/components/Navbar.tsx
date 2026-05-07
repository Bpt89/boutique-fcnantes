import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'collection' | 'detail') => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="bg-nantes-dark border-b-2 border-nantes-green sticky top-0 z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('home')}
            className="font-lexend text-2xl md:text-3xl font-black tracking-tighter text-nantes-yellow uppercase"
          >
            FC NANTES
          </motion.button>
          
          <nav className="hidden md:flex items-center gap-8 h-full">
            <button 
              onClick={() => onNavigate('collection')}
              className="font-lexend text-sm font-bold text-nantes-yellow border-b-4 border-nantes-yellow pb-1 px-1 transition-all"
            >
              Maillots
            </button>
            {['Entraînement', 'Mode', 'Accessoires', 'Billetterie', 'News'].map((item) => (
              <button 
                key={item}
                className="font-lexend text-sm font-bold text-white/60 hover:text-nantes-yellow transition-colors"
                onClick={() => onNavigate('collection')}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <input 
              className="bg-white/10 border-2 border-nantes-yellow/30 text-white px-4 py-1 text-xs focus:outline-none focus:border-nantes-yellow w-48 uppercase font-lexend placeholder:text-white/40" 
              placeholder="RECHERCHER..." 
              type="text"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-nantes-yellow w-4 h-4" />
          </div>
          
          <motion.button 
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="text-nantes-yellow p-2 rounded"
          >
            <User className="w-5 h-5" />
          </motion.button>
          
          <motion.button 
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="text-nantes-yellow p-2 rounded relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-nantes-green text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-nantes-dark">
              0
            </span>
          </motion.button>

          <button className="md:hidden text-nantes-yellow">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
