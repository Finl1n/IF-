import { motion } from 'framer-motion';

export function Biography() {
  const paragraphs = [
    {
      title: "Origens e Chamado",
      content: "A trajetória de Ìyánifá Fátọ́ún na religiosidade e na cultura africana nasce de uma herança ancestral profundamente enraizada, que a acompanha desde muito jovem. Mesmo enquanto cursava Jornalismo, há mais de 25 anos, já compreendia que a principal história que escreveria na vida seria a da sua própria caminhada espiritual, ao lado dos Òrìṣàs e dos ensinamentos do Ifá. Desde a infância, apresentava uma forte sensibilidade espiritual, que, na época, não encontrava acolhimento dentro de sua família de tradição católica. Sem compreensão adequada do que vivia, precisou buscar outros caminhos para compreender e cuidar de sua mediunidade. Foi então que encontrou sua mãe espiritual, Ìyálòrìṣà Estelita Lima Calmon, do Ilé Àṣẹ Kaale Bokun, quem lhe apresentou os encantados e o panteão dos Òrìṣàs da tradição Yorubá. Esse encontro foi, sem dúvida, amor à primeira vista, e, desde suas primeiras consultas oraculares, ficou claro que seu destino estava diretamente ligado ao sacerdócio. Por conta da idade avançada de Ìyá Estelita, ela foi encaminhada para ser iniciada no Òrìṣà Ọya — Senhora dos ventos, dos ciclos e da vida — sob os cuidados do Babalòrìṣà Air José (Bisilòlá), do Terreiro Odó Ogé (Pilão de Prata).",
      image: "https://images.pexels.com/photos/7245258/pexels-photo-7245258.jpeg"
    },
    {
      title: "A Caminhada Rumo ao Ifá",
      content: "Descendente direta do Àṣẹ Bangboṣè Obitikó, concluiu com êxito os ritos tradicionais de sete anos (odú igé). No entanto, mesmo após se firmar como Ìyálòrìṣà (sacerdotisa no Candomblé), sentia que sua missão espiritual ia além. Algo dentro dela dizia que havia mais a ser desvelado, mais caminhos a serem trilhados. E quando falamos sobre isso, falamos de destino. Seguindo esse chamado interior, iniciou sua busca pelos caminhos do Ifá, onde encontrou não só respostas, mas também sua verdadeira realização espiritual. Atendeu ao chamado de Ọ̀rúnmìlà e realizou sua iniciação no Ifá — o Itefá —, recebendo o título e as responsabilidades de Ìyánifá. Após anos de estudo rigoroso, memorização e interpretação dos 256 Odùs de Ifá e seus milhares de versos, alcançou o grau de Ìyáláwo — título que significa Mãe dos Segredos e Mistérios de Ifá. Este é um posto de enorme responsabilidade, destinado àquelas que dominam os conhecimentos profundos do oráculo, das medicinas ancestrais e dos caminhos espirituais.",
      image: "https://images.pexels.com/photos/8851628/pexels-photo-8851628.jpeg"
    },
    {
      title: "A Missão de Ìyánifá Fátọ́ún e Sua Caminhada com os Òrìṣàs",
      content: "As Ìyáláwos, além de consultarem o Opẹlẹ Ifá (oráculo africano), são responsáveis por prescrever sacrifícios, orientar rituais, preparar medicinas de cura e conduzir processos espirituais e terapêuticos, sempre guiadas pelos princípios éticos e espirituais deixados por Ọ̀rúnmìlà. Elas também carregam vasto conhecimento sobre ervas, espiritualidade e bem-estar energético. Este é um breve panorama da trajetória de Ìyánifá Fátọ́ún — uma caminhada marcada pela fé, pela devoção e pela entrega total aos Òrìṣàs e ao Ifá. Sua jornada não foi — e não é — isenta de desafios. Enfrentou inúmeras barreiras, julgamentos, preconceitos e ataques espirituais, sociais e familiares, que tentaram, sem sucesso, desviá-la do seu propósito divino. Seus votos são, até hoje, dedicados ao cumprimento dos ensinamentos do Profeta Ọ̀rúnmìlà, que orienta o sacerdócio a ajudar os seres humanos a se tornarem melhores a cada dia. Sua missão é servir, honrar seus ancestrais e jamais permitir que se esqueça dos débitos históricos e espirituais, frutos dos séculos de dor e opressão impostos aos povos africanos. Pela misericórdia de Olódùmarè (Deus Supremo), seus ancestrais continuam vivos, ensinando, protegendo e conduzindo aqueles que, assim como ela, escolhem caminhar sob a luz dos Orixás e dos mistérios de Ifá.",  
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