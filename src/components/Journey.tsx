import { motion } from 'framer-motion';

// 1. Importe TODAS as imagens que você vai usar no componente
import backgroundImage from '../assets/fundo-folhas-escuras.jpg';
import ifaImage1 from '../assets/ifa1.png';
import ifaImage2 from '../assets/ifa2.png';
import ifaImage3 from '../assets/ifa3.png';

// ATENÇÃO: Verifique se o caminho '../assets/' está correto para a sua estrutura de pastas.

export function Journey() {
  const journeySteps = [
    {
      title: "Descendência e Tradição",
      content: "Descendente direta do Àṣẹ Bangboṣè Obitikó, concluiu com êxito os ritos tradicionais de sete anos (odú igé).",
      // 2. Use a variável importada, e não mais o caminho em texto
      image: ifaImage1
    },
    {
      title: "Chamado do Ifá",
      content: "Seguindo esse chamado interior, iniciou sua busca pelos caminhos do Ifá, onde encontrou não só respostas, mas também sua verdadeira realização espiritual.",
      // 2. Use a variável importada
      image: ifaImage2
    },
    {
      title: "Mestria e Sabedoria",
      content: "Após anos de estudo rigoroso, memorização e interpretação dos 256 Odùs de Ifá e seus milhares de versos, alcançou o grau de Ìyáláwo.",
      // 2. Use a variável importada
      image: ifaImage3
    }
  ];

  return (
    <div 
      className="relative py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-stone-900 opacity-95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nossa Jornada</h2>
          <div className="w-24 h-1 bg-stone-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-64 mb-6 overflow-hidden rounded-lg">
                <img 
                  // Agora o 'src' recebe a variável correta que a Vercel entende
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -left-4 top-0 text-stone-700 text-6xl font-bold">
                0{index + 1}
              </div>
              <div className="pt-16 pl-4 border-l border-stone-700">
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}