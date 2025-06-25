import { motion } from 'framer-motion';
// 1. Importe a imagem da sua pasta assets
import backgroundImage from '../assets/fundo-folhas-escuras.jpg'; // Ajuste o caminho se necessário

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center"
      style={{
        // 2. Use a imagem importada como background
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-xl mb-4 block"
          >
            01
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-bold mb-6 text-white"
          >
            Ifá na Bahia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-stone-300 mb-8"
          >
            Preservando e transmitindo a sabedoria ancestral através dos ensinamentos de Ifá
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="px-8 py-3 bg-stone-700 text-white rounded hover:bg-stone-600 transition-colors duration-300"
          >
            Saiba mais
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}