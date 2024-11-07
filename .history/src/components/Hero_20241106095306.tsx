import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
      
      <motion.div 
        className="container mx-auto px-6 py-24 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden hover-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Hi, I'm <span className="text-gradient">Mayowa Kalejaiye</span>
          </h1>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Aspiring Full-Stack Developer crafting beautiful digital experiences
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          <SocialLink href="https://github.com/mayowa-kalejaiye" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/mayowa-kalejaiye-27b560301/" icon={<Linkedin />} />
          <SocialLink href="mailto:kalejaiyemayowa3.com" icon={<Mail />} />
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 glass-card rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);
