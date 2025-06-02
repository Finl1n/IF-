import { motion } from 'framer-motion';

export function Biography() {
  const paragraphs = [
    {
      title: "Origens e Chamado",
      content: "A trajetória de Ìyánifá Fátọ́ún na religiosidade e na cultura africana nasce de uma herança ancestral profundamente enraizada, que a acompanha desde muito jovem.",
      image: "https://images.pexels.com/photos/7245258/pexels-photo-7245258.jpeg"
    },
    {
      title: "Descoberta Espiritual",
      content: "Desde a infância, apresentava uma forte sensibilidade espiritual, que, na época, não encontrava acolhimento dentro de sua família de tradição católica.",
      image: "https://images.pexels.com/photos/8851628/pexels-photo-8851628.jpeg"
    },
    {
      title: "Iniciação e Desenvolvimento",
      content: "Por conta da idade avançada de Ìyá Estelita, ela foi encaminhada para ser iniciada no Òrìṣà Ọya — Senhora dos ventos, dos ciclos e da vida.",
      image: "https://images.pexels.com/photos/7245318/pexels-photo-7245318.jpeg"
    }
  ];

  return (
    <div className="bg-stone-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ìyánifá Fátọ́ún
          </h2>
          <div className="w-24 h-1 bg-stone-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-stone-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={paragraph.image} 
                  alt={paragraph.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">{paragraph.title}</h3>
                <p className="text-stone-400 leading-relaxed">{paragraph.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}