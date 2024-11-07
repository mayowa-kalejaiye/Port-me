import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';


export const Header = ({ toggleTheme, isDark }: { toggleTheme: () => void, isDark: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
          >
            MK
          </motion.h1>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div 
            className="md:hidden pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <NavLinks mobile />
            <div className="pt-4">
              <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const baseStyles = "transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400";
  const mobileStyles = mobile ? "block py-2" : "";
  
  return (
    <div className={mobile ? "flex flex-col" : "flex items-center space-x-8" }>
      <a href="#home" className={`${baseStyles} ${mobileStyles}`}>Home</a>
      <a href="#skills" className={`${baseStyles} ${mobileStyles}`}>Skills</a>
      <a href="#projects" className={`${baseStyles} ${mobileStyles}`}>Projects</a>
      <a href="#about" className={`${baseStyles} ${mobileStyles}`}>About</a>
      <a href="#contact" className={`${baseStyles} ${mobileStyles}`}>Contact</a>
    </div>
  );
};

const ThemeToggle = ({ toggleTheme, isDark }: { toggleTheme: () => void, isDark: boolean }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
  >
    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);
