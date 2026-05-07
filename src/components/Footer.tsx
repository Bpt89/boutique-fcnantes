import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nantes-dark border-t-2 border-nantes-green mt-16">
      <div className="flex flex-col gap-12 w-full px-4 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-lexend text-2xl font-black text-nantes-yellow uppercase block mb-4">FC NANTES</span>
            <p className="text-white/60 font-inter max-w-sm text-sm">
              Rejoignez l'élite. Recevez les dernières offres et actualités de la boutique officielle du FC Nantes.
            </p>
            <div className="mt-8 flex gap-0">
              <input 
                className="bg-white/5 border border-white/20 text-white p-3 flex-grow focus:outline-none focus:border-nantes-yellow text-sm" 
                placeholder="votre@email.com" 
                type="email"
              />
              <button className="bg-nantes-yellow text-nantes-dark px-6 font-lexend font-black uppercase hover:opacity-90 transition-opacity text-sm flex items-center gap-2">
                REJOINDRE <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-nantes-yellow font-lexend font-bold uppercase mb-6 text-sm">Aide</h4>
            <ul className="flex flex-col gap-3 text-white/60 font-inter text-sm">
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">Contact</a></li>
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">Livraison</a></li>
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">Retours</a></li>
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-nantes-yellow font-lexend font-bold uppercase mb-6 text-sm">Légal</h4>
            <ul className="flex flex-col gap-3 text-white/60 font-inter text-sm">
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">Mentions Légales</a></li>
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">CGV</a></li>
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">Politique Cookies</a></li>
              <li><a className="hover:text-nantes-yellow transition-colors" href="#">Données Personnelles</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[10px] text-white/40 font-lexend font-bold uppercase tracking-widest uppercase">
            © 2024 FC NANTES. BOUTIQUE OFFICIELLE. PRODUIT PAR LES CANARIS.
          </span>
          <div className="flex gap-6">
            <Facebook className="text-white/40 hover:text-nantes-yellow transition-colors w-5 h-5 cursor-pointer" />
            <Instagram className="text-white/40 hover:text-nantes-yellow transition-colors w-5 h-5 cursor-pointer" />
            <Twitter className="text-white/40 hover:text-nantes-yellow transition-colors w-5 h-5 cursor-pointer" />
            <Youtube className="text-white/40 hover:text-nantes-yellow transition-colors w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
