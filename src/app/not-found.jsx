"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Unplug } from 'lucide-react';


const GlitchText = ({ children }) => {
  return (
    <div className="relative inline-block">
      <span className="relative text-8xl md:text-9xl font-bold bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
        {children}
      </span>
      <motion.span
        aria-hidden
        className="absolute top-0 left-0 text-8xl md:text-9xl font-bold bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent opacity-80"
        style={{ textShadow: '-2px 0 #ff00c1' }}
        animate={{
          clipPath: [
            "polygon(0 2%, 100% 2%, 100% 5%, 0 5%)",
            "polygon(0 40%, 100% 40%, 100% 45%, 0 45%)",
            "polygon(0 80%, 100% 80%, 100% 83%, 0 83%)",
          ],
          transform: [
            "translateX(5px)",
            "translateX(-5px)",
            "translateX(5px)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute top-0 left-0 text-8xl md:text-9xl font-bold bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent opacity-80"
        style={{ textShadow: '2px 0 #00fff9' }}
        animate={{
          clipPath: [
            "polygon(0 15%, 100% 15%, 100% 20%, 0 20%)",
            "polygon(0 60%, 100% 60%, 100% 65%, 0 65%)",
            "polygon(0 90%, 100% 90%, 100% 95%, 0 95%)",
          ],
          transform: [
            "translateX(-5px)",
            "translateX(5px)",
            "translateX(-5px)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

const AnimatedBackground = () => {
    const shapes = React.useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 100 + 50,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 3,
    })), []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {shapes.map(shape => (
                <motion.div
                    key={shape.id}
                    className="absolute rounded-full bg-violet-500/10 blur-2xl"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        top: shape.top,
                        left: shape.left,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                />
            ))}
        </div>
    );
}

const NotFoundPage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white p-6 overflow-hidden">
      <AnimatedBackground />
      <div className="container relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="flex flex-col items-center"
        >
       
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Unplug className="w-20 h-20 text-violet-400 mb-8" />
          </motion.div>


          <GlitchText>404</GlitchText>

   
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-semibold mt-6 mb-3 tracking-wider"
          >
            Connection Lost
          </motion.h2>

    
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-slate-400 max-w-md"
          >
            It seems you've unplugged from the matrix. The page you're looking for has been lost in the digital void.
          </motion.p>


          <motion.a
            href="/"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 mt-12 bg-violet-600 border border-violet-700 rounded-full text-lg font-semibold text-white backdrop-blur-sm hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-500/20"
          >
            <Home size={22} />
            Return to Reality
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;

