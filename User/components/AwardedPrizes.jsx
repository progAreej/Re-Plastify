
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Award, User, Calendar, ArrowRight } from 'lucide-react';

const AwardedPrizes = ({ awardedPrizes }) => {
  const hasAwardedPrizes = Array.isArray(awardedPrizes) && awardedPrizes.length >1;

  if (!hasAwardedPrizes) {
    return (
      <motion.div 
        className="text-center py-16  rounded-lg shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Award className="w-16 h-16 text-green mx-auto mb-4" />
        <p className="text-gray-600 text-lg">No awarded prizes to display at the moment.</p>
        <p className="text-gray-500 mt-2">Keep recycling and making a difference!</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Recycling <span className="text-blue">Champions</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Recognizing the outstanding contributions of individuals who are leading the way in plastic recycling and sustainable practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardedPrizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 bg-green-100">
                <Image
                  src={prize.prizeImage}
                  alt={prize.prizeName}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{prize.prizeName}</h3>
                  <p className="text-green text-xl">Environmental Impact Award</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-blueD mr-2" />
                  <p className="text-gray-700">Awarded to: <span className="font-semibold">{prize.username}</span></p>
                </div>
                <div className="flex items-center mb-6">
                  <Calendar className="w-5 h-5 text-blueD mr-2" />
                  <p className="text-gray-600 text-sm">
                    Awarded on: {new Date(prize.awardedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.div>

      <Link href="/challenges" passHref>
      <motion.button
  className="mt-12 mx-auto bg-green w-64 text-white py-3 px-6 rounded-md font-medium shadow-lg transition-colors duration-300 hover:bg-blueD hover:shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  
  View Our Challenges
  <ArrowRight className="w-5 h-5 ml-3" />
</motion.button>
  </Link>

    </div>
  );
};

export default AwardedPrizes;