
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Recycle, Droplet, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const images = [
  "https://img.freepik.com/premium-photo/hand-putting-glass-bottle-trash-bin-separate-waste-collection-recycling-ai-generated_618780-11329.jpg",
  "https://img.freepik.com/premium-photo/plastic-waste-with-recycle-symbol-beach_966938-1804.jpg",
  "https://www.saiindustrial.com/wp-content/uploads/2019/07/recycling-2.jpg",
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

const IconBox = ({ Icon, text, description }) => (
  <motion.div 
    className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-12 w-12 mb-4 text-green" />
    <span className="text-lg font-semibold mb-2 text-white">{text}</span>
    <p className="text-sm text-gray-200 text-center">{description}</p>
  </motion.div>
);

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={images[currentIndex]}
            alt={`Recycling Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent flex items-center justify-center">
        <div className="text-center text-white max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green to-blue"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Re-Plastify: Reshaping Our Future
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join us in transforming plastic waste into sustainable solutions for a cleaner, greener planet.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <IconBox 
              Icon={Recycle} 
              text="Recycle" 
              description="Turn waste into resources"
            />
            <IconBox 
              Icon={Droplet} 
              text="Conserve" 
              description="Preserve our oceans and wildlife"
            />
            <IconBox 
              Icon={Leaf} 
              text="Sustain" 
              description="Build a circular economy"
            />
          </motion.div>
          
          <Link href="/AllProducts">
            <motion.button
              className="bg-gradient-to-r from-green to-blueD text-white font-bold py-4 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
}