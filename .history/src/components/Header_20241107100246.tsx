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
  const baseStyles = "relative transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400";
  const mobileStyles = mobile ? "block py-2" : "";

  return (
    <div className={mobile ? "flex flex-col" : "flex items-center space-x-8"}>
      {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((label, index) => (
        <motion.a
          href={`#${label.toLowerCase()}`}
          className={`${baseStyles} ${mobileStyles} font-semibold text-xl`}
          key={label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: index * 0.15, // Adds a staggered delay
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
            rotate: [0, 2, -2, 0], // Adds a subtle shake effect on hover
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            backgroundClip: "text",
            animation: "shine 2s linear infinite",
          }}
        >
          {label}
        </motion.a>
      ))}
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

/* Add this CSS to your global styles */



