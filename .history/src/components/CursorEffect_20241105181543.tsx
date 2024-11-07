import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      controls.start({
        scale: 1.2,
        transition: { duration: 0.1 }
      }).then(() => {
        controls.start({
          scale: 1,
          transition: { duration: 0.2 }
        });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [controls]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={controls}
    >
      <motion.div
        className="absolute"
        animate={{ x: mousePosition.x - 32, y: mousePosition.y - 32 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="relative w-16 h-16">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/10 to-orange-300/10 blur-xl" />
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-200/30 dark:border-amber-400/30" />
          {/* Inner ring */}
          <div className="absolute inset-1 rounded-full border border-amber-200/20 dark:border-amber-400/20" />
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-100/20 to-orange-200/20 dark:from-amber-200/20 dark:to-orange-300/20 blur-sm" />
          {/* Center dot */}
          <div className="absolute inset-[45%] rounded-full bg-amber-200/40 dark:bg-amber-300/40 blur-[2px]" />
        </div>
      </motion.div>
    </motion.div>
  );
};