import { Info } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';

interface CollectionProps {
  onNavigate: (view: 'home' | 'collection' | 'detail') => void;
}

export default function Collection({ onNavigate }: CollectionProps) {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <nav className="flex items-center gap-2 text-[10px] font-lexend font-bold text-nantes-dark/50 uppercase tracking-widest">
          <button onClick={() => onNavigate('home')} className="hover:text-nantes-green">Boutique Officielle</button>
          <span>/</span>
          <span className="text-nantes-dark">Maillots</span>
        </nav>
        <h1 className="text-5xl font-lexend font-black italic text-nantes-dark uppercase leading-[0.9]">
          Collections<br />officielles
        </h1>
        <p className="text-nantes-dark/60 max-w-xl font-inter">
          Portez les couleurs de la Maison Jaune. Découvrez les équipements portés par les Canaris pour la saison 2024-2025.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="md:col-span-3 flex flex-col gap-8">
          <div className="border-2 border-nantes-dark p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-lexend font-bold uppercase mb-6 border-b-2 border-nantes-green pb-2 text-sm">Taille</h3>
            <div className="grid grid-cols-3 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', '2XL'].map((size) => (
                <button 
                  key={size}
                  className={`border-2 py-2 font-lexend font-bold text-xs hover:border-nantes-yellow transition-all ${size === 'S' ? 'border-nantes-dark bg-nantes-yellow' : 'border-nantes-gray bg-white'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="border-2 border-nantes-dark p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-lexend font-bold uppercase mb-6 border-b-2 border-nantes-green pb-2 text-sm">Prix</h3>
            <div className="flex flex-col gap-4">
              {['0€ - 50€', '50€ - 80€', '80€ - 120€'].map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 border-2 border-nantes-dark flex items-center justify-center ${range === '80€ - 120€' ? 'bg-nantes-green' : 'bg-white'}`}>
                    {range === '80€ - 120€' && <div className="w-2 h-2 bg-nantes-yellow"></div>}
                  </div>
                  <span className="font-lexend font-bold text-xs uppercase group-hover:text-nantes-green transition-colors">{range}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-nantes-dark p-6 text-white relative overflow-hidden pitch-texture custom-shadow">
            <Info className="w-6 h-6 text-nantes-yellow mb-4" />
            <p className="font-lexend font-bold uppercase text-xs mb-1">Flocage Officiel</p>
            <p className="text-[10px] text-white/60 font-inter">
              Personnalisez votre maillot avec le nom de vos joueurs préférés ou le vôtre.
            </p>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            id="1"
            name="Maillot Domicile Pro"
            category="Saison 2024-2025"
            price={95}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhm41qU7Siw8d7nx7VJY6a1mg4Cm-IpFyUwPvLwZWmCMctUVPj76drL_VM9B-ItdglpQ9aF91j0WM1miz8TFWCzjoSJeoX7--cwgKetEW8uibzMz0tQ_voW7kgkPyGS4nEHPqY3M8vHFvfFul4nuOlcQmNZXKxIHbjl7Sx5IYPaA4FRXdXn34GGX3iZ_YYA0LiSx17fvuZJeU-TgQgMgDH0yGNh9r3YOgMGhfHUm4s6UF4OoYq1csrvwxMqcZumSuDErFQeMIwaVik"
            isNew={true}
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="2"
            name="Maillot Extérieur"
            category="Saison 2024-2025"
            price={76}
            originalPrice={95}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhOTDnfJnvqLmj9skFEpHfSvCvfUPUq21-ceyQMH5rzlfgoYDyNYVtsGIpL4ygw9rEJylshruk3PiRYWYYuWVpz3wEJFHe7-kDVTlN9YvXJpWZHZZ2rD6nhUksPifmG2M6P1kulPcGGeAhlu1E7U3lF22hqeTUn5whOc-_AwgBwByxng39q-E5WiPKKHhjdfFet1jH_Mw_leSYnl-HRxmXQDiSSUPpb2YPmSKPN8T9cbqfjG5BaGVU2-auUa8TnSP7KFZHx-P6-Cg"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="3"
            name="Maillot Gardien"
            category="Saison 2024-2025"
            price={105}
            image="https://lh3.googleusercontent.com/aida/ADBb0ugbftWxr8HRt785m5knyh33IyvJ8nhJ4IyIU4QpYVqLx7_3W-_jqeR_LXnd3FPInSN52xAzqnWjXWpCsrm8RC0xP--GNp_Sknmi2vMKzf9JJZVx7wHmc8XfZLAa6wpeitICWh0nE7ZwOHuAPpduM4HrwA-lNOMfWoDNBv0MiHqIIeC2a988zPUTeCpT2mWgtvdV7QyTxxi_Gt3K4PiTXiFdcDpL1zQPjhjaIACoI3GGt6-IAjWcT3VZ7y7mjHAYAIXn6fjZe-_z-g"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="4"
            name="Maillot Entraînement"
            category="Saison 2024-2025"
            price={55}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhm41qU7Siw8d7nx7VJY6a1mg4Cm-IpFyUwPvLwZWmCMctUVPj76drL_VM9B-ItdglpQ9aF91j0WM1miz8TFWCzjoSJeoX7--cwgKetEW8uibzMz0tQ_voW7kgkPyGS4nEHPqY3M8vHFvfFul4nuOlcQmNZXKxIHbjl7Sx5IYPaA4FRXdXn34GGX3iZ_YYA0LiSx17fvuZJeU-TgQgMgDH0yGNh9r3YOgMGhfHUm4s6UF4OoYq1csrvwxMqcZumSuDErFQeMIwaVik"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="5"
            name="Short Domicile"
            category="Saison 2024-2025"
            price={40}
            image="https://lh3.googleusercontent.com/aida/ADBb0ugbftWxr8HRt785m5knyh33IyvJ8nhJ4IyIU4QpYVqLx7_3W-_jqeR_LXnd3FPInSN52xAzqnWjXWpCsrm8RC0xP--GNp_Sknmi2vMKzf9JJZVx7wHmc8XfZLAa6wpeitICWh0nE7ZwOHuAPpduM4HrwA-lNOMfWoDNBv0MiHqIIeC2a988zPUTeCpT2mWgtvdV7QyTxxi_Gt3K4PiTXiFdcDpL1zQPjhjaIACoI3GGt6-IAjWcT3VZ7y7mjHAYAIXn6fjZe-_z-g"
            onSelect={() => onNavigate('detail')}
          />
          <ProductCard 
            id="6"
            name="Chaussettes Home"
            category="Saison 2024-2025"
            price={18}
            image="https://lh3.googleusercontent.com/aida/ADBb0uhOTDnfJnvqLmj9skFEpHfSvCvfUPUq21-ceyQMH5rzlfgoYDyNYVtsGIpL4ygw9rEJylshruk3PiRYWYYuWVpz3wEJFHe7-kDVTlN9YvXJpWZHZZ2rD6nhUksPifmG2M6P1kulPcGGeAhlu1E7U3lF22hqeTUn5whOc-_AwgBwByxng39q-E5WiPKKHhjdfFet1jH_Mw_leSYnl-HRxmXQDiSSUPpb2YPmSKPN8T9cbqfjG5BaGVU2-auUa8TnSP7KFZHx-P6-Cg"
            onSelect={() => onNavigate('detail')}
          />
        </div>
      </div>
    </div>
  );
}
