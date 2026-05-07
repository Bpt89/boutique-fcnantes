import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onNavigate: (view: 'home' | 'collection' | 'detail') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] border-4 border-nantes-dark bg-nantes-yellow overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,109,51,1)]">
        <div className="absolute inset-0 pinstripe-overlay opacity-20"></div>
        <div className="absolute inset-0 flex items-center px-8 md:px-16 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <div className="bg-nantes-dark text-nantes-yellow text-xs font-lexend font-bold px-4 py-2 self-start uppercase tracking-widest">
              Nouvelle Collection 25/26
            </div>
            <h1 className="text-4xl md:text-7xl font-lexend font-black italic text-nantes-dark leading-[0.9] uppercase">
              L'héritage<br />des canaris
            </h1>
            <p className="text-nantes-dark/80 font-inter text-lg max-w-lg">
              Découvrez le nouveau maillot domicile. Une fusion entre tradition et modernité pour porter fièrement la Maison Jaune.
            </p>
            <motion.button 
              whileHover={{ x: 10 }}
              onClick={() => onNavigate('detail')}
              className="bg-nantes-dark text-nantes-yellow px-8 py-4 font-lexend font-black text-xl uppercase italic flex items-center gap-4 self-start shadow-[6px_6px_0px_0px_white] hover:shadow-none transition-all"
            >
              VOIR LE PRODUIT <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 text-[12vw] font-lexend font-black text-nantes-dark/5 whitespace-nowrap select-none pointer-events-none">
          FC NANTES • FC NANTES • FC NANTES
        </div>
      </section>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative h-[400px] border-4 border-nantes-dark group overflow-hidden cursor-pointer"
          onClick={() => onNavigate('collection')}
        >
          <img 
            alt="Equipementier" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ujKYswwBt3FaO-WU0S6CN0QZtjn4ClY0QCRXxLLvtkVRjVo4JBb3reGj9xFbENhi0kbTbrCkPa3WAD62PZCYNKDz3rjwdg62bRS5HZWN1Rh5NO8FqZCu0IRhvscSdBxf6ZRNRcAxV4dNXFR0WOPSjij-7akSUkcEBWtg-uG37x6LHPQHkWJKp8zE3OBNuVLXVFfbFUouZQrWIZVRj_yFkc5WvInWyOq59qRKo8vyGF5cNu-b4Sv8qhKHwkfs2PBvJqwzPPUqVqS-A" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nantes-dark to-transparent opacity-80 group-hover:opacity-60"></div>
          <div className="absolute bottom-8 left-8 flex flex-col gap-4">
            <h2 className="text-3xl font-lexend font-black text-white uppercase italic">Équipementier</h2>
            <button className="bg-nantes-yellow text-nantes-dark px-6 py-2 font-lexend font-bold uppercase text-sm self-start">DÉCOUVRIR</button>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative h-[400px] border-4 border-nantes-dark group overflow-hidden cursor-pointer"
          onClick={() => onNavigate('collection')}
        >
          <img 
            alt="Mode" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhm41qU7Siw8d7nx7VJY6a1mg4Cm-IpFyUwPvLwZWmCMctUVPj76drL_VM9B-ItdglpQ9aF91j0WM1miz8TFWCzjoSJeoX7--cwgKetEW8uibzMz0tQ_voW7kgkPyGS4nEHPqY3M8vHFvfFul4nuOlcQmNZXKxIHbjl7Sx5IYPaA4FRXdXn34GGX3iZ_YYA0LiSx17fvuZJeU-TgQgMgDH0yGNh9r3YOgMGhfHUm4s6UF4OoYq1csrvwxMqcZumSuDErFQeMIwaVik" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nantes-green to-transparent opacity-90 group-hover:opacity-70 text-nantes-yellow"></div>
          <div className="absolute bottom-8 left-8 flex flex-col gap-4">
            <h2 className="text-3xl font-lexend font-black text-white uppercase italic">Idées Cadeaux</h2>
            <button className="bg-nantes-yellow text-nantes-dark px-6 py-2 font-lexend font-bold uppercase text-sm self-start">DÉCOUVRIR</button>
          </div>
        </motion.div>
      </div>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-lexend font-black text-nantes-dark uppercase italic border-l-8 border-nantes-green pl-6">
            Nouveautés
          </h2>
          <button 
            onClick={() => onNavigate('collection')}
            className="text-nantes-dark/60 font-lexend font-bold text-sm uppercase hover:text-nantes-green transition-colors"
          >
            Voir tout
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            id="1"
            name="Maillot Domicile 25/26"
            category="Match"
            price={80}
            originalPrice={95}
            isNew={true}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhm41qU7Siw8d7nx7VJY6a1mg4Cm-IpFyUwPvLwZWmCMctUVPj76drL_VM9B-ItdglpQ9aF91j0WM1miz8TFWCzjoSJeoX7--cwgKetEW8uibzMz0tQ_voW7kgkPyGS4nEHPqY3M8vHFvfFul4nuOlcQmNZXKxIHbjl7Sx5IYPaA4FRXdXn34GGX3iZ_YYA0LiSx17fvuZJeU-TgQgMgDH0yGNh9r3YOgMGhfHUm4s6UF4OoYq1csrvwxMqcZumSuDErFQeMIwaVik"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="2"
            name="Jogging Entraînement"
            category="Entraînement"
            price={55}
            image="https://lh3.googleusercontent.com/aida/ADBb0ugbftWxr8HRt785m5knyh33IyvJ8nhJ4IyIU4QpYVqLx7_3W-_jqeR_LXnd3FPInSN52xAzqnWjXWpCsrm8RC0xP--GNp_Sknmi2vMKzf9JJZVx7wHmc8XfZLAa6wpeitICWh0nE7ZwOHuAPpduM4HrwA-lNOMfWoDNBv0MiHqIIeC2a988zPUTeCpT2mWgtvdV7QyTxxi_Gt3K4PiTXiFdcDpL1zQPjhjaIACoI3GGt6-IAjWcT3VZ7y7mjHAYAIXn6fjZe-_z-g"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="3"
            name="Casquette Classic"
            category="Lifestyle"
            price={29.99}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhOTDnfJnvqLmj9skFEpHfSvCvfUPUq21-ceyQMH5rzlfgoYDyNYVtsGIpL4ygw9rEJylshruk3PiRYWYYuWVpz3wEJFHe7-kDVTlN9YvXJpWZHZZ2rD6nhUksPifmG2M6P1kulPcGGeAhlu1E7U3lF22hqeTUn5whOc-_AwgBwByxng39q-E5WiPKKHhjdfFet1jH_Mw_leSYnl-HRxmXQDiSSUPpb2YPmSKPN8T9cbqfjG5BaGVU2-auUa8TnSP7KFZHx-P6-Cg"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="4"
            name="Ballon Officiel"
            category="Accessoires"
            price={35}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhOTDnfJnvqLmj9skFEpHfSvCvfUPUq21-ceyQMH5rzlfgoYDyNYVtsGIpL4ygw9rEJylshruk3PiRYWYYuWVpz3wEJFHe7-kDVTlN9YvXJpWZHZZ2rD6nhUksPifmG2M6P1kulPcGGeAhlu1E7U3lF22hqeTUn5whOc-_AwgBwByxng39q-E5WiPKKHhjdfFet1jH_Mw_leSYnl-HRxmXQDiSSUPpb2YPmSKPN8T9cbqfjG5BaGVU2-auUa8TnSP7KFZHx-P6-Cg"
            onSelect={() => onNavigate('detail')}
          />
        </div>
      </section>

      {/* Membership Banner */}
      <section className="bg-nantes-dark text-white p-12 text-center relative overflow-hidden custom-shadow shadow-[0px_0px_20px_rgba(0,109,51,0.5)]">
        <div className="absolute inset-0 pitch-texture opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="font-lexend font-bold text-nantes-yellow tracking-[0.3em] uppercase text-xs">Offre Exclusive</span>
          <h2 className="text-4xl md:text-5xl font-lexend font-black italic uppercase leading-none">
            -10% SUR VOTRE PREMIÈRE COMMANDE
          </h2>
          <p className="text-white/60 font-inter max-w-xl">
            Rejoignez le club de fidélité FC Nantes & bénéficiez d'avantages exclusifs, d'accès prioritaires aux nouveaux produits et bien plus encore.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-nantes-yellow text-nantes-dark px-12 py-4 font-lexend font-black text-xl uppercase italic shadow-[6px_6px_0px_0px_#006d33]"
          >
            REJOINDRE LE CLUB
          </motion.button>
        </div>
      </section>
    </div>
  );
}
