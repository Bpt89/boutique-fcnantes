import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isNew?: boolean;
  onSelect: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  category,
  image,
  isNew,
  onSelect
}: ProductCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border-2 border-transparent hover:border-nantes-yellow transition-all duration-300 flex flex-col"
    >
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-white/50 cursor-pointer"
        onClick={() => onSelect(id)}
      >
        <img 
          alt={name} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
          src={image} 
        />
        
        {isNew && (
          <div className="absolute top-0 left-0 bg-nantes-green text-nantes-yellow px-4 py-2 font-lexend font-bold text-xs uppercase">
            Nouveauté
          </div>
        )}
        
        {originalPrice && (
          <div className="absolute top-0 left-0 bg-nantes-yellow text-nantes-dark px-4 py-2 font-lexend font-bold text-xs uppercase">
            Promo -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-1 border-t border-nantes-gray">
        <p className="font-inter text-[10px] text-nantes-dark/50 uppercase tracking-widest">{category}</p>
        <h3 
          className="font-lexend text-base text-nantes-dark uppercase leading-none group-hover:text-nantes-green transition-colors cursor-pointer"
          onClick={() => onSelect(id)}
        >
          {name}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="font-inter text-xs text-nantes-dark/40 line-through">{originalPrice.toFixed(2)} €</span>
            )}
            <span className="font-lexend text-xl text-nantes-green">{price.toFixed(2)} €</span>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-nantes-yellow text-nantes-dark p-2 hover:bg-nantes-dark hover:text-nantes-yellow transition-colors shadow-[2px_2px_0px_0px_rgba(0,109,51,1)] group-hover:shadow-none"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
