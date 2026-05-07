import { ShoppingCart, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductDetailProps {
  onNavigate: (view: 'home' | 'collection' | 'detail') => void;
}

export default function ProductDetail({ onNavigate }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="flex flex-col gap-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] font-lexend font-bold text-nantes-dark/50 uppercase tracking-widest">
        <button onClick={() => onNavigate('home')} className="hover:text-nantes-green">Boutique</button>
        <ChevronRight className="w-3 h-3" />
        <button onClick={() => onNavigate('collection')} className="hover:text-nantes-green">Maillots</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-nantes-dark">Maillot Domicile Pro 25/26</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border-4 border-nantes-dark bg-white relative overflow-hidden group shadow-[12px_12px_0px_0px_rgba(0,109,51,0.2)]"
          >
            <img 
              alt="Maillot Domicile" 
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhm41qU7Siw8d7nx7VJY6a1mg4Cm-IpFyUwPvLwZWmCMctUVPj76drL_VM9B-ItdglpQ9aF91j0WM1miz8TFWCzjoSJeoX7--cwgKetEW8uibzMz0tQ_voW7kgkPyGS4nEHPqY3M8vHFvfFul4nuOlcQmNZXKxIHbjl7Sx5IYPaA4FRXdXn34GGX3iZ_YYA0LiSx17fvuZJeU-TgQgMgDH0yGNh9r3YOgMGhfHUm4s6UF4OoYq1csrvwxMqcZumSuDErFQeMIwaVik" 
            />
            <div className="absolute top-6 left-6 bg-nantes-green text-nantes-yellow px-6 py-2 font-lexend font-black uppercase text-sm italic tracking-widest">Nouveau</div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-nantes-dark bg-white grayscale hover:grayscale-0 transition-all p-4 cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida/ADBb0ugbftWxr8HRt785m5knyh33IyvJ8nhJ4IyIU4QpYVqLx7_3W-_jqeR_LXnd3FPInSN52xAzqnWjXWpCsrm8RC0xP--GNp_Sknmi2vMKzf9JJZVx7wHmc8XfZLAa6wpeitICWh0nE7ZwOHuAPpduM4HrwA-lNOMfWoDNBv0MiHqIIeC2a988zPUTeCpT2mWgtvdV7QyTxxi_Gt3K4PiTXiFdcDpL1zQPjhjaIACoI3GGt6-IAjWcT3VZ7y7mjHAYAIXn6fjZe-_z-g" className="w-full h-auto" />
            </div>
            <div className="border-2 border-nantes-dark bg-white grayscale hover:grayscale-0 transition-all p-4 cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida/ADBb0uhOTDnfJnvqLmj9skFEpHfSvCvfUPUq21-ceyQMH5rzlfgoYDyNYVtsGIpL4ygw9rEJylshruk3PiRYWYYuWVpz3wEJFHe7-kDVTlN9YvXJpWZHZZ2rD6nhUksPifmG2M6P1kulPcGGeAhlu1E7U3lF22hqeTUn5whOc-_AwgBwByxng39q-E5WiPKKHhjdfFet1jH_Mw_leSYnl-HRxmXQDiSSUPpb2YPmSKPN8T9cbqfjG5BaGVU2-auUa8TnSP7KFZHx-P6-Cg" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl font-lexend font-black italic text-nantes-dark leading-[0.85] uppercase">
              Maillot Domicile<br />Pro 25/26
            </h1>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-lexend font-bold text-nantes-green">80,00 €</span>
              <span className="text-xl font-inter text-nantes-dark/30 line-through">95,00 €</span>
            </div>
          </header>

          {/* Size Selector */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-lexend font-bold uppercase text-sm tracking-wide">Choisir la taille</span>
              <button className="text-[10px] uppercase font-bold text-nantes-dark/50 hover:text-nantes-green underline transition-colors">Guide des tailles</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border-4 py-4 font-lexend font-black text-sm transition-all active:scale-95 ${selectedSize === size ? 'border-nantes-dark bg-nantes-yellow text-nantes-dark' : 'border-nantes-gray bg-white text-nantes-dark/40 hover:border-nantes-dark'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Personalization */}
          <div className="bg-nantes-gray p-8 border-l-8 border-nantes-green flex flex-col gap-6">
            <h3 className="font-lexend font-bold uppercase text-sm">Flocage Personnalisé (+15€)</h3>
            <div className="flex flex-col gap-3">
              <input 
                className="w-full bg-white border-2 border-nantes-dark p-4 font-lexend font-bold text-sm uppercase placeholder:text-nantes-dark/20 focus:outline-none focus:border-nantes-yellow" 
                placeholder="NOM DU JOUEUR OU VOTRE NOM" 
                type="text" 
              />
              <input 
                className="w-full bg-white border-2 border-nantes-dark p-4 font-lexend font-bold text-sm uppercase placeholder:text-nantes-dark/20 focus:outline-none focus:border-nantes-yellow" 
                placeholder="NUMÉRO" 
                type="number" 
              />
            </div>
          </div>

          {/* CTA */}
          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-nantes-yellow text-nantes-dark py-6 font-lexend font-black text-2xl uppercase italic tracking-widest custom-shadow-green hover:shadow-none transition-all"
          >
            Ajouter au panier
          </motion.button>

          {/* Shipping Benefits */}
          <div className="grid grid-cols-2 gap-8 py-8 border-y-2 border-nantes-gray">
            <div className="flex items-center gap-4">
              <Truck className="w-8 h-8 text-nantes-green" />
              <div>
                <p className="font-lexend font-bold uppercase text-[10px] leading-tight">Livraison 48h/72h</p>
                <p className="text-[10px] text-nantes-dark/50">Rapide & Sécurisée</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RotateCcw className="w-8 h-8 text-nantes-green" />
              <div>
                <p className="font-lexend font-bold uppercase text-[10px] leading-tight">Retours Gratuits</p>
                <p className="text-[10px] text-nantes-dark/50">Sous 14 jours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 py-16 border-t-2 border-nantes-gray">
        <div className="md:col-span-5 flex flex-col gap-6">
          <h2 className="text-4xl font-lexend font-black italic uppercase border-b-8 border-nantes-yellow inline-block self-start pb-2">L'héritage</h2>
          <p className="font-inter text-lg text-nantes-dark/70 leading-relaxed">
            Le nouveau maillot domicile du FC Nantes pour la saison 25/26 incarne l'esprit indomptable des Canaris. Entre tradition et innovation, il arbore les iconiques bandes verticales réinterprétées avec une texture performance moderne. 
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-nantes-dark p-10 text-white flex flex-col gap-4">
            <h4 className="font-lexend font-bold uppercase text-nantes-yellow text-xs tracking-widest">Technologie</h4>
            <p className="font-inter text-sm opacity-70">Aero-Fresh 2.0 pour une respirabilité optimale même lors des matchs les plus intenses à la Beaujoire.</p>
          </div>
          <div className="bg-nantes-yellow p-10 text-nantes-dark flex flex-col gap-4">
            <h4 className="font-lexend font-bold uppercase text-nantes-green text-xs tracking-widest">Détails</h4>
            <p className="font-inter text-sm text-nantes-dark/80">Blason du club brodé en haute définition. Devise "Honneur et Fidélité" inscrite à l'intérieur du col.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
