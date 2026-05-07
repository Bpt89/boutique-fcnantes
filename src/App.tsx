import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Collection from './views/Collection';
import ProductDetail from './views/ProductDetail';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'collection' | 'detail';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const content = useMemo(() => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'collection':
        return <Collection onNavigate={setCurrentView} />;
      case 'detail':
        return <ProductDetail onNavigate={setCurrentView} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-nantes-gray">
      <Navbar onNavigate={setCurrentView} />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-16 pt-12 pinstripe-overlay relative overflow-hidden">
        {/* Pitch Texture Background behind content */}
        <div className="absolute inset-0 pitch-texture opacity-30 -z-10 h-full"></div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
