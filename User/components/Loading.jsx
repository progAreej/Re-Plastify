import React from 'react';
import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Recycle className="w-16 h-16 text-green" />
      </motion.div>
    </div>
  );
};

export default Loading;
