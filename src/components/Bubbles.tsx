import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Array<{ 
    id: number; 
    size: number; 
    left: number; 
    delay: number;
    color: string;
  }>>([]);

  const bubbleGradients = [
    'from-blue-200/30 via-sky-100/25 to-white/20', // Luminous sky
    'from-violet-200/30 via-purple-100/25 to-white/20', // Soft violet
    'from-indigo-200/30 via-blue-100/25 to-white/20', // Gentle indigo
    'from-sky-200/30 via-indigo-100/25 to-white/20', // Ethereal blue
  ];

  useEffect(() => {
    const numberOfBubbles = 3; // Reduced for more elegance
    const newBubbles = Array.from({ length: numberOfBubbles }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 40, // Slightly smaller size range
      left: 25 + (Math.random() * 50), // More centered (25% to 75%)
      delay: Math.random() * 6, // More spread out in time
      color: bubbleGradients[Math.floor(Math.random() * bubbleGradients.length)]
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} border border-white/15`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: '-20%',
            filter: 'blur(0.75px)',
            boxShadow: '0 4px 16px rgba(255, 255, 255, 0.15)',
          }}
          animate={{
            y: [0, -(window.innerHeight + bubble.size * 2)],
            x: [0, Math.sin(bubble.id) * 40],
            rotate: [0, bubble.id % 2 === 0 ? 360 : -360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 30 + Math.random() * 15,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles; 