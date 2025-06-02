import { motion, AnimatePresence } from 'framer-motion'; // Importar AnimatePresence para animação de saída
import { Menu, Home, GraduationCap, BookOpen, Heart, Mail } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react'; // Importar useRef e useEffect

// --- NOVO COMPONENTE MobileDropdownNavLink ---
function MobileDropdownNavLink({ text, subLinks }: { text: string; subLinks: { href: string; text: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.a
        href="#" // No mobile, o item "Institucional" pode servir como um toggle. Ajuste se quiser que ele navegue também.
        onClick={(e) => {
          e.preventDefault(); // Evita que o link # navegue ao clicar para abrir/fechar o submenu
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block px-3 py-2 text-base font-medium text-white hover:bg-stone-700 transition-colors duration-200"
      >
        {text}
      </motion.a>
      <AnimatePresence> {/* Adiciona AnimatePresence para animação de saída */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 py-1 space-y-1 bg-stone-700 rounded-md overflow-hidden" // Adicionado overflow-hidden
          >
            {subLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-4 py-2 text-sm text-white hover:bg-stone-600 rounded-md transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// --- COMPONENTE NavLink MODIFICADO ---
function NavLink({ icon, text, href = '#', subLinks }: { icon: React.ReactNode; text: string; href?: string; subLinks?: { href: string; text: string }[] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref para o elemento do dropdown

  // Função para fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  if (subLinks && subLinks.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        ref={dropdownRef} // Atribuindo a ref ao elemento pai do dropdown
      >
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Adicionado onClick para alternar no clique
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-stone-300 transition-colors duration-200 focus:outline-none"
        >
          {icon}
          <span className="ml-2">{text}</span>
        </motion.button>

        <AnimatePresence> {/* Adiciona AnimatePresence para animação de saída */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-48 bg-white text-stone-900 rounded-md shadow-lg py-1 z-20 border border-gray-200" // Aumentado z-index para z-20
            >
              {subLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-stone-200 transition-colors duration-200 text-sm"
                  onClick={() => setIsDropdownOpen(false)} // Fecha o dropdown ao clicar em um item
                >
                  {link.text}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-stone-300 transition-colors duration-200"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </motion.a>
  );
}

// --- COMPONENTE Navigation PRINCIPAL ---
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const institutionalLinks = [
    { href: "/quem-somos", text: "Quem Somos" },
    { href: "/nosso-manifesto", text: "Nosso Manifesto" },
    { href: "/nosso-proposito", text: "Nosso Propósito" },
    { href: "/nossos-valores", text: "Nossos Valores" },
    { href: "/fale-com-a-gente", text: "Fale com a gente!" },
    { href: "/onde-nos-encontrar", text: "Onde nos encontrar" },
  ];

  return (
    <nav className="bg-stone-900/80 backdrop-blur-md text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-semibold">Escola Baiana de Ifá</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink icon={<Home size={18} />} text="Institucional" subLinks={institutionalLinks} />
              
              <NavLink icon={<GraduationCap size={18} />} text="Cursos" href="/cursos" />
              <NavLink icon={<BookOpen size={18} />} text="Blog" href="/blog" />
              <NavLink icon={<Heart size={18} />} text="Doações" href="/doacoes" />
              <NavLink icon={<Mail size={18} />} text="Contato" href="/contato" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-stone-700"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-stone-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileDropdownNavLink text="Institucional" subLinks={institutionalLinks} />
            <MobileNavLink text="Cursos" href="/cursos" />
            <MobileNavLink text="Blog" href="/blog" />
            <MobileNavLink text="Doações" href="/doacoes" />
            <MobileNavLink text="Contato" href="/contato" />
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// --- COMPONENTE MobileNavLink MODIFICADO ---
function MobileNavLink({ text, href = '#' }: { text: string; href?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block px-3 py-2 text-base font-medium text-white hover:bg-stone-700 transition-colors duration-200"
    >
      {text}
    </motion.a>
  );
}