import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const shapes = [
  { type: 'cube', color: 'from-blue-400/10 to-purple-500/10' },
  { type: 'x', color: 'from-amber-400/10 to-orange-500/10' },
  { type: 'triangle', color: 'from-emerald-400/10 to-teal-500/10' }
];

export const BackgroundObjects = () => {
  const [objects, setObjects] = useState<Array<{ id: number; shape: typeof shapes[number]; x: number; size: number }>>([]);
  const { scrollY } = useScroll();

  useEffect(() => {
    const generateObjects = () => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        x: Math.random() * 100,
        size: 30 + Math.random() * 70
      }));
    };

    setObjects(generateObjects());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {objects.map((obj) => (
        <FloatingObject key={obj.id} object={obj} scrollY={scrollY} />
      ))}
    </div>
  );
};

const FloatingObject = ({ object, scrollY }: any) => {
  const y = useTransform(
    scrollY,
    [0, 5000],
    [1000 + object.id * 100, -1000 + object.id * 100]
  );

  return (
    <motion.div
      style={{
        x: `${object.x}%`,
        y,
        width: object.size,
        height: object.size
      }}
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      {object.shape.type === 'cube' && (
        <div className={`w-full h-full relative transform-gpu preserve-3d animate-spin-slow`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform-gpu rotateY(0deg) translateZ(${object.size / 2}px)`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform-gpu rotateY(180deg) translateZ(${object.size / 2}px)`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform-gpu rotateY(90deg) translateZ(${object.size / 2}px)`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform-gpu rotateY(-90deg) translateZ(${object.size / 2}px)`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform-gpu rotateX(90deg) translateZ(${object.size / 2}px)`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform-gpu rotateX(-90deg) translateZ(${object.size / 2}px)`} />
        </div>
      )}
      
      {object.shape.type === 'x' && (
        <div className={`w-full h-full relative`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform rotate-45`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${object.shape.color} transform -rotate-45`} />
        </div>
      )}
      
      {object.shape.type === 'triangle' && (
        <div className={`w-full h-full relative`}>
          <div
            className={`w-full h-full bg-gradient-to-br ${object.shape.color}`}
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        </div>
      )}
    </motion.div>
  );
};