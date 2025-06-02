import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <p className="text-stone-400">Entre em contato conosco para mais informações sobre nossa jornada espiritual</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-stone-400">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Institucional</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Cursos</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Doações</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-stone-400 mb-4">
              Receba atualizações sobre nossos ensinamentos e eventos
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded bg-stone-800 text-white placeholder-stone-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-600"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-stone-700 text-white rounded hover:bg-stone-600 transition-colors duration-200">
                Enviar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}