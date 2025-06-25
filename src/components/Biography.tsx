import { motion } from 'framer-motion';
// 1. Importe a imagem da sua pasta assets
import backgroundImage from '../assets/fundo-folhas-escuras.jpg'; // Ajuste o caminho se necessário

export function Biography() {
  const paragraphs = [
    {
      title: "Origens e Chamado",
      content: "A trajetória de Ìyánifá Fátọ́ún na religiosidade e na cultura africana nasce de uma herança ancestral, profundamente enraizada, que a acompanha desde muito jovem...",
      image: "https://cdn.guardian.ng/wp-content/uploads/2023/10/letra-del.jpg"
    },
    {
      title: "A Caminhada Rumo ao Ifá",
      content: "Descendente direta do Àṣẹ Bangboṣè Obitikó, concluiu com êxito os ritos tradicionais de sete anos (odú igé). No entanto, mesmo após se firmar como Ìyálòrìṣà (sacerdotisa no Candomblé), sentia que sua missão espiritual ia além...",
      image: "https://i0.wp.com/ooduarere.com/wp-content/uploads/2015/12/OPON-ifa-346x330.jpg"
    },
    {
      title: "A Missão de Ìyánifá Fátọ́ún e Sua Caminhada com os Òrìṣàs",
      content: "As Ìyáláwos, além de consultarem o Opẹlẹ Ifá (oráculo africano), são responsáveis por prescrever sacrifícios, orientar rituais, preparar medicinas de cura e conduzir processos espirituais e terapêuticos...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj78yAtN6C2BiCgYv_FufithL0RoaH2C8iwg&s"
    }
  ];

  return (
    // 2. Container principal com a imagem de fundo
    <div 
      className="relative py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Efeito parallax para um toque especial
      }}
    >
      {/* 3. Camada de sobreposição para ofuscar o fundo */}
      <div className="absolute inset-0 bg-stone-900 opacity-95"></div>
      
      {/* 4. Conteúdo principal posicionado acima da sobreposição */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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